# Decisions

Locked decisions and the reasoning behind them. Add new ones at the top with a date.

---

## 2026-09-02 (night, later) — Notation was broken on mobile everywhere

The user showed a phone screenshot: on `the-g-string` (and every other notated example) the
staff and clef rendered but **the noteheads didn't**, and only some labels showed. Cause:
`.notation svg { max-width: 100% }` scaled the SVG down to fit a phone column, but `getBBox()`
stays in the unscaled coordinate space, so the HTML label overlay drifted off the notes
(worse further along the line); a one-shot rAF measurement also raced the music-font load.

Fixed (`38e27df`): the SVG renders at natural width and the **well scrolls horizontally** on
narrow screens — never scaled down. Label positions are mapped through
`k = renderedWidth / widthAttr` so they sit centred under each note at any width; the measure
retries ~30 frames. Verified at desktop and 320px: noteheads visible, zero overlap, zero
alignment error, on teaching examples, worksheets and unlabelled examples. `RULES.md` #2 now
requires verifying every example at phone width.

## 2026-09-02 (night) — `RULES.md`, and the content-quality campaign

The user reviewed the four reworked lessons and Direction A. Direction A is accepted. But:

- A notated example (`why-g-major-has-one-sharp`'s scale) shipped with **no per-note labels at
  all**, and two of the four reworked lessons had the **string dropped** from the labels (an
  optimisation I made to save horizontal space — wrong). For a beginner who can't read music,
  every note must show name + string + finger, every time.
- The four rewrites are still **not deep enough** — too few examples, not enough to actually
  play. A reading lesson like `the-g-string` should have several patterns *and* a real tune or
  two.
- The rewrite standard should have been set before the first 90 lessons were drafted;
  re-writing now costs real time.

Decided:

- **`RULES.md` at repo root** — the hard, non-negotiable rules, checked every change. Rule 1:
  every pitched example labels every note (name + string + finger), no exceptions, single
  string or not. Rule 5: a lesson has enough to actually play (patterns + a real tune), not
  one fragment. Rule 15: **no new stages until every built lesson meets rules 1–7.**
- **`the-g-string` rebuilt as the model reading lesson** — ladder → skips → Hot Cross Buns →
  the opening of Ode to Joy, every note labelled. `detache` and `why-g-major` had full labels
  restored / added.
- `NotatedExample`: `format: { stretchlast: 1 }` so notes fill the staff and the label stacks
  don't collide; a dev-only `console.warn` when a label is missing string/finger; the measure
  step made resilient (retry a few frames).
- **The campaign** (`docs/CONTENT-STANDARD.md` §6): research-first, then rewrite stage by
  stage 0 → 5, verifying every example and every fact. `AnnotatedScore` and annotated lines
  come after. Design work for this phase is done.

## 2026-09-02 (evening) — Content depth: the lessons are under-taught

After the user read the live Stage 0–5 lessons: they feel "too short… they don't go into that
much depth," and nothing yet "explains each and every musical note the way a concert music
sheet would."

Assessment agreed: the **curriculum map is strong and accurate**, but the lesson *writing*
stops at reference-book depth — state the fact, show one example, add a sentence — and skips
the connective tissue a teacher supplies (walk the eye across the notes, name the mistake
before it happens, say why it matters, trace where it comes from). The promised lineage voice
is almost entirely absent from the actual lessons. Honest score against a world-class course:
~6/10. It's a good syllabus and reference; not yet a teacher you could learn from alone.

Decided:

- **A written content standard** — `docs/CONTENT-STANDARD.md`. Four lesson types (atom /
  concept / annotated line / reference card); **the six beats** every lesson must hit (idea →
  see it → hear it → try it → the usual mistake → where it comes from); lineage attribution
  **mandatory** on concept + annotated lessons; `read` vs `perform` stated where relevant. The
  failure mode named as *stopping early*, not *being brief* — a short atom that hits all six
  beats is fine; a concept lesson under ~300 words is skipping beats.
- **A new lesson type + component: the annotated line** (`AnnotatedScore`, or `NotatedExample`
  extended) — one real piece of music gone through note by note, with a tap-linked commentary
  list and moving-cursor playback. First builds: Ode to Joy, the one-octave G-major scale, a
  Suzuki Book 1 phrase; later, the first system of K.216. This is the "every note explained"
  thing the user asked for.
- **`docs/LINEAGE-QUOTES.md`** — a bank of verified quotes + citations so beat 6 is written
  from checked material.
- **Rollout: prove the pattern first, don't mass-rewrite.** Standard → component → rewrite
  Stage 0 + the Stage 1 reading spine (~19 lessons) + two annotated lines → **user reviews on
  the live preview** → then decide the cadence for the rest. Tracked as **Phase 1.5** in
  `PLAN.md`.
- Still bound by the existing steering: no new gates, one primary control per page, hands-free
  test, casual voice. Depth is added in the *writing and the walkthrough*, not in UI chrome.

## 2026-09-02 (evening) — Design: audited, three directions on the table

Ran `design-pass audit` (detectors clean; screenshots of `/`, `/learn`, a lesson).
`docs/DESIGN_REVIEW.md` has the findings. Verdict: calm and consistent, follows its own lock,
but **undernourished** — ~65% empty canvas on wide screens with nothing in the margin, the
`NOW` tag is on all 90 lessons so it says nothing, and the lineage voice is missing from the
frame as well as the prose.

Three directions drafted (full detail + comps in `DESIGN_REVIEW.md`): **A — The Critical
Edition** (margin becomes a second voice carrying the lineage citations; smallest leap;
recommended), **B — The Practice Room** (modern near-monochrome app, the practice bar grows
into a docked companion), **C — Conservatoire** (dark walnut ground, per-stage title plates;
boldest). **Not yet chosen** — `DESIGN_LOCK.md` gets rewritten around the pick during Phase
1.5.

## 2026-09-02 (later) — The note-label system, rebuilt to match the original book

The user pointed at a page from the source PDF (a D-string scale with **name / string /
finger** stacked cleanly under every note — "D · D str · f 0", etc.) and asked whether the
rebuild actually understood the goal: a real teacher-student loop — explain, try it yourself,
then check a clearly laid-out answer — all the way to Mozart. It didn't, yet: `NotatedExample`
was using abcjs's own text annotations, which are cramped, single-line, and can't safely
contain the string. Fixed:

- **`NotatedExample` now takes structured `labels: {name, string, finger}[]`**, one per note,
  rendered as **HTML** (not abcjs annotations) positioned under each notehead by reading its
  real on-screen x-coordinate after render. This gives the exact "D / D str / f 0" stack from
  the book, fully styleable, never garbled.
- **The staff width scales with the number of labelled notes** (`Math.max(300, count * 70)`)
  so labels never crowd their neighbours on busier lines; the well scrolls horizontally past
  ~7-8 notes rather than compressing.
- **`reveal="shown"` vs `"hidden"`** replaces the old `scaffold`/`mode` props: "shown" is a
  teaching example (labels visible, toggle to hide); "hidden" is a worksheet (work it out,
  then tap "show the answer").
- Added **`Quiz`** — a question list with a per-item or all-at-once reveal, for recognition
  quizzes (symbols, terms) — the other half of the book's exercise → answer rhythm that wasn't
  represented yet.
- This does not change the low-interaction steering: revealing is still one tap, nothing is
  scored, nothing gates progress. The fix is about the **content loop** (teach → you try on the
  violin → check a clear answer) and answer clarity, not about adding UI chrome.

## 2026-09-02 — Look, voice & lesson shape (all `OPEN-QUESTIONS.md` answered, defaults accepted)

- **Display name:** "From Zero to Mozart" in the header. **Domain:** `*.vercel.app` for now.
- **Teacher voice:** warm **second person ("you")**, no first-person "I" persona. The
  pedagogical lineage appears as *named asides* ("Leopold Mozart told his students to…",
  "Galamian's picture of tone is…"). Contractions yes, occasional dry humour, no slang. A
  single sample lesson screen gets user approval before mass production.
- **Look:** **warm-editorial.** Off-white paper ground; a real **serif for reading**, clean
  **sans for UI**; one warm ink accent (the brown from the preview). Structural discipline of
  Linear/Vercel, softened — not stark tech-minimal. Theme **follows the system, designed
  light-first**. Motion almost none — a quiet page-fade only; content never moves.
- **taste-skill dials:** DESIGN_VARIANCE 3 · MOTION_INTENSITY 2 · VISUAL_DENSITY 3.
- **Lesson screen skeleton (locked):** breadcrumb (`Stage · track`) + NOW/NEXT/LATER tag top
  corner → title → 1–3 short paragraphs of teacher prose → **one** notated example with a
  single play button and a **slow-default tempo slider** → optional "now try this" line →
  prev / next. One linear spine + a collapsible contents list. No dashboard, no separate
  "practice view" in v1.
- **Worksheets:** show the notation; one "Show the answer" tap reveals names/strings/fingers
  below. No grading, no text input.
- **Scaffold:** Stage 1 examples show note names + string + finger **by default**, with a
  "hide the help" toggle; later stages default to plain notation. (= the PDF's scaffold
  removal, as one button.)
- **Tuner/drone/metronome bar:** in v1, collapsed by default. Drone + metronome always; the
  **tuner asks for mic permission only when opened**, never on page load.
- **Content production:** Claude drafts a whole stage → user reviews on the live preview →
  Claude revises → ships. Music facts checked against sources **while writing**, not in a final
  pass. Production order: **Stage 0 → 5 straight through.**

## 2026-09-01 — Project setup

- **Repo name: `from-zero-to-mozart`.** GitHub: `github.com/parthtiwari-dev/from-zero-to-mozart`
  (MIT, © 2026 Parth Tiwari). Lives at
  `C:\great learning self paced\z Final Projects\from-zero-to-mozart` — the user's regular
  projects folder, **outside OneDrive**.
  Reason: `node_modules` / `.next` in a OneDrive-synced folder causes constant sync churn and
  slowdowns on Windows. Backup/versioning is via **git + GitHub** (needed for Vercel anyway),
  not OneDrive.

- **Source PDFs in `docs/source/`:** `original-violin-book.pdf` (+ `.txt` extract) — the
  193-page course being rebuilt; `vivaldi-spring-easy.pdf` — the user's Vivaldi *Spring* easy
  arrangement (Stage 8 / Vivaldi module, Phase 2); `mozart-k216-violin-part.pdf` and
  `mozart-k216-full-score.pdf` — the destination score (Mozart module, Phase 3). See
  `docs/source/README.md`.

- **Framework: Next.js 16 (App Router) + TypeScript + Tailwind v4, deployed on Vercel.
  Fully static (SSG). No database, no accounts, no auth in v1.**
  Reason: the user asked for Vercel hosting and "simplest possible". Static removes a whole
  class of complexity. Progress can live in `localStorage` and must never gate anything.

- **v1 scope = Stages 0–5 = PDF Parts I–VI**, then continue to later stages on the live site.
  Reason: the user's explicit answer. It's the whole "foundation" half and a complete,
  coherent first release.

- **No voice / narration / TTS / auto-scroll. Plain, natural, casual written prose only.**
  Reason: the user's explicit answer — "I don't really need a voice thing… the best simple
  written language works for me, written in the most natural and casual way."

- **Notation: `abcjs` primary (correct by construction + built-in playback); `VexFlow` for a
  few bespoke diagrams.** Real violin timbre via `soundfont-player`, not a synth beep.
  Reason: the original PDF's single worst defect was notation whose notehead positions didn't
  match the labels. Generating from a pitch spec makes that class of error impossible.

- **One persistent piece of UI: a collapsible tuner · drone · metronome bar.** Everything else
  is per-lesson and mostly static.
  Reason: hands-free constraint — those three tools are the ones you actually reach for with an
  instrument in hand; nothing else should compete for attention.

- **Design language locked once**, early, via `taste-skill` (`high-end-visual-design`) + local
  `apple-design` + `design-pass` → a `DESIGN_LOCK.md`. Not re-litigated per page.

- **Phase 0 builds one lesson end-to-end as a feel prototype** before mass-producing content.
  Reason: an interactive demo is worth "a million static designs" (apple-design §17) — it sets
  the bar and de-risks the whole content pipeline.

---

## Standing working agreements

- **Accuracy rule.** The user cannot yet catch a wrong music fact. So: verify every claim
  against ≥ 2 sources (a syllabus for theory); cite sources in the content or a notes file;
  when a fingering is contextual, give the beginner / first-position default *and say it's
  contextual*; never assert "the one correct fingering". Keep **"read this"** and
  **"perform this"** as separate, separately-labelled milestones everywhere.

- **Nothing lost.** Every section of the original 193-page PDF maps to a lesson in the new
  site. `PDF-MAP.md` is that checklist and must stay current.

- **Interactivity budget.** Add interaction only when a lesson genuinely needs it. When unsure,
  leave it out. No progress gates, no streaks, no locked content, no "answer to continue".

- **The teacher's voice.** Write the way a good studio teacher actually talks in a lesson —
  direct, warm, specific, honest about what's hard, no textbook stiffness, no filler. Where it
  helps, name the source ("Leopold Mozart tells his students…", "Galamian's picture of tone
  is…").

- **Pages are short.** One idea per screen, readable in place from a music stand. If a page
  needs scrolling during practice, it's too long — split it.
