# Decisions

Locked decisions and the reasoning behind them. Add new ones at the top with a date.

---

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
