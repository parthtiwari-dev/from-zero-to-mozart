"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MidiBuffer, TuneObject } from "abcjs";

type AbcModule = typeof import("abcjs");

// FluidR3_GM has the full General MIDI set, including violin (program 40).
// The abcjs/ folder on that host does NOT have a violin sample — it 404s silently.
const SOUNDFONT = "https://paulrosen.github.io/midi-js-soundfonts/FluidR3_GM/";
const VIOLIN_PROGRAM = 40; // General MIDI: Violin

export interface NoteLabel {
  /** the note name as read: "D", "F♯", "B♭" */
  name: string;
  /** which string it's played on */
  string?: "G" | "D" | "A" | "E";
  /** "0" | "1" | "low 2" | "high 2" | "3" | "high 3" | "4" */
  finger?: string;
}

export interface NotatedExampleProps {
  /** ABC notation — real pitches, so playback and rendering are correct. */
  abc: string;
  /** One label per note, in order. Shows name / string / finger under each note, like the book. */
  labels?: NoteLabel[];
  /**
   * "shown"  — a teaching example: the labels are visible, toggle hides them.
   * "hidden" — a worksheet: you work it out, then tap "show the answer".
   */
  reveal?: "shown" | "hidden";
  /** One line under the example. */
  caption?: string;
  /** Starting tempo in quarter-notes per minute. Kept deliberately slow. */
  defaultBpm?: number;
  minBpm?: number;
  maxBpm?: number;
}

type Status = "idle" | "loading" | "playing";

// "0" → "open", "high 2" → "2nd high", "low 1" → "1st low", "3" → "3rd"
function fingerLabel(f: string): string {
  const s = f.trim().toLowerCase();
  if (s === "0" || s === "open") return "open";
  const m = s.match(/^(low|high)?\s*([1-4])$/);
  if (!m) return f;
  const ord = { "1": "1st", "2": "2nd", "3": "3rd", "4": "4th" }[m[2]]!;
  return m[1] ? `${ord} ${m[1]}` : ord;
}

export function NotatedExample({
  abc,
  labels,
  reveal = "shown",
  caption,
  defaultBpm = 60,
  minBpm = 40,
  maxBpm = 120,
}: NotatedExampleProps) {
  const paperRef = useRef<HTMLDivElement>(null);
  const abcjsRef = useRef<AbcModule | null>(null);
  const tuneRef = useRef<TuneObject | null>(null);
  const synthRef = useRef<MidiBuffer | null>(null);
  const labelCount = labels?.length ?? 0;

  const [shown, setShown] = useState(reveal === "shown");
  const [xs, setXs] = useState<number[]>([]);
  const [bpm, setBpm] = useState(defaultBpm);
  const [status, setStatus] = useState<Status>("idle");
  const [audioOk, setAudioOk] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const mod = abcjsRef.current ?? (await import("abcjs"));
      if (cancelled || !paperRef.current) return;
      abcjsRef.current = mod;
      // With labels, give each note enough room for a 3-line stack (name /
      // string / finger) so they never crowd their neighbours. With no
      // labels, notes can sit close together, so a fixed width is enough.
      const staffwidth = labelCount > 0 ? Math.max(340, labelCount * 100) : 460;
      const [tune] = mod.renderAbc(paperRef.current, abc, {
        add_classes: true,
        staffwidth,
        scale: 1.15,
        paddingtop: 4,
        paddingbottom: 4,
        paddingleft: 2,
        paddingright: 2,
      });
      tuneRef.current = tune;
      setAudioOk(mod.synth.supportsAudio());

      // measure each notehead's centre x, in CSS pixels, for the label row
      requestAnimationFrame(() => {
        const svg = paperRef.current?.querySelector("svg");
        if (!svg) return;
        const vb = svg.viewBox.baseVal;
        const rect = svg.getBoundingClientRect();
        const k = vb.width ? rect.width / vb.width : 1;
        const notes = svg.querySelectorAll<SVGGElement>(".abcjs-note");
        setXs(
          Array.from(notes).map((g) => {
            const b = g.getBBox();
            return (b.x + b.width / 2 - vb.x) * k;
          }),
        );
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [abc, labelCount]);

  useEffect(() => () => void synthRef.current?.stop(), []);

  const stop = useCallback(() => {
    synthRef.current?.stop();
    synthRef.current = null;
    setStatus("idle");
  }, []);

  const play = useCallback(async () => {
    const mod = abcjsRef.current;
    const tune = tuneRef.current;
    if (!mod || !tune) return;
    if (status === "playing") return stop();

    setStatus("loading");
    try {
      const synth = new mod.synth.CreateSynth();
      await synth.init({
        visualObj: tune,
        millisecondsPerMeasure: tune.millisecondsPerMeasure(bpm),
        options: {
          soundFontUrl: SOUNDFONT,
          program: VIOLIN_PROGRAM,
          onEnded: () => setStatus("idle"),
        },
      });
      await synth.prime();
      synthRef.current = synth;
      synth.start();
      setStatus("playing");
    } catch {
      setStatus("idle");
      setAudioOk(false);
    }
  }, [bpm, status, stop]);

  const hasLabels = Boolean(labels && labels.length);

  return (
    <figure className="not-prose my-8">
      <div className="relative rounded-[3px] border border-hairline bg-well px-6 pb-9 pt-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
        <div className="overflow-x-auto">
          <div className="relative inline-block min-w-full">
            <div ref={paperRef} className="notation" />
            {hasLabels && (
              <div
                className="relative mt-1 h-[3.4rem]"
                aria-hidden={!shown}
              >
                {shown &&
                  labels!.map((l, i) =>
                    xs[i] == null ? null : (
                      <div
                        key={i}
                        className="absolute top-0 -translate-x-1/2 text-center leading-tight"
                        style={{ left: `${xs[i]}px` }}
                      >
                        <div className="font-serif text-[0.95rem] text-ink">
                          {l.name}
                        </div>
                        {l.string && (
                          <div className="font-mono text-[0.66rem] text-ink-muted">
                            {l.string} string
                          </div>
                        )}
                        {l.finger && (
                          <div className="font-mono text-[0.66rem] text-ink-muted">
                            {fingerLabel(l.finger)}
                          </div>
                        )}
                      </div>
                    ),
                  )}
              </div>
            )}
          </div>
        </div>

        <div className="absolute -bottom-4 left-6 flex items-center gap-3">
          {audioOk && (
            <button
              type="button"
              onClick={play}
              aria-label={status === "playing" ? "Stop" : "Play this example"}
              className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-contrast transition-transform duration-100 ease-[var(--ease)] active:scale-95"
            >
              {status === "loading" ? (
                <Spinner />
              ) : status === "playing" ? (
                <StopGlyph />
              ) : (
                <PlayGlyph />
              )}
            </button>
          )}

          <div className="flex items-center gap-2 rounded-full border border-hairline bg-canvas px-3 py-1.5">
            <input
              type="range"
              min={minBpm}
              max={maxBpm}
              step={2}
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              aria-label="Tempo in beats per minute"
              className="tempo h-1 w-24 cursor-pointer appearance-none rounded-full bg-hairline"
            />
            <span className="w-14 font-mono text-[0.8125rem] tabular-nums text-ink-muted">
              {bpm} bpm
            </span>
          </div>
        </div>

        {hasLabels && (
          <button
            type="button"
            onClick={() => setShown((v) => !v)}
            className="absolute right-4 top-3 font-sans text-[0.8125rem] text-ink-muted underline decoration-hairline underline-offset-4 hover:text-ink"
          >
            {reveal === "hidden"
              ? shown
                ? "hide the answer"
                : "show the answer"
              : shown
                ? "hide the labels"
                : "show the labels"}
          </button>
        )}
      </div>

      {caption && (
        <figcaption className="mt-6 font-sans text-[0.9375rem] leading-relaxed text-ink-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function PlayGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 1.8 12 7l-9 5.2V1.8Z" fill="currentColor" />
    </svg>
  );
}
function StopGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <rect width="12" height="12" rx="1.5" fill="currentColor" />
    </svg>
  );
}
function Spinner() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      aria-hidden="true"
      className="animate-spin"
    >
      <circle
        cx="7.5"
        cy="7.5"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <path
        d="M7.5 1.5a6 6 0 0 1 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
