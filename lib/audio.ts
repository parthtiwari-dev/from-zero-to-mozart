/** Small shared Web Audio helpers for the practice bar. Browser-only. */

let ctx: AudioContext | null = null;

export function audioCtx(): AudioContext {
  if (!ctx) {
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

const NOTE_NAMES = [
  "C",
  "C♯",
  "D",
  "E♭",
  "E",
  "F",
  "F♯",
  "G",
  "A♭",
  "A",
  "B♭",
  "B",
];

export interface PitchReading {
  freq: number;
  note: string;
  octave: number;
  cents: number;
}

export function describePitch(freq: number): PitchReading {
  const midi = 69 + 12 * Math.log2(freq / 440);
  const rounded = Math.round(midi);
  const cents = Math.round((midi - rounded) * 100);
  return {
    freq,
    note: NOTE_NAMES[((rounded % 12) + 12) % 12],
    octave: Math.floor(rounded / 12) - 1,
    cents,
  };
}

/**
 * Drone tonics. The four open strings (G/D/A/E) — kept at their real pitches so
 * the tuning lesson still works — plus B and C, so the Stage 8 ear gym can set
 * "home" for the drilled keys that aren't an open string (C major, B minor).
 * Equal temperament, A4 = 440.
 */
export const DRONE_NOTES: { label: string; freq: number }[] = [
  { label: "G", freq: 196.0 },
  { label: "D", freq: 293.66 },
  { label: "A", freq: 440.0 },
  { label: "E", freq: 659.26 },
  { label: "B", freq: 246.94 },
  { label: "C", freq: 261.63 },
];

/** A sustained, slightly warm drone: fundamental + a quiet octave. */
export class Drone {
  private nodes: { osc: OscillatorNode; gain: GainNode }[] = [];
  private out: GainNode | null = null;

  start(freq: number) {
    this.stop();
    const ac = audioCtx();
    const out = ac.createGain();
    out.gain.setValueAtTime(0, ac.currentTime);
    out.gain.linearRampToValueAtTime(0.18, ac.currentTime + 0.15);
    out.connect(ac.destination);
    this.out = out;

    for (const [mult, level, type] of [
      [1, 0.7, "sawtooth"],
      [2, 0.15, "sine"],
    ] as const) {
      const osc = ac.createOscillator();
      osc.type = type;
      osc.frequency.value = freq * mult;
      const g = ac.createGain();
      g.gain.value = level;
      osc.connect(g).connect(out);
      osc.start();
      this.nodes.push({ osc, gain: g });
    }
  }

  stop() {
    const ac = audioCtx();
    if (this.out) {
      this.out.gain.cancelScheduledValues(ac.currentTime);
      this.out.gain.setValueAtTime(this.out.gain.value, ac.currentTime);
      this.out.gain.linearRampToValueAtTime(0, ac.currentTime + 0.12);
    }
    const toStop = this.nodes;
    this.nodes = [];
    const out = this.out;
    this.out = null;
    setTimeout(() => {
      toStop.forEach(({ osc }) => {
        try {
          osc.stop();
        } catch {}
      });
      out?.disconnect();
    }, 200);
  }
}

/** A lookahead-scheduled metronome. Accent on beat 1 of a 4-count. */
export class Metronome {
  bpm = 60;
  private timer: number | null = null;
  private nextTime = 0;
  private beat = 0;
  private readonly lookahead = 0.1; // seconds scheduled ahead
  private readonly tick = 25; // ms between scheduler runs

  start() {
    this.stop();
    const ac = audioCtx();
    this.nextTime = ac.currentTime + 0.05;
    this.beat = 0;
    this.timer = window.setInterval(() => this.schedule(), this.tick);
  }

  stop() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  get running() {
    return this.timer !== null;
  }

  private schedule() {
    const ac = audioCtx();
    const spb = 60 / this.bpm;
    while (this.nextTime < ac.currentTime + this.lookahead) {
      this.click(this.nextTime, this.beat % 4 === 0);
      this.nextTime += spb;
      this.beat += 1;
    }
  }

  private click(at: number, accent: boolean) {
    const ac = audioCtx();
    const osc = ac.createOscillator();
    const g = ac.createGain();
    osc.frequency.value = accent ? 1600 : 1100;
    g.gain.setValueAtTime(accent ? 0.5 : 0.32, at);
    g.gain.exponentialRampToValueAtTime(0.0001, at + 0.04);
    osc.connect(g).connect(ac.destination);
    osc.start(at);
    osc.stop(at + 0.05);
  }
}

/** Autocorrelation pitch detector. Returns Hz, or null if the signal is too quiet/noisy. */
export function detectPitch(buf: Float32Array, sampleRate: number): number | null {
  const SIZE = buf.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) rms += buf[i] * buf[i];
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.01) return null;

  let r1 = 0;
  let r2 = SIZE - 1;
  const thres = 0.2;
  for (let i = 0; i < SIZE / 2; i++)
    if (Math.abs(buf[i]) < thres) {
      r1 = i;
      break;
    }
  for (let i = 1; i < SIZE / 2; i++)
    if (Math.abs(buf[SIZE - i]) < thres) {
      r2 = SIZE - i;
      break;
    }

  const trimmed = buf.slice(r1, r2);
  const n = trimmed.length;
  const c = new Array<number>(n).fill(0);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n - i; j++) c[i] += trimmed[j] * trimmed[j + i];

  let d = 0;
  while (c[d] > c[d + 1]) d++;
  let maxval = -1;
  let maxpos = -1;
  for (let i = d; i < n; i++)
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  let t0 = maxpos;
  if (t0 <= 0) return null;

  const x1 = c[t0 - 1];
  const x2 = c[t0];
  const x3 = c[t0 + 1] ?? x2;
  const a = (x1 + x3 - 2 * x2) / 2;
  const b = (x3 - x1) / 2;
  if (a) t0 -= b / (2 * a);

  const freq = sampleRate / t0;
  return freq > 60 && freq < 1400 ? freq : null;
}
