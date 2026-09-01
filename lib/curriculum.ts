/**
 * The course manifest. Stages → lessons, in teaching order.
 * The full 10-stage map lives in docs/CURRICULUM.md; this file is what has
 * been laid out. A lesson without `published: true` is planned — it shows in
 * the contents as "soon" but has no page yet.
 */

export type Track =
  | "setup"
  | "reading"
  | "left-hand"
  | "bow"
  | "ear"
  | "repertoire";

export type Tag = "NOW" | "NEXT" | "LATER" | "REFERENCE";

export const TRACK_LABEL: Record<Track, string> = {
  setup: "Setup",
  reading: "Reading",
  "left-hand": "Left hand",
  bow: "The bow",
  ear: "Ear & musicianship",
  repertoire: "Repertoire",
};

export interface Stage {
  n: number;
  name: string;
  blurb: string;
  /** a hard gate is reached at the end of this stage */
  gate?: "Foundation" | "Intermediate";
}

export interface Lesson {
  slug: string;
  title: string;
  stage: number;
  track: Track;
  tag: Tag;
  published?: boolean;
}

export const STAGES: Stage[] = [
  {
    n: 0,
    name: "Setup",
    blurb: "The instrument, the hold, tuning, your first open string.",
  },
  {
    n: 1,
    name: "First position & the staff",
    blurb: "Every note on every string, and how to read it off the page.",
  },
  {
    n: 2,
    name: "Rhythm",
    blurb: "When and how long — the pulse before the instrument.",
  },
  {
    n: 3,
    name: "Score symbols",
    blurb:
      "Dynamics, articulation, ornaments, repeats — everything else on the page.",
  },
  {
    n: 4,
    name: "Scales & musicianship",
    blurb: "Keys, major and minor, intervals — why the notes are arranged as they are.",
  },
  {
    n: 5,
    name: "The bow",
    blurb: "Tone, and the core strokes — détaché, legato, martelé, and outward.",
    gate: "Foundation",
  },
  {
    n: 6,
    name: "Beyond first position",
    blurb: "Shifting, positions two to seven, double stops.",
  },
  {
    n: 7,
    name: "Vibrato & expression",
    blurb: "When you're ready — and phrasing, the thing it all serves.",
  },
  {
    n: 8,
    name: "Sight-reading & ear training",
    blurb: "Reading fluently, and building the ear from the ground up.",
    gate: "Intermediate",
  },
  {
    n: 9,
    name: "The repertoire journey",
    blurb: "A hundred tunes, then the giants, then Mozart's Third.",
  },
];

const P = true; // published — for scanning the list quickly

export const LESSONS: Lesson[] = [
  // ── Stage 0 — Setup ──────────────────────────────────────────────
  { slug: "meet-the-violin", title: "Meet the violin", stage: 0, track: "setup", tag: "NOW", published: P },
  { slug: "gear-and-care", title: "Gear, and looking after it", stage: 0, track: "setup", tag: "NOW", published: P },
  { slug: "how-you-stand", title: "How you stand", stage: 0, track: "setup", tag: "NOW", published: P },
  { slug: "holding-the-violin", title: "Holding the violin", stage: 0, track: "setup", tag: "NOW", published: P },
  { slug: "the-left-hand-frame", title: "The left-hand frame", stage: 0, track: "left-hand", tag: "NOW", published: P },
  { slug: "holding-the-bow", title: "Holding the bow", stage: 0, track: "bow", tag: "NOW", published: P },
  { slug: "tuning", title: "Tuning", stage: 0, track: "ear", tag: "NOW", published: P },
  { slug: "the-geography-of-the-bow", title: "The geography of the bow", stage: 0, track: "bow", tag: "NOW", published: P },
  { slug: "your-first-sound", title: "Your first sound", stage: 0, track: "bow", tag: "NOW", published: P },
  { slug: "how-to-practise", title: "How to practise", stage: 0, track: "setup", tag: "NOW", published: P },

  // ── Stage 1 — First position & the staff ─────────────────────────
  { slug: "four-strings-four-fingers", title: "Four strings, four fingers", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "low-and-high-fingers", title: "Low fingers and high fingers", stage: 1, track: "left-hand", tag: "NOW", published: P },
  { slug: "the-staff", title: "The five-line staff", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-treble-clef", title: "The treble clef", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "lines-and-spaces", title: "Lines and spaces", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "open-strings-on-the-staff", title: "The four open strings, on the staff", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "ledger-lines", title: "Ledger lines", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-g-string", title: "The G string, note by note", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-d-string", title: "The D string, note by note", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-a-string", title: "The A string, note by note", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-e-string", title: "The E string, note by note", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "reading-the-lower-strings", title: "Reading drill: G and D", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "reading-the-upper-strings", title: "Reading drill: A and E", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "which-b-is-this", title: "Which B is this?", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "same-pitch-more-than-one-place", title: "One pitch, more than one place", stage: 1, track: "left-hand", tag: "NOW", published: P },
  { slug: "sharps-flats-and-naturals", title: "Sharps, flats and naturals", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-key-signature", title: "The key signature", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "accidentals-inside-a-bar", title: "Accidentals inside a bar", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "taking-the-help-away", title: "Taking the help away", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "reading-g-major", title: "Reading drill: G major", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "all-the-landmarks", title: "Reading drill: every landmark", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "sa-and-the-letter-names", title: "Sa, and the letter names", stage: 1, track: "ear", tag: "NOW", published: P },
  { slug: "landing-in-tune", title: "Knowing the finger isn't landing in tune", stage: 1, track: "ear", tag: "NEXT", published: P },

  // ── Stage 2 — Rhythm ────────────────────────────────────────────
  { slug: "rhythm-before-the-instrument", title: "Rhythm before the instrument", stage: 2, track: "ear", tag: "NOW", published: P },
  { slug: "note-values", title: "How long each note lasts", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "dotted-notes", title: "Dotted notes", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "rests", title: "Rests — silence has a length too", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "beams-or-a-double-stop", title: "Two notes in a row, or two at once?", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "one-beam-two-beams", title: "One beam, two beams", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "ties-and-slurs", title: "Ties and slurs", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "time-signatures", title: "Time signatures", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "common-time", title: "Common time, and the C", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "counting-and-konnakol", title: "Counting — and counting in bols", stage: 2, track: "ear", tag: "NOW", published: P },
  { slug: "syncopation-and-pickups", title: "Syncopation and pickups", stage: 2, track: "reading", tag: "NEXT", published: P },
  { slug: "triplets", title: "Triplets and other tuplets", stage: 2, track: "reading", tag: "NEXT", published: P },
  { slug: "reading-quarters-and-eighths", title: "Rhythm drill: quarters and eighths", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "reading-dotted-rhythms", title: "Rhythm drill: dotted feel", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "reading-mixed-rhythms", title: "Rhythm drill: mixed", stage: 2, track: "reading", tag: "NOW", published: P },

  // ── Stage 3 — Score symbols ─────────────────────────────────────
  { slug: "tempo-words", title: "Tempo words", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "dynamics", title: "Dynamics", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "articulation", title: "Articulation marks", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "bow-direction-marks", title: "Bow-direction marks", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "string-words", title: "Words only string players see", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "repeats-and-navigation", title: "Repeats and navigation", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "ornaments", title: "Ornaments", stage: 3, track: "reading", tag: "NEXT", published: P },
  { slug: "trills-turns-and-grace-notes", title: "Trills, turns and grace notes", stage: 3, track: "reading", tag: "NEXT", published: P },
  { slug: "double-stops-and-chords-on-the-page", title: "Double stops and chords, on the page", stage: 3, track: "reading", tag: "NEXT", published: P },
  { slug: "harmonics-and-pizzicato-marks", title: "Harmonics and pizzicato marks", stage: 3, track: "reading", tag: "REFERENCE", published: P },
  { slug: "fingerings-and-position-numbers", title: "Fingerings — and position numbers aren't fingers", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "editions-and-editorial-marks", title: "Editions and editorial marks", stage: 3, track: "reading", tag: "REFERENCE", published: P },
  { slug: "the-score-language-quiz", title: "The score-language quiz", stage: 3, track: "reading", tag: "NOW", published: P },

  // ── Stage 4 — Scales & musicianship ─────────────────────────────
  { slug: "what-a-scale-is", title: "What a scale actually is", stage: 4, track: "ear", tag: "NOW" },
  { slug: "whole-steps-and-half-steps", title: "Whole steps and half steps", stage: 4, track: "ear", tag: "NOW" },
  { slug: "why-g-major-has-one-sharp", title: "Why G major has one sharp", stage: 4, track: "ear", tag: "NOW" },
  { slug: "the-circle-of-fifths", title: "The circle of fifths", stage: 4, track: "ear", tag: "NOW" },
  { slug: "major-and-minor", title: "What major and minor mean", stage: 4, track: "ear", tag: "NOW" },
  { slug: "the-three-minors", title: "The three minors", stage: 4, track: "ear", tag: "NEXT" },
  { slug: "parallel-and-relative", title: "Parallel and relative", stage: 4, track: "ear", tag: "NOW" },
  { slug: "the-twelve-keys", title: "The twelve keys", stage: 4, track: "ear", tag: "REFERENCE" },
  { slug: "intervals", title: "Intervals", stage: 4, track: "ear", tag: "NOW" },
  { slug: "triads", title: "Triads", stage: 4, track: "ear", tag: "NEXT" },
  { slug: "cadences", title: "Cadences", stage: 4, track: "ear", tag: "NEXT" },
  { slug: "arpeggios", title: "Arpeggios", stage: 4, track: "left-hand", tag: "NOW" },
  { slug: "other-scales", title: "The other scale families", stage: 4, track: "ear", tag: "REFERENCE" },
  { slug: "the-harmonic-series", title: "The harmonic series, and why open strings ring", stage: 4, track: "ear", tag: "NEXT" },
  { slug: "your-scale-practice-order", title: "Which scales to actually practise", stage: 4, track: "ear", tag: "NOW" },

  // ── Stage 5 — The bow ──────────────────────────────────────────
  { slug: "how-the-bow-makes-sound", title: "How the bow makes sound", stage: 5, track: "bow", tag: "NOW" },
  { slug: "one-long-tone", title: "One long tone, frog to tip", stage: 5, track: "bow", tag: "NOW" },
  { slug: "string-crossings", title: "String crossings", stage: 5, track: "bow", tag: "NOW" },
  { slug: "detache", title: "Détaché", stage: 5, track: "bow", tag: "NOW" },
  { slug: "legato-and-slurs", title: "Legato, and slurred bowing", stage: 5, track: "bow", tag: "NOW" },
  { slug: "martele", title: "Martelé", stage: 5, track: "bow", tag: "NEXT" },
  { slug: "staccato", title: "Staccato", stage: 5, track: "bow", tag: "NEXT" },
  { slug: "portato-and-colle", title: "Portato and collé", stage: 5, track: "bow", tag: "NEXT" },
  { slug: "spiccato", title: "Spiccato", stage: 5, track: "bow", tag: "LATER" },
  { slug: "sautille-and-beyond", title: "Sautillé, and the strokes beyond", stage: 5, track: "bow", tag: "LATER" },
  { slug: "bow-effects", title: "Bow effects and colours", stage: 5, track: "bow", tag: "REFERENCE" },
  { slug: "the-bow-stroke-atlas", title: "The bow-stroke atlas", stage: 5, track: "bow", tag: "REFERENCE" },
  { slug: "reading-bowings", title: "Reading a bowing", stage: 5, track: "bow", tag: "NOW" },
  { slug: "the-foundation-check", title: "The Foundation check", stage: 5, track: "bow", tag: "NOW" },
];

export const publishedLessons = (): Lesson[] =>
  LESSONS.filter((l) => l.published);

export const lessonBySlug = (slug: string): Lesson | undefined =>
  publishedLessons().find((l) => l.slug === slug);

export const stageByNumber = (n: number): Stage | undefined =>
  STAGES.find((s) => s.n === n);

export const lessonsInStage = (n: number): Lesson[] =>
  LESSONS.filter((l) => l.stage === n);

export function lessonNeighbours(slug: string): {
  prev?: Lesson;
  next?: Lesson;
} {
  const list = publishedLessons();
  const i = list.findIndex((l) => l.slug === slug);
  if (i === -1) return {};
  return { prev: list[i - 1], next: list[i + 1] };
}

export const courseProgress = () => ({
  published: publishedLessons().length,
  total: LESSONS.length,
});
