# Stage 7 — Vibrato & expression — the build list

Research: `stage-7-research.md` (9 fact-passes + a large expression-scoping section, written in
one pass). This is the build list: the decisions, the movement-by-movement lesson table, the
wiring, and the bar every lesson clears.

## What this stage is for

Every stage through 6 taught the reader to put the right note in the right place at the right
time with the right bow. None taught the reader to make that note **mean** something. Vibrato,
rubato, tone colour and character are the difference between "correct" and "music" — and they
are what `PRD.md` §3's fifth capability ("**Choose** — make your own interpretive decisions
and defend them") is made of. K.216 is *musically* diploma-level precisely here.

The Intermediate gate (`PRD.md` §4) lists **"vibrate on a sustained note"** as a criterion, so
Stage 7 feeds the gate directly, and Stage 8b's Intermediate check is its last dependency.

Nothing here re-teaches phrasing, dynamics-as-a-line, messa di voce, cadence-breathing or the
colour-word vocabulary — Stages 3–6 built all of that (research doc's inheritance table). Stage
7 adds the **expressive layer that sits on top**: the vibrato motor skill, rubato and the
agogic accent as *actions*, colour as a deliberate choice, character as the first question, and
the "playing in style" synthesis.

## The decisions (user's calls, 2026-09-05)

1. **The beat-3 substitute for the vibrato lessons.** abcjs + soundfont render no vibrato, and
   there is no notation for it — so Movements A–D structurally cannot hit beat 3 ("hear it,
   one-press example") the normal way. Resolution: `<NotatedExample>` shows *where* the
   expressive event goes (a fully labelled long note in a phrase); **named reference
   recordings** carry the *sound*, stated explicitly; **1–2 new `<Diagram>` hand-motion SVGs**
   (`VibratoMotionDiagram` — arm pivot vs wrist rock) do "see it". And **every vibrato lesson
   states the limit plainly** — the Stage-6 way ("where a teacher's eye would catch what this
   course can't"): *the sound of vibrato is the one thing this course cannot play for you.*

2. **Which vibrato first: teach arm and wrist — whichever the student finds first — then the
   other; finger vibrato = REFERENCE.** The literature genuinely does not support this course
   picking one to drill first (Violin Lounge starts arm; Gearhart teaches hand; Galamian
   catalogues all three without an order). So `arm-and-wrist` *states the disagreement* rather
   than inventing a consensus.

3. **Movement P: build "vibrato/expression on tunes you already own", reusing verified tunes.**
   `stage-7-vibrato-and-expression` (the daily set) + `expression-in-a-tune-you-know` (the
   whole Movement E–F toolkit walked through *Amazing Grace*, a Stage-3 tune with a
   cross-checked melody and existing expression marks). **Shenandoah is deferred** — the same
   discipline that deferred Bach *Air* and Gossec *Gavotte*: no clean ≥2-source PD melody could
   be pulled through the available tools this session (`RULES.md` #8, Mistake #4 — never
   reconstruct a tune from memory). Sourcing it is a separate task before any `tune-shenandoah`
   slug is created.

4. **Scope: no artificial cap; every topic taught in depth (user: "no limit / all should be
   taught in depth").** 25 concept lessons + 2 repertoire = **27**, Movements A–F + P. Larger
   than the old one-line sketch's "~12–16" — the same way every Phase-2 stage went past its
   sketch (Stage 6's said "positions one at a time" → 30). Still smaller than Stage 5 (38) and
   Stage 6 (30).

## The bar every lesson clears

Everything in `CONTENT-STANDARD.md` §7 and `RULES.md` 1–7, plus **three Stage-7-specific
standards**:

- **The beat-3 statement.** Every vibrato/expression lesson whose subject the engine can't play
  says so, in one plain sentence, and points at a **specific named recording or passage** to
  listen to instead. Not "listen to a recording" — "listen to [player] play [piece], the
  [which] phrase".
- **Every metronome number passes the Hz check** (`pulses per beat × BPM ÷ 60 = Hz`) and the
  lesson says whether that number is a **practice speed** (below ~5 Hz) or a performance speed.
  "Week 6" never reads as "finished".
- **Every pitched `<NotatedExample>` is still fully labelled** (name + string + finger, every
  note — `RULES.md` #1) even though the examples here mostly show a single sustained note or a
  short phrase. A single long note gets its one full label.

Run `python tools/abc-barcheck.py` before every commit. `npx tsc --noEmit` + `npm run lint` +
`npm run build` green before the stage closes.

## Movement table

*(track: `left-hand` for the vibrato movements, `ear`/`bow` for expression as fits. Position:
everything is first position unless a lesson explicitly moves. Every pitched example fully
labelled.)*

### Movement A — Vibrato: what it is, and are you ready (4, NOW)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| A1 | `what-vibrato-is` | a small regular pitch variation on a *sustained stopped* note, for expression; **never a notehead or symbol** for it; the player chooses when. **The cue** (roll back from the in-tune note, never above it — the pitch is the ceiling) *and* **the waveform** (fluent vibrato goes both sides of the mean; the ear takes the pitch near the mean; a vibrato'd note reads slightly flat of a dead one) — both, labelled as different things. The beat-3 statement + a reference recording. | research Pass 1 (Geringer/Allen/MacLeod; Violinspiration/Faw for the cue) |
| A2 | `is-your-hand-ready` | the readiness self-check (not a gate, `RULES.md` #4): in-tune first position without tension; relaxed hand, thumb not clenched, wrist not collapsing; **holds the violin without the left hand**; has begun shifting (why Stage 7 follows 6) | research Pass 4 (Violinspiration, Violin Lounge) |
| A3 | `vibrato-is-not-a-fix` | learn the centre of the pitch *first*; vibrato cannot rescue an out-of-tune note — it just wobbles the wrongness, and it hides small errors from your own ear (the exact reason Stage 1 said "no vibrato while learning where a note lives") | research Pass 1; source PDF §68; Stage 1 `landing-in-tune` |
| A4 | `vibrato-used-to-be-an-ornament` | the history, hedged: Geminiani 1751 (the outlier) → Leopold Mozart 1756 (selective, the "tremble on every note as if they had the palsy" line) → Spohr 1832 (restrained, marked) → New Grove ("ornament until the first quarter of the 20th century") → Ysaÿe/Kreisler → Auer 1921 ("a physical defect"). "Selective and varied, not the modern continuous default" — never "nobody used vibrato before Kreisler". The Mozart-vs-Bruch preview. | research Pass 8, Pass 9; `LINEAGE-QUOTES.md` (Leopold Mozart, now logged) |

### Movement B — The motion, off the note (4, NOW except B4)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| B1 | `the-vibrato-pulse` | the seed motion: a quick light *forward-and-rebound* of the hand, off the instrument, then the **knock** (rock the hand back toward the pegs; tap a knuckle on the upper bout to feel the rhythm and the release). Relaxation is the whole game. Without the bow. | research Pass 5 (Gearhart's pulse; Violinspiration/Faw's knock) |
| B2 | `arm-and-wrist` | the two motions: **arm** (impulse from the forearm, pivot ~at the elbow, hand+wrist travel as a unit — bigger, easier to feel first) and **wrist/hand** (forearm still, hand rocks at the wrist, base knuckles lead — even, capable of speed). **The "which first" disagreement stated plainly.** Uses `<VibratoMotionDiagram>`. | research Pass 3 (Galamian; The Strad; Violin Lounge; Gearhart) |
| B3 | `polishing-the-string` | the lengthwise-release drill: 3rd finger down in first position, slide the whole hand 1st↔3rd position as if polishing the string, the finger's first joint releasing — vibrato is a small version of this loose motion. No pitch to tune. | research Pass 5 (Violinspiration string-wiping; Gearhart) |
| B4 | `finger-vibrato` | REFERENCE — the smallest motion, from the finger's own base knuckle; "a result of the other two, not an independent motion" (Gearhart); a later refinement, out of scope — matches the source PDF's own "[ADVANCED REFERENCE]" tag on §71 | research Pass 3 |

### Movement C — Building it on the string (5, NOW)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| C1 | `the-pulse-ladder` | the metronome ladder: ~60 BPM, 1 rock per beat → 2 → 3 → 4 → continuous; **without the bow first**, add the bow when the motion is free. The **Hz check spelled out** — 4 per beat at 60 = 4 Hz, still a practice speed; performance is ~5–7 Hz and comes over months. | research Pass 2, Pass 6 (Seashore; Violinspiration; Faw's "pizza" ladder) |
| C2 | `every-finger-every-string` | start 1st/2nd finger on the A string (strongest, quickest); then **all four fingers** (4th last and hardest) and **all four strings** (G and E harder than D and A). The 4th-finger fix: arm vibrato with the lower fingers resting for support. | research Pass 5 (Violinspiration; The Strad) |
| C3 | `starting-and-stopping` | start a note *senza vibrato* and let the vibrato **bloom** on it, deliberately; stop it deliberately. Terminal / "late" vibrato as a real Baroque–Classical device *and* the control test — you can only bloom it if you can start and stop it. | research Pass 7 (Moens-Haenen / Brown via Pass 8; Fischer) |
| C4 | `when-it-goes-wrong` | the fault catalogue with a fix for each: "goat" vibrato (fast+narrow+tense → slow wide sirens); slow-and-wide lurch (→ the knock); stiff thumb (→ practise thumb-off); stops between notes (→ slow finger-change practice); sharp-sounding (→ keep it at/below the pitch); the wobble reaching the bow arm (→ decouple); the mean drifting (→ anchor the pitch, drone-check) | research Pass 7 (Violin Lounge fault list; Violinspiration) |
| C5 | `months-not-weeks` | the source PDF's 6-week plan, reproduced honestly with its own caveat: *"vibrato development often takes months, not six weeks; this is a sequence, not a guarantee. If tension or pitch-center loss increases, go backward."* Short sessions (5–10 min); a tired hand practises the wrong motion. | research Pass 6; source PDF §72 |

### Movement D — Vibrato in the music (4, NOW)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| D1 | `vibrato-on-a-long-note` | put it on the long notes of a tune you already play (a held note in *Long, Long Ago* / *Amazing Grace* / the *Musette*); the swell + vibrato growing together = Spohr's 1832 prescription — a **messa di voce with vibrato** (Stage 5 `messa-di-voce` recap). Short notes stay plain. | research Pass 7; Stage 5 `messa-di-voce` |
| D2 | `width-speed-and-character` | the two **independent** dials: wider + slower for a broad lyrical line; narrow (often a touch faster) for Classical clarity; **width tracks the dynamic** — more in *forte*, less in *piano*. ~0.2–0.35 semitone is the working range; ~½-tone reads as dramatic/Romantic. | research Pass 2, Pass 7 |
| D3 | `keeping-the-centre` | vibrato must not disturb what's underneath it: don't let the mean pitch drift, don't let the wobble reach the bow arm. Practise bow-only and vibrato-only, then combine. Check the landing against a drone — the Stage 8 ear-gym tool pointed at a vibrated note. | research Pass 7; Stage 8 `finding-home` / the drone |
| D4 | `vibrato-through-a-shift` | "continuous" vibrato is an **illusion** — the motion pauses at every finger change, string crossing and shift; good players minimise the gap. Keeping the hand alive *into* and *out of* a shift (ties Stage 6 shifting). Fischer's continuous-vibrato exercises named. | research Pass 7 (Fischer, *Basics* "Continuous vibrato"); Stage 6 shifting |

### Movement E — Expression you haven't been taught yet (5, NOW)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| E1 | `stealing-time` | rubato as an **action**, not a marking to read (Stage 3 `bending-the-tempo` taught the reading): press a phrase forward and pull it back, and **give back what you took** so the pulse survives. Leopold Mozart's picture — the melody presses on while the accompaniment keeps strict time — made physical. Where it's styled a lot (Chopin, Kreisler) and where it's barely used (Mozart). | research Pass 9 / expression section; `LINEAGE-QUOTES.md` (L. Mozart rubato, Stage 3) |
| E2 | `the-agogic-accent` | you can stress a note by **lengthening** it a hair instead of playing it louder — the accent with no symbol. The most-used expressive device there is, and invisible on the page. How it interacts with the pulse (steal the time from the next note, not the bar). | research expression section (general performance-practice literature) |
| E3 | `tone-colour-as-a-choice` | the five lanes (Stage 5) + *sul tasto* / *sul ponticello* / *flautando* / *con sordino* (Stage 3 `the-colour-words` taught the terms) as a **deliberate palette** matched to character — a lament wants a covered colour near the fingerboard; a fanfare wants core near the bridge. The "voice" of each string (the G string's weight, the E string's brightness). | research expression section; Stage 3 `the-colour-words`, Stage 5 `the-five-lanes` |
| E4 | `what-is-this-music-about` | character / affekt as the **first** question — before a fingering, before a bowing: is this a march, a lament, a dance, a prayer, a joke? C.P.E. Bach's *Affektenlehre*; Quantz and Leopold Mozart — *the player must feel it to move the listener.* A short catalogue of character words and what each asks of vibrato, tempo, colour and articulation. | research expression section (C.P.E. Bach, *Versuch* 1753; Quantz; L. Mozart) |
| E5 | `listening-and-copying` | the mother-tongue method applied to expression: pick a recording, **copy one phrase's shape exactly** (the breaths, the swells, the rubato), then **change one thing on purpose** and hear the difference. Ties Stage 8's ear gym and the K.216 listening study. The honest note: imitation is a stage, not the destination. | research expression section; Suzuki thread; Stage 8 Movement H |

### Movement F — Playing in style, and the check (3)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| F1 | `playing-mozart-like-mozart` | the synthesis: for Mozart, dial vibrato **narrow and selective**, portamento **off** (Stage 6 A5), rubato **tiny**, articulation **non-legato by default** (Stage 3 `non-legato-was-normal`); for Bruch / Kreisler, the opposite. "The symbol tells you *what*; the era tells you *how*" (`LESSONS-FROM-MOZART.md` §4) applied to the expressive layer. A side-by-side: the same 4-bar phrase, Classical then Romantic. | research Pass 8; `LESSONS-FROM-MOZART.md` §4 |
| F2 | `making-your-own-choices` | take a tune you play cold, make **~5 expressive decisions** (where the phrase peaks; where to breathe; where vibrato and how wide; where to steal time; what colour) and be able to **say why** — the first real exercise of `PRD.md` §3's "Choose". No single right answer; a defended choice beats an accidental one. | `PRD.md` §3; research expression section |
| F3 | `the-expression-check` | a self-audit, not a gate (`RULES.md` #4; mirrors `the-foundation-check` / `the-position-check`): can you vibrate on a sustained note, start and stop it, widen and narrow it; shape a phrase with time as well as bow; name a piece's character; make and defend a handful of choices. Ties to the Intermediate gate's "vibrate on a sustained note". | mirrors `the-position-check`; `PRD.md` §4 |

### Movement P — Repertoire (2)

| # | Slug | Teaches | Cite |
|---|---|---|---|
| P1 | `stage-7-vibrato-and-expression` | the daily vibrato + expression set, gathered to play (mirrors `stage-5-tone-and-strokes`): the pulse ladder on one note; a long note with vibrato blooming; start/stop on a scale; one phrase shaped three ways (flat / Classical / Romantic). Metronome numbers all pass the Hz check and are labelled practice-speed. | the routine — Fischer, Galamian scale method; this course's Stage 5 practice-set pattern |
| P2 | `expression-in-a-tune-you-know` | the whole Movement E–F toolkit walked through ***Amazing Grace*** (the Stage-3 tune — G major, first position, cross-checked melody, already carries mp/cresc/mf/dim/rit/fermata): phrase by phrase — where it peaks, where to breathe, which notes get vibrato and how wide, where to steal time, what colour, what character. A melody/annotated lesson. | Stage 3 `tune-amazing-grace` (verified melody, reused); research expression section |

**Deferred:** `tune-shenandoah` (D major, first position, long lyrical notes — `REPERTOIRE.md`
"good build candidate") — needs a ≥2-source-verified PD melody before the slug is created.

## Wiring

Each lesson: `content/lessons/<slug>.mdx` + an entry in `content/lessons/registry.ts` + an
entry in `lib/curriculum.ts` (`stage: 7`, `published: P`), inserted **between the Stage 6 block
and the Stage 8 block** in both files (Stage 8 was built out of sequence; teaching order is
still 6 → 7 → 8).

New component: `VibratoMotionDiagram` in `components/Diagram.tsx`, registered in
`mdx-components.tsx` — two small hand-motion drawings (arm pivot at the elbow; wrist rock),
used in B2. No other new code (`RULES.md` #17).

## Status

**BUILT 2026-09-05 — 27 lessons.** Movements A–F (25 concept) + P (2 repertoire). Build green,
`abc-barcheck.py` + `tsc` + `lint` clean. `VibratoMotionDiagram` added. The Leopold Mozart
"Of the Tremolo" quote verified and logged in `LINEAGE-QUOTES.md`. `tune-shenandoah` deferred
pending a PD source. Browser spot-check pending (with Stages 5/6/8's).
