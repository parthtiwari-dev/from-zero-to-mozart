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
  //   The 4 partial Stage-1 tunes (twinkle, ode-to-joy, lightly-row, au-clair)
  //   were completed to full melodies in the 2026-09-02 audit pass. Still to
  //   add here: Pop Goes the Weasel / Jolly Good Fellow / Deck the Halls, when
  //   melody sources are in hand.
  { slug: "tune-when-the-saints", title: "When the Saints Go Marching In", stage: 2, track: "repertoire", tag: "NOW", published: P, piece: { key: "D major", position: "1st", skill: "pickup + dotted rhythm + held notes across bars", inPdf: false } },
  { slug: "tune-row-your-boat", title: "Row, Row, Row Your Boat (a round)", stage: 2, track: "repertoire", tag: "NOW", published: P, piece: { key: "G major", position: "1st", skill: "compound time — 6/8, felt in two", inPdf: false } },
  { slug: "tune-perpetual-motion", title: "Perpetual Motion", stage: 2, track: "repertoire", tag: "NOW", published: P, piece: { key: "G major", position: "1st", skill: "an even eighth-note stream — hold the pulse through everything", inPdf: false } },

  // ── Stage 3 — Score symbols ─────────────────────────────────────
  //   Rebuilt to docs/stage-plans/stage-3.md (research: stage-3-research.md).
  //   Two halves: 3a Expression (A–C), 3b The rest of the page (D–J).
  //   Everything here is READING — bow strokes perform in Stage 5, ornaments
  //   in Stage 6. Old thin Stage-3 slugs deleted and replaced.
  // 3a · Movement A — tempo & motion
  { slug: "how-fast-and-what-mood", title: "How fast, and what mood", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "bending-the-tempo", title: "Bending the tempo", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-metronome-mark", title: "The metronome mark", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-metre-carries-the-tempo", title: "The metre carries the tempo", stage: 3, track: "reading", tag: "NEXT", published: P },
  { slug: "tempo-words-in-german-and-french", title: "Tempo words in German and French", stage: 3, track: "reading", tag: "REFERENCE", published: P },
  // 3a · Movement B — dynamics
  { slug: "loud-and-soft-are-relative", title: "Loud and soft are relative", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "getting-louder-getting-softer", title: "Getting louder, getting softer", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-sudden-ones", title: "The sudden ones — sf, fp, subito", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "dying-away", title: "Dying away", stage: 3, track: "reading", tag: "NEXT", published: P },
  { slug: "where-dynamics-came-from", title: "Where dynamics came from", stage: 3, track: "reading", tag: "NEXT", published: P },
  { slug: "dynamics-are-a-bow-thing", title: "Dynamics are a bow thing", stage: 3, track: "bow", tag: "NOW", published: P },
  // 3a · Movement C — articulation
  { slug: "short-held-and-connected", title: "Short, held, and connected", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "accents-and-marcato", title: "Accents and marcato", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-marks-stack", title: "The marks stack", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-fermata", title: "The fermata", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "breath-marks-and-breaks", title: "Breath marks and breaks", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "a-slur-is-one-bow", title: "A slur is one bow", stage: 3, track: "bow", tag: "NOW", published: P },
  { slug: "non-legato-was-normal", title: "Non-legato was normal", stage: 3, track: "reading", tag: "NEXT", published: P },
  // 3b · Movement D — bow & string words
  { slug: "down-bow-up-bow-and-the-retake", title: "Down-bow, up-bow, and the retake", stage: 3, track: "bow", tag: "NOW", published: P },
  { slug: "arco-and-pizzicato", title: "Arco and pizzicato", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-colour-words", title: "The colour words", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "which-string", title: "Which string", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "bow-stroke-words-youll-meet", title: "Bow-stroke words you'll meet", stage: 3, track: "bow", tag: "REFERENCE", published: P },
  { slug: "tremolo", title: "Tremolo", stage: 3, track: "reading", tag: "NOW", published: P },
  // 3b · Movement E — repeats & the road map
  { slug: "repeat-barlines-and-endings", title: "Repeat barlines and endings", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "da-capo-dal-segno-and-the-coda", title: "Da capo, dal segno, and the coda", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-repeat-you-dont-take", title: "The repeat you don't take", stage: 3, track: "reading", tag: "NEXT", published: P },
  { slug: "the-other-road-signs", title: "The other road signs", stage: 3, track: "reading", tag: "REFERENCE", published: P },
  // 3b · Movement F — ornaments
  { slug: "what-an-ornament-is", title: "What an ornament is", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-trill", title: "The trill", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "mordents-and-the-turn", title: "Mordents and the turn", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "grace-notes-the-long-and-the-short", title: "Grace notes — the long and the short", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-slide-and-rolled-chords", title: "The slide, and rolled chords", stage: 3, track: "reading", tag: "NEXT", published: P },
  { slug: "ornaments-are-an-opinion", title: "Ornaments are an opinion", stage: 3, track: "reading", tag: "NEXT", published: P },
  // 3b · Movement G — string-part notation
  { slug: "reading-double-stops-and-chords", title: "Reading double stops and chords", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "harmonics-on-the-page", title: "Harmonics on the page", stage: 3, track: "reading", tag: "NEXT", published: P },
  { slug: "finger-string-or-position", title: "Finger, string, or position?", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "slides-and-octave-signs", title: "Slides and octave signs", stage: 3, track: "reading", tag: "NEXT", published: P },
  // 3b · Movement H — editions
  { slug: "who-wrote-this-mark", title: "Who wrote this mark?", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "kinds-of-edition", title: "Kinds of edition", stage: 3, track: "reading", tag: "REFERENCE", published: P },
  // 3b · Movement I — putting it together
  { slug: "decode-a-dense-line", title: "Decode a dense line", stage: 3, track: "reading", tag: "NOW", published: P },
  { slug: "the-score-language-check", title: "The score-language check", stage: 3, track: "reading", tag: "NOW", published: P },
  // 3b · Movement J — the tunes (also on /practice).
  //   J1/J2 from the verified Stage-1 melodies. J3 (minuet) from the user's
  //   easy-version PDF — D major, first position; endings reconstructed, verify.
  //   J4 (amazing-grace) = the plain standard "New Britain" verse in G (the
  //   user's PDF decorates this and shifts to A major after b.21).
  //   J5 (gossec-gavotte) DEFERRED (2026-09-03) — the source PDF is a raster
  //   full score of dense cut-time 16ths, a Suzuki student piece; needs the
  //   Bk 1 first-position arrangement or a MusicXML export. Its concept
  //   (D.C. al Fine) is already taught in `da-capo-dal-segno-and-the-coda`.
  { slug: "tune-ode-to-joy-shaped", title: "Ode to Joy, shaped", stage: 3, track: "repertoire", tag: "NOW", published: P, piece: { key: "A major", position: "1st", skill: "reading and playing a full dynamic scheme", inPdf: false } },
  { slug: "tune-twinkle-articulated", title: "Twinkle, articulated", stage: 3, track: "repertoire", tag: "NOW", published: P, piece: { key: "A major", position: "1st", skill: "reading an articulation scheme — staccato / legato / tenuto / portato", inPdf: false } },
  { slug: "tune-minuet-in-g", title: "Minuet in G (Petzold)", stage: 3, track: "repertoire", tag: "NOW", published: P, piece: { key: "D major", position: "1st", skill: "binary repeats + 1st/2nd endings; f/p terracing", inPdf: false } },
  { slug: "tune-amazing-grace", title: "Amazing Grace", stage: 3, track: "repertoire", tag: "NOW", published: P, piece: { key: "G major", position: "1st", skill: "reading a line of expression marks — mp/cresc/mf/dim/rit/fermata", inPdf: false } },
  { slug: "tune-gossec-gavotte", title: "Gossec Gavotte", stage: 3, track: "repertoire", tag: "NOW", piece: { key: "D major", position: "1st", skill: "staccato — dot vs slur vs plain; D.C. al Fine", inPdf: false } },

  // ── Stage 4 — Scales & musicianship I ───────────────────────────
  //   Rebuilt to docs/stage-plans/stage-4.md (from stage-4-research.md, 20
  //   passes). 4a/4b/4c grouping is a /learn divider, not stage numbers —
  //   stage: 4 throughout. 48 concept + 7 repertoire. Owns the K.216
  //   first-note debt (LESSONS-FROM-MOZART.md §2).
  //
  // 4a · Scales & keys
  // 4a · Movement A — what a scale is
  { slug: "what-a-scale-is", title: "What a scale actually is", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "the-scale-degrees-and-their-pull", title: "The scale degrees, and their pull", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "do-re-mi-and-sa-re-ga", title: "Do-re-mi and Sa-re-ga", stage: 4, track: "ear", tag: "NOW", published: P },
  // 4a · Movement B — steps & the major formula
  { slug: "whole-steps-and-half-steps", title: "Whole steps and half steps", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "the-major-scale-formula", title: "The major scale formula", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "why-g-major-has-one-sharp", title: "Why G major has one sharp", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "key-signatures-in-full", title: "Key signatures in full", stage: 4, track: "reading", tag: "NOW", published: P },
  // 4a · Movement C — the circle of fifths
  { slug: "the-circle-of-fifths", title: "The circle of fifths", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "near-keys-and-far-keys", title: "Near keys and far keys", stage: 4, track: "ear", tag: "NEXT", published: P },
  // 4a · Movement D — minor
  { slug: "what-major-and-minor-mean", title: "What major and minor mean", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "the-three-minors", title: "The three minors", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "relative-and-parallel", title: "Relative and parallel", stage: 4, track: "ear", tag: "NOW", published: P },
  // 4a · Movement E — the twelve keys
  { slug: "the-twelve-keys", title: "The twelve keys", stage: 4, track: "ear", tag: "REFERENCE", published: P },
  { slug: "the-keys-the-violin-loves", title: "The keys the violin loves", stage: 4, track: "ear", tag: "NOW", published: P },
  // 4b · Intervals, chords & harmony
  // 4b · Movement F — intervals & the ear
  { slug: "what-an-interval-is", title: "What an interval is", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "the-intervals-in-the-major-scale", title: "The intervals in the major scale", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "augmented-diminished-and-the-tritone", title: "Augmented, diminished, and the tritone", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "hearing-the-scale-degrees", title: "Hearing the scale degrees", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "tuning-by-ear", title: "Tuning by ear", stage: 4, track: "ear", tag: "NOW", published: P },
  // 4b · Movement G — chords (triads and beyond)
  { slug: "what-a-triad-is", title: "What a triad is", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "the-four-triad-qualities", title: "The four triad qualities", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "inversions-and-spelling", title: "Inversions, and spelling a triad", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "suspended-and-added-tone-chords", title: "Suspended and added-tone chords", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "reading-a-chord-symbol", title: "Reading a chord symbol", stage: 4, track: "reading", tag: "NEXT", published: P },
  { slug: "chords-on-the-violin", title: "Chords on the violin", stage: 4, track: "left-hand", tag: "NEXT", published: P },
  // 4b · Movement H — harmony
  { slug: "the-chords-of-a-key", title: "The chords of a key", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "harmonising-a-tune-you-know", title: "Harmonising a tune you know", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "notes-that-arent-in-the-chord", title: "Notes that aren't in the chord", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "harmony-has-a-rhythm-too", title: "Harmony has a rhythm too", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "the-dominant-seventh", title: "The dominant seventh", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "the-other-seventh-chords", title: "The other seventh chords", stage: 4, track: "ear", tag: "REFERENCE", published: P },
  { slug: "extended-chords", title: "Extended chords — 9ths, 11ths, 13ths", stage: 4, track: "ear", tag: "REFERENCE", published: P },
  { slug: "secondary-dominants", title: "Secondary dominants", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "borrowed-chords-and-mode-mixture", title: "Borrowed chords and mode mixture", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "the-chromatic-chords", title: "The chromatic chords", stage: 4, track: "ear", tag: "REFERENCE", published: P },
  { slug: "altered-and-quartal-chords", title: "Altered and quartal chords", stage: 4, track: "ear", tag: "REFERENCE", published: P },
  // 4b · Movement I — cadences & phrase
  { slug: "what-a-cadence-is", title: "What a cadence is", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "the-other-three-cadences", title: "The other three cadences", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "cadences-in-your-own-tunes", title: "Cadences in your own tunes", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "motif-phrase-and-period", title: "Motif, phrase, and period", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "phrases-breathe", title: "Phrases breathe", stage: 4, track: "bow", tag: "NEXT", published: P },
  // 4c · Arpeggios, the physics & the rest
  // 4c · Movement J — arpeggios
  { slug: "what-an-arpeggio-is", title: "What an arpeggio is", stage: 4, track: "left-hand", tag: "NOW", published: P },
  { slug: "the-first-position-arpeggios", title: "The first-position arpeggios", stage: 4, track: "left-hand", tag: "NOW", published: P },
  { slug: "broken-thirds-and-the-dominant-seventh-arpeggio", title: "Broken thirds, and the dominant-seventh arpeggio", stage: 4, track: "left-hand", tag: "NEXT", published: P },
  { slug: "arpeggios-in-real-music", title: "Arpeggios in real music", stage: 4, track: "repertoire", tag: "NOW", published: P },
  // 4c · Movement K — the physics
  { slug: "the-harmonic-series", title: "The harmonic series, and why open strings ring", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "why-your-violin-rings", title: "Why your violin rings", stage: 4, track: "ear", tag: "NOW", published: P },
  { slug: "in-tune-is-not-one-thing", title: "In tune is not one thing", stage: 4, track: "ear", tag: "NEXT", published: P },
  // 4c · Movement L — every scale
  { slug: "the-modes", title: "The modes", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "dorian-and-mixolydian", title: "Dorian and Mixolydian", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "phrygian-lydian-and-locrian", title: "Phrygian, Lydian, and Locrian", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "the-pentatonic-scales", title: "The pentatonic scales", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "the-blues-scale", title: "The blues scale", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "the-chromatic-scale", title: "The chromatic scale", stage: 4, track: "ear", tag: "NEXT", published: P },
  { slug: "the-symmetrical-scales", title: "The symmetrical scales", stage: 4, track: "ear", tag: "REFERENCE", published: P },
  { slug: "scales-from-around-the-world", title: "Scales from around the world", stage: 4, track: "ear", tag: "REFERENCE", published: P },
  { slug: "a-raga-is-not-a-scale", title: "A raga is not a scale", stage: 4, track: "ear", tag: "NEXT", published: P },
  // 4c · Movement M — scale practice
  { slug: "how-to-practise-a-scale", title: "How to practise a scale", stage: 4, track: "left-hand", tag: "NOW", published: P },
  { slug: "which-scales-to-practise-now", title: "Which scales to practise now", stage: 4, track: "ear", tag: "NOW", published: P },
  // 4c · Movement N — transposition
  { slug: "transposing-a-tune", title: "Transposing a tune", stage: 4, track: "reading", tag: "NEXT", published: P },
  // 4c · Movement O — putting it together
  { slug: "read-the-harmony-of-a-line", title: "Read the harmony of a line", stage: 4, track: "reading", tag: "NEXT", published: P },
  { slug: "the-first-note-of-mozart", title: "The first note of Mozart", stage: 4, track: "repertoire", tag: "NEXT", published: P },
  { slug: "the-musicianship-check", title: "The musicianship check", stage: 4, track: "reading", tag: "NEXT", published: P },
  // 4 · Movement P — the tunes (also on /practice)
  { slug: "stage-4-scales-and-arpeggios", title: "Scales and arpeggios to play", stage: 4, track: "repertoire", tag: "NOW", published: P, piece: { key: "G / D / A / C major, E minor", position: "1st", skill: "the NOW one-octave scale & arpeggio set", inPdf: true } },
  { slug: "tune-eine-kleine-nachtmusik", title: "Eine kleine Nachtmusik (opening)", stage: 4, track: "repertoire", tag: "NOW", published: P, piece: { key: "G major", position: "1st", skill: "arpeggios as music — a I arpeggio answered by a V7 arpeggio; the rocket", inPdf: false } },
  { slug: "tune-canon-in-d", title: "Canon in D", stage: 4, track: "repertoire", tag: "NOW", published: P, piece: { key: "D major", position: "1st", skill: "hearing a chord progression — I–V–vi–iii–IV–I–IV–V under a floating melody", inPdf: false } },
  { slug: "tune-scarborough-fair", title: "Scarborough Fair", stage: 4, track: "repertoire", tag: "NEXT", published: P, piece: { key: "E Dorian / E minor", position: "1st", skill: "modal colour — a minor key with the 6th raised; the period", inPdf: false } },
  { slug: "tune-fur-elise-theme", title: "Für Elise (theme)", stage: 4, track: "repertoire", tag: "NEXT", published: P, piece: { key: "A minor", position: "1st", skill: "a minor key + hearing the leading tone pull; question and answer", inPdf: false } },
  { slug: "tune-vivaldi-spring-theme", title: "Vivaldi — Spring (theme)", stage: 4, track: "repertoire", tag: "NEXT", published: P, piece: { key: "E major", position: "1st", skill: "a ritornello + an f/p echo; arpeggio and trill figures", inPdf: false } },
  { slug: "tune-aura-lee", title: "Aura Lee", stage: 4, track: "repertoire", tag: "NOW", published: P, piece: { key: "C major", position: "1st", skill: "the C-major first-position hand; a IV-heavy harmony", inPdf: false } },

  // ── Stage 5 — The bow ──────────────────────────────────────────
  //   Plan: docs/stage-plans/stage-5.md (research: stage-5-research.md, 15 passes).
  //   5a/5b/5c is a /learn grouping, not stage numbers (stage: 5 throughout).
  //   The play-by-ear thread runs through the stage (PRD.md §3): each part ends
  //   with a "play it back" beat, `finding-a-tune-by-ear` is its own lesson, and
  //   the Foundation check gains an ear-to-instrument test.

  // 5a · Tone: how the bow makes a sound
  // 5a · Movement A — the sustained note
  { slug: "how-the-bow-makes-sound", title: "How the bow makes sound", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "one-long-tone", title: "One long tone, frog to tip", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "the-bow-change", title: "The bow change", stage: 5, track: "bow", tag: "NOW", published: P },
  // 5a · Movement B — the three controls
  { slug: "speed-weight-and-sounding-point", title: "Speed, weight, and sounding point", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "speed-not-pressure", title: "Speed, not pressure", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "the-five-lanes", title: "The five lanes", stage: 5, track: "bow", tag: "NOW", published: P },
  // 5a · Movement C — planning and holding
  { slug: "planning-the-bow", title: "Planning the bow", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "the-flexible-bow-hand", title: "The flexible bow hand", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "how-to-practise-a-bow-stroke", title: "How to practise a bow stroke", stage: 5, track: "bow", tag: "NOW", published: P },

  // 5b · The strokes
  // 5b · Movement D — the core strokes to perform
  { slug: "detache", title: "Détaché", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "the-detache-family", title: "The détaché family", stage: 5, track: "bow", tag: "NEXT", published: P },
  { slug: "legato-and-slurs", title: "Legato, and slurred bowing", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "string-crossings", title: "String crossings", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "slurred-crossings-and-bariolage", title: "Slurred crossings, and bariolage", stage: 5, track: "bow", tag: "NEXT", published: P },
  // 5b · Movement E — martelé and the marked strokes
  { slug: "martele", title: "Martelé", stage: 5, track: "bow", tag: "NEXT", published: P },
  { slug: "staccato", title: "Staccato", stage: 5, track: "bow", tag: "NEXT", published: P },
  { slug: "portato-and-colle", title: "Portato and collé", stage: 5, track: "bow", tag: "NEXT", published: P },
  { slug: "hooked-bowing-and-retakes", title: "Hooked bowing, and retakes", stage: 5, track: "bow", tag: "NEXT", published: P },
  // 5b · Movement F — off the string (recognise)
  { slug: "spiccato", title: "Spiccato", stage: 5, track: "bow", tag: "LATER", published: P },
  { slug: "sautille-and-the-continuum", title: "Sautillé, and the continuum", stage: 5, track: "bow", tag: "LATER", published: P },
  { slug: "the-far-shore", title: "The far shore", stage: 5, track: "bow", tag: "REFERENCE", published: P },
  // 5b · Movement G — colour
  // tremolo lives in Stage 3 (`tremolo`, reading track) — it already covers doing
  // it (bowed + fingered, measured + unmeasured). Not repeated here; `colour-strokes`
  // points back to it.
  { slug: "colour-strokes", title: "Colour strokes", stage: 5, track: "bow", tag: "REFERENCE", published: P },
  // 5b · Movement H — the bow hand does more than bow
  { slug: "pizzicato", title: "Pizzicato", stage: 5, track: "bow", tag: "NEXT", published: P },
  { slug: "rolling-a-chord-with-the-bow", title: "Rolling a chord with the bow", stage: 5, track: "bow", tag: "NEXT", published: P },
  { slug: "the-bow-stroke-atlas", title: "The bow-stroke atlas", stage: 5, track: "bow", tag: "REFERENCE", published: P },

  // 5c · Reading & shaping with the bow, and the gate
  // 5c · Movement I — reading a printed bowing
  { slug: "where-in-the-bow", title: "Where in the bow", stage: 5, track: "reading", tag: "NOW", published: P },
  { slug: "the-rule-of-the-down-bow", title: "The rule of the down-bow", stage: 5, track: "reading", tag: "NOW", published: P },
  { slug: "reading-a-bowing", title: "Reading a bowing", stage: 5, track: "reading", tag: "NOW", published: P },
  { slug: "bowing-a-passage-yourself", title: "Bowing a passage yourself", stage: 5, track: "reading", tag: "NOW", published: P },
  // 5c · Movement J — shaping with the bow
  { slug: "dynamics-with-the-bow", title: "Dynamics with the bow", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "messa-di-voce", title: "Messa di voce", stage: 5, track: "bow", tag: "NOW", published: P },
  { slug: "phrasing-with-the-bow", title: "Phrasing with the bow", stage: 5, track: "bow", tag: "NOW", published: P },
  // 5c · Movement K — playing by ear
  { slug: "finding-a-tune-by-ear", title: "Finding a tune by ear", stage: 5, track: "ear", tag: "NOW", published: P },
  // 5c · Movement L — reference
  { slug: "the-baroque-bow-and-the-modern-bow", title: "The Baroque bow and the modern bow", stage: 5, track: "bow", tag: "REFERENCE", published: P },

  // 5 · Movement P — the repertoire (also on /practice)
  { slug: "stage-5-tone-and-strokes", title: "Tone and strokes to play", stage: 5, track: "repertoire", tag: "NOW", published: P, piece: { key: "G / D / A / C", position: "1st", skill: "the daily bow routine — son filé, détaché, slurred and martelé scales, the bowing-variation drill", inPdf: true } },
  { slug: "tune-conquering-hero", title: "Handel — See, the Conqu'ring Hero Comes", stage: 5, track: "repertoire", tag: "NEXT", published: P, piece: { key: "G major", position: "1st", skill: "martelé and grand détaché in real music — the prepared bite with a purpose", inPdf: false } },
  { slug: "tune-bach-musette", title: "Bach — Musette in D", stage: 5, track: "repertoire", tag: "NOW", published: P, piece: { key: "D major", position: "1st", skill: "the Foundation-gate piece — even détaché, string crossings, a drone dance, in tune", inPdf: false } },
  // DEFERRED — need a verified PD first-position melody. tune-bach-air: source in hand
  // (Mutopia LilyPond, Bach-Gesellschaft text) but needs a careful simplified arrangement.
  // tune-gossec-gavotte: still scan-only (as since Stage 3). Never from memory (RULES.md #8).
  { slug: "tune-bach-air", title: "Bach — Air (opening)", stage: 5, track: "repertoire", tag: "NOW", piece: { key: "D major", position: "1st", skill: "legato and son filé — a seamless singing line, bow distribution", inPdf: false } },
  { slug: "tune-gossec-gavotte", title: "Gossec — Gavotte", stage: 5, track: "repertoire", tag: "NEXT", piece: { key: "D major", position: "1st", skill: "the détaché piece — détaché, staccato, retakes, hooked bows, slurs", inPdf: true } },
  { slug: "the-foundation-check", title: "The Foundation check", stage: 5, track: "reading", tag: "NOW", published: P },

  // ── Stage 6 — Beyond first position ─────────────────────────────
  //   Plan: docs/stage-plans/stage-6.md (research: stage-6-research.md, 21 passes +
  //   a re-verification pass). Position order: 1st (recap) → half → 3rd → 5th →
  //   2nd → 4th, 6th/7th REFERENCE. Every fingering copied from the Pass-20 table.

  // Movement A — what a position is, and the first shift
  { slug: "what-a-position-is", title: "What a position is", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "how-the-arm-shifts", title: "How the arm shifts", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "the-four-kinds-of-shift", title: "The four kinds of shift", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "how-to-practise-a-shift", title: "How to practise a shift", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "shift-glissando-or-portamento", title: "Shift, glissando, or portamento", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "reaching-one-more-note", title: "Reaching one more note", stage: 6, track: "left-hand", tag: "NOW", published: P },

  // Movement B — 3rd position
  { slug: "third-position", title: "Third position", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "reading-a-position-number", title: "Reading a position number", stage: 6, track: "reading", tag: "NOW", published: P },
  { slug: "third-position-in-your-tunes", title: "Third position in your tunes", stage: 6, track: "left-hand", tag: "NOW", published: P },

  // Movement C — 5th position
  { slug: "fifth-position", title: "Fifth position", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "moving-between-first-third-and-fifth", title: "Moving between 1st, 3rd, and 5th", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "the-position-ladder", title: "The position ladder", stage: 6, track: "reading", tag: "NOW", published: P },

  // Movement D — 2nd and 4th position
  { slug: "second-position", title: "Second position", stage: 6, track: "left-hand", tag: "NEXT", published: P },
  { slug: "fourth-position", title: "Fourth position", stage: 6, track: "left-hand", tag: "NEXT", published: P },
  { slug: "the-full-fingerboard-map", title: "The full fingerboard map", stage: 6, track: "reading", tag: "REFERENCE", published: P },

  // Movement E — double stops, stopped
  { slug: "double-stops-both-fingers-down", title: "Double stops, both fingers down", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "thirds", title: "Thirds", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "sixths", title: "Sixths", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "octaves", title: "Octaves", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "fingered-octaves-and-tenths", title: "Fingered octaves and tenths", stage: 6, track: "left-hand", tag: "REFERENCE", published: P },

  // Movement F — stopped chords
  { slug: "holding-a-stopped-chord", title: "Holding a stopped chord", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "which-notes-to-hold", title: "Which notes to hold", stage: 6, track: "left-hand", tag: "NOW", published: P },

  // Movement G — trills, harmonics, and the rest
  { slug: "the-trill-in-your-fingers", title: "The trill in your fingers", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "natural-harmonics", title: "Natural harmonics", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "artificial-harmonics", title: "Artificial harmonics", stage: 6, track: "left-hand", tag: "REFERENCE", published: P },
  { slug: "left-hand-pizzicato", title: "Left-hand pizzicato", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "finger-substitution", title: "Finger substitution", stage: 6, track: "left-hand", tag: "NOW", published: P },

  // Movement H — 6th/7th+ and the position check
  { slug: "sixth-and-seventh-position", title: "Sixth and seventh position", stage: 6, track: "left-hand", tag: "REFERENCE", published: P },
  { slug: "how-to-practise-a-position", title: "How to practise a position", stage: 6, track: "left-hand", tag: "NOW", published: P },
  { slug: "the-position-check", title: "The position check", stage: 6, track: "reading", tag: "NOW", published: P },

  // ── Stage 7 — Vibrato & expression ─────────────────────────────
  //   Plan: docs/stage-plans/stage-7.md (research: stage-7-research.md, one pass).
  //   Beat 3 for vibrato: <NotatedExample> shows *where*, named recordings carry
  //   the *sound*, VibratoMotionDiagram does "see it" — every vibrato lesson
  //   states the engine can't play vibrato. Hz check on every metronome number.

  // Movement A — vibrato: what it is, and are you ready
  { slug: "what-vibrato-is", title: "What vibrato is", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "is-your-hand-ready", title: "Is your hand ready", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "vibrato-is-not-a-fix", title: "Vibrato is not a fix", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "vibrato-used-to-be-an-ornament", title: "Vibrato used to be an ornament", stage: 7, track: "ear", tag: "NOW", published: P },

  // Movement B — the motion, off the note
  { slug: "the-vibrato-pulse", title: "The vibrato pulse", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "arm-and-wrist", title: "Arm and wrist", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "polishing-the-string", title: "Polishing the string", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "finger-vibrato", title: "Finger vibrato", stage: 7, track: "left-hand", tag: "REFERENCE", published: P },

  // Movement C — building it on the string
  { slug: "the-pulse-ladder", title: "The pulse ladder", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "every-finger-every-string", title: "Every finger, every string", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "starting-and-stopping", title: "Starting and stopping", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "when-it-goes-wrong", title: "When it goes wrong", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "months-not-weeks", title: "Months, not weeks", stage: 7, track: "left-hand", tag: "NOW", published: P },

  // Movement D — vibrato in the music
  { slug: "vibrato-on-a-long-note", title: "Vibrato on a long note", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "width-speed-and-character", title: "Width, speed, and character", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "keeping-the-centre", title: "Keeping the centre", stage: 7, track: "left-hand", tag: "NOW", published: P },
  { slug: "vibrato-through-a-shift", title: "Vibrato through a shift", stage: 7, track: "left-hand", tag: "NOW", published: P },

  // ── Stage 8 — Sight-reading & ear training ─────────────────────
  //   Plan: docs/stage-plans/stage-8.md (research: stage-8-research.md, 22 passes).
  //   Built out of sequence (before Stage 6/7) — it carries the play-by-ear goal
  //   (PRD §3) and needs neither positions nor vibrato. 8a/8b is a /learn grouping.
  //   8a = reading fluency (A–C) + the whole ear gym (D–H), position-independent.
  //   8b = positions at sight + the Intermediate check — waits for Stage 6–7.
  //   Drills/cards are material (a few big lessons), not one MDX per card.

  // 8a · Movement A — reading fluently
  { slug: "what-fluent-reading-is", title: "What fluent reading is", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "reading-notes-fast", title: "Reading notes fast", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "the-pre-read", title: "The pre-read", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "landmarks-and-guide-notes", title: "Landmarks and guide notes", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "reading-the-shape", title: "Reading the shape", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "the-patterns-in-real-music", title: "The patterns in real music", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "your-eye-runs-ahead", title: "Your eye runs ahead", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "read-the-rhythm-first", title: "Read the rhythm first", stage: 8, track: "reading", tag: "NOW", published: P },
  // 8a · Movement B — sight-reading as a trained skill
  { slug: "the-never-stop-rule", title: "The never-stop rule", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "getting-lost-and-getting-back", title: "Getting lost, and getting back", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "the-four-layer-rescue", title: "The four-layer rescue", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "taking-more-help-away", title: "Taking more help away", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "how-sight-reading-cards-work", title: "How the sight-reading cards work", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "the-sight-reading-habit", title: "The sight-reading habit", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "sight-reading-cards", title: "Sight-reading cards", stage: 8, track: "reading", tag: "NOW", published: P },
  // 8a · Movement C — reading across contexts
  { slug: "reading-the-flat-keys", title: "Reading the flat keys", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "reading-a-chromatic-note", title: "Reading a chromatic note", stage: 8, track: "reading", tag: "NOW", published: P },
  { slug: "reading-two-notes-at-once", title: "Reading two notes at once", stage: 8, track: "reading", tag: "NEXT", published: P },
  { slug: "reading-a-chord-chart", title: "Reading a chord chart", stage: 8, track: "reading", tag: "NEXT", published: P },
  // 8a · Movement D — what a good ear is
  { slug: "what-a-good-ear-is", title: "What a good ear is", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "hearing-it-first", title: "Hearing it first", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "singing-is-not-optional", title: "Singing is not optional", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "finding-home", title: "Finding home", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "the-hand-signs", title: "The hand signs", stage: 8, track: "ear", tag: "REFERENCE", published: P },
  // 8a · Movement E — the scale-degree gym (the core)
  { slug: "the-stable-three", title: "The stable three", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "the-tendency-tones", title: "The tendency tones", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "all-seven-degrees", title: "All seven degrees", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "degrees-on-the-fingerboard", title: "Degrees on the fingerboard", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "degrees-in-your-tunes", title: "Degrees in your tunes", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "the-scale-degree-drills", title: "The scale-degree drills", stage: 8, track: "ear", tag: "NOW", published: P },
  // 8a · Movement F — hearing harmony
  { slug: "major-or-minor", title: "Major or minor?", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "hearing-the-bass", title: "Hearing the bass", stage: 8, track: "ear", tag: "NEXT", published: P },
  { slug: "home-leaving-pulling", title: "Home, leaving, pulling", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "hearing-a-cadence", title: "Hearing a cadence", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "hearing-the-chord-under-the-tune", title: "Hearing the chord under the tune", stage: 8, track: "ear", tag: "NEXT", published: P },
  // 8a · Movement G — taking music down
  { slug: "hearing-a-leap", title: "Hearing a leap", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "taking-a-rhythm-down", title: "Taking a rhythm down", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "taking-a-tune-down", title: "Taking a tune down", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "the-ear-gym-routine", title: "The ear-gym routine", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "the-dictation-drills", title: "The dictation drills", stage: 8, track: "ear", tag: "NOW", published: P },
  // 8a · Movement H — playing by ear (the payoff)
  { slug: "learning-a-tune-by-ear", title: "Learning a tune by ear", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "play-along", title: "Play along", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "reading-with-your-ear-on", title: "Reading with your ear on", stage: 8, track: "ear", tag: "NOW", published: P },
  { slug: "the-tunes-to-find-by-ear", title: "Tunes to find by ear", stage: 8, track: "ear", tag: "NOW", published: P },
  // 8b · after Stage 6–7 — positions at sight + the Intermediate gate
  { slug: "reading-a-shift", title: "Reading a shift", stage: 8, track: "reading", tag: "NEXT" },
  { slug: "the-grade-4-line", title: "The Grade-4 line", stage: 8, track: "reading", tag: "NEXT" },
  { slug: "the-intermediate-check", title: "The Intermediate check", stage: 8, track: "reading", tag: "NEXT" },

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
