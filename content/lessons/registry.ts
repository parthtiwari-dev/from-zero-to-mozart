import type { ComponentType } from "react";

type MDXModule = { default: ComponentType };

/**
 * Explicit map of lesson slug → MDX module loader. Explicit (not a dynamic
 * template string) so Turbopack can statically resolve every lesson.
 * Every published lesson in lib/curriculum.ts needs an entry here.
 */
export const lessonModules: Record<string, () => Promise<MDXModule>> = {
  // Stage 0 — Setup
  "how-this-course-works": () => import("./how-this-course-works.mdx"),
  "meet-the-violin": () => import("./meet-the-violin.mdx"),
  "gear-and-care": () => import("./gear-and-care.mdx"),
  "how-you-stand": () => import("./how-you-stand.mdx"),
  "holding-the-violin": () => import("./holding-the-violin.mdx"),
  "the-left-hand-frame": () => import("./the-left-hand-frame.mdx"),
  "holding-the-bow": () => import("./holding-the-bow.mdx"),
  tuning: () => import("./tuning.mdx"),
  "the-geography-of-the-bow": () => import("./the-geography-of-the-bow.mdx"),
  "your-first-sound": () => import("./your-first-sound.mdx"),
  "how-to-practise": () => import("./how-to-practise.mdx"),

  // Stage 1 — First position & reading the staff
  //   Rebuilt to docs/stage-plans/stage-1.md. Movements A–F in teaching order.
  // Movement A — the hand on the string
  "four-strings-four-fingers": () => import("./four-strings-four-fingers.mdx"),
  "the-four-finger-patterns": () => import("./the-four-finger-patterns.mdx"),
  "low-and-high-fingers": () => import("./low-and-high-fingers.mdx"),
  "keeping-fingers-down": () => import("./keeping-fingers-down.mdx"),
  "hands-together": () => import("./hands-together.mdx"),
  "the-a-string": () => import("./the-a-string.mdx"),
  "landing-in-tune": () => import("./landing-in-tune.mdx"),
  "the-d-string": () => import("./the-d-string.mdx"),
  "the-g-string": () => import("./the-g-string.mdx"),
  "the-e-string": () => import("./the-e-string.mdx"),
  "crossing-between-strings": () => import("./crossing-between-strings.mdx"),
  "one-pitch-more-than-one-place": () =>
    import("./one-pitch-more-than-one-place.mdx"),
  // Movement B — reading pitch off the page
  "the-staff": () => import("./the-staff.mdx"),
  "the-treble-clef": () => import("./the-treble-clef.mdx"),
  "lines-and-spaces": () => import("./lines-and-spaces.mdx"),
  "steps-and-skips": () => import("./steps-and-skips.mdx"),
  "ledger-lines": () => import("./ledger-lines.mdx"),
  "open-strings-on-the-staff": () => import("./open-strings-on-the-staff.mdx"),
  "reading-the-a-and-d-strings": () =>
    import("./reading-the-a-and-d-strings.mdx"),
  "reading-the-g-and-e-strings": () =>
    import("./reading-the-g-and-e-strings.mdx"),
  "which-note-is-this": () => import("./which-note-is-this.mdx"),
  "all-the-first-position-landmarks": () =>
    import("./all-the-first-position-landmarks.mdx"),
  // Movement C — sharps, flats and the key signature
  "sharps-flats-and-naturals": () => import("./sharps-flats-and-naturals.mdx"),
  "the-key-signature": () => import("./the-key-signature.mdx"),
  "accidentals-inside-a-bar": () => import("./accidentals-inside-a-bar.mdx"),
  "reading-in-g-major": () => import("./reading-in-g-major.mdx"),
  "reading-in-d-and-a": () => import("./reading-in-d-and-a.mdx"),
  // Movement D — landing it in tune (D1 = landing-in-tune, taught in Movement A)
  "ringing-tones": () => import("./ringing-tones.mdx"),
  "sa-and-the-letter-names": () => import("./sa-and-the-letter-names.mdx"),
  "hearing-a-wrong-note": () => import("./hearing-a-wrong-note.mdx"),
  // Movement E — taking the scaffolding off
  "reading-a-steady-beat": () => import("./reading-a-steady-beat.mdx"),
  "taking-the-help-away": () => import("./taking-the-help-away.mdx"),
  "the-first-position-reading-check": () =>
    import("./the-first-position-reading-check.mdx"),
  // Stage 9 — the K.216 module
  "mozart-k216": () => import("./mozart-k216.mdx"),
  "mozart-k216-i-entrance": () => import("./mozart-k216-i-entrance.mdx"),

  // Movement F — the tunes (also on /practice)
  "tune-twinkle-rhythms": () => import("./tune-twinkle-rhythms.mdx"),
  "tune-twinkle": () => import("./tune-twinkle.mdx"),
  "tune-ode-to-joy": () => import("./tune-ode-to-joy.mdx"),
  "tune-lightly-row": () => import("./tune-lightly-row.mdx"),
  "tune-au-clair-de-la-lune": () => import("./tune-au-clair-de-la-lune.mdx"),
  "tune-london-bridge": () => import("./tune-london-bridge.mdx"),
  "tune-hot-cross-buns": () => import("./tune-hot-cross-buns.mdx"),
  "tune-mary-had-a-little-lamb": () =>
    import("./tune-mary-had-a-little-lamb.mdx"),
  "tune-frere-jacques": () => import("./tune-frere-jacques.mdx"),
  "tune-jingle-bells": () => import("./tune-jingle-bells.mdx"),

  // Stage 2 — Rhythm
  "rhythm-before-the-instrument": () =>
    import("./rhythm-before-the-instrument.mdx"),
  "note-values": () => import("./note-values.mdx"),
  "dotted-notes": () => import("./dotted-notes.mdx"),
  rests: () => import("./rests.mdx"),
  "beams-or-a-double-stop": () => import("./beams-or-a-double-stop.mdx"),
  "one-beam-two-beams": () => import("./one-beam-two-beams.mdx"),
  "ties-and-slurs": () => import("./ties-and-slurs.mdx"),
  "time-signatures": () => import("./time-signatures.mdx"),
  "common-time": () => import("./common-time.mdx"),
  "counting-and-konnakol": () => import("./counting-and-konnakol.mdx"),
  "syncopation-and-pickups": () => import("./syncopation-and-pickups.mdx"),
  triplets: () => import("./triplets.mdx"),
  "reading-quarters-and-eighths": () =>
    import("./reading-quarters-and-eighths.mdx"),
  "reading-dotted-rhythms": () => import("./reading-dotted-rhythms.mdx"),
  "reading-mixed-rhythms": () => import("./reading-mixed-rhythms.mdx"),

  // Stage 3 — Score symbols
  "tempo-words": () => import("./tempo-words.mdx"),
  dynamics: () => import("./dynamics.mdx"),
  articulation: () => import("./articulation.mdx"),
  "bow-direction-marks": () => import("./bow-direction-marks.mdx"),
  "string-words": () => import("./string-words.mdx"),
  "repeats-and-navigation": () => import("./repeats-and-navigation.mdx"),
  ornaments: () => import("./ornaments.mdx"),
  "trills-turns-and-grace-notes": () =>
    import("./trills-turns-and-grace-notes.mdx"),
  "double-stops-and-chords-on-the-page": () =>
    import("./double-stops-and-chords-on-the-page.mdx"),
  "harmonics-and-pizzicato-marks": () =>
    import("./harmonics-and-pizzicato-marks.mdx"),
  "fingerings-and-position-numbers": () =>
    import("./fingerings-and-position-numbers.mdx"),
  "editions-and-editorial-marks": () =>
    import("./editions-and-editorial-marks.mdx"),
  "the-score-language-quiz": () => import("./the-score-language-quiz.mdx"),

  // Stage 4 — Scales & musicianship
  "what-a-scale-is": () => import("./what-a-scale-is.mdx"),
  "whole-steps-and-half-steps": () => import("./whole-steps-and-half-steps.mdx"),
  "why-g-major-has-one-sharp": () => import("./why-g-major-has-one-sharp.mdx"),
  "the-circle-of-fifths": () => import("./the-circle-of-fifths.mdx"),
  "major-and-minor": () => import("./major-and-minor.mdx"),
  "the-three-minors": () => import("./the-three-minors.mdx"),
  "parallel-and-relative": () => import("./parallel-and-relative.mdx"),
  "the-twelve-keys": () => import("./the-twelve-keys.mdx"),
  intervals: () => import("./intervals.mdx"),
  triads: () => import("./triads.mdx"),
  cadences: () => import("./cadences.mdx"),
  arpeggios: () => import("./arpeggios.mdx"),
  "other-scales": () => import("./other-scales.mdx"),
  "the-harmonic-series": () => import("./the-harmonic-series.mdx"),
  "your-scale-practice-order": () => import("./your-scale-practice-order.mdx"),

  // Stage 5 — The bow
  "how-the-bow-makes-sound": () => import("./how-the-bow-makes-sound.mdx"),
  "one-long-tone": () => import("./one-long-tone.mdx"),
  "string-crossings": () => import("./string-crossings.mdx"),
  detache: () => import("./detache.mdx"),
  "legato-and-slurs": () => import("./legato-and-slurs.mdx"),
  martele: () => import("./martele.mdx"),
  staccato: () => import("./staccato.mdx"),
  "portato-and-colle": () => import("./portato-and-colle.mdx"),
  spiccato: () => import("./spiccato.mdx"),
  "sautille-and-beyond": () => import("./sautille-and-beyond.mdx"),
  "bow-effects": () => import("./bow-effects.mdx"),
  "the-bow-stroke-atlas": () => import("./the-bow-stroke-atlas.mdx"),
  "reading-bowings": () => import("./reading-bowings.mdx"),
  "the-foundation-check": () => import("./the-foundation-check.mdx"),
};
