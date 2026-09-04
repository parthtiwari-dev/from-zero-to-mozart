# Stage 8 — Sight-reading & ear training: the plan

Built from `docs/stage-plans/stage-8-research.md` (22 passes + a re-verification pass). Read
that for the *why* behind every lesson; this doc is the **build list** — what ships, in what
order, wired how.

Held against `docs/PRD.md` §3 + §4 + §6 + §7, `docs/CONTENT-STANDARD.md` (six beats), `RULES.md`,
`docs/THE-PATH.md`, the memory `play-by-ear-is-the-goal.md`. Read `CLAUDE.md` →
`## Mistakes to avoid` **before writing a single lesson**, and run
`python tools/abc-barcheck.py` before every commit.

---

## What this stage is for

`PRD.md` §3: the operative end goal is **play by ear** — *"if I hear something, I should be
able to play it on my own."* `PRD.md` §6.1: *"Stage 8's ear gym is the course's centre of
gravity."* Stage 8 has two halves that are really one skill:

1. **Reading fluently** — Stages 1–3 taught the reader to *name* everything on a page; Stage 4
   to *understand* it. Stage 8 is the **fluency** layer: read at sight, at a steady pulse,
   **without stopping**, seeing **patterns not notes** — and reading *everything* on the page
   ("any notes and chords and shit" — the user's words): notes fast, rhythm, the flat keys,
   chromatic notes, stacked noteheads / double stops, a chord chart above a melody.
2. **The ear from the ground up** — audiation, singing, **functional / scale-degree hearing**
   (the sargam bridge — the core), hearing harmony and cadences, melodic & rhythmic
   dictation, and the payoff: **learning a tune by ear**.

The two feed each other — you **audiate the page** as you read it, and playing by ear teaches
you what the notation is *for* (**sound before sign**).

### The Intermediate gate (`PRD.md` §4)

Stage 8 closes the intermediate half. Its three gate items: **sight-read a Grade-4-ish line
cold · take dictation of a short phrase · learn a song by ear from a recording.** (The other
gate items — clean 3rd-position shift, vibrato, musical student concertos — are Stages 6–7 and
the repertoire.)

### What Stage 8 inherits — it is NOT from scratch

Consolidate and name these, don't re-teach: Stage 1 (`steps-and-skips`,
`all-the-first-position-landmarks`, `which-note-is-this`, `the-key-signature`,
`taking-the-help-away`, `the-first-position-reading-check`, `sa-and-the-letter-names`,
`hearing-a-wrong-note`, `ringing-tones`) · Stage 2 (`counting-the-beat`, `subdivision`,
`reading-a-steady-beat`, the `rhythmOnly` `<NotatedExample>` mode, `if-you-count-in-bols`) ·
Stage 3 (`decode-a-dense-line`, the score-symbol vocabulary, `rests`, multi-bar rests in
`the-other-road-signs`) · Stage 4 (`the-scale-degrees-and-their-pull`,
`hearing-the-scale-degrees` = the drone drill, `tuning-by-ear`, `do-re-mi-and-sa-re-ga`,
Movement H harmony, Movement I cadences, `reading-a-chord-symbol`, `inversions-and-spelling`
= figured bass) · Stage 5 (`finding-a-tune-by-ear` = the first play-by-ear lesson,
`reading-a-bowing`, `bowing-a-passage-yourself`).

---

## The decisions (Claude's call — the user delegated them, 2026-09-04)

The user: *"make that full plan for Stage 8.md and also just reverify everything… if you
fucked up something in the research… continue with Stage 8 and then also implement it."* So:

1. **The stage splits 8a / 8b** — one `stage: 8`, a `/learn` divider (like 3a/3b, 4a/4b/4c,
   5a/5b/5c):
   - **8a — Reading fluency + the whole ear gym.** **Position-independent → builds NOW**, in
     parallel with Stage 6 research. Movements A–H, ~35 concept lessons + the drill/card
     ladders. *This is what this session implements.*
   - **8b — Sight-reading to the gate.** Positions-at-sight + the Intermediate check. **Waits
     for Stage 6–7.** ~5 lessons + the upper card ladder.

2. **The primary shorthand is scale-degree NUMBERS `^1`–`^7`** (used since Stage 4 A2) — they
   work identically in major and minor and avoid the movable-do "do-based vs la-based minor"
   tangle. **Movable-do syllables and sargam ride along** as the familiar overlay (the reader
   already thinks in Sa-Re-Ga). Every degree lesson shows all three.

3. **Functional hearing is the spine; intervals are a lean complementary track.** Per the
   re-verified Karpinski reading — *not* "intervals are bad", but tonal music is heard against
   the tonic first, so the scale-degree gym (Movement E) does the heavy lifting and
   `hearing-a-leap` (Movement G) is one lesson.

4. **Drills and cards are *material*, not lessons.** Three disposable ladders, built as
   `/practice`-style pages, not 60 MDX files:
   - the **sight-reading card ladder** (levels 1–10 for 8a; authored ABC, `reveal="hidden"`);
   - the **ear drill sets** (note-speed · scale-degree · dictation — each a page of repeatable
     `<NotatedExample>` "question → hidden answer" cards);
   - the **play-by-ear tune list** (L1–L4 target tunes).
   Each ladder gets **one framing lesson**; the cards themselves are generated in batches.

5. **No blocking infra.** The ear drills play "key-setting → target" inside `<NotatedExample>`
   (a rolled I chord / a I–IV–V–I, a rest, then the target degree) — no new component
   (`RULES.md` #17). **One nice-to-have data edit:** expand `DRONE_NOTES` in `lib/audio.ts`
   from the 4 open strings to ~9–12 tonics (G · A · D · C · E · B · F♯ · F · B♭, ideally
   chromatic) so the persistent drone bar is usable for the reader's own drone practice. Do
   it early; it's not a dependency.

6. **Minimal merging** (per the Stage-4/5 "no dropping" steering) — every distinct idea keeps
   its lesson. The merge candidates in the research doc are *not* applied unless a movement
   runs long at build.

---

## 8a — Reading fluently & the ear from the ground up

### Movement A — Reading fluently (`reading` track, NOW, 8)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| A1 | `what-fluent-reading-is` | fluent readers see **patterns, not notes** (chunking); the eye runs **~3–6 notes ahead** and *shrinks* that lead on hard music; "look as far ahead as possible" is wrong; sight-reading is its own skill — practised **easy, new, daily**, a level below your pieces | Kopiez & Lee model; the eye-hand-span research (PMC 2021); ABRSM |
| A2 | `reading-notes-fast` | instant single-note recognition — **no mnemonic recital**; the **one-minute challenge** (target 15+); "name it *and* its string + finger"; 2–4 weeks of 10 min/day. Drill + framing | note-reading-speed research; ties Stage 1 landmarks |
| A3 | `the-pre-read` | the **9-step scan**: clef → key (→ *do I know that scale?*) → time + tempo → range → accidentals → rhythm traps → slurs/bows → repeats/roadmap → **audiate beat 1**. **S-T-A-R-S** as the compact version | the PDF §77; the S-T-A-R-S tradition |
| A4 | `landmarks-and-guide-notes` | the anchor notes (G/B/D/F lines, the open strings on the staff); read **from** a landmark, not by counting up from the bottom line; mnemonics are a crutch to outgrow | landmark-vs-mnemonic reading pedagogy; consolidates Stage 1 |
| A5 | `reading-the-shape` | **step / skip / leap** on the staff (step = line↔space, *looks different*; skip = same-to-same); **contour** — "a string on the page"; up/down/same | intervallic-reading pedagogy; extends Stage 1 `steps-and-skips` |
| A6 | `the-patterns-in-real-music` | the shapes to *see*: scale fragment · broken chord · turn/neighbour · **the sequence** (a shape repeated a step/third away — highest leverage) · the leap · the repeated note — each shown, then hunted in tunes the reader knows | pattern-recognition research; Baroque/Classical sequence prevalence |
| A7 | `your-eye-runs-ahead` | the eye-hand span; **let the eyes drift forward on long notes and rests**; don't stare at the note you're playing; **pre-scan the flagged hard bar early**; the card-over-the-note drill | the eye-hand-span + "early attraction" research |
| A8 | `read-the-rhythm-first` | rhythm fails first → read it first: **clap–tap–play**, **subdivide** (in the smallest value), the **rhythm skeleton** (drop to one pitch, keep the pulse, add pitches back). **Names the tabla head start** — you feel the cycle as a unit; the notation is a picture of a thing your hands know | rhythm-first pedagogy; the tabla-advantage framing (Stage 2 §0); digitabla |

### Movement B — Sight-reading as a trained skill (`reading` track, NOW, 6 + the card ladder)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| B1 | `the-never-stop-rule` | **"once you start, you don't stop"** — the pulse is the thread; a wrong note played through costs nothing, a stop costs the line; a card is played **once, through, no going back** | ABRSM "golden rule"; every source |
| B2 | `getting-lost-and-getting-back` | recovery: keep tapping the pulse → look to the next **downbeat** (or section marker) → **re-enter there in time**, drop what you missed; the **strong-beat priority**; "skilled sight-reading is mostly skilled *faking*" | bulletproofmusician; sight-reading recovery pedagogy |
| B3 | `the-four-layer-rescue` | when a card fails, isolate the layer — **pitch** (say names, no rhythm) · **rhythm** (clap, one pitch) · **left hand** (silent / slow pizz) · **bow** (air-bow the slurs) — then recombine; one problem, one fix, move on | the PDF §78; deliberate-practice principle |
| B4 | `taking-more-help-away` | the **A→E scaffold ladder** in full (name+string+finger → finger → staff+cue → normal → you choose fingering/bowing); re-run it whenever the material jumps a level; our `<NotatedExample>` `reveal` *is* the scaffold | the PDF §79; extends Stage 1 `taking-the-help-away` |
| B5 | `how-sight-reading-cards-work` | the **ladder** (levels, cumulative — keys, then rhythm, then chromatics, then syncopation…); the **card format** (pre-read → try once, no stopping → pass condition: steady pulse · ≥8/10 pitches · no pause >1 beat → diagnose); **fail → new card tomorrow, don't replay** | ABRSM/Trinity cumulative grade parameters; the PDF §80 |
| B6 | `the-sight-reading-habit` | **5–10 min every session, at the start**; always new, always a level below your pieces; the tools (drone/metronome bar, the card ladder, the apps — ABRSM Trainer / Read Ahead / Sight Reading Factory — as a REFERENCE; duet reading as the next step) | bulletproofmusician "made not born"; the apps |
| — | **the card ladder, levels 1–10** | a `/practice`-style page of authored ABC cards, 2–8 bars each, `reveal="hidden"`, disposable. ~5–10 per level. Level skeleton in the research doc Pass 8. *Material, not lessons.* | authored |

### Movement C — Reading across contexts (`reading` track, NOW, 4)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| C1 | `reading-the-flat-keys` | flats read **differently under the hand** — a flat in the signature → your **1st finger creeps back** (low 1: B♭ on A, F on E); F major / D minor / B♭ major, the first-position flat keys; how they *feel* vs the sharp keys the reader has lived in | Stage 4 `key-signatures-in-full`; the low-1 flat-key hand |
| C2 | `reading-a-chromatic-note` | an accidental **almost always leans** — a chromatic passing / neighbour note (Stage 4 H3) — so predict it resolves by a half step; the common shapes (raised leading tone, chromatic passing tone, ♭6); read it *at speed* while keeping the pulse | Stage 1 `accidentals-inside-a-bar`; Stage 4 H3 |
| C3 | `reading-two-notes-at-once` | the stacked notehead = **play together** (Stage 3); the **four double-stop kinds** (open+open, open+stopped-above, open+stopped-below — readable now; stopped+stopped = Stage 6); read the **bottom note as the string level**; a rolled 3-/4-note chord = read the top (melody), roll bottom-to-top (Stage 5 H2) | Stage 3 `beamed-notes-double-stops-and-vibrato`; double-stop pedagogy |
| C4 | `reading-a-chord-chart` | a **lead sheet / chord chart** above a melody — how a violinist uses one: play the melody, *know* the harmony, be able to play a **chord tone or the bass** if asked, sketch an **arpeggiated accompaniment**; ties `hearing-the-chord-under-the-tune` (F5) — read it *and* hear it | Stage 4 `reading-a-chord-symbol`; lead-sheet practice |

### Movement D — What a good ear is (`ear` track, NOW, 4 + 1 REFERENCE)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| D1 | `what-a-good-ear-is` | the skill stack (pitch memory → **functional hearing** → relative pitch → harmonic hearing → rhythmic → transcription); **not perfect pitch — *functional* pitch**, trainable at any age; **"you already have this ear — it's sargam"**; the order of the gym; the shorthand is `^1`–`^7` numbers, with solfège + sargam alongside | Karpinski (tonic inference first); the sargam bridge (Stage 4 A3); cite Bhatkhande / a sargam reference |
| D2 | `hearing-it-first` | **audiation** (Gordon) — hearing music whose sound isn't present; the mind's ear; the loop **imagine → produce → let the ear judge → adjust**; you audiate the page (reading) and audiate the target (playing by ear) | Edwin Gordon, Music Learning Theory |
| D3 | `singing-is-not-optional` | the **voice is the test instrument** — the only way to externalise what you audiate so the ear can check it; the **"I can't sing" answer** (it's an untrained ear, not a broken voice, and this fixes it; hum quietly, alone); **sing → play → sing along with the string**; the pitch-matching drills | every ear-training tradition; Stage 4 `tuning-by-ear` |
| D4 | `finding-home` | **set the key** — a drone on the tonic, or a short **I–IV–V–I** — then the tonic *feels* like home and every note is heard against it (the sargam instinct: choose Sa, everything is a distance-and-flavour from it); the **"is this home?"** drill | Stage 4 F4; the drone tradition |
| D5 | `the-hand-signs` | **REFERENCE** — the Curwen/Kodály hand signs for do-re-mi; an optional *kinaesthetic* anchor to go with the aural one; "use them if they help, skip them if not" | Curwen / Kodály |

### Movement E — The scale-degree gym (`ear` track, NOW, 5 — THE CORE)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| E1 | `the-stable-three` | ^1 / ^3 / ^5 (*do / mi / sol* · **Sa / Ga / Pa**) — the tonic triad, the notes that **rest**; learn each "as a handbell", instantly recognisable; then two in a row, then a 3-note fragment | functional-ear-training progression (Wave 1); Stage 4 A2 |
| E2 | `the-tendency-tones` | ^2 / ^4 / ^6 / ^7 (*re / fa / la / ti*) learned **by their pull, not as pitches**: **^7→^1** (strongest, ½ step, aches up) · **^4→^3** (sags) · **^2→^1** (leans down) · **^6→^5** (melancholy, falls); a tendency note sounds → *sing where it wants to go*, then name it | functional progression (Wave 2); Stage 4 A2 |
| E3 | `all-seven-degrees` | the full drill — any scale note, name it, using the pull to disambiguate; random 3/4/5-note sequences; **the sargam bridge table** (the shuddha swaras align with the major scale = **Bilawal thaat**; the *functions* transfer — not "sargam = the major scale"); random-order recognition | Karpinski; Bhatkhande's thaat system (cite); Stage 4 A3 |
| E4 | `degrees-on-the-fingerboard` | hear a degree → **play it** (don't name it) — find ^6 of D on the violin, now; the scale-degree gym and the **reverse fingerboard map** (Stage 5 K1) are the same skill from two directions | Stage 5 K1 `finding-a-tune-by-ear` |
| E5 | `degrees-in-your-tunes` | name the degrees of **Ode to Joy / Twinkle / a folk tune** by ear, phrase by phrase; the bridge from the abstract drill to real music | Stage 4 F4; the course's own tunes |
| — | **the scale-degree drill set** | a `/practice`-style page: drone-set + target, `reveal="hidden"`, across G/D/A/C and E/B minor, at each wave. *Material.* | authored |

### Movement F — Hearing harmony (`ear` track, NOW/NEXT, 5)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| F1 | `major-or-minor` | the single most useful harmonic ear skill — a chord sounds, **major or minor?** (bright/dark, the **3rd** decides — Stage 4 D1); then **diminished** (tense) and **augmented** (floating); sing the 3rd | Stage 4 D1, G2 |
| F2 | `hearing-the-bass` | hum the **lowest** note of a chord — what a violinist most needs (you play the bass or the top of a texture, rarely the middle) | standard harmonic ear training |
| F3 | `home-leaving-pulling` | the **three functions** by ear — is this chord **home (I, vi)**, **leaving (IV, ii)**, or **pulling home (V, vii°, V7)**? harder than quality, more useful — it's how you follow a piece's harmony by ear | Stage 4 H1 (T/PD/D) |
| F4 | `hearing-a-cadence` | the **four endings** — perfect (V→I, full stop) · plagal (IV→I, "amen") · half (ends on V, a comma) · deceptive (V→vi, the swerve); a **gate skill** | Stage 4 I1–I2 |
| F5 | `hearing-the-chord-under-the-tune` | **the capstone** — play a simple tune (Ode to Joy, Twinkle) and hear, bar by bar, *which chord fits*; ties Stage 4 H2 and C4 (`reading-a-chord-chart`) — read it *and* hear it | Stage 4 H2 |
| — | (F1–F5 each carry a short repeatable drill using rolled `<NotatedExample>` chords + reveal) | | |

### Movement G — Taking music down (`ear` track, NOW, 4 + drill set)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| G1 | `hearing-a-leap` | interval = **two scale degrees** ("that's ^5 up to ^1"); the three forms — **ascending** (easiest), **descending**, **harmonic**; the anchor songs (Twinkle P5, Saints M3, Amazing Grace P4, *Jaws* m2…) as a **bootstrap only**; on the violin every interval is also a hand shape | interval-as-two-degrees pedagogy; Stage 4 F1 |
| G2 | `taking-a-rhythm-down` | **rhythmic dictation** — **placed early for a confidence win** ("the half of ear training you came in already good at"); the method (beat + metre → feel the *cell*, not note-by-note → write against the grid → clap back); L1–L5 | dictation pedagogy; the tabla-advantage framing; Stage 2 `rhythmOnly` |
| G3 | `taking-a-tune-down` | **melodic dictation** — the universal 3-step order: **rhythm first** (*where* before *what*) → **contour** (up/down/same, mark leaps) → **scale degrees** (find the tonic, fill in); **sing it back in numbers before you play it**; L1–L5 | Clendinning & Marvin; openmusictheory |
| G4 | `the-ear-gym-routine` | the **10-minute daily menu** (2 sing & match · 3 scale-degree gym · 2 harmony · 2 dictation · a new tune by ear every few days); **distributed not massed** (the ear consolidates overnight); **always sing**; the tools | Karpinski (distributed practice); mirrors `the-sight-reading-habit`, Stage 4/5 practice lessons |
| — | **the dictation drill set** | a page of "a phrase/rhythm plays → write it → reveal", L1–L5, melodic and rhythmic. *Material.* | authored |

### Movement H — Playing by ear (`ear` track, NOW, 3 — THE PAYOFF)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| H1 | `learning-a-tune-by-ear` | the **6-step method** — listen to the whole thing (audiate, don't touch the violin) → rhythm & phrases → **find home** → **degree by degree** (sing → name the degree → put the finger where it lives → play) → **play a guess, hear the error, correct** (the intonation loop; wrong guesses map the fingerboard) → chunk & join; the graded ladder L1–L4 (a nursery tune you know → a folk tune you don't → a pop/film hook's first phrase → a whole short tune along with the track) | Stage 5 K1 (extends it); transcription pedagogy; Suzuki "mother-tongue" |
| H2 | `play-along` | the last step — playing **with a recording**, matching pitch and time; the ultimate "keep going" *and* the ultimate ear check | Suzuki listening; ensemble-reading pedagogy |
| H3 | `reading-with-your-ear-on` | **the weld** — audiate the line as your eyes cross it (not just beat 1); **sound before sign** (Kodály/Gordon) — the reader's been sign-first since Stage 1, now the loop closes; the drill: **sight-sing (in degree numbers), then sight-play** | Gordon "sound before sign"; conservatoire aural courses |
| — | **the play-by-ear tune list** | L1–L4 target tunes (drawn from the course's tunes + `REPERTOIRE.md` viral appendix — Happy Birthday, a folk tune, Over the Rainbow / Someone You Loved's first phrase, a short whole tune). Each = a target playthrough (`followPlayback`, notation hidden), reveal to check. *Material.* | authored |

---

## 8b — Sight-reading to the gate *(after Stage 6–7 — NOT this session)*

- `reading-a-shift` — recognising from the notation + fingering + phrase that a shift is
  coming; reading the roman position numbers (recap Stage 3 G3, Stage 5 I1).
- **card ladder levels 11+** — 3rd position, then 2nd/4th, key changes, longer lines.
- `the-grade-4-line` — a worked hard card at the gate standard.
- **`the-intermediate-check`** — the self-audit (not a gate — `RULES.md` #4): the three
  Stage-8 gate items (Grade-4 line cold · take dictation · learn a tune by ear) + the gate
  card + the gate dictation + a "learn this by ear" tune. Honest that this is the threshold to
  the giants and the K.216 module.

---

## Build order & wiring

1. **8a first, movement by movement: A → B → C → D → E → F → G → H.** The reading block (A–C)
   and the ear block (D–H) are independent; do reading first (it's the smaller, more concrete
   half and it warms up the pipeline), then the ear gym.
2. **The `DRONE_NOTES` edit** (`lib/audio.ts`, 4 → ~9–12 tonics) — do it alongside Movement D
   (before the ear drills need it). One array. Add an "open strings / all" toggle in
   `PracticeBar.tsx` only if the pill row looks cluttered.
3. Each lesson: `content/lessons/<slug>.mdx` (pure body — no frontmatter) +
   `content/lessons/registry.ts` entry + `lib/curriculum.ts` `LESSONS` entry (`stage: 8`,
   `track`, `tag`, `published: P`). **`grep` the slug in `curriculum.ts` + `registry.ts`
   first** (`CLAUDE.md` Mistakes to avoid #11 — the tremolo collision).
4. **No new components** (`RULES.md` #17). `<NotatedExample>` (+ `labels`, `reveal="hidden"`,
   `rhythmOnly`, `followPlayback`, `howToPlay`, `defaultBpm`), `<Quiz>`, `<TryThis>`,
   `<Margin>`/`<Cite>`, the drone/metronome bar — all exist. The ear drills = `<NotatedExample
   reveal="hidden">` playing "key-set → target".
5. **`python tools/abc-barcheck.py` before every commit.** Octave check (`CLAUDE.md` #2):
   first-position examples use `G, A, B, C  D E F G`, not `G A B c d e f g`. Every pitched
   example labels every note (name + string + finger); the sight-reading cards are the one
   exception — they're `reveal="hidden"` worksheets whose *answer* carries the labels.
6. **The three ladder pages** (sight-reading cards, ear drills, play-by-ear tunes) — decide
   with the build whether they're MDX lessons with many `<NotatedExample>` blocks, or a new
   `/practice`-style route. Lean to **MDX lessons** first (one per ladder), matching
   `stage-4-scales-and-arpeggios` / `stage-5-tone-and-strokes`.
7. Docs: `CLAUDE.md` status + Stage-8 detail + NEXT SESSION; `docs/CURRICULUM.md` Stage 8
   marker; `docs/PDF-MAP.md` Part VII rows → done; `docs/NOTATION-COVERAGE.md` — Stage 8 adds
   no *new* symbols (it reads existing ones fluently), but add a short "reading fluency /
   scale-degree numbers as an ear shorthand" note; `docs/THE-PATH.md` §6 row.
8. `npm run build` (target green), `npm run lint`, `npx tsc --noEmit`. Browser spot-check a
   lesson from each movement (render + play + reveal) — especially the ear drills (does
   "key-set → target" sound right?) and the `reveal="hidden"` cards.
9. **Accuracy** (`RULES.md` #8): the ear-training method facts are ≥2-sourced in the research.
   The **sargam / thaat claims** (D1, E3) get the strict check — the user *can* catch these:
   shuddha swaras ↔ major scale = Bilawal thaat; the *functions* transfer; **not** "sargam =
   major scale", **no** shruti/cents. Cite Bhatkhande / a sargam reference.

## The bar every lesson clears (`PRD.md` §7 / `CONTENT-STANDARD.md` §7)

- **Six beats**: idea → see it → hear it → **try it** → **the usual mistake** → **where it
  comes from** (a cited `<Cite>`). Grep for "usual mistake" / "<Cite" before committing.
- **Concept/skill lesson: 2–4 play-arounds** then a real application. The **drill** lessons
  (A2, E1–E5, F1–F5, G2–G3) are "framing + a repeatable drill" — the drill *is* the
  play-around; still needs the mistake + the cite.
- **The "hear it" and "try it" beats carry the stage** — this is where the ear is built.
  Every ear lesson ends with the reader *doing* the drill (singing / playing / writing), not
  just reading about it.
- **`read` / `hear` / `play by ear` stated wherever they differ.** Stage 8 makes reading
  *fluent* and builds the ear; the two meet in H3.
- Hands-free where it's a violin lesson; **but the ear lessons legitimately ask the reader to
  sing** — that's not "interactivity", it's the method (D3 pre-empts the objection). One
  primary control (the play button); no gamified score beyond the honest "one-minute
  challenge" count (A2) and the card pass condition.

## What must not be cut (the load-bearing set)

- **The scale-degree gym** — E1–E5. This is the stage, for this user (`PRD.md` §3, §6.1).
- **`finding-home` (D4) + `singing-is-not-optional` (D3)** — nothing in the gym works without
  a set key and a checked voice.
- **`learning-a-tune-by-ear` (H1) + `play-along` (H2)** — the operative goal made concrete.
- **`the-pre-read` (A3) + `the-never-stop-rule` (B1) + `the-four-layer-rescue` (B3)** — the
  reading-fluency spine.
- **`reading-with-your-ear-on` (H3)** — the lesson that makes the stage one thing, not two.
- **`the-ear-gym-routine` (G4) + `the-sight-reading-habit` (B6)** — Stage 8 only works if the
  reader does a little every day; these prescribe it.

---

## Status

**PLANNED 2026-09-04.** Research: `stage-8-research.md` (22 passes + re-verify). Next: build
8a — Movements A → H, movement by movement, to the bar above. 8b waits for Stage 6–7.