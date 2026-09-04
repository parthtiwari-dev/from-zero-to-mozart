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

  // Stage 4 — Scales & musicianship I (docs/stage-plans/stage-4.md)
  // 4a — Scales & keys
  "what-a-scale-is": () => import("./what-a-scale-is.mdx"),
  "the-scale-degrees-and-their-pull": () =>
    import("./the-scale-degrees-and-their-pull.mdx"),
  "do-re-mi-and-sa-re-ga": () => import("./do-re-mi-and-sa-re-ga.mdx"),
  "whole-steps-and-half-steps": () => import("./whole-steps-and-half-steps.mdx"),
  "the-major-scale-formula": () => import("./the-major-scale-formula.mdx"),
  "why-g-major-has-one-sharp": () => import("./why-g-major-has-one-sharp.mdx"),
  "key-signatures-in-full": () => import("./key-signatures-in-full.mdx"),
  "the-circle-of-fifths": () => import("./the-circle-of-fifths.mdx"),
  "near-keys-and-far-keys": () => import("./near-keys-and-far-keys.mdx"),
  "what-major-and-minor-mean": () => import("./what-major-and-minor-mean.mdx"),
  "the-three-minors": () => import("./the-three-minors.mdx"),
  "relative-and-parallel": () => import("./relative-and-parallel.mdx"),
  "the-twelve-keys": () => import("./the-twelve-keys.mdx"),
  "the-keys-the-violin-loves": () => import("./the-keys-the-violin-loves.mdx"),
  // 4b — Intervals, chords & harmony
  "what-an-interval-is": () => import("./what-an-interval-is.mdx"),
  "the-intervals-in-the-major-scale": () =>
    import("./the-intervals-in-the-major-scale.mdx"),
  "augmented-diminished-and-the-tritone": () =>
    import("./augmented-diminished-and-the-tritone.mdx"),
  "hearing-the-scale-degrees": () => import("./hearing-the-scale-degrees.mdx"),
  "tuning-by-ear": () => import("./tuning-by-ear.mdx"),
  "what-a-triad-is": () => import("./what-a-triad-is.mdx"),
  "the-four-triad-qualities": () => import("./the-four-triad-qualities.mdx"),
  "inversions-and-spelling": () => import("./inversions-and-spelling.mdx"),
  "suspended-and-added-tone-chords": () =>
    import("./suspended-and-added-tone-chords.mdx"),
  "reading-a-chord-symbol": () => import("./reading-a-chord-symbol.mdx"),
  "chords-on-the-violin": () => import("./chords-on-the-violin.mdx"),
  "the-chords-of-a-key": () => import("./the-chords-of-a-key.mdx"),
  "harmonising-a-tune-you-know": () =>
    import("./harmonising-a-tune-you-know.mdx"),
  "notes-that-arent-in-the-chord": () =>
    import("./notes-that-arent-in-the-chord.mdx"),
  "harmony-has-a-rhythm-too": () => import("./harmony-has-a-rhythm-too.mdx"),
  "the-dominant-seventh": () => import("./the-dominant-seventh.mdx"),
  "the-other-seventh-chords": () => import("./the-other-seventh-chords.mdx"),
  "extended-chords": () => import("./extended-chords.mdx"),
  "secondary-dominants": () => import("./secondary-dominants.mdx"),
  "borrowed-chords-and-mode-mixture": () =>
    import("./borrowed-chords-and-mode-mixture.mdx"),
  "the-chromatic-chords": () => import("./the-chromatic-chords.mdx"),
  "altered-and-quartal-chords": () =>
    import("./altered-and-quartal-chords.mdx"),
  "what-a-cadence-is": () => import("./what-a-cadence-is.mdx"),
  "the-other-three-cadences": () => import("./the-other-three-cadences.mdx"),
  "cadences-in-your-own-tunes": () =>
    import("./cadences-in-your-own-tunes.mdx"),
  "motif-phrase-and-period": () => import("./motif-phrase-and-period.mdx"),
  "phrases-breathe": () => import("./phrases-breathe.mdx"),
  // 4c — Arpeggios, the physics & the rest
  "what-an-arpeggio-is": () => import("./what-an-arpeggio-is.mdx"),
  "the-first-position-arpeggios": () =>
    import("./the-first-position-arpeggios.mdx"),
  "broken-thirds-and-the-dominant-seventh-arpeggio": () =>
    import("./broken-thirds-and-the-dominant-seventh-arpeggio.mdx"),
  "arpeggios-in-real-music": () => import("./arpeggios-in-real-music.mdx"),
  "the-harmonic-series": () => import("./the-harmonic-series.mdx"),
  "why-your-violin-rings": () => import("./why-your-violin-rings.mdx"),
  "in-tune-is-not-one-thing": () => import("./in-tune-is-not-one-thing.mdx"),
  "the-modes": () => import("./the-modes.mdx"),
  "dorian-and-mixolydian": () => import("./dorian-and-mixolydian.mdx"),
  "phrygian-lydian-and-locrian": () =>
    import("./phrygian-lydian-and-locrian.mdx"),
  "the-pentatonic-scales": () => import("./the-pentatonic-scales.mdx"),
  "the-blues-scale": () => import("./the-blues-scale.mdx"),
  "the-chromatic-scale": () => import("./the-chromatic-scale.mdx"),
  "the-symmetrical-scales": () => import("./the-symmetrical-scales.mdx"),
  "scales-from-around-the-world": () =>
    import("./scales-from-around-the-world.mdx"),
  "a-raga-is-not-a-scale": () => import("./a-raga-is-not-a-scale.mdx"),
  "how-to-practise-a-scale": () => import("./how-to-practise-a-scale.mdx"),
  "which-scales-to-practise-now": () =>
    import("./which-scales-to-practise-now.mdx"),
  "transposing-a-tune": () => import("./transposing-a-tune.mdx"),
  "read-the-harmony-of-a-line": () =>
    import("./read-the-harmony-of-a-line.mdx"),
  "the-first-note-of-mozart": () => import("./the-first-note-of-mozart.mdx"),
  "the-musicianship-check": () => import("./the-musicianship-check.mdx"),
  // 4 — Movement P: the tunes
  "stage-4-scales-and-arpeggios": () =>
    import("./stage-4-scales-and-arpeggios.mdx"),
  "tune-eine-kleine-nachtmusik": () =>
    import("./tune-eine-kleine-nachtmusik.mdx"),
  "tune-canon-in-d": () => import("./tune-canon-in-d.mdx"),
  "tune-scarborough-fair": () => import("./tune-scarborough-fair.mdx"),
  "tune-fur-elise-theme": () => import("./tune-fur-elise-theme.mdx"),
  "tune-vivaldi-spring-theme": () => import("./tune-vivaldi-spring-theme.mdx"),
  "tune-aura-lee": () => import("./tune-aura-lee.mdx"),

  // Stage 5 — The bow
  // 5a — Tone
  "how-the-bow-makes-sound": () => import("./how-the-bow-makes-sound.mdx"),
  "one-long-tone": () => import("./one-long-tone.mdx"),
  "the-bow-change": () => import("./the-bow-change.mdx"),
  "speed-weight-and-sounding-point": () =>
    import("./speed-weight-and-sounding-point.mdx"),
  "speed-not-pressure": () => import("./speed-not-pressure.mdx"),
  "the-five-lanes": () => import("./the-five-lanes.mdx"),
  "planning-the-bow": () => import("./planning-the-bow.mdx"),
  "the-flexible-bow-hand": () => import("./the-flexible-bow-hand.mdx"),
  "how-to-practise-a-bow-stroke": () =>
    import("./how-to-practise-a-bow-stroke.mdx"),
  // 5b — The strokes
  detache: () => import("./detache.mdx"),
  "the-detache-family": () => import("./the-detache-family.mdx"),
  "legato-and-slurs": () => import("./legato-and-slurs.mdx"),
  "string-crossings": () => import("./string-crossings.mdx"),
  "slurred-crossings-and-bariolage": () =>
    import("./slurred-crossings-and-bariolage.mdx"),
  martele: () => import("./martele.mdx"),
  staccato: () => import("./staccato.mdx"),
  "portato-and-colle": () => import("./portato-and-colle.mdx"),
  "hooked-bowing-and-retakes": () => import("./hooked-bowing-and-retakes.mdx"),
  spiccato: () => import("./spiccato.mdx"),
  "sautille-and-the-continuum": () =>
    import("./sautille-and-the-continuum.mdx"),
  "the-far-shore": () => import("./the-far-shore.mdx"),
  "colour-strokes": () => import("./colour-strokes.mdx"),
  pizzicato: () => import("./pizzicato.mdx"),
  "rolling-a-chord-with-the-bow": () =>
    import("./rolling-a-chord-with-the-bow.mdx"),
  "the-bow-stroke-atlas": () => import("./the-bow-stroke-atlas.mdx"),
  // 5c — Reading & shaping with the bow, and the gate
  "where-in-the-bow": () => import("./where-in-the-bow.mdx"),
  "the-rule-of-the-down-bow": () => import("./the-rule-of-the-down-bow.mdx"),
  "reading-a-bowing": () => import("./reading-a-bowing.mdx"),
  "bowing-a-passage-yourself": () => import("./bowing-a-passage-yourself.mdx"),
  "dynamics-with-the-bow": () => import("./dynamics-with-the-bow.mdx"),
  "messa-di-voce": () => import("./messa-di-voce.mdx"),
  "phrasing-with-the-bow": () => import("./phrasing-with-the-bow.mdx"),
  "finding-a-tune-by-ear": () => import("./finding-a-tune-by-ear.mdx"),
  "the-baroque-bow-and-the-modern-bow": () =>
    import("./the-baroque-bow-and-the-modern-bow.mdx"),
  // 5 — Movement P: the repertoire
  "stage-5-tone-and-strokes": () => import("./stage-5-tone-and-strokes.mdx"),
  "tune-conquering-hero": () => import("./tune-conquering-hero.mdx"),
  "tune-bach-musette": () => import("./tune-bach-musette.mdx"),
  "the-foundation-check": () => import("./the-foundation-check.mdx"),

  // Stage 6 — Beyond first position
  // Movement A — what a position is, and the first shift
  "what-a-position-is": () => import("./what-a-position-is.mdx"),
  "how-the-arm-shifts": () => import("./how-the-arm-shifts.mdx"),
  "the-four-kinds-of-shift": () => import("./the-four-kinds-of-shift.mdx"),
  "how-to-practise-a-shift": () => import("./how-to-practise-a-shift.mdx"),
  "shift-glissando-or-portamento": () =>
    import("./shift-glissando-or-portamento.mdx"),
  "reaching-one-more-note": () => import("./reaching-one-more-note.mdx"),
  // Movement B — 3rd position
  "third-position": () => import("./third-position.mdx"),
  "reading-a-position-number": () => import("./reading-a-position-number.mdx"),
  "third-position-in-your-tunes": () =>
    import("./third-position-in-your-tunes.mdx"),
  // Movement C — 5th position
  "fifth-position": () => import("./fifth-position.mdx"),
  "moving-between-first-third-and-fifth": () =>
    import("./moving-between-first-third-and-fifth.mdx"),
  "the-position-ladder": () => import("./the-position-ladder.mdx"),

  // Stage 8 — Sight-reading & ear training
  // 8a · Movement A — reading fluently
  "what-fluent-reading-is": () => import("./what-fluent-reading-is.mdx"),
  "reading-notes-fast": () => import("./reading-notes-fast.mdx"),
  "the-pre-read": () => import("./the-pre-read.mdx"),
  "landmarks-and-guide-notes": () => import("./landmarks-and-guide-notes.mdx"),
  "reading-the-shape": () => import("./reading-the-shape.mdx"),
  "the-patterns-in-real-music": () => import("./the-patterns-in-real-music.mdx"),
  "your-eye-runs-ahead": () => import("./your-eye-runs-ahead.mdx"),
  "read-the-rhythm-first": () => import("./read-the-rhythm-first.mdx"),

  // 8a · Movement B — the sight-reading method
  "the-never-stop-rule": () => import("./the-never-stop-rule.mdx"),
  "getting-lost-and-getting-back": () => import("./getting-lost-and-getting-back.mdx"),
  "the-four-layer-rescue": () => import("./the-four-layer-rescue.mdx"),
  "taking-more-help-away": () => import("./taking-more-help-away.mdx"),
  "how-sight-reading-cards-work": () => import("./how-sight-reading-cards-work.mdx"),
  "the-sight-reading-habit": () => import("./the-sight-reading-habit.mdx"),
  "sight-reading-cards": () => import("./sight-reading-cards.mdx"),

  // 8a · Movement C — reading across contexts
  "reading-the-flat-keys": () => import("./reading-the-flat-keys.mdx"),
  "reading-a-chromatic-note": () => import("./reading-a-chromatic-note.mdx"),
  "reading-two-notes-at-once": () => import("./reading-two-notes-at-once.mdx"),
  "reading-a-chord-chart": () => import("./reading-a-chord-chart.mdx"),

  // 8a · Movement D — what a good ear is
  "what-a-good-ear-is": () => import("./what-a-good-ear-is.mdx"),
  "hearing-it-first": () => import("./hearing-it-first.mdx"),
  "singing-is-not-optional": () => import("./singing-is-not-optional.mdx"),
  "finding-home": () => import("./finding-home.mdx"),
  "the-hand-signs": () => import("./the-hand-signs.mdx"),

  // 8a · Movement E — the scale-degree gym
  "the-stable-three": () => import("./the-stable-three.mdx"),
  "the-tendency-tones": () => import("./the-tendency-tones.mdx"),
  "all-seven-degrees": () => import("./all-seven-degrees.mdx"),
  "degrees-on-the-fingerboard": () => import("./degrees-on-the-fingerboard.mdx"),
  "degrees-in-your-tunes": () => import("./degrees-in-your-tunes.mdx"),
  "the-scale-degree-drills": () => import("./the-scale-degree-drills.mdx"),

  // 8a · Movement F — hearing harmony
  "major-or-minor": () => import("./major-or-minor.mdx"),
  "hearing-the-bass": () => import("./hearing-the-bass.mdx"),
  "home-leaving-pulling": () => import("./home-leaving-pulling.mdx"),
  "hearing-a-cadence": () => import("./hearing-a-cadence.mdx"),
  "hearing-the-chord-under-the-tune": () => import("./hearing-the-chord-under-the-tune.mdx"),

  // 8a · Movement G — taking music down
  "hearing-a-leap": () => import("./hearing-a-leap.mdx"),
  "taking-a-rhythm-down": () => import("./taking-a-rhythm-down.mdx"),
  "taking-a-tune-down": () => import("./taking-a-tune-down.mdx"),
  "the-ear-gym-routine": () => import("./the-ear-gym-routine.mdx"),
  "the-dictation-drills": () => import("./the-dictation-drills.mdx"),

  // 8a · Movement H — playing by ear
  "learning-a-tune-by-ear": () => import("./learning-a-tune-by-ear.mdx"),
  "play-along": () => import("./play-along.mdx"),
  "reading-with-your-ear-on": () => import("./reading-with-your-ear-on.mdx"),
  "the-tunes-to-find-by-ear": () => import("./the-tunes-to-find-by-ear.mdx"),
};
