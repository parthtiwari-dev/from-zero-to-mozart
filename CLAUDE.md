# from-zero-to-mozart — project guide

@AGENTS.md

> **Read `RULES.md` (repo root) before touching content or the notation component.** The hard,
> non-negotiable rules live there — especially: every pitched notated example labels *every*
> note with name + string + finger, and no new stages until the built lessons meet the
> standard.

> Repo: `github.com/parthtiwari-dev/from-zero-to-mozart` · lives at
> `C:\great learning self paced\z Final Projects\from-zero-to-mozart` (outside OneDrive).
> Deploys to Vercel (static). Run `npm run dev`.

## What this is

An interactive violin-learning **website** that teaches one adult beginner to **read, play,
hear and understand music** on the violin — to the point of independent musicianship: open an
unfamiliar score, name everything on it, play it slowly and honestly, and make their own
interpretive choices. **The goal is that capability, not any one piece.** Mozart Violin
Concerto No. 3, K.216 is the **north star** — the summit that proves you've arrived — not the
deliverable. Full objective and success criteria: **`docs/PRD.md`**.

It is the rebuild of a 193-page PDF course the user generated with ChatGPT. The curriculum
design was good; the PDF build was not (≈70% whitespace per page, unreliable music notation,
padding). **Nothing in the PDF is lost** — see `docs/PDF-MAP.md`. The original PDF and its
extracted text are in `docs/source/`.

## Who it's for (one specific user)

Adult beginner. Background in **tabla / North-Indian classical music** → rhythm is the strong
axis; Western pitch, harmony, staff-reading and ear-for-pitch are new and the growth goal.
Approaches music as a system; wants the *why*. The tabla background is used as a **bridge**
into Western classical, not as a second subject. Goal: independent musicianship (read →
play → hear → understand → choose). Full profile: `docs/RESEARCH.md`; objective: `docs/PRD.md`.

## Hard steering from the user (these override generic instincts)

1. **Do not over-engineer. Simplest possible UI.** It should *feel* amazing from the user's
   side — calm, trustworthy, focused — not be technically impressive.
2. **v1 = a faithful, beautiful conversion of the PDF into a usable website.** Not a platform,
   not a pile of interactive widgets.
3. **Low-interaction by design.** Both of the user's hands are on the violin while learning. A
   page must be readable with almost no clicking. One idea per screen, short enough that you
   never scroll mid-practice. The only thing you press during practice is one "play the
   example" control. **No voice / narration / TTS / auto-scroll** — the user does not want a
   "voice thing".
4. **Nothing gates progress.** No "answer to continue", no streaks, no locked lessons.
5. **It must feel like a real classical teacher** — teaching in a real lineage (Leopold Mozart's
   *Violinschule* → French school → Auer/Flesch/Galamian → Suzuki/Hahn). Prose is plain,
   natural, casual — the way a good teacher actually talks in a lesson. Written prose only.
6. **Foundation → intermediate → the giants** (Paganini, Vivaldi, Bach, Mozart). Two hard gates
   before the giants. **Curation is the hard part and the point.**

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind v4, deployed on **Vercel**.
  ⚠️ Next 16 has breaking changes vs. older Next — read `node_modules/next/dist/docs/` before
  writing framework code (see `AGENTS.md`).
- **Fully static (SSG). No database, no accounts in v1.** Progress lives in `localStorage` only
  and is never a gate.
- Content: **MDX lessons** + a typed `curriculum.ts` manifest (Stages → Units → Lessons).
- **Notation & audio (must be excellent):** `abcjs` for notated examples with one-press
  playback (correct by construction — fixes the PDF's #1 defect); `VexFlow` for a few bespoke
  diagrams (fingerboard, finger geometry); Web Audio for a single collapsible
  **tuner · drone · metronome** bar (the only persistent UI); `soundfont-player` for a violin
  timbre, not a beep.
- Design locked once via the user's design skills: `taste-skill` (`high-end-visual-design`) +
  local `apple-design` + `design-pass` → a `DESIGN_LOCK.md`.

## Structure of the curriculum

10 stages, each carrying five parallel tracks (Reading / Left hand / Right hand-bow /
Ear-musicianship / practised repertoire) with technique tagged NOW / NEXT / LATER / REFERENCE.
Full map: `docs/CURRICULUM.md`. Repertoire/étude/scale spine: `docs/REPERTOIRE.md`.

- **v1 (Phase 1)** = **Stages 0–5** = PDF Parts I–VI (Setup → First position & the staff →
  Rhythm → Score symbols → Scales & musicianship I → The bow). Ends at the **Foundation gate**.
- Phase 2 = Stages 6–8 + reference libraries + Vivaldi module. Ends at the **Intermediate gate**.
- Phase 3 = Stage 9 repertoire journey + the Mozart K.216 deep module.
- Phase 4 = polish, QA against sources, a11y, performance, offline.

## Working agreements

- **Accuracy:** the user cannot yet catch a wrong music fact. Verify every claim; cite sources;
  for contextual fingerings give the beginner/first-position default and say it's contextual;
  keep "**read**" and "**perform**" as separate milestones everywhere. See `docs/DECISIONS.md`.
- Every notated example: render + play + check the ABC matches the stated pitch/finger.
- Keep `docs/PDF-MAP.md` updated — it's the "nothing lost" checklist.
- Don't add interactivity beyond what a lesson needs. When unsure, leave it out.

## Docs index

| File | What's in it |
|---|---|
| `docs/PRD.md` | **the objective and what "done" means** — the goal is independent musicianship, *not* a specific piece; K.216 is the north star, not the deliverable. Success criteria, non-goals, the quality bar. Sits above everything. |
| `RULES.md` (repo root) | the hard, non-negotiable rules — check every change against these |
| `docs/THE-PATH.md` | **the shape of the journey** — the real named-music path, per-stage end goals, how repertoire is presented, sheet-music sourcing. Read before planning any stage. |
| `docs/PLAN.md` | phasing & build order |
| `docs/CONTENT-STANDARD.md` | how deep a lesson goes — the six beats, the five lesson types, the melody/`AnnotatedScore` vehicle, the rewrite order |
| `docs/NOTATION-COVERAGE.md` | every notation symbol → the lesson that teaches it (RULES.md R4) |
| `docs/stage-plans/stage-N.md` | the research + plan for each stage, approved by the user before writing |
| `docs/stage-plans/stage-2-research.md` | Stage 2 (Rhythm) — the research pass + a verification sweep + the user's 9 decisions (§0): metric counting only, the tabla bridge is one optional lesson, compound metre + triplets + syncopation taught in full |
| `docs/stage-plans/stage-2.md` | Stage 2 (Rhythm) — the lesson-by-lesson plan (Movements A–I, ~33 skill lessons + tunes). **BUILT.** |
| `docs/stage-plans/stage-3-research.md` | Stage 3 (Score symbols) — the deep research, 9 passes (Tempo · Dynamics · Articulation · Bow & string words · Repeats & the road map · Ornaments · String-part notation · Editions · Putting it together), each with draft lessons + a full sources list. |
| `docs/stage-plans/stage-3.md` | Stage 3 (Score symbols) — the **build list**: Movements A–J, the 3a/3b split, the merges from the research draft, the quality bar. Status: **BUILT — 46 live** (42 skill + 4 tunes); Gossec Gavotte deferred. |
| `docs/LESSONS-FROM-MOZART.md` | what the (deferred) K.216 run taught us the middle stages must teach deeply — bowing, chords, the dense score vocabulary, style. Read before planning Stages 2–7. |
| `docs/stage-plans/mozart-k216.md` | the deferred K.216 module — what's built, the transcription pipeline, how to resume |
| `docs/DESIGN_LOCK.md` | the locked visual language — Direction A ("The Critical Edition"); chosen and built |
| `docs/DESIGN_REVIEW.md` | design audit + the three directions (A/B/C) to choose between |
| `docs/CURRICULUM.md` | the 10-stage content map, gates, per-stage topic lists |
| `docs/REPERTOIRE.md` | song bank (100+), étude ladder, scale system, "20 famous works" thread |
| `docs/RESEARCH.md` | user profile, pedagogical lineage, syllabus findings, notation-library notes, sources |
| `docs/DECISIONS.md` | locked decisions + rationale |
| `docs/OPEN-QUESTIONS.md` | early Phase-0 questions (mostly settled) |
| `docs/PDF-MAP.md` | every section of the original PDF → its target stage/lesson |
| `docs/source/` | the original PDF + text extract, the Vivaldi *Spring* arrangement, the Mozart K.216 score & violin part (`docs/source/README.md`) |

## Status

**Phase 1.5 — the content-quality campaign — is up to Stage 3.** The rule (`RULES.md` #15):
no new stages until every built lesson meets `RULES.md` 1–7 — research-first, then rebuild
**stage by stage 0 → 5** to the six beats, every pitched example fully labelled, every concept
lesson 2–4 play-arounds + real music. Plan each stage with the user (`stage-plans/stage-N.md`).

| Stage | State |
|---|---|
| **0 · Setup** | ✔ written — 11 lessons + `<Diagram>` component & SVGs, open-string audio |
| **1 · First position & the staff** | ✔ rebuilt — `stage-plans/stage-1.md`, Movements A–F, ~43 lessons + 10 published tunes (4 pending PD sources: song-of-the-wind, go-tell-aunt-rhody, long-long-ago, french-folk-song). Deferred: re-notating the published tunes in true (not simplified) rhythm. |
| **2 · Rhythm** | ✔ rebuilt — `stage-plans/stage-2.md`, Movements A–I, 33 skill lessons + 3 tunes. Added `RhythmTree` `<Diagram>` + `rhythmOnly` mode on `<NotatedExample>`. Deferred: 3 tunes (Pop Goes the Weasel / Jolly Good Fellow / Deck the Halls) pending sources. |
| **3 · Score symbols** | ✔ **BUILT 2026-09-03** — `stage-plans/stage-3-research.md` + `stage-3.md`, Movements A–J, **46 lessons** (42 skill + 4 tunes). 1 tune deferred (Gossec Gavotte). Details below. |
| **4 · Scales & musicianship** | ⏳ **NEXT — research first.** See "NEXT SESSION" above. |
| **5 · The bow** | first-draft skeleton live (14 lessons), not yet rebuilt. Then → Foundation gate. |

**Stage 0–2 audit (`docs/stage-audit.md`, 2026-09-02):** every published lesson checked
against `PRD.md` §7; 7 thin Stage-1 lessons deepened, 4 partial Stage-1 tunes completed, a
"usual mistake" beat added to every tune. Stages 0–2 meet the bar.

**Design: done.** Direction A ("The Critical Edition") — ivory/sepia/oxblood, the scholarly
left margin (`<Margin>`/`<Cite>`), lesson locator, spelled-out notation labels.
`docs/DESIGN_LOCK.md` / `docs/DESIGN_REVIEW.md`.

**Pipeline (proven):** MDX + `<NotatedExample>` (abcjs render + violin-timbre playback + real
name/string/finger label overlay + `rhythmOnly` + `followPlayback` + `howToPlay`) + `<Quiz>` +
`<CircleOfFifths>` + `<Diagram>` family + the tuner/drone/metronome bar + `/learn` + `/practice`
+ `/mozart`. Build: `npm run build` (176 pages), `npm run lint`, `npx tsc --noEmit` — all green.
- **K.216 module: deferred** (`docs/stage-plans/mozart-k216.md`). It's Phase 3 and far beyond
  the user now. Built as a proof: `/mozart` index + `mozart-k216` (orientation) +
  `mozart-k216-i-entrance` + `-i-b2` (the first solo, bars 9–19, from a `.mxl` +
  `music21` converter). **The attempt exposed holes in the Stage 2–7 plans — see
  `docs/LESSONS-FROM-MOZART.md`** (bowing as a full language; chords need theory + technique;
  the score-symbol vocabulary is dense; "reading" ≠ "playing it in style"). Fold that into the
  stage plans before writing them.

**Stage 2 (Rhythm) — BUILT (2026-09-02).** `docs/stage-plans/stage-2.md` §Status. Movements
A–I live: **33 skill lessons + 3 tunes** (`tune-when-the-saints`, `tune-row-your-boat`,
`tune-perpetual-motion`), plus infra — `RhythmTree` `<Diagram>` and a `rhythmOnly` mode on
`<NotatedExample>` (one-line staff, counting syllables under notes *and rests*). Built to the
CONTENT-STANDARD bar after the user flagged the first pass as too thin (same miss as Stage 1
— now: 3–5 play-arounds per concept lesson). Key decisions: **metric counting only** ("1 e &
a"), *not* Takadimi/konnakol; the tabla↔Western map is **one optional skippable lesson**;
6/8 + 9/8 + 12/8 + triplets + syncopation taught in full; navigation split (barlines/repeats
here, D.C./D.S./Coda → Stage 3, now built).

**Stage 2 deferred / to finish:**
- The 10 Stage-1 tunes: re-notate in true rhythm + complete to full length (was decision 2).
- 3 more Stage-2 tunes (*Pop Goes the Weasel*, *Jolly Good Fellow*, *Deck the Halls*) — need
  verified melody sources.
- Confirm the exact Leopold Mozart "beat the time" wording (cited as paraphrase in
  `rhythm-first`, `counting-the-beat`).

**Stage 3 (Score symbols) — BUILT (2026-09-03).** Research: `docs/stage-plans/stage-3-research.md`
(9 interleaved passes, every fact double-sourced). Plan: `docs/stage-plans/stage-3.md` (the
47-lesson build list, the 3a/3b split, the merges from the research draft, the quality bar).
Live: **46 lessons across Movements A–J** (42 skill/concept/reference + 4 tunes), read at
Stage-0 depth, six beats, every pitched example fully labelled. Build green (176 pages), lint
+ tsc clean, browser-verified (abcjs decorations, chords, dashed slurs, D.C./Fine, fermata,
harmonic circles, cut time, 1st/2nd-ending voltas all render; labels align).

- **3a — Expression:** A tempo & motion (5), B dynamics (6), C articulation (7).
- **3b — the rest of the page:** D bow & string words (6), E repeats & the road map (4),
  F ornaments (6), G string-part notation (4), H editions (2), I putting it together (2 —
  `decode-a-dense-line` + `the-score-language-check`), J tunes.
- Key framings held: **everything is *reading*** (bow strokes perform in Stage 5, ornaments in
  Stage 6, era-style in the repertoire modules); the keystone is **"the symbol tells you WHAT,
  the era tells you HOW"** (`LESSONS-FROM-MOZART.md` §4); `finger-string-or-position` (G3) is
  the `LESSONS-FROM-MOZART.md` §3 numeral-tangle keystone. Old thin Stage-3 slugs deleted.
- Two `bow`-track lessons (`dynamics-are-a-bow-thing` B6, `a-slur-is-one-bow` C6) carry the
  read→perform bridge explicitly.

**Stage 3 tunes — 4 live, 1 pending.** Live:
- `tune-ode-to-joy-shaped` (dynamic scheme) + `tune-twinkle-articulated` (articulation
  scheme) — from the verified Stage-1 melodies.
- `tune-minuet-in-g` (Petzold BWV Anh. 114, **D major** easy version, binary repeat + 1st/2nd
  endings + f/p terracing) — transcribed from the user's easy-version PDF (`docs/source/`);
  **the two endings are a reconstruction — verify against the PDF.**
- `tune-amazing-grace` (**G major**, first position, mp/cresc/mf/dim/rit/fermata) — the *plain
  standard verse* of the "New Britain" tune; the user's PDF decorates this melody and shifts
  to A major after b.21, so we teach the clean version. Verify the melody if using that PDF.

Pending: `tune-gossec-gavotte` — the user's PDF is a dense cut-time-16ths full score; the
melody isn't reliably transcribable from the raster and it's a Suzuki student piece. Need
MusicXML or the Suzuki Book 1 first-position arrangement. (D.C. al Fine is still taught on the
worked diagram in `da-capo-dal-segno-and-the-coda` E2.)

**Minor cosmetic:** the densest decode / ending examples (~11–14 labels) crowd the label row;
single-note / single-chord examples render left-aligned in the well.

---

## NEXT SESSION — Stage 4 (Scales & musicianship I) : research first

Same campaign as Stages 2–3. **Do the research the way it was done for Stage 3** — interleave
**~10 web searches, then write that section of `docs/stage-plans/stage-4-research.md`, repeat**
(don't do all research then all writing — context gets lost). Every music fact against ≥2
sources / a syllabus (`RULES.md` #8). Then plan (`stage-4.md`) with the user, then build to
the `PRD.md` §7 bar (six beats · 2–4 play-arounds · every note labelled · cited lineage ·
ends at real music).

**Scope** (`docs/CURRICULUM.md` §Stage 4, `docs/PLAN.md` Part A, PDF Part V p89–110):
what a scale is · tonic / scale-degree names · whole & half steps · the major formula
W-W-H-W-W-W-H · **why G major has one sharp** (derived, not asserted) · the **circle of
fifths** · the three minors (natural / harmonic / melodic) · parallel vs relative · the 12
major keys (practical spellings) · **intervals** (number + quality, inversion) with the
ear-training hook · **triads** (M/m/dim/aug, inversions, diatonic I–vii°, primary I–IV–V,
dominant 7th) · **cadences** (perfect / plagal / half / deceptive) · phrase & period,
antecedent/consequent · arpeggios & broken thirds · other scale families (reference:
chromatic, whole-tone, pentatonic, blues, modes) · scale practice order (NOW G/D/A/C 1-oct →
NEXT E-minor, 2-oct → LATER 3-oct, thirds, chromatic) · harmonic series / overtones /
sympathetic resonance / just vs equal temperament · transposition basics.

**Load-bearing:** `PRD.md` §6.1 — the harmony/ear thread (triads, cadences, intervals) is
what K.216 musicianship rests on; **budget real lesson count**, don't treat it as an aside.
Existing thin Stage-4 lessons (`what-a-scale-is`, `intervals`, `triads`, `cadences`,
`major-and-minor`, … — 15 slugs in `lib/curriculum.ts`, and `why-g-major-has-one-sharp` +
`detache` are already rebuilt) get replaced/deepened. `<CircleOfFifths>` component exists.

**Then — the viral-melody appendix (user's explicit ask, 2026-09-03).** *After* Stage 4 is
planned, **research the best-sounding / most-recognisable / "viral" melodies** — the tunes
people actually want to play (film & game themes in the public domain or as *targets*,
famous classical openings, the "20 famous works" thread in `docs/REPERTOIRE.md` §"20+ famous
works", TikTok/reels-viral fiddle tunes, wedding/known hymns) — and **append them after the
Stage-4 plan** as a curated, tagged list (key · lowest position · what makes it catchy · is
it first-position-playable now · PD status / licensed-arrangement target). Same research
discipline: search, verify, write, repeat. This feeds `/practice` and the Stage-9 song bank.

**Deferred from Stage 3:** `tune-gossec-gavotte` (Movement J5) — the source PDF is a raster
full score; it needs the Suzuki Book 1 first-position arrangement or a MusicXML export. Its
one concept (D.C. al Fine) is already taught. Also verify `tune-minuet-in-g`'s two endings
and `tune-amazing-grace`'s melody against the source PDFs when convenient.

Stages 5–9 + the Vivaldi and Mozart modules come after Stage 4.

### Authoring notes

- **How deep a lesson goes: `docs/CONTENT-STANDARD.md`.** Every lesson hits the six beats
  (idea → see it → hear it → try it → the usual mistake → where it comes from); lineage
  attribution is mandatory on concept + annotated lessons. Don't ship a lesson that only
  *states* its fact — walk the reader through it. Run the §7 checklist before it ships.
- Lessons are `content/lessons/<slug>.mdx` + an entry in `registry.ts` + an entry in
  `lib/curriculum.ts` (`published: true` to route it).
- MDX wraps loose text in `<p>`. Components that take rich children must render a block
  container (`<div>`), never `<p>` — see `components/TryThis.tsx`.
- **`<NotatedExample abc labels reveal caption defaultBpm />`** — `abc` is the real notation
  (drives rendering and playback). `labels` is one `{ name, string, finger }` per note, in
  order — rendered as HTML under each notehead (name / "‹string› string" / spelled-out finger
  like "open" / "2nd high"). **Every pitched example must pass a full label for every note —
  `string` included, always** (`RULES.md` 1). Only rhythm-only examples omit labels, and their
  caption says so. `reveal="shown"` (default) = labels visible; `reveal="hidden"` = worksheet
  (plain notation, "show the answer" reveals). `<Margin>Ex. N — …</Margin>` next to an example
  gives it a figure pointer in the gutter. Notes spread to fill the well (`stretchlast`); >~6
  labelled notes scroll horizontally — keep teaching examples shorter, use a real tune only as
  the payoff. Don't use abcjs `"_text"` annotations for labels.
- **`<Quiz items={[{q, a}, ...]} />`** for recognition questions (symbols, terms) — each item
  reveals its answer on tap, or "show all answers" at once.
- **`<NotatedExample rhythmOnly … />`** (Stage 2) — renders a **one-line staff, no pitch**,
  and turns `labels` into counting syllables ("1", "&", "1 e & a") shown under each note *and
  rest*. RULES R1's rhythm-only exception — the caption should say "clap and count". Inject
  `stafflines=1` is automatic; write the ABC on any single pitch (`B` = middle line).
- **Diagrams:** `<ViolinDiagram />`, `<BowDiagram />`, `<BowHoldDiagram />`,
  `<BowLanesDiagram />`, `<RhythmTree />` (the note-value halving tree, Stage 2)
  (`components/Diagram.tsx`) — hand-drawn labelled SVG line art in the notation well. Each
  takes an optional `caption` prop. Keep in-SVG labels to one or two words; detail goes in the
  caption. Tall diagrams get a `maxW` so they don't fill the screen.
- Verify every notated example in the browser (render + press play + reveal the labels — check
  they line up with the notes and are legible on a busy line) and every music fact against
  `docs/RESEARCH.md` sources before it ships. Keep `docs/PDF-MAP.md` status current.
