# Stage 3 — Score symbols: the plan

Built from `docs/stage-plans/stage-3-research.md` (9 research passes). Read that for the
*why* behind every lesson; this doc is the **build list** — what ships, in what order, wired
how.

Held against `docs/PRD.md` §7, `docs/CONTENT-STANDARD.md` (six beats, lesson types, §3a
anatomy), `RULES.md`, `docs/LESSONS-FROM-MOZART.md` §3–§4.

---

## The decisions (user, 2026-09-02)

1. **Keep the full coverage** — every symbol family the research found earns a place. But
   **nothing is padding**: thin research-draft siblings are merged, and REFERENCE material is
   written as a **card** (`CONTENT-STANDARD` §2 — structured, not a padded six-beats lesson),
   not stretched into a standalone concept lesson.
2. **The stage reads in two halves** (a divider in `/learn`, *not* two stage numbers —
   `stage: 3` throughout, minimal code):
   - **3a — Expression** (Movements A–C): how the line is *shaped* — tempo, dynamics,
     articulation. The marks a beginner meets first and uses most.
   - **3b — The rest of the page** (Movements D–J): the bow-and-string glossary, the road map,
     ornaments, string-part notation, editions, and the capstone.
3. **Tunes: Claude transcribes** the 5 end-of-stage melodies from public-domain sources
   (IMSLP / standard PD melodies), same as Stages 1–2. User reviews the result.

**Net count: 47 lessons** (42 skill/concept/reference + 5 tunes), down from the research
draft's 53 via the merges logged below. Larger than Stage 2 on purpose — Part IV of the PDF
is the densest vocabulary block in the course, and the objective (`PRD.md` §3) needs *"name
every symbol and marking, at sight"*.

**Built 2026-09-03: 46 live** (all 42 skill/concept/reference lessons + J1–J4:
`tune-ode-to-joy-shaped`, `tune-twinkle-articulated`, `tune-minuet-in-g`, `tune-amazing-grace`).
`tune-gossec-gavotte` pending a clean melody source (Suzuki Bk 1 / MusicXML).

### Merges from the research draft

| Research draft | Ships as |
|---|---|
| A2 `the-modifier-words` + A3 `speeding-up-and-slowing-down` | **A2 `bending-the-tempo`** (modifiers live where they're used) |
| A5 `the-metre-carries-the-tempo` + A6 `what-allegro-meant` | **A4 `the-metre-carries-the-tempo`** |
| A8 `rubato` | folded into **A2** as its own beat |
| C3 `portato-and-articulated-legato` + C4 `the-marks-stack` | **C3 `the-marks-stack`** |
| D5 `col-legno-and-more` + D6 `bow-stroke-words-youll-meet` | **D5 `bow-stroke-words-youll-meet`** (one REFERENCE card) |
| F3 `mordents` + F4 `the-turn` | **F3 `mordents-and-the-turn`** |
| G (research had G1–G4) | unchanged — 4 lessons |

Everything else maps 1:1 (research letter → ship letter, same intent).

---

## 3a — Expression

### Movement A — Tempo & motion

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| A1 | `how-fast-and-what-mood` | reading | NOW | the Italian ladder Grave→Prestissimo; **character before speed** (Allegro = "cheerful" first); Andantino is a trap — don't drill a number | Brossard *Dictionaire* 1703 → the 1769 Eng. ed.; Marty *The Tempo Indications of Mozart* |
| A2 | `bending-the-tempo` | reading | NOW | rit. / rall. / accel. / stringendo / allargando / a tempo / Tempo I; **rit. abbreviates two things** (gradual ritardando vs sudden ritenuto); the modifier words (molto, assai, poco, poco a poco, meno/più, ma non troppo, sempre); **meno/più mosso = a new tempo**; **rubato** (Leopold Mozart: the bass keeps time, the melody flexes over it) | Leopold Mozart *Violinschule* Ch. XII |
| A3 | `the-metronome-mark` | reading | NOW | ♩=N, M.M.; Maelzel patents it 1815 (design was Winkel's), Beethoven adopts 1817 — **post-Classical, so K.216 / Haydn / Mozart have none**; Beethoven's own marks are famously disputed | standard (Grove, Maelzel) |
| A4 | `the-metre-carries-the-tempo` | reading | NEXT | before metronomes the **metre set the speed**: 6/8 Allegro ≠ 4/4 Allegro, **C vs ₵**, small note-values = a slower felt tempo ("tempo giusto"); a Classical Allegro is more contained than a modern one | Marty, *The Tempo Indications of Mozart*; C.P.E. Bach *Versuch* |
| A5 | `tempo-words-in-german-and-french` | reading | REFERENCE | **card**: Langsam / Mäßig / Lebhaft / Rasch / Bewegt / Ruhig — Lent / Modéré / Animé / Vif / Retenu / Cédez — with the Italian each maps to | — (card) |

### Movement B — Dynamics

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| B1 | `loud-and-soft-are-relative` | reading | NOW | pppp→ffff; **relative, not decibels** — `p` in a quartet ≠ `p` in an orchestra; Classical music mostly lives pp–ff; `mp`/`mf` are the middle | standard (Grove *Dynamics*) |
| B2 | `getting-louder-getting-softer` | reading | NOW | `cresc.` / `dim.` / `decresc.` words vs the **`<` `>` hairpins**; `poco a poco` vs `molto`; **where the hairpin starts and ends is information** — it names the peak | standard |
| B3 | `the-sudden-ones` | reading | NOW | `sf` / `sfz` / `fz` (one note forced) vs `rf` / `rfz` (a phrase, until the next mark); `fp` (loud then instantly soft); `sfp`; `subito p` / `subito f`; **`sf` ≠ `>`** — `sf` is an absolute jolt, `>` is context-relative, `sf` in a soft passage is still soft | Leopold Mozart *Violinschule* Ch. XII (the fp stress) |
| B4 | `dying-away` | reading | NEXT | `morendo` / `calando` / `smorzando` / `perdendosi` / `al niente`; `sotto voce` / `mezza voce` — the words for fading and for a held-back voice | standard |
| B5 | `where-dynamics-came-from` | reading | NEXT | terraced dynamics (the harpsichord couldn't do more) → the **Mannheim** orchestra's long crescendo (1740s–60s, the "Mannheim roller") → Classical = graded **and** rhetorical (sudden f↔p, echo effects); dynamics "spoke like language" | Grove (Mannheim school); Leopold Mozart |
| B6 | `dynamics-are-a-bow-thing` | bow | NOW | **read → this lesson; perform → Stage 5.** On the violin a dynamic = bow **speed × weight × contact point**: forte near the bridge, piano toward the fingerboard; `< >` on one long note = *messa di voce* | Galamian, *Principles* (contact point); Tartini on messa di voce |

### Movement C — Articulation

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| C1 | `short-held-and-connected` | reading | NOW | the length spectrum: staccatissimo → staccato → (plain) → tenuto → legato; the **dot** (~half value), the **wedge** (shorter still), the **line** (full value + a lean) | standard (Grove *Articulation*) |
| C2 | `accents-and-marcato` | reading | NOW | `>` = a relative stress on the note; `^` (marcato) = heavier **and** separated; how an accent differs from a dynamic | standard |
| C3 | `the-marks-stack` | reading | NOW | dots **under a slur** = portato / louré (~¾ value, gently pulsed); dot **+** tenuto line = held nearly full then lifted; accent **+** staccato; the reader decodes a stack part by part | standard; Leopold Mozart (portato as a bow gesture) |
| C4 | `the-fermata` | reading | NOW | the "bird's eye" — hold beyond the written value; the **era table** (Baroque ~2×, Bach chorales = phrase-end breath, Classical = a structural hinge at a cadence, Romantic = dramatic stretch); default ≈ twice as long | Clive Brown, *Classical & Romantic Performing Practice* |
| C5 | `breath-marks-and-breaks` | reading | NOW | the **comma** (lift and retake, no time stolen from the bar unless the phrase allows), the **caesura `//`** ("railroad tracks" — a real stop), **G.P.** (grand pause) | standard |
| C6 | `a-slur-is-one-bow` | bow | NOW | on strings a slur = **one bow**, literally (revisits Stage 2 `ties-and-slurs`, Stage 5 will perform it); the **phrase mark** (a long dashed curve) vs the bowing slur; **Classical slurs stop at the barline**, and the first note under a slur leans | Clive Brown; NMA editorial notes |
| C7 | `non-legato-was-normal` | reading | NEXT | the late-18th-century default was **détaché with air between notes** — unmarked notes were played *shorter* than written; the modern instinct is the opposite and has to be un-learned; **Mozart's dots vs strokes** are inconsistent in the autograph — two Urtexts disagree (→ Movement H) | Clive Brown; NMA / Bärenreiter K.216 notes |

---

## 3b — The rest of the page

### Movement D — Bow & string words

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| D1 | `down-bow-up-bow-and-the-retake` | bow | NOW | **⊓** (frog→tip, pull, naturally stronger) / **V** (tip→frog, push); the **retake** (lift and reset); the n/v = *nobilis*/*vilis* origin; the **rule of the down-bow** (Lully, the 24 Violons) as a *reading* aid — a lone ⊓ near a bar start says "beat 1 is here" | Georg Muffat, *Florilegium Secundum* (1698) preface, via Boyden |
| D2 | `arco-and-pizzicato` | reading | NOW | `arco` / `pizz.` / back-to-`arco`; **left-hand pizz** = `+` above the note; **snap / Bartók pizz** = a circle with a line (REFERENCE inside the lesson) | standard |
| D3 | `the-colour-words` | reading | NOW | `sul ponticello` (by the bridge — glassy), `sul tasto` / `flautando` (over the fingerboard — flutey), `naturale` / `ord.`; `con sordino` / `senza sordino` (mute on/off); ties to Stage 0 bow-lanes and Stage 5 contact point | standard; *The Orchestra: A User's Manual* |
| D4 | `which-string` | reading | NOW | `sul G / D / A / E`; the Roman-numeral string map **I = E … IV = G** — the highest string is I, the trap; a string is only marked when there's a real choice or a colour reason | notat.io string-numbering; standard |
| D5 | `bow-stroke-words-youll-meet` | bow | REFERENCE | **card**: détaché · legato · martelé · staccato · portato/louré · spiccato · sautillé · ricochet/jeté · collé · bariolage · col legno (battuto/tratto) — recognise the word, know it names a way of moving the bow; **doing them is Stage 5** | Wikipedia *Bow stroke* + Galamian |
| D6 | `tremolo` | reading | NOW | strokes through the stem: **1 = eighths, 2 = sixteenths, 3 (or `trem.`) = as fast as possible**; strokes *between two noteheads* = fingered tremolo; the **4th case** after beam / stack / vibrato (ties Stage 2 `beamed-notes-double-stops-and-vibrato`) | standard |

### Movement E — Repeats & the road map

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| E1 | `repeat-barlines-and-endings` | reading | NOW | `‖:` … `:‖`, **no opening sign → from the top**; 1st / 2nd / (3rd) endings (volta, *prima/seconda volta*); trace an 8-bar binary tune both times through; the Baroque origin → **the repeat *is* the form** (forward pointer to Stage 4) | standard; *PRMA* "To Repeat or Not to Repeat?" |
| E2 | `da-capo-dal-segno-and-the-coda` | reading | NOW | D.C. / D.S. / **𝄋** segno / **𝄌** coda / Fine; the **four routes** (*al Fine* / *al Coda* × D.C. / D.S.); a worked road-map diagram; the da-capo-aria & minuet–trio origin | standard (Grove *Dal segno*, *Da capo aria*) |
| E3 | `the-repeat-you-dont-take` | reading | NEXT | *senza replica* — on the D.C./D.S. pass you **drop the inner repeats** (tradition, rarely printed); minuet–trio–minuet da capo; a "the page says one thing, the style says another" beat | *PRMA*; "Inner Repeats in the Minuet or Scherzo Da Capo" |
| E4 | `the-other-road-signs` | reading | REFERENCE | **card**: rehearsal marks (boxed letters/numbers; Spohr, Romantic era); the multi-bar rest (H-bar + a number); the one-/two-bar repeat `%` and *simile* | standard; *Rehearsal letter* (Grove) |

### Movement F — Ornaments

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| F1 | `what-an-ornament-is` | reading | NOW | the symbol = **shorthand** for a flurry of notes; **"the symbol tells you WHAT, the era tells you HOW"** (`LESSONS-FROM-MOZART.md` §4); **read now / perform in Stage 6**; the symbol-inventory card | Leopold Mozart *Violinschule* (he gives ornaments 3 chapters) |
| F2 | `the-trill` | reading | NOW | `tr` + wavy line (= length); **upper-note start (Baroque: C.P.E. Bach, Türk) vs main-note start (Hummel 1828, Classical transition)** — a `tr` on a Mozart note is genuinely ambiguous, the clearest read-vs-style moment in the stage; accidental above `tr` = the upper note; termination / *Nachschlag* | C.P.E. Bach *Versuch* (1753); "The Trill in the Classical Period 1750–1820"; Leopold Mozart |
| F3 | `mordents-and-the-turn` | reading | NOW | **upper mordent** P–U–P (zigzag, no line) vs **lower mordent** P–L–P (zigzag with a line); the modern-vs-Baroque **naming trap** (bare "mordent" = the lower; the upper was the *Pralltriller* / *Schneller*); the **turn** (sideways S) — U–P–L–P, **on the note vs delayed** (offset right), inverted turn; **accidental above = top note, below = bottom note** | Frederick Neumann, *Ornamentation in Baroque and Post-Baroque Music* |
| F4 | `grace-notes-the-long-and-the-short` | reading | NOW | **appoggiatura** (no slash): on the beat, **steals ½ the main note's value** (⅔ if dotted), a leaning dissonance — Leopold Mozart Ch. IX; **acciaccatura** (slash through the stem): crushed **before** the beat, steals nothing; **default on-the-beat for Mozart** — playing every small note fast-and-early is a Romantic import; a rhythm lesson in disguise | Leopold Mozart *Violinschule* Ch. IX; C.P.E. Bach |
| F5 | `the-slide-and-rolled-chords` | reading | NEXT | the **slide / Schleifer / coulé** (two small rising notes → the principal, filling in from below); groups of small notes = a written-out mini-ornament; the **arpeggiated-chord** vertical wavy line (bottom→top; arrowhead-down = top→bottom; square bracket = *don't* roll) — cross-ref F/G for chords on the string | standard; Wikipedia *Slide (musical ornament)*, *Arpeggio* |
| F6 | `ornaments-are-an-opinion` | reading | NEXT | the bare symbol vs the **editor's written-out realisation** in small notes; why Urtext and teaching editions differ; the K.216 trills / appoggiaturas; the **read-vs-play-in-style** checkpoint (perform in Stage 6, style in the repertoire modules) | NMA / Bärenreiter K.216; Neumann |

### Movement G — String-part notation

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| G1 | `reading-double-stops-and-chords` | reading | NOW | two noteheads on one stem = **double stop**; 3–4 = **rolled bottom→top** (the curved bridge — the Bach *Chaconne* chords); `div.` vs everyone-plays-the-stop; **reading only** — technique is Stage 6 | *The Orchestra: A User's Manual*; Wikipedia *Double stop* |
| G2 | `harmonics-on-the-page` | reading | NEXT | the small **circle** / **open diamond** (natural harmonic — pure, flute-like, whistling); the **oval + diamond a 4th above** on one stem (artificial harmonic, sounds two octaves up); producing them is Stage 6 | *The Orchestra: A User's Manual*; Violinspiration harmonics chart |
| G3 | `finger-string-or-position` | reading | NOW | **Arabic 1–4 (0=open) = finger**; **Roman I–IV / "sul" = string** (I = E); **Roman / "III. pos." at a phrase start = position**; **circled = string**; one labelled line showing all three at once — the `LESSONS-FROM-MOZART.md` §3 tangle | Wikipedia *Position (music)*; `LESSONS-FROM-MOZART.md` §3 |
| G4 | `slides-and-octave-signs` | reading | NEXT | **glissando** (a line, straight or wavy — you hear the pitches slide) vs **portamento** (an expressive slide, often unwritten, **a Romantic technique** — not what a Classical page asks); **8va / 8vb / 15ma / loco**; the violin stays in **treble clef** | Wikipedia *Portamento*, *Ottava*; *The Strad* on portamento |

### Movement H — Editions

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| H1 | `who-wrote-this-mark` | reading | NOW | **`[ ]`** = the editor added it; **`( )`** = optional / doubtful; **dashed slur** = editorial; **small print** = a suggestion; the **ossia** stave (an alternative — easier version, written-out ornament, suggested cadenza); **read the preface's key first** | Henle "What is Urtext?"; standard editorial convention |
| H2 | `kinds-of-edition` | reading | REFERENCE | **card**: facsimile / Urtext / performing (Flesch, Auer, Joachim, Oistrakh) / critical; **Urtext ≠ manuscript ≠ infallible** — the editor weighs sources and can be wrong; K.216's reference text is the *Neue Mozart-Ausgabe*, and **its cadenzas aren't Mozart's**; interpretive freedom starts with knowing what's editorial (→ `PRD.md`) | Henle; *Strings* "An Urtext Editor Honors a Composer's Intentions"; Kenneth Woods "Urtext Myths" |

### Movement I — Putting it together

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| I1 | `decode-a-dense-line` | reading | NOW | one authored 8–12 bar line, **deliberately loaded** (tempo word + modifier, opening dynamic, a hairpin, `cresc. poco a poco`, a slur group, staccato dots, one accent, `rit.`, a fermata, `D.C. al Fine`); walk it — every mark **named → categorised** (pitch / rhythm / bow-articulation / dynamic / navigation / editorial) **→ turned into an instruction**; the K.216 "full-page decode" milestone in miniature | `docs/stage-plans/mozart-k216.md` (the decode milestone) |
| I2 | `the-score-language-check` | reading | NOW | a `<Quiz>` over the whole stage (symbol → name → meaning); then the honest **read-vs-play-in-style checkpoint**: reading a trill / an Allegro / an `sf` is *done*; playing them in style is later (strokes → Stage 5, ornaments → Stage 6, era-style → the repertoire modules) | — (checkpoint) |

### Movement J — The tunes (repertoire · also on `/practice`)

All **first position**, all **public domain**, authored in our annotated line (`RULES.md` R1),
each with a per-phrase how-to-play note (R3) and a "the usual mistake" beat.

**Status (2026-09-03): 4 live, 1 pending.**

| # | Slug | Key / pos. | The one thing it's for | Status |
|---|---|---|---|---|
| J1 | `tune-ode-to-joy-shaped` | A, 1st | reading a **full dynamic scheme** — `mp` → `mf` → `f`, hairpins, a `rit.` | **live** (from the Stage-1 transcription) |
| J2 | `tune-twinkle-articulated` | A, 1st | reading an **articulation scheme** — sparkle phrases staccato, answers legato, "up above" tenuto, "diamond" portato | **live** (from the Stage-1 transcription) |
| J3 | `tune-minuet-in-g` | **D**, 1st | a real minuet strain — `‖: … :‖` with **1st / 2nd endings** traced correctly; **f / p terracing** (the Baroque echo); links to E1, E3, B5 | **live** — transcribed from the user's easy-version PDF; **endings are a reconstruction, verify** |
| J4 | `tune-amazing-grace` | G, 1st | reading a **line of expression marks** on a slow tune — `mp` / `cresc.` / `mf` / `dim.` / `rit.` / a **fermata** as one arc | **live** — the plain standard "New Britain" verse; the user's PDF decorates it & shifts to A major after b.21 |
| J5 | `tune-gossec-gavotte` | D, 1st | **staccato** (dot vs slur vs plain) + **D.C. al Fine** on real music | pending — PDF is a dense cut-time-16ths raster; a Suzuki student piece; need MusicXML / the Bk 1 arrangement |

*(Handel Bourrée HWV 363a, in the research draft, dropped — its skills are covered by J2 + E1.)*

---

## Build order & wiring

1. **3a first** (A–C), then **3b** (D–J), movement by movement.
2. Each lesson: `content/lessons/<slug>.mdx` + `content/lessons/registry.ts` entry +
   `lib/curriculum.ts` `LESSONS` entry (`published: P`). Old Stage-3 slugs (`tempo-words`,
   `dynamics`, `articulation`, `bow-direction-marks`, `string-words`, `repeats-and-navigation`,
   `ornaments`, `trills-turns-and-grace-notes`, `double-stops-and-chords-on-the-page`,
   `harmonics-and-pizzicato-marks`, `fingerings-and-position-numbers`,
   `editions-and-editorial-marks`, `the-score-language-quiz`) are **deleted and replaced**.
3. `docs/NOTATION-COVERAGE.md` — rewrite the Stage-3 block against the final slugs; close the
   "still to place" items (multi-bar rest → E4; tremolo → D6; metronome mark → A3; 8va → G4).
4. `CLAUDE.md` status + docs index.
5. `npm run build` (target: green), `npm run lint`, `npx tsc --noEmit`. Browser spot-check a
   lesson from each movement (render + play + labels aligned; `RULES.md` #1, R5).
6. Every music fact double-checked against the research doc's sources before it ships
   (`RULES.md` #8).

## The bar every lesson clears (`PRD.md` §7 / `CONTENT-STANDARD.md` §7)

- Six beats: idea → see it → hear it → try it → the usual mistake → where it comes from.
- Concept/skill lesson: **2–4 play-arounds** (pattern / variation / contrast / transfer) then
  a real line. REFERENCE cards are exempt from the play-around count but still show the mark
  *in* notation, not just in a table.
- **Every pitched example labels every note — name + string + finger.** Rhythm-only /
  single-pitch examples say so in the caption.
- A cited lineage aside (`<Cite>`) on every concept and tune lesson.
- `read` vs `perform` stated wherever they differ — Stage 3 is **reading**; performing bow
  strokes is Stage 5, ornaments Stage 6.
- Hands-free: readable from a music stand, one control to press.
