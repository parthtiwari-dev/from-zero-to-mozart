import type { ComponentType } from "react";

type MDXModule = { default: ComponentType };

/**
 * Explicit map of lesson slug → MDX module loader. Explicit (not a dynamic
 * template string) so Turbopack can statically resolve every lesson.
 * Every published lesson in lib/curriculum.ts needs an entry here.
 */
export const lessonModules: Record<string, () => Promise<MDXModule>> = {
  // Stage 0 — Setup
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

  // Stage 1 — First position & the staff
  "four-strings-four-fingers": () => import("./four-strings-four-fingers.mdx"),
  "low-and-high-fingers": () => import("./low-and-high-fingers.mdx"),
  "the-staff": () => import("./the-staff.mdx"),
  "the-treble-clef": () => import("./the-treble-clef.mdx"),
  "lines-and-spaces": () => import("./lines-and-spaces.mdx"),
  "open-strings-on-the-staff": () => import("./open-strings-on-the-staff.mdx"),
  "ledger-lines": () => import("./ledger-lines.mdx"),
  "the-g-string": () => import("./the-g-string.mdx"),
  "the-d-string": () => import("./the-d-string.mdx"),
  "the-a-string": () => import("./the-a-string.mdx"),
  "the-e-string": () => import("./the-e-string.mdx"),
  "reading-the-lower-strings": () => import("./reading-the-lower-strings.mdx"),
  "reading-the-upper-strings": () => import("./reading-the-upper-strings.mdx"),
  "which-b-is-this": () => import("./which-b-is-this.mdx"),
  "same-pitch-more-than-one-place": () =>
    import("./same-pitch-more-than-one-place.mdx"),
  "sharps-flats-and-naturals": () => import("./sharps-flats-and-naturals.mdx"),
  "the-key-signature": () => import("./the-key-signature.mdx"),
  "accidentals-inside-a-bar": () => import("./accidentals-inside-a-bar.mdx"),
  "taking-the-help-away": () => import("./taking-the-help-away.mdx"),
  "reading-g-major": () => import("./reading-g-major.mdx"),
  "all-the-landmarks": () => import("./all-the-landmarks.mdx"),
  "sa-and-the-letter-names": () => import("./sa-and-the-letter-names.mdx"),
  "landing-in-tune": () => import("./landing-in-tune.mdx"),

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
};
