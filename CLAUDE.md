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

An interactive violin-learning **website** that takes an adult beginner from *Ode to Joy* to
**Mozart Violin Concerto No. 3 in G major, K.216**, and to solid intermediate fluency
(sight-read and play in positions 1–5) along the way.

It is the rebuild of a 193-page PDF course the user generated with ChatGPT. The curriculum
design was good; the PDF build was not (≈70% whitespace per page, unreliable music notation,
padding). **Nothing in the PDF is lost** — see `docs/PDF-MAP.md`. The original PDF and its
extracted text are in `docs/source/`.

## Who it's for (one specific user)

Adult beginner. Background in **tabla / North-Indian classical music** → rhythm is the strong
axis; Western pitch, harmony, staff-reading and ear-for-pitch are new and the growth goal.
Approaches music as a system. North star: read Mozart → play Mozart → make their own
interpretive choices. Full profile: `docs/RESEARCH.md`.

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
| `RULES.md` (repo root) | the hard, non-negotiable rules — check every change against these |
| `docs/THE-PATH.md` | **what this course actually is** — the real named-music journey, per-stage end goals, how repertoire is presented, sheet-music sourcing. Read before planning any stage. |
| `docs/PLAN.md` | phasing & build order |
| `docs/CONTENT-STANDARD.md` | how deep a lesson goes — the six beats, the five lesson types, the melody/`AnnotatedScore` vehicle, the rewrite order |
| `docs/NOTATION-COVERAGE.md` | every notation symbol → the lesson that teaches it (RULES.md R4) |
| `docs/stage-plans/stage-N.md` | the research + plan for each stage, approved by the user before writing |
| `docs/stage-plans/stage-2-research.md` | Stage 2 (Rhythm) — the research pass + a verification sweep + the user's 9 decisions (§0): metric counting only, the tabla bridge is one optional lesson, compound metre + triplets + syncopation taught in full |
| `docs/stage-plans/stage-2.md` | Stage 2 (Rhythm) — the lesson-by-lesson plan (Movements A–I, ~33 skill lessons + 9 tunes), awaiting user sign-off |
| `docs/LESSONS-FROM-MOZART.md` | what the (deferred) K.216 run taught us the middle stages must teach deeply — bowing, chords, the dense score vocabulary, style. Read before planning Stages 2–7. |
| `docs/stage-plans/mozart-k216.md` | the deferred K.216 module — what's built, the transcription pipeline, how to resume |
| `docs/DESIGN_LOCK.md` | the locked visual language (being re-picked in Phase 1.5 — see review) |
| `docs/DESIGN_REVIEW.md` | design audit + the three directions (A/B/C) to choose between |
| `docs/CURRICULUM.md` | the 10-stage content map, gates, per-stage topic lists |
| `docs/REPERTOIRE.md` | song bank (100+), étude ladder, scale system, "20 famous works" thread |
| `docs/RESEARCH.md` | user profile, pedagogical lineage, syllabus findings, notation-library notes, sources |
| `docs/DECISIONS.md` | locked decisions + rationale |
| `docs/OPEN-QUESTIONS.md` | to discuss before/while building (next session) |
| `docs/PDF-MAP.md` | every section of the original PDF → its target stage/lesson |
| `docs/source/` | the original PDF + text extract, the Vivaldi *Spring* arrangement, the Mozart K.216 score & violin part (`docs/source/README.md`) |

## Status

**Stages 0–5 drafted and live (90 lessons)** — the whole foundation half, up to the Foundation
gate. Pipeline built and proven: MDX + `NotatedExample` (abcjs render + violin-timbre playback
+ real name/string/finger label overlay + worksheet reveal) + `Quiz` + `CircleOfFifths` +
`PracticeBar` + `/learn` contents. All notation verified rendering; every music fact checked.
Pushed to `main`.

**But the lessons are an accurate skeleton, not finished teaching.** The user read them and
found them too short / not deep enough — they state facts but don't walk you through them, and
no lesson yet goes through a real line of music note by note. See `docs/CONTENT-STANDARD.md`
and `docs/DESIGN_REVIEW.md`.

**Design: done.** Direction A ("The Critical Edition") chosen and built — ivory/sepia/oxblood,
the scholarly left margin with `<Margin>`/`<Cite>`, a lesson locator, spelled-out notation
labels. See `docs/DESIGN_LOCK.md` / `docs/DESIGN_REVIEW.md`.

**Next: Phase 1.5 — the content-quality campaign** (blocking; see `docs/CONTENT-STANDARD.md`
§6). **No new stages until every built lesson meets `RULES.md` 1–7.** Research-first, then
rewrite **stage by stage 0 → 5** to the six beats, with *every pitched example labelling every
note's name + string + finger* and every concept lesson carrying 2–4 examples + a real
tune/pattern to play. Plan each stage with the user first (`docs/stage-plans/stage-N.md`).

- **Stage 0: written** — 11 lessons (added `how-this-course-works`), `<Diagram>` component +
  4 SVGs (`components/Diagram.tsx`), open-string audio examples. Awaiting user review.
- **Stage 1: written to `docs/stage-plans/stage-1.md`** — Movements A–E, 33 skill lessons,
  all published (string order A→D→G→E; every pitched example `M:none` + full
  name/string/finger labels; the old thin lessons + 6 orphan slugs replaced). Verified
  rendering at 1536px. Movement F (the tunes): `NotatedExample` gained `howToPlay` +
  `followPlayback`; `/practice` page is live. **10 of 15 tunes published** (Twinkle rhythms,
  Twinkle, Ode to Joy, Lightly Row, Au Clair de la Lune, London Bridge, Hot Cross Buns, Mary,
  Frère Jacques, Jingle Bells) — our own first-position transcriptions, rhythm simplified.
- **Stage 1 known gaps** (close before Stage 1 is "done" — RULES R3):
  1. **The 10 tunes are partial** — 2–3 phrases each, not the complete melody. Need
     completing to full length.
  2. **5 tunes are "coming soon"** (unpublished, shown muted on `/practice`) — melody needs a
     PD source: `tune-song-of-the-wind` ("Fuchs, du hast die Gans gestohlen"),
     `tune-go-tell-aunt-rhody`, `tune-long-long-ago`, `tune-french-folk-song`,
     `tune-when-the-saints`. Deferred per the user — leave as "coming soon", don't block on it.
  3. Bowing on each tune line should be phrase-specific (direction, bow part, slurs), not
     generic — see `docs/LESSONS-FROM-MOZART.md`.
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
here, D.C./D.S./Coda → Stage 3). Build green (143 pages), lint clean.

**Stage 2 deferred / to finish:**
- The 10 Stage-1 tunes: re-notate in true rhythm + complete to full length (was decision 2).
- 3 more Stage-2 tunes (*Pop Goes the Weasel*, *Jolly Good Fellow*, *Deck the Halls*) — need
  verified melody sources.
- Confirm the exact Leopold Mozart "beat the time" wording (cited as paraphrase in
  `rhythm-first`, `counting-the-beat`).

**Next: Stage 3 (Score symbols).** Research the core with the user first (per
`docs/LESSONS-FROM-MOZART.md` §3 — Stage 3 is make-or-break: ornaments with Baroque/Classical
realisation, editorial-vs-composer marks, the bow-word glossary, position numbers ≠ finger
numbers). Then `docs/stage-plans/stage-3.md`, then write. Stages 4–9 + the Vivaldi and Mozart
modules after.

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
