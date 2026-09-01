"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MidiBuffer, TuneObject } from "abcjs";

type AbcModule = typeof import("abcjs");

// FluidR3_GM has the full General MIDI set, including violin (program 40).
// The abcjs/ folder on that host does NOT have a violin sample — it 404s silently.
const SOUNDFONT = "https://paulrosen.github.io/midi-js-soundfonts/FluidR3_GM/";
const VIOLIN_PROGRAM = 40; // General MIDI: Violin

export interface NotatedExampleProps {
  /** ABC notation — the plain version, no annotations. */
  abc: string;
  /** ABC with note-name / string / finger annotations. Adds a reveal toggle. */
  scaffold?: string;
  /**
   * "help"   — a teaching example: the annotated version shows by default,
   *            toggle reads "hide/show the help".
   * "answer" — a worksheet: plain notation shows first, toggle reads
   *            "show/hide the answer".
   */
  mode?: "help" | "answer";
  /** One line under the example. */
  caption?: string;
  /** Starting tempo in quarter-notes per minute. Kept deliberately slow. */
  defaultBpm?: number;
  minBpm?: number;
  maxBpm?: number;
}

type Status = "idle" | "loading" | "playing";

export function NotatedExample({
  abc,
  scaffold,
  mode = "help",
  caption,
  defaultBpm = 60,
  minBpm = 40,
  maxBpm = 120,
}: NotatedExampleProps) {
  const paperRef = useRef<HTMLDivElement>(null);
  const abcjsRef = useRef<AbcModule | null>(null);
  const tuneRef = useRef<TuneObject | null>(null);
  const synthRef = useRef<MidiBuffer | null>(null);

  const [showHelp, setShowHelp] = useState(mode === "help" && Boolean(scaffold));
  const [bpm, setBpm] = useState(defaultBpm);
  const [status, setStatus] = useState<Status>("idle");
  const [audioOk, setAudioOk] = useState(true);

  const source = showHelp && scaffold ? scaffold : abc;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const mod = abcjsRef.current ?? (await import("abcjs"));
      if (cancelled || !paperRef.current) return;
      abcjsRef.current = mod;
      const [tune] = mod.renderAbc(paperRef.current, source, {
        add_classes: true,
        staffwidth: 460,
        scale: 1.15,
        paddingtop: 6,
        paddingbottom: 6,
        paddingleft: 0,
        paddingright: 0,
      });
      tuneRef.current = tune;
      setAudioOk(mod.synth.supportsAudio());
    })();
    return () => {
      cancelled = true;
    };
  }, [source]);

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

  return (
    <figure className="not-prose my-8">
      <div className="relative rounded-[14px] border border-hairline bg-well px-7 pb-9 pt-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
        <div ref={paperRef} className="notation overflow-x-auto" />

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

        {scaffold && (
          <button
            type="button"
            onClick={() => setShowHelp((v) => !v)}
            className="absolute right-4 top-3 font-sans text-[0.8125rem] text-ink-muted underline decoration-hairline underline-offset-4 hover:text-ink"
          >
            {mode === "answer"
              ? showHelp
                ? "hide the answer"
                : "show the answer"
              : showHelp
                ? "hide the help"
                : "show the help"}
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
