# Notation coverage checklist

`RULES.md` R4: **every note-value, symbol and marking is taught somewhere.** This is the
map — every element of music notation the course uses → the lesson that teaches it. If an
element appears in an example before its lesson, the example must carry a "proper lesson in
Stage N" pointer.

Status: `taught` = a lesson explains it · `pointer` = appears earlier with a forward pointer ·
`gap` = appears somewhere unexplained — **fix these.**

> **Known gap (2026-09-02, from the user's screenshot):** the Stage 1 reading drills
> (`reading-the-lower-strings`, `reading-the-upper-strings`, `reading-g-major`,
> `all-the-landmarks`) show a **common-time signature** and **whole / half notes** — rhythm
> notation not taught until Stage 2. Stage 1 is about *pitch*. Fix in the Stage 1 rebuild:
> drop the metre from pure pitch drills (`M:none` / stemless), or add the forward pointer.

---

## Pitch

| Element | Lesson | Stage | Status |
|---|---|---|---|
| The staff (5 lines / 4 spaces) | `the-staff` | 1 | taught |
| Treble / G clef | `the-treble-clef` | 1 | taught |
| Lines & spaces, note = vertical position | `lines-and-spaces` | 1 | taught |
| Ledger lines | `ledger-lines` | 1 | taught |
| Open-string landmarks on the staff | `open-strings-on-the-staff` | 1 | taught |
| Sharp ♯ / flat ♭ / natural ♮ | `sharps-flats-and-naturals` | 1 | taught |
| Key signature | `the-key-signature` | 1 | taught |
| Accidental within a bar + bar-line reset | `accidentals-inside-a-bar` | 1 | taught |
| Octave numbers (C4 / C5) | `which-b-is-this` + sidebar | 1 | taught |
| 8va / 8vb / loco | Stage 3 `editions-and-editorial-marks` | 3 | taught |

## Rhythm

| Element | Lesson | Stage | Status |
|---|---|---|---|
| Note anatomy (head / stem / flag / beam) | `note-values` | 2 | taught |
| Whole / half / quarter / eighth / sixteenth | `note-values` | 2 | taught |
| Dotted notes; double dot | `dotted-notes` | 2 | taught |
| Duration dot vs staccato dot | `dotted-notes` | 2 | taught |
| Rests, every value | `rests` | 2 | taught |
| Beams vs flags; one beam / two beams | `one-beam-two-beams` | 2 | taught |
| Beamed notes vs a double stop | `beams-or-a-double-stop` | 2 | taught |
| Tie vs slur | `ties-and-slurs` | 2 | taught |
| Time signatures (4/4, 3/4, 2/4, 6/8, …) | `time-signatures` | 2 | taught |
| Common time **C** and cut time **₵** | `common-time` | 2 | taught |
| Counting; konnakol / bols | `counting-and-konnakol` | 2 | taught |
| Anacrusis / pickup; syncopation | `syncopation-and-pickups` | 2 | taught |
| Triplets / tuplets | `triplets` | 2 | taught |

## Score symbols (Stage 3)

| Element | Lesson | Status |
|---|---|---|
| Tempo words + modifiers + rit./accel./a tempo | `tempo-words` | taught |
| Dynamics pppp–ffff, hairpins, sf/fp, subito | `dynamics` | taught |
| Staccato, tenuto, accent, marcato, fermata, caesura | `articulation` | taught |
| Down-bow ⊓ / up-bow V, retake | `bow-direction-marks` (+ Stage 0 `the-geography-of-the-bow`) | taught |
| arco, pizz., con/senza sordino, sul G/D/A/E, sul pont., sul tasto | `string-words` | taught |
| Repeats, 1st/2nd endings, D.C./D.S./Coda/Fine, segno | `repeats-and-navigation` | taught |
| Trill, mordent, turn, grace notes (+ Baroque/Classical) | `ornaments`, `trills-turns-and-grace-notes` | taught |
| Double stops / chords / rolled chords on the page | `double-stops-and-chords-on-the-page` | taught |
| Harmonics (° / diamond), LH pizz + | `harmonics-and-pizzicato-marks` | taught |
| Fingerings, string indications, position roman numerals | `fingerings-and-position-numbers` | taught |
| Editorial vs composer marks; glissando/portamento; clef changes | `editions-and-editorial-marks` | taught |

## Still to place

- Breath mark — Stage 3 `articulation` (confirm).
- Tremolo — Stage 3 (confirm which lesson; `articulation` or its own).
- Multi-bar rest — Stage 2 `rests` or Stage 3 `repeats-and-navigation`.
- Metronome mark (♩ = 92) — Stage 3 `tempo-words`.

*(Re-audit this table against every rebuilt stage as the campaign proceeds.)*
