# Decisions

Locked decisions and the reasoning behind them. Add new ones at the top with a date.

---

## 2026-09-01 — Project setup

- **Project lives at `C:\Users\workf\violin-course\` (outside OneDrive).**
  Reason: `node_modules` / `.next` in a OneDrive-synced folder causes constant sync churn and
  slowdowns on Windows. Backup/versioning is via **git + GitHub** (which we need anyway for
  Vercel), not OneDrive. The original PDF stays in its OneDrive location; a copy is in
  `docs/source/`.

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
