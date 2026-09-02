# Notation coverage checklist

`RULES.md` R4: **every note-value, symbol and marking is taught somewhere.** This is the
map — every element of music notation the course uses → the lesson that teaches it. If an
element appears in an example before its lesson, the example must carry a "proper lesson in
Stage N" pointer.

Status: `taught` = a lesson explains it · `pointer` = appears earlier with a forward pointer ·
`gap` = appears somewhere unexplained — **fix these.**

> **Gap closed (Stage 1 rebuild, 2026-09-02).** Every pure-pitch drill in the rebuilt Stage 1
> now uses `M:none` — no time signature, no metre. The only Stage 1 examples that carry a
> time signature are (a) `accidentals-inside-a-bar`, which needs bar lines to teach the
> bar-line reset, and (b) `reading-a-steady-beat` (Movement E1), the rhythm-lite lesson that
> *introduces* the quarter / half / whole note and 1-2-3-4 counting, with an explicit "the
> full system is Stage 2" pointer. Note-heads with stems (quarter-note shape) still appear in
> `M:none` drills; they read as "a note", carry no metre, and `reading-a-steady-beat` names
> them before the Movement F tunes use them.

---

## Pitch

| Element | Lesson | Stage | Status |
|---|---|---|---|
| The staff (5 lines / 4 spaces) | `the-staff` | 1 | taught |
| Treble / G clef | `the-treble-clef` | 1 | taught |
| Lines & spaces, note = vertical position | `lines-and-spaces` | 1 | taught |
| Steps & skips (2nds / 3rds), reading by interval | `steps-and-skips` | 1 | taught |
| Ledger lines | `ledger-lines` | 1 | taught |
| Open-string landmarks on the staff | `open-strings-on-the-staff` | 1 | taught |
| Sharp ♯ / flat ♭ / natural ♮ | `sharps-flats-and-naturals` | 1 | taught |
| Key signature; order of sharps | `the-key-signature` | 1 | taught |
| Accidental within a bar + bar-line reset; courtesy accidental | `accidentals-inside-a-bar` | 1 | taught |
| Octave numbers (C4 / C5) | `which-note-is-this` + sidebar | 1 | taught |
| 8va / 8vb / loco | Stage 3 `editions-and-editorial-marks` | 3 | taught |

## Rhythm-lite (Stage 1, Movement E)

| Element | Lesson | Stage | Status |
|---|---|---|---|
| Quarter / half / whole note, counted 1-2-3-4 | `reading-a-steady-beat` | 1 | taught (rhythm-lite; full system → Stage 2) |
| Time signature top number = beats per bar | `reading-a-steady-beat` | 1 | taught (rhythm-lite) |

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
