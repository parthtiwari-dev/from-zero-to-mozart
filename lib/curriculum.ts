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
  /** repertoire lessons only — metadata for the /practice list */
  piece?: {
    key: string;
    position: string;
    skill: string;
    inPdf?: boolean;
  };
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
  { slug: "how-this-course-works", title: "How this course works", stage: 0, track: "setup", tag: "NOW", published: P },
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

  // ── Stage 1 — First position & reading the staff ──────────────────
  // Rebuilt 2026-09 to docs/stage-plans/stage-1.md. Six movements, string
  // order A→D→G→E (the way Hilary/Suzuki learned). `published` flips per lesson
  // as it's written.
  // Movement A — the hand on the string
  { slug: "four-strings-four-fingers", title: "Four strings, four fingers", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-four-finger-patterns", title: "The four finger patterns", stage: 1, track: "left-hand", tag: "NOW", published: P },
  { slug: "low-and-high-fingers", title: "Low fingers and high fingers", stage: 1, track: "left-hand", tag: "NOW", published: P },
  { slug: "keeping-fingers-down", title: "Keeping the fingers down", stage: 1, track: "left-hand", tag: "NOW", published: P },
  { slug: "hands-together", title: "The bow and the fingers, apart then together", stage: 1, track: "bow", tag: "NOW", published: P },
  { slug: "the-a-string", title: "The A string, note by note", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "landing-in-tune", title: "The finger is on the note — but is it in tune?", stage: 1, track: "ear", tag: "NOW", published: P },
  { slug: "the-d-string", title: "The D string, note by note", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-g-string", title: "The G string, note by note", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-e-string", title: "The E string, note by note", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "crossing-between-strings", title: "Crossing between strings", stage: 1, track: "left-hand", tag: "NOW", published: P },
  { slug: "one-pitch-more-than-one-place", title: "One pitch, more than one place", stage: 1, track: "left-hand", tag: "NOW", published: P },
  // Movement B — reading pitch off the page
  { slug: "the-staff", title: "The five-line staff", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-treble-clef", title: "The treble clef", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "lines-and-spaces", title: "Lines, spaces and the landmark notes", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "steps-and-skips", title: "Steps and skips — reading the shape", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "ledger-lines", title: "Ledger lines", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "open-strings-on-the-staff", title: "The four open strings, on the staff", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "reading-the-a-and-d-strings", title: "Reading the A and D strings", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "reading-the-g-and-e-strings", title: "Reading the G and E strings", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "which-note-is-this", title: "Which one is this? — the register problem", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "all-the-first-position-landmarks", title: "The whole first-position map", stage: 1, track: "reading", tag: "NOW", published: P },
  // Movement C — sharps, flats and the key signature
  { slug: "sharps-flats-and-naturals", title: "Sharps, flats and naturals", stage: 1, track: "reading", tag: "NOW" },
  { slug: "the-key-signature", title: "The key signature", stage: 1, track: "reading", tag: "NOW" },
  { slug: "accidentals-inside-a-bar", title: "Accidentals inside a bar", stage: 1, track: "reading", tag: "NOW" },
  { slug: "reading-in-g-major", title: "Reading in G major", stage: 1, track: "reading", tag: "NOW" },
  { slug: "reading-in-d-and-a", title: "Reading in D and A", stage: 1, track: "reading", tag: "NOW" },
  // Movement D — landing it in tune (the ear)
  { slug: "ringing-tones", title: "Ringing tones", stage: 1, track: "ear", tag: "NOW" },
  { slug: "sa-and-the-letter-names", title: "Sa, and the letter names", stage: 1, track: "ear", tag: "NOW" },
  { slug: "hearing-a-wrong-note", title: "Hearing a wrong note — and which way", stage: 1, track: "ear", tag: "NOW" },
  // Movement E — taking the scaffolding off
  { slug: "reading-a-steady-beat", title: "Reading a steady beat", stage: 1, track: "reading", tag: "NOW" },
  { slug: "taking-the-help-away", title: "Taking the help away", stage: 1, track: "reading", tag: "NOW" },
  { slug: "the-first-position-reading-check", title: "The first-position reading check", stage: 1, track: "reading", tag: "NOW" },
  // Movement F — the tunes (also on /practice)
  { slug: "tune-twinkle-rhythms", title: "Twinkle rhythms (open strings)", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "open A / E", position: "1st (open)", skill: "the bow, before any fingers", inPdf: false } },
  { slug: "tune-twinkle", title: "Twinkle, Twinkle Little Star", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "A major", position: "1st", skill: "0–1–2–3 on the A string", inPdf: false } },
  { slug: "tune-ode-to-joy", title: "Ode to Joy", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "A major", position: "1st", skill: "a singing line, phrasing", inPdf: true } },
  { slug: "tune-lightly-row", title: "Lightly Row", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "A major", position: "1st", skill: "bow division — upper vs lower half", inPdf: false } },
  { slug: "tune-song-of-the-wind", title: "Song of the Wind", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "A major", position: "1st", skill: "the 1↔3 jumping finger; bow retakes", inPdf: false } },
  { slug: "tune-go-tell-aunt-rhody", title: "Go Tell Aunt Rhody", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "A major", position: "1st", skill: "phrasing; a held, in-tune last note", inPdf: false } },
  { slug: "tune-au-clair-de-la-lune", title: "Au Clair de la Lune", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "A / D", position: "1st", skill: "a string crossing in a tune", inPdf: false } },
  { slug: "tune-long-long-ago", title: "Long, Long Ago", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "D major", position: "1st", skill: "a singing line, whole bows", inPdf: false } },
  { slug: "tune-french-folk-song", title: "French Folk Song", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "D", position: "1st", skill: "minor colour; a smooth legato-feel line", inPdf: false } },
  { slug: "tune-when-the-saints", title: "When the Saints Go Marching In", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "D major", position: "1st", skill: "a confident skip up; consecutive down-bows", inPdf: false } },
  { slug: "tune-london-bridge", title: "London Bridge", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "D major", position: "1st", skill: "short — pure step/skip reading, light bow", inPdf: false } },
  { slug: "tune-hot-cross-buns", title: "Hot Cross Buns", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "G string", position: "1st", skill: "three notes, one string; the high-2 B", inPdf: false } },
  { slug: "tune-mary-had-a-little-lamb", title: "Mary Had a Little Lamb", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "G string", position: "1st", skill: "stepwise motion on one string, even bows", inPdf: false } },
  { slug: "tune-frere-jacques", title: "Frère Jacques (a round)", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "G major", position: "1st", skill: "play it as a round against the playback", inPdf: false } },
  { slug: "tune-jingle-bells", title: "Jingle Bells", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "A / D major", position: "1st", skill: "repeated notes, quick finger drops", inPdf: false } },

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
  { slug: "what-a-scale-is", title: "What a scale actually is", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "whole-steps-and-half-steps", title: "Whole steps and half steps", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "why-g-major-has-one-sharp", title: "Why G major has one sharp", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "the-circle-of-fifths", title: "The circle of fifths", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "major-and-minor", title: "What major and minor mean", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "the-three-minors", title: "The three minors", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "parallel-and-relative", title: "Parallel and relative", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "the-twelve-keys", title: "The twelve keys", stage: 4, track: "ear", tag: "REFERENCE", published: P },
  { slug: "intervals", title: "Intervals", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "triads", title: "Triads", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "cadences", title: "Cadences", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "arpeggios", title: "Arpeggios", stage: 4, track: "left-hand", tag: "NOW", published: P },
  { slug: "other-scales", title: "The other scale families", stage: 4, track: "ear", tag: "REFERENCE", published: P },
  { slug: "the-harmonic-series", title: "The harmonic series, and why open strings ring", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "your-scale-practice-order", title: "Which scales to actually practise", stage: 4, track: "ear", tag: "NOW", published: P },

  // ── Stage 5 — The bow ──────────────────────────────────────────
  { slug: "how-the-bow-makes-sound", title: "How the bow makes sound", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "one-long-tone", title: "One long tone, frog to tip", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "string-crossings", title: "String crossings", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "detache", title: "Détaché", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "legato-and-slurs", title: "Legato, and slurred bowing", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "martele", title: "Martelé", stage: 5, track: "bow", tag: "NEXT", published: P },
  { slug: "staccato", title: "Staccato", stage: 5, track: "bow", tag: "NEXT", published: P },
  { slug: "portato-and-colle", title: "Portato and collé", stage: 5, track: "bow", tag: "NEXT", published: P },
  { slug: "spiccato", title: "Spiccato", stage: 5, track: "bow", tag: "LATER", published: P },
  { slug: "sautille-and-beyond", title: "Sautillé, and the strokes beyond", stage: 5, track: "bow", tag: "LATER", published: P },
  { slug: "bow-effects", title: "Bow effects and colours", stage: 5, track: "bow", tag: "REFERENCE", published: P },
  { slug: "the-bow-stroke-atlas", title: "The bow-stroke atlas", stage: 5, track: "bow", tag: "REFERENCE", published: P },
  { slug: "reading-bowings", title: "Reading a bowing", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "the-foundation-check", title: "The Foundation check", stage: 5, track: "bow", tag: "NOW", published: P },
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
