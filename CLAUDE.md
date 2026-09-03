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
unfamiliar score, name everything on it, play it slowly and honestly, make their own
interpretive choices — **and play back a tune they've only heard.** **The goal is that
capability, not any one piece.** The user's own words for the operative end goal (2026-09-04):
*"I am trying to learn violin, not just play Mozart. End goal: if I hear something, I should be
able to play it on my own."* — see `docs/PRD.md` §3 "the concrete north-star capability — play
by ear". Mozart Violin Concerto No. 3, K.216 is the **north star** — the summit that proves
you've arrived — not the deliverable. Full objective and success criteria: **`docs/PRD.md`**.

It is the rebuild of a 193-page PDF course the user generated with ChatGPT. The curriculum
design was good; the PDF build was not (≈70% whitespace per page, unreliable music notation,
padding). **Nothing in the PDF is lost** — see `docs/PDF-MAP.md`. The original PDF and its
extracted text are in `docs/source/`.

## Who it's for (one specific user)

Adult beginner. Background in **tabla / North-Indian classical music** → rhythm is the strong
axis; Western pitch, harmony, staff-reading and ear-for-pitch are new and the growth goal.
Approaches music as a system; wants the *why*. The tabla background is used as a **bridge**
into Western classical, not as a second subject. Goal: independent musicianship (read →
play → hear → understand → choose), whose plain-language form is **"if I hear it, I can play
it"** (`docs/PRD.md` §3). The sargam/movable-Sa ear is a real asset for that — point it at
Western tunes. Full profile: `docs/RESEARCH.md`; objective: `docs/PRD.md`.

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
| `docs/stage-plans/stage-4-research.md` | Stage 4 (Scales & musicianship I) — the deep research, **20 passes + a re-verification pass** (what a scale is · steps & the major formula · key signatures · circle of fifths · minor · the 12 keys · intervals · the ear thread · triads · diatonic harmony · the dominant 7th · cadences · phrase & structure · arpeggios · the physics · other scale families · scale practice · transposition · the K.216 first note · repertoire · non-chord tones / harmonic rhythm / key character from the re-verify), each with draft lessons; ends with a 16-movement plan (A–P, ~63 concept + 7 tune/scale) + merge candidates + a full sources list. |
| `docs/stage-plans/stage-4.md` | Stage 4 — the **build list**: Movements A–P, the **4a/4b/4c split** (4a Scales & keys · 4b Intervals, chords & harmony · 4c Arpeggios, the physics & the rest · P the tunes). Status: **BUILT 2026-09-03, expanded 2026-09-04 → 70 lessons** (63 concept + 7 repertoire). Every scale (modes, pentatonic, blues, chromatic, symmetrical, world) and every chord (triads, 7ths, suspended/added, extended, secondary dominants, borrowed, chromatic, altered/quartal) covered as real lessons or cited cards. |
| `docs/stage-plans/stage-5-research.md` | Stage 5 (The bow) — the deep research, **15 passes + a re-verification pass** (bow physics / Helmholtz & the three controls · tone & son filé · string crossings & bariolage · détaché & its family · legato & dividing the bow · martelé · the NEXT layer: staccato/portato/collé/hooked/retakes · off the string: spiccato/sautillé/the continuum · the far shore: ricochet/fouetté/Viotti/chop · colour strokes · **reading a printed bowing** · dynamics as a bow decision · bow-arm health & the tabla bridge · the atlas & the Foundation gate · re-verify — folds in pizzicato + rolling a chord with the bow). Ends with a movement-plan sketch + merge candidates + the 14-skeleton-slug fate table + full sources. |
| `docs/stage-plans/stage-5.md` | Stage 5 — the **build list**: Movements A–L + P, the **5a/5b/5c split** (5a Tone: how the bow makes a sound · 5b The strokes · 5c Reading & shaping with the bow + the gate). **~36 concept + 5 repertoire ≈ 41 lessons.** Records the 6 delegated decisions (2026-09-04): PERFORM set = détaché/legato/martelé/clean crossing/son filé (off-string = recognise); "reading a printed bowing" = 4 lessons; the **play-by-ear thread** runs through the stage (each part ends with a "play it back" beat, `finding-a-tune-by-ear` lesson, the gate gains an ear-to-instrument check); pizzicato + rolling-a-chord folded in as real lessons; the 14-slug fate table. Status: **PLANNED 2026-09-04; not yet built.** |
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
| **4 · Scales & musicianship** | ✔ **BUILT 2026-09-03** — `stage-plans/stage-4-research.md` (20 passes) + `stage-4.md` (4a/4b/4c, Movements A–P). **70 lessons** (63 concept + 7 repertoire). Build green (231 pages), lint + tsc clean. Owns the K.216 first-note debt — `the-first-note-of-mozart` (O2). |
| **5 · The bow** | ⏳ **NEXT — research + plan DONE (2026-09-04).** `stage-plans/stage-5-research.md` (15 passes) + `stage-5.md` (build list, 5a/5b/5c, Movements A–L + P, ~41 lessons). Skeleton = 14 thin lessons (`detache` = polish, 13 = rewrite/split — fate table in `stage-5.md`). **Play-by-ear thread runs through the stage** (see `PRD.md` §3). Next: **build** 5a → 5b → 5c → P, movement by movement. Then → **Foundation gate** (end of v1). |

**Stage 0–2 audit (`docs/stage-audit.md`, 2026-09-02):** every published lesson checked
against `PRD.md` §7; 7 thin Stage-1 lessons deepened, 4 partial Stage-1 tunes completed, a
"usual mistake" beat added to every tune. Stages 0–2 meet the bar.

**Design: done.** Direction A ("The Critical Edition") — ivory/sepia/oxblood, the scholarly
left margin (`<Margin>`/`<Cite>`), lesson locator, spelled-out notation labels.
`docs/DESIGN_LOCK.md` / `docs/DESIGN_REVIEW.md`.

**Pipeline (proven):** MDX + `<NotatedExample>` (abcjs render + violin-timbre playback + real
name/string/finger label overlay + `rhythmOnly` + `followPlayback` + `howToPlay`) + `<Quiz>` +
`<CircleOfFifths>` + `<Diagram>` family + the tuner/drone/metronome bar + `/learn` + `/practice`
+ `/mozart`. Build: `npm run build` (231 pages), `npm run lint`, `npx tsc --noEmit` — all green.
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

**Stage 4 (Scales & musicianship I) — BUILT (2026-09-03), EXPANDED (2026-09-04 → 70).**
Research: `docs/stage-plans/stage-4-research.md` (20 passes + a re-verification pass). Plan:
`docs/stage-plans/stage-4.md` (4a/4b/4c, Movements A–P). Live: **70 lessons** (63 concept +
7 repertoire). Build green (231 pages), lint + tsc clean.

- **4a — Scales & keys** (A–E, 14): what a scale is · scale degrees & their pull · do-re-mi /
  Sa-re-ga · steps & the major formula · key signatures in full · the circle of fifths (the
  violin's G-D-A-E = four spokes) · near/far keys · what major & minor mean · the three minors
  · relative & parallel · the twelve keys (card) · the keys the violin loves (+ Schubart
  affekt).
- **4b — Intervals, chords & harmony** (F–I, ~27 — the load-bearing block): what an interval
  is · the intervals in the major scale (+ inversion) · aug/dim & the tritone (+ consonance/
  dissonance) · **hearing the scale degrees** (the drone drill — first real ear-gym lesson) ·
  tuning by ear · **Movement G (chords, 6):** what a triad is · the four qualities · inversions
  & spelling · suspended & added-tone chords · **reading a chord symbol** (the lead-sheet
  code) · chords on the violin (double stops = chord fragments) · **Movement H (harmony, 11):**
  the chords of a key (+ T/PD/D) · harmonising a tune you know · non-chord tones · harmonic
  rhythm · the dominant seventh · other 7ths (card) · **extended chords** (9/11/13) ·
  **secondary dominants** (V7/V, tonicization) · **borrowed chords & mode mixture** (♭VI ♭VII
  iv) · **the chromatic chords** (card: Neapolitan sixth, augmented sixths, dim7 pivot) ·
  **altered & quartal chords** (card: 7♯9, quartal, polychords, clusters) · **Movement I
  (cadences & phrase, 5):** what a cadence is · the other three cadences (+ Picardy) · cadences
  in your own tunes · motif/phrase/period (+ sequence) · phrases breathe (bow track).
- **4c — Arpeggios, the physics & the rest** (J–O, ~22): what an arpeggio is · the
  first-position arpeggios · broken 3rds & the V7 arpeggio · **arpeggios in real music** (the
  K.216 opening = a G-major arpeggio; the four numberings) · the harmonic series · why your
  violin rings · in-tune-is-not-one-thing (3 temperaments; the drone/just bridge) · **Movement
  L (every scale, 9):** the modes · Dorian & Mixolydian · Phrygian/Lydian/Locrian · the
  pentatonic scales · the blues scale · the chromatic scale · the symmetrical scales
  (whole-tone + octatonic) · scales from around the world (card) · **`a-raga-is-not-a-scale`**
  (thaat vs raga, cited) · how to practise a scale · which scales now · transposing a tune ·
  **`read-the-harmony-of-a-line`** (the capstone) · **`the-first-note-of-mozart`** (the K.216
  debt paid) · the musicianship check.
- **Movement P — the tunes:** the scale/arpeggio set (`stage-4-scales-and-arpeggios`) · Eine
  kleine Nachtmusik opening (G, I↔V7 arpeggios — *simplified*, flagged) · Canon in D (the
  progression) · Scarborough Fair (E Dorian vs E minor) · Für Elise theme (A minor + leading
  tone) · Vivaldi *Spring* theme (D, ritornello + f/p echo — *simplified/transposed*, flagged)
  · Aura Lee (C major hand).
- **Movement P — the tunes:** the scale/arpeggio set · Eine kleine Nachtmusik opening
  (*simplified*, flagged) · Canon in D · Scarborough Fair (E Dorian vs E minor) · Für Elise
  theme · Vivaldi *Spring* theme (*simplified/transposed*, flagged) · Aura Lee.
- Old thin slugs deleted: `major-and-minor`, `parallel-and-relative`, `your-scale-practice-
  order`, `other-scales`, `intervals`, `triads`, `cadences`, `arpeggios`,
  `the-other-scales-and-the-modes`. Seven kept-slug lessons rewritten in place.
- **2026-09-04 expansion** (user: *"all type of scales and all type of chords… add more
  lessons"*): +15 lessons — Movement L 2→9, Movement G 3→6, Movement H 6→11. Every scale
  family and every chord type now has a real lesson or a cited REFERENCE card.
- **2026-09-04 audit** (user: *"recheck everything from my lens"*): `tools/abc-barcheck.py`
  built (catches metrically-wrong bars — abcjs renders them silently) + a music-fact re-read.
  **15 fixes**: 8 bar-sum/metre errors, 2 tune rewrites (Scarborough Fair, Für Elise —
  didn't scan / wrong pitches), 2 music-fact fixes (augmented scale, enigmatic scale),
  3 quality-bar fixes. Details in `stage-plans/stage-4.md` §Audit. Stage 4 now barcheck-clean.
- **Still to do:** finish browser spot-check (~15/70 done); verify `tune-vivaldi-spring-theme`
  vs `source/vivaldi-spring-easy.pdf`, and `tune-eine-kleine-nachtmusik` / `tune-aura-lee`
  melodies against a second source (all three flagged in-lesson). `NOTATION-COVERAGE.md`
  Stage-4 section: **done**.

---

## NEXT SESSION — Stage 4 loose ends → viral-melody appendix → Stage 5 (The bow)

User (2026-09-04): *"all these things and more … everything you need to research above and
beyond without making the mistakes that you have been making throughout."* Do all three, in
order. **Read `## Mistakes to avoid` below before writing a single lesson.**

### 1 — Stage 4 loose ends (small)
- **Browser spot-check** the ~55 unverified lessons (render + press play + reveal labels;
  they must align under the noteheads, no horizontal scroll — `RULES.md` #1, R5, #2). ~15
  checked so far.
- **Verify three tune melodies** against a 2nd source (all flagged in-lesson as
  simplified/unverified): `tune-vivaldi-spring-theme` vs `source/vivaldi-spring-easy.pdf`;
  `tune-eine-kleine-nachtmusik`; `tune-aura-lee`.
- **Run `python tools/abc-barcheck.py`** — should stay clean for Stage 4. (Pre-Stage-4 flags
  it prints are known: mostly anacrusis false-positives + `tune-london-bridge` /
  `tune-perpetual-motion` / `slides-and-octave-signs` worth a real look later.)

### 2 — The viral-melody research appendix (user's standing ask, 2026-09-03)
Research the **best-sounding / most-recognisable / "viral" melodies** — the tunes people
actually want to play. Same discipline as Stage 3/4: **search ~10, write that section, repeat.**
Append a curated, tagged list to `docs/REPERTOIRE.md` (the section spec is already there:
"The best-sounding / viral melodies appendix — TO RESEARCH"). Four buckets: **film / TV / game
themes** (Hedwig's, Married Life, He's a Pirate, Interstellar, Skyrim/Zelda/GoT, La La Land,
Requiem for a Dream, My Heart Will Go On, Over the Rainbow); **famous classical openings**
(Canon in D, Ave Maria ×2, Méditation, The Swan, Air on the G String, Salut d'Amour, Vivaldi
Spring, Für Elise, Jesu Joy, Clair de Lune); **trad / fiddle tunes that go viral** (Ashokan
Farewell, Orange Blossom Special / Devil Went Down to Georgia as goals, Czardas, Irish session
standards, Amazing Grace, Danny Boy, Scarborough Fair, Greensleeves, klezmer/Balkan hooks);
**pop hooks** (one-phrase songs — targets, flag the afternoon-easy ones). Tag each: **key ·
lowest position · the hook · first-position-playable now? · PD status or licensed-arrangement
target · which stage's skill it fits.** Feeds `/practice` + the Tier-0/1 song bank.

### 3 — Stage 5: The bow — RESEARCH + PLAN DONE (2026-09-04) → BUILD IS NEXT
The campaign's next stage; ends at the **Foundation gate** (end of v1). PDF Part VI (p111–133).
Both docs written: **`docs/stage-plans/stage-5-research.md`** (15 passes) +
**`docs/stage-plans/stage-5.md`** (build list — Movements A–L + P, **5a Tone / 5b The strokes
/ 5c Reading & shaping + the gate**, ~41 lessons). The 6 decisions (user delegated them
2026-09-04, "idk these answers… plan it fully then we implement"): PERFORM set = détaché /
legato / martelé / clean crossing / son filé (everything off-string = recognise);
**"reading a printed bowing" = 4 lessons** (`where-in-the-bow`, `the-rule-of-the-down-bow`,
`reading-a-bowing`, `bowing-a-passage-yourself` — capstoned on the K.216 first solo phrase);
the **play-by-ear thread runs through the stage** (each part ends with a "play it back" beat,
a `finding-a-tune-by-ear` lesson, and the Foundation gate gains an ear-to-instrument check —
`PRD.md` §3); the atlas → ~18 real cards; **pizzicato** and **rolling-a-chord-with-the-bow**
folded in as real lessons; gate repertoire = simplified Bach *Air* + Gossec *Gavotte* (clears
the Stage 3 J5 deferral) + Handel *Conqu'ring Hero* (martelé) + a Bach *Musette* / Handel
*Bourrée* gate piece. Next: **build** 5a → 5b → 5c → P, movement by movement, per `stage-5.md`.
`detache` = polish; the other 13 skeleton lessons = rewrite/split (fate table in `stage-5.md`).

**Build-scope checklist (from the research doc — every item is covered there):**
- **Bow physics in full** — the three controls (speed × weight/pressure × sounding point /
  contact point) and the trade-offs between them; hair amount, bow angle, keeping the bow
  straight ("the highway"); how each control changes tone; Galamian's model; Simon Fischer's
  "tone production" chapter; the *bow-speed* vs *bow-pressure* distinction beginners get wrong.
- **Tone** — *son filé* (a sustained tone, frog to tip, even); whole-bow control; the
  resonance/sounding point; catching the string (the start of the stroke); bow changes that
  don't bump; **bow distribution as a planned skill** (not just "use more bow" — deciding in
  advance where in the bow each note falls so you don't run out). `LESSONS-FROM-MOZART.md` §1.
- **String crossings** — arm planes / levels; the wrist and fingers smoothing the change;
  crossing on a slur vs separate; **bariolage** (rocking between a stopped note and an open
  string); double-stop crossings (Stage 6 tie-in, reading here).
- **The core strokes — to PERFORM now** (Stage 3 taught reading them; this is doing them):
  **détaché** and its family (simple / grand / accented / lancé / porté / détaché porté);
  **legato / slur** (one bow, many notes; dividing the bow; the slur that crosses a string);
  **martelé** (the "hammered" stroke — bite, release, stop; from the frog and from the middle;
  martelé vs a plain accent).
- **The next layer (NEXT-tagged)** — **staccato** (on-string, and one-bow up/down-bow staccato
  — a row of martelés in one bow); **portato / louré** (pulsed notes under one slur —
  connects to Stage 3 C3); **collé** (a pinched pluck-with-the-bow); the **brush stroke**;
  **hooked bowing** (two notes same direction, a stop between); **retakes / circles** (lift
  and reset — links to Stage 3 D1 and `phrases-breathe` I5).
- **Off the string (NEXT / LATER)** — **spiccato** (a controlled bounce, from the middle);
  **sautillé** (a fast wrist bounce, the bow doing the work); the **spiccato ↔ sautillé
  continuum** and how tempo moves you along it; a clear "you're not there yet, but here's what
  it is" framing.
- **The far shore (LATER / REFERENCE cards)** — **ricochet / jeté** (a thrown, rebounding
  bounce); **flying staccato / flying spiccato**; **fouetté** (whipped); the **Viotti stroke**;
  **chopping** (fiddle percussion). Name, recognise, know what era / style asks for each.
- **Colour strokes** — **tremolo** (unmeasured — recap Stage 2/3 notation, *do* it here);
  **sul ponticello** / **sul tasto** / **flautando** as bow-placement colours (recap Stage 3
  D3); **col legno** (battuto / tratto); **au talon** / **à la pointe** (at the frog / at the
  tip) as instructions.
- **Reading a printed bowing** (`LESSONS-FROM-MOZART.md` §1, the make-or-break bit) — a real
  part's bowing is information: `⊓`/`V` direction, the retakes, *where in the bow* (frog /
  middle / tip / `Sp.` = *Spitze* / `Pt.` = *punta* / `au talon`), the slur groups, `f`–`p`
  echoes needing a **bow-speed** change (messa di voce, subito p). Editorial vs composer
  bowings (the K.216 "above the staff = Mozart's, below = the editor's" footnote). A lesson
  that walks a marked-up phrase the way `decode-a-dense-line` walked the symbols.
- **Dynamics as a bow decision** — completes the Stage 3 `dynamics-are-a-bow-thing` bridge:
  forte near the bridge / more weight / faster bow; piano toward the fingerboard / lighter /
  slower; `< >` on one long note = *messa di voce*; the crescendo that's a bow-speed change.
- **The bow-stroke atlas** — one *real* card per stroke (name · stage · notation · sound ·
  how to practise · what NOT to confuse it with · a listening example). This is the PDF's worst
  padding (copy-pasted paragraphs) done right. Also a reference library candidate.
- **Bow-arm health** — tension audits, the flexible bow hold under load, the pinky, thumb
  counter-pressure, warming up the stroke; ties Stage 0's `holding-the-bow`.
- **The Foundation gate** — end-of-Stage-5 check: *you can play any first-position tune in
  G/D/A/C at sight, keep steady time, produce an even controlled tone with the core strokes,
  hear when a note is out and fix it, play ~30 real melodies* (`PRD.md` §4). A check-piece +
  the repertoire: **a legato *Air* (simplified) · a détaché Gavotte · a martelé study-piece ·
  the gate check-piece** (`THE-PATH.md` §6). Some of these are on the viral-melody list.

**Deferred from earlier stages:** `tune-gossec-gavotte` (Stage 3 J5 — needs the Suzuki Bk 1
first-position arrangement or a MusicXML export; its D.C. al Fine is already taught). Stage 1's
4 tunes pending PD sources (song-of-the-wind, go-tell-aunt-rhody, long-long-ago,
french-folk-song); Stage 2's 3 (Pop Goes the Weasel, Jolly Good Fellow, Deck the Halls). The
10 Stage-1 tunes to re-notate in true (not simplified) rhythm.

## Mistakes to avoid (learned the hard way, Stages 1–4 — DO NOT repeat)

1. **Bar sums.** Every `<NotatedExample>` with an explicit `M:` and `L:` — the notes in each
   bar must sum to the metre. abcjs renders a short/long bar **silently**; `npm run build`
   never catches it. **Run `python tools/abc-barcheck.py` before every commit.** (Stage 4
   shipped with 8 of these before the audit.)
2. **Octave in first-position scales.** In `K:G` / `K:C` treble, the first-position violin
   octave is `G, A, B, C  D E F G` (with commas / capitals) — **not** `G A B c d e f g` (that's
   an octave up). Getting this wrong makes every fingering label wrong. `G,`=G3, `D`=D4,
   `A`=A4, `c`=C5, `e`=E5. Cross-check the ABC pitch against the label every time.
3. **Playable chords.** A rolled 3-/4-note chord needs its notes on **3+ different strings**
   (`[G,DB]` = open G + open D + B-on-A-string works; `[G,B,D]` = two notes on the G string
   does not). If it's not playable, say so in the caption ("written as a block chord; a
   violinist rolls or breaks it") and label the strings honestly.
4. **Tune melodies.** Do **not** reconstruct a famous tune from memory. Verify pitches *and*
   rhythm against ≥2 sources (`RULES.md` #8). If you can't, notate a deliberately simplified
   version and **flag it in the lesson and its `<Cite>`** ("simplified; verify against a lead
   sheet"). Scarborough Fair and Für Elise both shipped wrong first.
5. **Don't compress a topic into a table-only card.** The user pushed back twice on this.
   Every distinct scale / chord / stroke gets a real lesson with notation, or a REFERENCE
   card that still **shows the thing in notation**, not just a row in a grid.
6. **Label length.** The `name` field is `note + one short qualifier` (e.g. `"F♯ · ^7"`,
   `"G+D+B chord"`). Explanatory sentences go in the **caption**. Long `name` text wraps and
   overlaps the neighbouring labels / the play button.
7. **Unrenderable glyphs.** The double-sharp/double-flat Unicode chars (𝄪 U+1D12A, 𝄫 U+1D12B)
   show as tofu in the site font — spell them out in prose and labels ("x-shaped sign",
   "♭♭", "F-double-sharp"). The abcjs staff renders the real glyph fine from `^^F` / `__B`.
8. **The six beats.** Every concept/skill lesson needs **beat 5 (the usual mistake)** and
   **beat 6 (a cited lineage aside)** — not just the fact + an example. Grep your new lessons
   for "usual mistake" / "<Cite" before committing.
9. **The project path.** It is `C:\great learning self paced\z Final Projects\from-zero-to-mozart`
   — "Projects", not "Positions". A path typo has created a stray sibling directory twice.
10. **Indian-music facts** — the user *can* catch these. Thaat = scale (pitch-set); raga =
    grammar (aaroha/avaroha/pakad/rasa) — compare pitch-sets, never equate. Intonation is
    drone-referenced just intonation; **no shruti-to-cents claims**. Cite Bhatkhande / a raga
    reference.

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
- **Before committing lesson work: `python tools/abc-barcheck.py`** — sums every bar of every
  `<NotatedExample>` against its metre. abcjs draws a wrong bar silently; the build won't
  catch it. Then verify each example in the browser (render + press play + reveal the labels —
  they must line up with the noteheads and stay legible on a busy line) and every music fact
  against `docs/RESEARCH.md` / a syllabus before it ships. Keep `docs/PDF-MAP.md` current.
- **See `## Mistakes to avoid` in the NEXT SESSION block** — the concrete errors Stages 1–4
  shipped with (bar sums, first-position octave in the ABC, unplayable chords, tunes from
  memory, table-only cards, long labels, tofu glyphs, missing beat 5/6). Read it before
  writing lessons.
