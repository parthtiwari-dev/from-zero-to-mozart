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
| 8va / 8vb / 15ma / loco | Stage 3 `slides-and-octave-signs` (G4) | 3 | taught |

## Rhythm-lite (Stage 1, Movement E)

| Element | Lesson | Stage | Status |
|---|---|---|---|
| Quarter / half / whole note, counted 1-2-3-4 | `reading-a-steady-beat` | 1 | taught (rhythm-lite; full system → Stage 2) |
| Time signature top number = beats per bar | `reading-a-steady-beat` | 1 | taught (rhythm-lite) |

## Rhythm

*(Stage 2 rebuilt to `docs/stage-plans/stage-2.md` — Movements A–I, all live 2026-09-02.)*

| Element | Lesson | Stage | Status |
|---|---|---|---|
| Beat / tempo / metre / rhythm — the vocabulary | `beat-tempo-and-metre` | 2 | taught |
| Note anatomy (head / stem / flag / beam) | `how-a-note-shows-its-length` | 2 | taught |
| Whole / half / quarter / eighth / sixteenth; the halving tree | `the-note-tree` | 2 | taught |
| 32nd note (third beam) | `the-note-tree`, `beams-and-flags` (REFERENCE) | 2 | pointer |
| Dotted notes | `the-dot` (B1) | 2 | taught |
| Double dot | `the-dot` (margin, REFERENCE) | 2 | pointer |
| Duration dot vs staccato dot | `the-two-dots-that-look-alike` (B2) | 2 | taught |
| Rests, every value; rest tree | `rests` (B3) | 2 | taught |
| Multi-bar rest | Stage 3 `the-other-road-signs` (E4) | 2/3 | taught |
| Beams vs flags; one / two / three beams | `beams-and-flags` (B4) | 2 | taught |
| Beamed notes vs a double stop vs vibrato | `beamed-notes-double-stops-and-vibrato` (C1) | 2 | taught |
| Tie vs slur | `ties-and-slurs` (B5) | 2 | taught |
| Time signatures (2/4, 3/4, 4/4); the accent pattern | `time-signatures` (E1) | 2 | taught |
| Common time **C** (broken circle, not "common") and cut time **₵** | `common-time-and-cut-time` (E2) | 2 | taught |
| Simple vs compound; 6/8 in full; 9/8, 12/8; 3/8 | `simple-and-compound-time`, `six-eight`, `nine-eight-and-twelve-eight` (E3–E5) | 2 | taught |
| Counting ("1 e & a"); subdivision; the tabla map (optional) | `counting-the-beat`, `subdivision`, `if-you-count-in-bols` (D1–D3) | 2 | taught |
| Barlines / measures; anacrusis / pickup | `barlines-and-the-pickup` (E6) | 2 | taught |
| Simple repeat, 1st/2nd endings | `repeats-and-endings` (E7) | 2 | taught |
| D.C. / D.S. / Coda / Fine / segno | Stage 3 `da-capo-dal-segno-and-the-coda` (E2) | 3 | taught (Stage 2 E7 forwards) |
| Rehearsal marks; `%` / simile repeat signs | Stage 3 `the-other-road-signs` (E4) | 3 | taught |
| Syncopation; the back-beat; accent mark | `syncopation` (F1) | 2 | taught |
| Triplets (eighth-note, quarter-note) | `triplets` (F2) | 2 | taught |
| Other tuplets (quintuplet, septuplet, compound duplet) | `other-tuplets` (F3, REFERENCE) | 2 | taught |
| Dotted / Scotch-snap (Lombard) rhythm | `dotted-and-snap-rhythms` (F4) | 2 | taught |
| Overdotting / notes inégales | `dotted-and-snap-rhythms` → Stage 3 style | 2/3 | pointer |
| Note value → bow length & speed; the retake; rule of the down-bow | `a-note-value-is-a-length-of-bow`, `rests-ties-and-slurs-in-the-bow` (G1–G2) | 2 | taught |

## Score symbols (Stage 3)

*(Rebuilt to `docs/stage-plans/stage-3.md` — Movements A–J, 2026-09-03. 3a = A–C, 3b = D–J.)*

| Element | Lesson | Status |
|---|---|---|
| Tempo words + character (Grave→Prestissimo); Andantino trap | `how-fast-and-what-mood` (A1) | taught |
| rit./rall./ritenuto/accel./stringendo/allargando/a tempo/Tempo I; modifiers (molto, poco, ma non troppo, meno/più mosso); rubato | `bending-the-tempo` (A2) | taught |
| Metronome mark ♩=N, M.M.; why Classical has none | `the-metronome-mark` (A3) | taught |
| C vs ₵ and tempo; 6/8 vs 3/4 stride; tempo giusto | `the-metre-carries-the-tempo` (A4) | taught |
| German / French tempo words | `tempo-words-in-german-and-french` (A5, card) | taught |
| Dynamics pppp–ffff (relative) | `loud-and-soft-are-relative` (B1) | taught |
| cresc./dim. words vs `< >` hairpins; poco a poco | `getting-louder-getting-softer` (B2) | taught |
| sf/sfz/fz, rf/rfz, fp, sfp, subito p/f; sf vs `>` | `the-sudden-ones` (B3) | taught |
| morendo/calando/smorzando/perdendosi/al niente; sotto/mezza voce | `dying-away` (B4) | taught |
| terraced / Mannheim crescendo / Classical rhetorical dynamics | `where-dynamics-came-from` (B5) | taught |
| dynamics = bow speed × weight × contact point; messa di voce | `dynamics-are-a-bow-thing` (B6, read→Stage 5) | taught |
| staccatissimo / staccato / tenuto / legato spectrum; dot, wedge, line | `short-held-and-connected` (C1) | taught |
| accent `>`, marcato `^` | `accents-and-marcato` (C2) | taught |
| stacked marks — portato (dots+slur), dot+tenuto, accent+staccato | `the-marks-stack` (C3) | taught |
| fermata (+ era table) | `the-fermata` (C4) | taught |
| breath mark (comma), caesura `//`, G.P. | `breath-marks-and-breaks` (C5) | taught |
| slur = one bow; phrase mark vs bowing slur; Classical barline rule | `a-slur-is-one-bow` (C6, read→Stage 5) | taught |
| non-legato as the Classical default; Mozart dots vs strokes | `non-legato-was-normal` (C7) | taught |
| down-bow ⊓ / up-bow V, retake; rule of the down-bow (+ Stage 0 `the-geography-of-the-bow`) | `down-bow-up-bow-and-the-retake` (D1) | taught |
| arco, pizz., left-hand pizz `+`, snap/Bartók pizz | `arco-and-pizzicato` (D2) | taught |
| sul pont., sul tasto/flautando, naturale, con/senza sordino | `the-colour-words` (D3) | taught |
| sul G/D/A/E; Roman string numerals I–IV (I = E) | `which-string` (D4) | taught |
| détaché/martelé/spiccato/sautillé/ricochet/collé/bariolage/col legno — the words | `bow-stroke-words-youll-meet` (D5, card; perform → Stage 5) | taught |
| tremolo — 1/2/3 slashes; fingered tremolo; multi-bar rest → E4 | `tremolo` (D6) | taught |
| repeat barlines, 1st/2nd/3rd endings (volta); trace a route; binary form pointer | `repeat-barlines-and-endings` (E1; Stage 2 `repeats-and-endings` taught the basics) | taught |
| D.C. / D.S. / segno 𝄋 / coda 𝄌 / Fine; the four al Fine/al Coda routes | `da-capo-dal-segno-and-the-coda` (E2) | taught |
| senza replica — inner repeats dropped on the da capo | `the-repeat-you-dont-take` (E3) | taught |
| rehearsal marks; multi-bar rest (H-bar + number); `%`/simile repeat signs | `the-other-road-signs` (E4, card) | taught |
| what an ornament is; "symbol = what, era = how"; read now / perform Stage 6 | `what-an-ornament-is` (F1) | taught |
| trill `tr` + wavy line; upper- vs main-note start; accidental above; Nachschlag | `the-trill` (F2) | taught |
| upper/lower mordent; Pralltriller/Schneller naming; turn (+ inverted, delayed); accidentals | `mordents-and-the-turn` (F3) | taught |
| appoggiatura (on beat, steals ½/⅔) vs acciaccatura (crushed, steals none) | `grace-notes-the-long-and-the-short` (F4) | taught |
| slide/Schleifer; small-note groups; arpeggiated/rolled chord wavy line | `the-slide-and-rolled-chords` (F5) | taught |
| symbol vs editor's written-out realisation; editions disagree | `ornaments-are-an-opinion` (F6) | taught |
| double stops / 3–4-note chords (rolled bottom→top); divisi | `reading-double-stops-and-chords` (G1) | taught |
| natural harmonic (○ / open diamond); artificial harmonic (oval + diamond) | `harmonics-on-the-page` (G2) | taught |
| finger (Arabic) ≠ string (Roman/circled, I = E) ≠ position (Roman/"pos.") | `finger-string-or-position` (G3) | taught |
| glissando (line) vs portamento (Romantic, often unwritten); 8va/8vb/15ma/loco; violin stays in treble | `slides-and-octave-signs` (G4) | taught |
| `[ ]` = editorial, `( )` = optional/doubtful, dashed slur = editorial, small print; ossia stave | `who-wrote-this-mark` (H1) | taught |
| facsimile / Urtext / performing / critical editions; Urtext ≠ manuscript ≠ infallible | `kinds-of-edition` (H2, card) | taught |
| decoding a densely-marked line by category (pitch/rhythm/bow/dynamic/navigation/editorial) | `decode-a-dense-line` (I1) | taught |
| stage-wide symbol quiz + the read-vs-play-in-style checkpoint | `the-score-language-check` (I2) | taught |

## Musicianship notation (Stage 4)

Stage 4 is mostly concepts, but it adds a layer of **analytic / harmonic notation** a reader
meets on real parts, in editions, and in lead sheets:

| Symbol / notation | Lesson | Status |
|---|---|---|
| scale-degree carets — `^1` … `^7` (written with a roof over the number; `^7` = leading tone, subtonic if a whole step) | `the-scale-degrees-and-their-pull` (A2) | taught |
| movable-do syllables / sargam — Do Re Mi… / Sa Re Ga… as degree-and-function names | `do-re-mi-and-sa-re-ga` (A3) | taught |
| the order of sharps / flats on the staff (fixed zig-zag); the two key-reading tricks | `key-signatures-in-full` (B4) | taught |
| the circle-of-fifths diagram (`<CircleOfFifths>`); enharmonic keys | `the-circle-of-fifths` (C1), `the-twelve-keys` (E1) | taught |
| **double sharp** (x-shaped sign) / **double flat** (♭♭) as accidentals — the 𝄪/𝄫 Unicode chars don't render in the site font, so prose/labels spell them out; abcjs renders the real glyph | `the-twelve-keys` (E1) | taught |
| interval names — number + quality (P / M / m / A / d); the tritone (aug 4 / dim 5) | `what-an-interval-is` (F1), `augmented-diminished-and-the-tritone` (F3) | taught |
| stacked-thirds triads on the staff (the "snowman"); the four qualities | `what-a-triad-is` (G1), `the-four-triad-qualities` (G2) | taught |
| **figured-bass figures** — 6 (first inversion), 6/4 (second inversion) | `inversions-and-spelling` (G3) | taught |
| **chord symbols** — C · Cm · C° · C+ · C7 · Cmaj7 · Cm7♭5 (Cø) · C°7 · Csus2/4 · C6 · Cadd9 · C5 · C/E (slash) | `reading-a-chord-symbol` (G5) | taught |
| **Roman-numeral analysis** — I ii iii IV V vi vii° (upper = major, lower = minor, ° = dim, ⁺ = aug); V7, V7/V; ♭VI ♭VII iv (borrowed); ♭II6 (Neapolitan), It/Fr/Ger +6 | `the-chords-of-a-key` (H1), `secondary-dominants` (H8), `borrowed-chords-and-mode-mixture` (H9), `the-chromatic-chords` (H10, card) | taught |
| extended / altered / quartal chord symbols — 9, 11, 13, 7♯9, quartal, polychord, cluster | `extended-chords` (H7, card), `altered-and-quartal-chords` (H11, card) | taught (recognise only) |
| cadence labels — PAC / IAC / plagal / half / deceptive; the cadential 6/4; the Picardy third | `what-a-cadence-is` (I1), `the-other-three-cadences` (I2) | taught |
| phrase mark (long curve, crosses barlines) vs slur (short, one bow) — the distinction | `phrases-breathe` (I5); recaps Stage 3 `a-slur-is-one-bow` | taught |

## Still to place

- **Overdotting / notes inégales** — Stage 3 `non-legato-was-normal` touches the un-learning
  of modern habit; the full inégales treatment is a Stage 7 / repertoire-module style topic.
- **8va/8vb/15ma/loco** — now taught in `slides-and-octave-signs` (G4); update the Pitch table
  row (was pointed at the old `editions-and-editorial-marks`).

*(Re-audit this table against every rebuilt stage as the campaign proceeds.)*
