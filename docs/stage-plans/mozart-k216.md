# K.216 module — deferred (Phase 3)

**Status: paused 2026-09-02.** It's the finish line, it was always Phase 3, and it's far
beyond the user right now (they've just learned *Ode to Joy*). What follows is so we can pick
it up cleanly later. Read `docs/LESSONS-FROM-MOZART.md` for what the attempt taught us about
Stages 2–7.

## What the module is

Every page of the **solo violin part** rebuilt as our annotated line — name·string·finger on
every note, a how-to-play note per bar, playback — **solo part first, in playing order**, then
the orchestra tuttis as a listening layer. Route: `/mozart`. The user's directive:
*"solo first, orchestra later."*

## What's built and live

| Slug | Covers |
|---|---|
| `mozart-k216` | orientation — what the concerto is, the three movements, Tutti vs Solo |
| `mozart-k216-i-entrance` | movement I, section **B**, bars 9–12 — the solo entrance / theme |
| `mozart-k216-i-b2` | movement I, section **B**, bars 13–19 — the flourish, incl. a shift to 3rd position |

`/mozart` (`app/mozart/page.tsx`) — the index, grouped by movement, `mozart` field on `Lesson`.

## The pipeline (works — resume from here)

1. **Source**: `docs/source/violin-concerto-...-wo-cadenza.mxl` (a MuseScore study
   arrangement, movement I only, `.gitignore`d). Machine-readable via `music21`. It's an
   **abridged** arrangement — solo line is close to complete, tuttis are compressed, some
   solo passagework is trimmed — so **cross-check every section against
   `mozart-k216-violin-part.pdf`** (the Marteau edition; the same edition the popular
   "[Hilary Hahn] … [Sheet]" YouTube video scrolls).
2. **Converter**: `k216gen.py` in the session scratchpad — `music21` part + measure range +
   a per-note fingering dict → our ABC (M:4/4 L:1/4 K:G, with durations, slurs, grace notes,
   chords, trills) + the `{name,string,finger}` labels list. Move it to `tools/` on resume.
3. **Fingering** is *not* in the source — supplied by hand per phrase (modern, mostly first
   position, shifts marked), stated as one reading not the reading.
4. Build the section MDX, ≤ ~5 `<NotatedExample>` per page (more than that and the page
   renders slowly), phrase sub-headers, a how-to-play per bar.

## To do when it resumes

- Movements **II (Adagio)** and **III (Rondeau)** need their own `.mxl` (or transcribe from
  the Marteau PDF).
- The rest of movement I: sections C → the lead-in to the cadenza, ~130 bars, ~11 lessons.
- Commit `k216gen.py` to `tools/`.
- Add the bowing (direction, bow part, slur meaning) to every section — see
  `LESSONS-FROM-MOZART.md` §1.
