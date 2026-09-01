"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  audioCtx,
  describePitch,
  detectPitch,
  Drone,
  DRONE_NOTES,
  Metronome,
} from "@/lib/audio";

export function PracticeBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-canvas">
      {open && (
        <div className="mx-auto grid max-w-3xl gap-6 px-6 py-6 sm:grid-cols-3">
          <MetronomeModule />
          <DroneModule />
          <TunerModule />
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-full items-center justify-center gap-2 label hover:text-ink"
        aria-expanded={open}
      >
        <span>{open ? "close" : "tuner · drone · metronome"}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
          className={open ? "" : "rotate-180"}
        >
          <path
            d="M1 3.5 5 7l4-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

function ModuleShell({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="label">{name}</p>
      {children}
    </div>
  );
}

function PillButton({
  active,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      {...props}
      className={`rounded-full border px-3 py-1.5 font-sans text-[0.8125rem] transition-colors ${
        active
          ? "border-accent bg-accent text-accent-contrast"
          : "border-hairline text-ink-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function MetronomeModule() {
  const ref = useRef<Metronome | null>(null);
  const [bpm, setBpm] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    ref.current = new Metronome();
    return () => ref.current?.stop();
  }, []);
  useEffect(() => {
    if (ref.current) ref.current.bpm = bpm;
  }, [bpm]);

  const toggle = () => {
    const m = ref.current;
    if (!m) return;
    if (running) {
      m.stop();
      setRunning(false);
    } else {
      audioCtx();
      m.start();
      setRunning(true);
    }
  };

  return (
    <ModuleShell name="Metronome">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setBpm((b) => Math.max(40, b - 2))}
          className="h-7 w-7 rounded-full border border-hairline text-ink-muted hover:text-ink"
          aria-label="Slower"
        >
          −
        </button>
        <span className="w-16 text-center font-mono text-sm tabular-nums">
          {bpm}
        </span>
        <button
          type="button"
          onClick={() => setBpm((b) => Math.min(160, b + 2))}
          className="h-7 w-7 rounded-full border border-hairline text-ink-muted hover:text-ink"
          aria-label="Faster"
        >
          +
        </button>
        <PillButton active={running} onClick={toggle}>
          {running ? "stop" : "start"}
        </PillButton>
      </div>
    </ModuleShell>
  );
}

function DroneModule() {
  const ref = useRef<Drone | null>(null);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    ref.current = new Drone();
    return () => ref.current?.stop();
  }, []);

  const pick = (label: string, freq: number) => {
    const d = ref.current;
    if (!d) return;
    if (note === label) {
      d.stop();
      setNote(null);
    } else {
      audioCtx();
      d.start(freq);
      setNote(label);
    }
  };

  return (
    <ModuleShell name="Drone">
      <div className="flex gap-1.5">
        {DRONE_NOTES.map(({ label, freq }) => (
          <PillButton
            key={label}
            active={note === label}
            onClick={() => pick(label, freq)}
          >
            {label}
          </PillButton>
        ))}
      </div>
    </ModuleShell>
  );
}

function TunerModule() {
  const [on, setOn] = useState(false);
  const [reading, setReading] = useState<{ note: string; cents: number } | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const stop = useCallback(() => {
    cleanupRef.current?.();
    cleanupRef.current = null;
    setOn(false);
    setReading(null);
  }, []);

  const start = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const ac = audioCtx();
      const src = ac.createMediaStreamSource(stream);
      const analyser = ac.createAnalyser();
      analyser.fftSize = 2048;
      src.connect(analyser);
      const buf = new Float32Array(analyser.fftSize);
      let raf = 0;
      const loop = () => {
        analyser.getFloatTimeDomainData(buf);
        const f = detectPitch(buf, ac.sampleRate);
        if (f) {
          const p = describePitch(f);
          setReading({ note: p.note, cents: p.cents });
        }
        raf = requestAnimationFrame(loop);
      };
      loop();
      cleanupRef.current = () => {
        cancelAnimationFrame(raf);
        stream.getTracks().forEach((t) => t.stop());
        src.disconnect();
      };
      setOn(true);
    } catch {
      setError("No microphone");
    }
  }, []);

  useEffect(() => () => cleanupRef.current?.(), []);

  const cents = reading?.cents ?? 0;
  const inTune = reading != null && Math.abs(cents) <= 5;

  return (
    <ModuleShell name="Tuner">
      {!on ? (
        <div className="flex items-center gap-2">
          <PillButton onClick={start}>turn on</PillButton>
          {error && (
            <span className="font-sans text-[0.8125rem] text-ink-faint">
              {error}
            </span>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span
            className={`w-10 font-serif text-2xl leading-none ${
              inTune ? "text-accent" : "text-ink"
            }`}
          >
            {reading?.note ?? "–"}
          </span>
          <div className="relative h-1 flex-1 rounded-full bg-hairline">
            <span className="absolute left-1/2 top-1/2 h-2 w-px -translate-y-1/2 bg-ink-faint" />
            <span
              className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-[left] duration-100"
              style={{
                left: `${Math.max(0, Math.min(100, 50 + cents))}%`,
              }}
            />
          </div>
          <button
            type="button"
            onClick={stop}
            className="label hover:text-ink"
            aria-label="Turn tuner off"
          >
            off
          </button>
        </div>
      )}
    </ModuleShell>
  );
}
