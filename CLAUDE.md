# from-zero-to-mozart — project guide

@AGENTS.md

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
| `docs/PLAN.md` | the approved plan (source of truth for scope & phasing) |
| `docs/CURRICULUM.md` | the 10-stage content map, gates, per-stage topic lists |
| `docs/REPERTOIRE.md` | song bank (100+), étude ladder, scale system, "20 famous works" thread |
| `docs/RESEARCH.md` | user profile, pedagogical lineage, syllabus findings, notation-library notes, sources |
| `docs/DECISIONS.md` | locked decisions + rationale |
| `docs/OPEN-QUESTIONS.md` | to discuss before/while building (next session) |
| `docs/PDF-MAP.md` | every section of the original PDF → its target stage/lesson |
| `docs/source/` | the original PDF + text extract, the Vivaldi *Spring* arrangement, the Mozart K.216 score & violin part (`docs/source/README.md`) |

## Status

Phase 0 — scaffolded, moved into its GitHub repo, source PDFs in place. **Next session:** work
through `docs/OPEN-QUESTIONS.md` with the user first, then install `taste-skill`, lock the
design (→ `DESIGN_LOCK.md`), and build one lesson end-to-end as the feel prototype before
mass-producing Stages 0–5.
