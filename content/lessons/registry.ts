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
  "mozart-k216-i-b2": () => import("./mozart-k216-i-b2.mdx"),

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

  // Stage 2 — Movement I — the tunes (also on /practice)
  "tune-when-the-saints": () => import("./tune-when-the-saints.mdx"),
  "tune-row-your-boat": () => import("./tune-row-your-boat.mdx"),
  "tune-perpetual-motion": () => import("./tune-perpetual-motion.mdx"),

  // Stage 2 — Rhythm
  //   Rebuilt to docs/stage-plans/stage-2.md. Movements A–I.
  // Movement A — pulse & note anatomy
  "rhythm-first": () => import("./rhythm-first.mdx"),
  "beat-tempo-and-metre": () => import("./beat-tempo-and-metre.mdx"),
  "how-a-note-shows-its-length": () =>
    import("./how-a-note-shows-its-length.mdx"),
  "the-note-tree": () => import("./the-note-tree.mdx"),
  // Movement B — the marks that change a length
  "the-dot": () => import("./the-dot.mdx"),
  "the-two-dots-that-look-alike": () =>
    import("./the-two-dots-that-look-alike.mdx"),
  rests: () => import("./rests.mdx"),
  "beams-and-flags": () => import("./beams-and-flags.mdx"),
  "ties-and-slurs": () => import("./ties-and-slurs.mdx"),
  // Movement C — two notes, or two at once (the Vivaldi keystone)
  "beamed-notes-double-stops-and-vibrato": () =>
    import("./beamed-notes-double-stops-and-vibrato.mdx"),
  // Movement D — counting
  "counting-the-beat": () => import("./counting-the-beat.mdx"),
  subdivision: () => import("./subdivision.mdx"),
  "if-you-count-in-bols": () => import("./if-you-count-in-bols.mdx"),
  // Movement E — grouping the beats
  "time-signatures": () => import("./time-signatures.mdx"),
  "common-time-and-cut-time": () => import("./common-time-and-cut-time.mdx"),
  "simple-and-compound-time": () => import("./simple-and-compound-time.mdx"),
  "six-eight": () => import("./six-eight.mdx"),
  "nine-eight-and-twelve-eight": () =>
    import("./nine-eight-and-twelve-eight.mdx"),
  "barlines-and-the-pickup": () => import("./barlines-and-the-pickup.mdx"),
  "repeats-and-endings": () => import("./repeats-and-endings.mdx"),
  // Movement F — bending the beat
  syncopation: () => import("./syncopation.mdx"),
  triplets: () => import("./triplets.mdx"),
  "other-tuplets": () => import("./other-tuplets.mdx"),
  "dotted-and-snap-rhythms": () => import("./dotted-and-snap-rhythms.mdx"),
  // Movement G — the bow's half of rhythm
  "a-note-value-is-a-length-of-bow": () =>
    import("./a-note-value-is-a-length-of-bow.mdx"),
  "rests-ties-and-slurs-in-the-bow": () =>
    import("./rests-ties-and-slurs-in-the-bow.mdx"),
  "shadow-bowing": () => import("./shadow-bowing.mdx"),
  // Movement H — reading checks
  "clap-this-line": () => import("./clap-this-line.mdx"),
  "reading-quarters-and-eighths": () =>
    import("./reading-quarters-and-eighths.mdx"),
  "reading-sixteenths": () => import("./reading-sixteenths.mdx"),
  "reading-dotted-rhythms": () => import("./reading-dotted-rhythms.mdx"),
  "reading-in-six-eight": () => import("./reading-in-six-eight.mdx"),
  "reading-triplets-and-syncopation": () =>
    import("./reading-triplets-and-syncopation.mdx"),
  "reading-mixed-rhythms": () => import("./reading-mixed-rhythms.mdx"),

  // Stage 3 — Score symbols (rebuilt to docs/stage-plans/stage-3.md)
  // 3a · A — tempo & motion
  "how-fast-and-what-mood": () => import("./how-fast-and-what-mood.mdx"),
  "bending-the-tempo": () => import("./bending-the-tempo.mdx"),
  "the-metronome-mark": () => import("./the-metronome-mark.mdx"),
  "the-metre-carries-the-tempo": () =>
    import("./the-metre-carries-the-tempo.mdx"),
  "tempo-words-in-german-and-french": () =>
    import("./tempo-words-in-german-and-french.mdx"),
  // 3a · B — dynamics
  "loud-and-soft-are-relative": () => import("./loud-and-soft-are-relative.mdx"),
  "getting-louder-getting-softer": () =>
    import("./getting-louder-getting-softer.mdx"),
  "the-sudden-ones": () => import("./the-sudden-ones.mdx"),
  "dying-away": () => import("./dying-away.mdx"),
  "where-dynamics-came-from": () => import("./where-dynamics-came-from.mdx"),
  "dynamics-are-a-bow-thing": () => import("./dynamics-are-a-bow-thing.mdx"),
  // 3a · C — articulation
  "short-held-and-connected": () => import("./short-held-and-connected.mdx"),
  "accents-and-marcato": () => import("./accents-and-marcato.mdx"),
  "the-marks-stack": () => import("./the-marks-stack.mdx"),
  "the-fermata": () => import("./the-fermata.mdx"),
  "breath-marks-and-breaks": () => import("./breath-marks-and-breaks.mdx"),
  "a-slur-is-one-bow": () => import("./a-slur-is-one-bow.mdx"),
  "non-legato-was-normal": () => import("./non-legato-was-normal.mdx"),
  // 3b · D — bow & string words
  "down-bow-up-bow-and-the-retake": () =>
    import("./down-bow-up-bow-and-the-retake.mdx"),
  "arco-and-pizzicato": () => import("./arco-and-pizzicato.mdx"),
  "the-colour-words": () => import("./the-colour-words.mdx"),
  "which-string": () => import("./which-string.mdx"),
  "bow-stroke-words-youll-meet": () =>
    import("./bow-stroke-words-youll-meet.mdx"),
  tremolo: () => import("./tremolo.mdx"),
  // 3b · E — repeats & the road map
  "repeat-barlines-and-endings": () =>
    import("./repeat-barlines-and-endings.mdx"),
  "da-capo-dal-segno-and-the-coda": () =>
    import("./da-capo-dal-segno-and-the-coda.mdx"),
  "the-repeat-you-dont-take": () => import("./the-repeat-you-dont-take.mdx"),
  "the-other-road-signs": () => import("./the-other-road-signs.mdx"),
  // 3b · F — ornaments
  "what-an-ornament-is": () => import("./what-an-ornament-is.mdx"),
  "the-trill": () => import("./the-trill.mdx"),
  "mordents-and-the-turn": () => import("./mordents-and-the-turn.mdx"),
  "grace-notes-the-long-and-the-short": () =>
    import("./grace-notes-the-long-and-the-short.mdx"),
  "the-slide-and-rolled-chords": () =>
    import("./the-slide-and-rolled-chords.mdx"),
  "ornaments-are-an-opinion": () => import("./ornaments-are-an-opinion.mdx"),
  // 3b · G — string-part notation
  "reading-double-stops-and-chords": () =>
    import("./reading-double-stops-and-chords.mdx"),
  "harmonics-on-the-page": () => import("./harmonics-on-the-page.mdx"),
  "finger-string-or-position": () => import("./finger-string-or-position.mdx"),
  "slides-and-octave-signs": () => import("./slides-and-octave-signs.mdx"),
  // 3b · H — editions
  "who-wrote-this-mark": () => import("./who-wrote-this-mark.mdx"),
  "kinds-of-edition": () => import("./kinds-of-edition.mdx"),
  // 3b · I — putting it together
  "decode-a-dense-line": () => import("./decode-a-dense-line.mdx"),
  "the-score-language-check": () => import("./the-score-language-check.mdx"),
  // 3b · J — the tunes
  "tune-ode-to-joy-shaped": () => import("./tune-ode-to-joy-shaped.mdx"),
  "tune-twinkle-articulated": () => import("./tune-twinkle-articulated.mdx"),
  "tune-minuet-in-g": () => import("./tune-minuet-in-g.mdx"),
  "tune-amazing-grace": () => import("./tune-amazing-grace.mdx"),

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
