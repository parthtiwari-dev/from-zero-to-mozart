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
  /** groups the K.216 module lessons for the /mozart index */
  module?: "mozart-k216";
  /** module lessons: which movement + section, for the /mozart index */
  mozart?: { movement: "I" | "II" | "III"; section: string; kind: "solo" | "orchestra" | "about" };
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
  { slug: "sharps-flats-and-naturals", title: "Sharps, flats and naturals", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-key-signature", title: "The key signature", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "accidentals-inside-a-bar", title: "Accidentals inside a bar", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "reading-in-g-major", title: "Reading in G major", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "reading-in-d-and-a", title: "Reading in D and A", stage: 1, track: "reading", tag: "NOW", published: P },
  // Movement D — landing it in tune (the ear)
  { slug: "ringing-tones", title: "Ringing tones", stage: 1, track: "ear", tag: "NOW", published: P },
  { slug: "sa-and-the-letter-names", title: "Sa, and the letter names", stage: 1, track: "ear", tag: "NOW", published: P },
  { slug: "hearing-a-wrong-note", title: "Hearing a wrong note — and which way", stage: 1, track: "ear", tag: "NOW", published: P },
  // Movement E — taking the scaffolding off
  { slug: "reading-a-steady-beat", title: "Reading a steady beat", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "taking-the-help-away", title: "Taking the help away", stage: 1, track: "reading", tag: "NOW", published: P },
  { slug: "the-first-position-reading-check", title: "The first-position reading check", stage: 1, track: "reading", tag: "NOW", published: P },
  // Movement F — the tunes (also on /practice).
  //   KNOWN GAP (RULES R3): the published tunes are 2-3 phrases each, not the
  //   full melody — complete them to full length before Stage 1 closes.
  //   The 5 UNPUBLISHED tunes below are "coming soon" (deferred per the user) —
  //   melody needs a public-domain source (Suzuki arrangements are copyright):
  //   song-of-the-wind ("Fuchs, du hast die Gans gestohlen"), go-tell-aunt-rhody,
  //   long-long-ago, french-folk-song, when-the-saints.
  { slug: "tune-twinkle-rhythms", title: "Twinkle rhythms (open strings)", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "open A / E", position: "1st (open)", skill: "the bow, before any fingers", inPdf: false } },
  { slug: "tune-twinkle", title: "Twinkle, Twinkle Little Star", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "A major", position: "1st", skill: "0–1–high 2–3 on the A string", inPdf: false } },
  { slug: "tune-ode-to-joy", title: "Ode to Joy", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "A major", position: "1st", skill: "a singing line, phrasing", inPdf: true } },
  { slug: "tune-lightly-row", title: "Lightly Row", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "A major", position: "1st", skill: "bow division — upper vs lower half", inPdf: false } },
  { slug: "tune-song-of-the-wind", title: "Song of the Wind", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "A major", position: "1st", skill: "the 1↔3 jumping finger; bow retakes", inPdf: false } },
  { slug: "tune-go-tell-aunt-rhody", title: "Go Tell Aunt Rhody", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "A major", position: "1st", skill: "phrasing; a held, in-tune last note", inPdf: false } },
  { slug: "tune-au-clair-de-la-lune", title: "Au Clair de la Lune", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "D major", position: "1st", skill: "a completely even bow on repeated notes", inPdf: false } },
  { slug: "tune-long-long-ago", title: "Long, Long Ago", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "D major", position: "1st", skill: "a singing line, whole bows", inPdf: false } },
  { slug: "tune-french-folk-song", title: "French Folk Song", stage: 1, track: "repertoire", tag: "NOW", piece: { key: "D", position: "1st", skill: "minor colour; a smooth legato-feel line", inPdf: false } },
  // tune-when-the-saints promoted to Stage 2 (Movement I) — see below
  { slug: "tune-london-bridge", title: "London Bridge", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "D major", position: "1st", skill: "step/skip reading across two strings", inPdf: false } },
  { slug: "tune-hot-cross-buns", title: "Hot Cross Buns", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "G string", position: "1st", skill: "three notes, one string; the high-2 B", inPdf: false } },
  { slug: "tune-mary-had-a-little-lamb", title: "Mary Had a Little Lamb", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "G string", position: "1st", skill: "stepwise motion on one string, even bows", inPdf: false } },
  { slug: "tune-frere-jacques", title: "Frère Jacques (a round)", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "D major", position: "1st", skill: "play it as a round against the playback", inPdf: false } },
  { slug: "tune-jingle-bells", title: "Jingle Bells", stage: 1, track: "repertoire", tag: "NOW", published: P, piece: { key: "D major", position: "1st", skill: "repeated notes, a still left hand", inPdf: false } },

  // ── Stage 2 — Rhythm ────────────────────────────────────────────
  //   Rebuilt to docs/stage-plans/stage-2.md — Movements A–I. Metric counting
  //   only; compound metre + triplets + syncopation in full; the tabla↔Western
  //   map is one optional lesson. Movements B–I still show the old thin drafts
  //   until each is rewritten.
  // Movement A — pulse & note anatomy
  { slug: "rhythm-first", title: "Rhythm comes first", stage: 2, track: "ear", tag: "NOW", published: P },
  { slug: "beat-tempo-and-metre", title: "Beat, tempo, metre, rhythm", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "how-a-note-shows-its-length", title: "How a note shows its length", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "the-note-tree", title: "The note tree", stage: 2, track: "reading", tag: "NOW", published: P },
  // Movement B — the marks that change a length
  { slug: "the-dot", title: "The dot after a note", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "the-two-dots-that-look-alike", title: "The two dots that look alike", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "rests", title: "Rests — silence has a length too", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "beams-and-flags", title: "Beams and flags", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "ties-and-slurs", title: "Ties and slurs", stage: 2, track: "reading", tag: "NOW", published: P },
  // Movement C — two notes, or two at once (the Vivaldi keystone)
  { slug: "beamed-notes-double-stops-and-vibrato", title: "Two in a row, two at once, or a wobble", stage: 2, track: "reading", tag: "NOW", published: P },
  // Movement D — counting
  { slug: "counting-the-beat", title: "Counting the beat", stage: 2, track: "ear", tag: "NOW", published: P },
  { slug: "subdivision", title: "Subdivision", stage: 2, track: "ear", tag: "NOW", published: P },
  { slug: "if-you-count-in-bols", title: "Optional: if you count in bols", stage: 2, track: "ear", tag: "REFERENCE", published: P },
  // Movement E — grouping the beats
  { slug: "time-signatures", title: "Time signatures", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "common-time-and-cut-time", title: "Common time, and cut time", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "simple-and-compound-time", title: "Simple and compound time", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "six-eight", title: "6/8, properly", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "nine-eight-and-twelve-eight", title: "9/8 and 12/8", stage: 2, track: "reading", tag: "NEXT", published: P },
  { slug: "barlines-and-the-pickup", title: "Barlines and the pickup", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "repeats-and-endings", title: "Repeats and endings", stage: 2, track: "reading", tag: "NOW", published: P },
  // Movement F — bending the beat
  { slug: "syncopation", title: "Syncopation", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "triplets", title: "Triplets", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "other-tuplets", title: "Other tuplets", stage: 2, track: "reading", tag: "REFERENCE", published: P },
  { slug: "dotted-and-snap-rhythms", title: "Dotted and snap rhythms", stage: 2, track: "reading", tag: "NEXT", published: P },
  // Movement G — the bow's half of rhythm
  { slug: "a-note-value-is-a-length-of-bow", title: "A note value is a length of bow", stage: 2, track: "bow", tag: "NOW", published: P },
  { slug: "rests-ties-and-slurs-in-the-bow", title: "Rests, ties and slurs in the bow", stage: 2, track: "bow", tag: "NOW", published: P },
  { slug: "shadow-bowing", title: "Shadow-bowing", stage: 2, track: "bow", tag: "NOW", published: P },
  // Movement H — reading checks
  { slug: "clap-this-line", title: "Clap this line", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "reading-quarters-and-eighths", title: "Reading: quarters and eighths", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "reading-sixteenths", title: "Reading: sixteenths", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "reading-dotted-rhythms", title: "Reading: dotted rhythms", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "reading-in-six-eight", title: "Reading: in 6/8", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "reading-triplets-and-syncopation", title: "Reading: triplets and syncopation", stage: 2, track: "reading", tag: "NOW", published: P },
  { slug: "reading-mixed-rhythms", title: "Reading: mixed rhythms — the check", stage: 2, track: "reading", tag: "NOW", published: P },
  // Movement I — the tunes (real music, in true rhythm, on /practice)
  //   Note: re-notating the 10 Stage-1 tunes in their true rhythm + completing
  //   them stays the deferred follow-up (decision 2). Pop Goes the Weasel /
  //   Jolly Good Fellow / Deck the Halls to add when melody sources are in hand.
  { slug: "tune-when-the-saints", title: "When the Saints Go Marching In", stage: 2, track: "repertoire", tag: "NOW", published: P, piece: { key: "D major", position: "1st", skill: "pickup + dotted rhythm + held notes across bars", inPdf: false } },
  { slug: "tune-row-your-boat", title: "Row, Row, Row Your Boat (a round)", stage: 2, track: "repertoire", tag: "NOW", published: P, piece: { key: "G major", position: "1st", skill: "compound time — 6/8, felt in two", inPdf: false } },
  { slug: "tune-perpetual-motion", title: "Perpetual Motion", stage: 2, track: "repertoire", tag: "NOW", published: P, piece: { key: "G major", position: "1st", skill: "an even eighth-note stream — hold the pulse through everything", inPdf: false } },

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

  // ── Stage 9 — The repertoire journey ───────────────────────────
  // The K.216 module. `mozart-k216` is the orientation; each page of the solo
  // part becomes its own annotated-line lesson (mozart-k216-i-*, -ii-*, -iii-*)
  // once a clean source (MusicXML / clean edition scan) is in docs/source/.
  { slug: "mozart-k216", title: "Mozart: Violin Concerto No. 3, K.216", stage: 9, track: "repertoire", tag: "LATER", published: P, module: "mozart-k216", mozart: { movement: "I", section: "About the concerto", kind: "about" } },
  { slug: "mozart-k216-i-entrance", title: "K.216 · I — the first solo: the theme", stage: 9, track: "repertoire", tag: "LATER", published: P, module: "mozart-k216", mozart: { movement: "I", section: "B — the theme (bars 9–12)", kind: "solo" } },
  { slug: "mozart-k216-i-b2", title: "K.216 · I — the first solo: the flourish", stage: 9, track: "repertoire", tag: "LATER", published: P, module: "mozart-k216", mozart: { movement: "I", section: "B — the flourish (bars 13–19)", kind: "solo" } },
];

export const mozartLessons = (): Lesson[] =>
  LESSONS.filter((l) => l.module === "mozart-k216");

export const publishedLessons = (): Lesson[] =>
  LESSONS.filter((l) => l.published);

/** Every melody lesson (Movement F et seq.) — feeds the /practice page. */
export const pieceLessons = (): Lesson[] => LESSONS.filter((l) => l.piece);

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
