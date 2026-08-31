# Open questions — to discuss next session

The user said: "there are a lot of things we need to discuss first, we will do that tomorrow."
This is the list to work through before/while building. Grouped, roughly in priority order.

---

## 1. Feel & identity

- **Name.** "violin-course" is a placeholder. What is this thing called? (It's the title bar,
  the domain, the feeling.) Ideas to react to: *The Practice Room* · *From Zero* · *Ground Up* ·
  *The Violin Room* · *Sarangi* (no) · *Cantabile* · *First Position* · keep it plain.
- **Domain.** Custom domain on Vercel, or `*.vercel.app` for now?
- **The teacher persona.** Is there an implied single teacher voice (consistent "I"), or is it
  voiceless-but-warm? Does the lineage (Leopold Mozart, Galamian, Suzuki, Hahn) show up as
  named quotes/sidebars, or just inform the tone silently?
- **Tone calibration.** "Casual and natural" — how casual? Contractions yes. Slang? Humour?
  Second person ("you") throughout? One sample paragraph to agree on before writing 100 of them.

## 2. Look

- Which reference design language to anchor on — Linear (crisp editorial), Vercel (stark
  minimal), something warmer? The `design-pass` skill has Linear/Vercel/Spotify/Apple/etc.
- Light-first, dark-first, or true system-following?
- Typography: a real serif for reading (the "book" feel) + a clean sans for UI? Or all-sans?
- How much motion? (apple-design says springs + interruptible; the user says "not too
  interactive" — motion ≠ interaction, but keep it quiet.)
- The `taste-skill` dials: DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY — pick numbers.
  Current instinct: variance low, motion low, density low.

## 3. Navigation & shape of a "lesson"

- How does the user move through the course? A single linear spine with a "you are here"
  marker? A sidebar tree? A dashboard is probably too much.
- What's on a lesson screen, exactly? Proposed minimum: a title, 1–3 short paragraphs of
  teacher prose, at most one notated example with a play button, maybe a "now try this" line,
  a "next" link. Agree on this skeleton before building.
- Worksheets / answer pages: how does "try, then reveal the answer" work with zero friction?
- Do the NOW/NEXT/LATER/REFERENCE tags show on screen, or just organise things behind the
  scenes?
- Is there a "practice" view that's different from the "learn" view? (e.g. a stripped page with
  just the example + tuner/metronome, for when the violin is already up.)

## 4. The tuner / drone / metronome bar

- Confirm it's wanted in v1 (it's the one non-trivial piece of always-on interactivity).
- Tuner needs microphone permission — acceptable? Or drone + metronome only in v1, tuner later?

## 5. Notation specifics

- Confirm `abcjs` as the engine. Any objection to the way abcjs renders (it's clean but has a
  house look)?
- Playback tempo: fixed per example, or a slider? (A slider is interaction — but arguably the
  one that matters most for practice.)
- Do examples show fingerings/string labels by default, or is that a toggle? (The PDF's
  "scaffold removal" idea — Stage A/B/C.)

## 6. Content production

- Who writes the lesson prose — Claude drafts all of it and the user edits? Claude drafts,
  user approves stage by stage? The user writes some?
- Order of production within v1: strictly Stage 0 → 5, or build the "spine" (titles + skeletons)
  for all six first, then fill?
- How much does each lesson get checked against sources before it ships vs. a QA pass at the
  end?

## 7. The two source files

- Does the user still have the **Vivaldi *Spring* screenshot** and the **Mozart K.216 PDF**
  from the original ChatGPT project? Needed for Stages 8–9 (Phase 2–3, not v1) — but good to
  locate now.

## 8. Later / not-v1 (park these)

- Accounts + cloud progress sync — only if the user later wants cross-device.
- Ear-training gym, rhythm trainer, repertoire browser — Phase 2+.
- Full repertoire scores via OSMD/MusicXML — Phase 3.
- Offline / PWA, print stylesheet — Phase 4.
- Installing `taste-skill` via `npx skills add` — do this at the start of the design-lock step.
