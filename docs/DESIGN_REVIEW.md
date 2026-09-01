# DESIGN REVIEW — From Zero to Mozart

`/design-pass audit` on 2026-09-01. Read-only pass; nothing here has been applied.
Screens looked at: `/` , `/learn` , `/learn/the-g-string` at 1440px (system dark mode).
Mobile-width capture failed twice (window resize didn't propagate to the viewport) — mobile
findings below are inferred from the CSS, not observed.

## Verdict

The design is already calm, legible, and internally consistent — it honours its own
`DESIGN_LOCK.md` almost to the token, and nothing on the page fights the reader. What holds it
back is that it is **undernourished rather than wrong**: on anything wider than a phone the page
is ~65% empty canvas with no structure in the margins, the one piece of chrome that repeats on
every screen (the `NOW` tag) carries no information, and the promised "taught in a real lineage"
voice is nowhere in the actual lessons. It reads like a competent template, not yet like a
place with a point of view.

## Detector findings

`node design-kit/vendor/impeccable/scripts/detect.mjs --no-config components app app/globals.css`
— **0 failures, 0 advisory** (static analysis of CSS + TSX). The mechanical layer is clean:
no arbitrary-value sprawl, no shadow stacks, no bounce easing, no icon-library imports. Every
finding below is judgment-level — what the detectors cannot see.

## Lock adherence

The code tracks `DESIGN_LOCK.md` closely — hero clamp/weight/tracking, the three measures
(34 / 38 / 42 rem), the 19px 1.62 prose body, the mono micro-label, the notation well
(radius 14, inset top shadow, overlapping round accent button, hairline tempo slider). No
token drift worth listing. The problems are above the token layer.

## Judgment findings — ranked worst first

### 1. The wide-viewport page is mostly nothing

- **What:** at 1440px the content sits in a centred ~38–42rem column with ~450px of dead
  canvas on each side and no rail, no spine, no "where am I in the course". On the landing the
  hero is also pushed down ~120px by `py-20 sm:py-28` before anything appears.
- **Why it matters here:** Ground says *a teacher in a real lineage*, and *feels expensive,
  does little*. Right now it does little **and** feels thin — the two are supposed to trade off.
  The empty left margin is exactly where a real edition puts the apparatus: stage number,
  lesson position, the "where this comes from" citation.
- **Fix:** give the margin a job (see the three directions below). Even the most minimal choice
  should put a quiet stage/lesson locator and a lineage citation slot in the left gutter on
  ≥1024px, and collapse it inline on mobile.

### 2. `NOW` on every lesson is noise, not signal

- **What:** `/learn` shows `NOW · SETUP`, `NOW · LEFT HAND`, `NOW · THE BOW` … on all 90 rows.
  If everything is NOW, the tag says nothing.
- **Why it matters here:** the NOW / NEXT / LATER / REFERENCE taxonomy is a real pedagogical
  idea (`curriculum.ts`) — it's meant to tell the beginner *what to actually work on today vs.
  what to just be aware of*. In the UI it currently does the opposite.
- **Fix:** either show the tag only when it's **not** NOW (so NEXT/LATER/REFERENCE stand out),
  or drop it from the list view and surface it once, prominently, at the top of each lesson.

### 3. The notation labels are cryptic

- **What:** under each note the overlay reads `G` / `G str` / `f 0`. `f 0` for "open string",
  `f high 2` for the finger — this is jargon shorthand.
- **Why it matters here:** the user showed the source book's version specifically because it was
  *clean* — big note name, then plain "G string", then "open" or "2nd finger (high)". Ours is
  denser and less friendly than the thing it's replacing.
- **Fix:** note name (serif, prominent) / `G string` / `open` · `1st finger` · `2nd finger,
  high` — spelled out, not `f 0`.

### 4. Tables render with empty cells

- **What:** `the-g-string` — the A and C rows have a blank "Where" column.
- **Why it matters here:** an empty cell reads as unfinished work, which undercuts the "verify
  everything" trust the project is built on.
- **Fix:** fill every cell ("a whole step above the open string", "one finger below D") or drop
  the column and fold the detail into prose.

### 5. Stale landing copy

- **What:** `app/page.tsx:116` — footer says *"90 of 90 lessons live — Stages 0 and 1. The
  rest is being written."* Stages 0–5 are all live; "Stages 0 and 1" is left over from an
  earlier build.
- **Fix:** *"90 lessons live — the whole foundation (Stages 0–5). Stages 6–9 are being
  written."*

### 6. `/learn` is a 90-item wall

- **What:** one flat scroll of every lesson, no way to collapse to stage headings or jump.
- **Why it matters here:** the beginner opens this to answer "where was I / what's next", and
  has to scan 90 rows to do it.
- **Fix:** stage headings become collapsible; the stage you're in is expanded by default
  (from `localStorage`), the rest collapsed to a one-line summary.

### 7. Notation rhythm reads as a statement it doesn't intend

- **What:** pitch-ladder examples like `the-g-string` are written `G,2 A,2 B,2 C2 | D4` — four
  half notes and a whole note. Visually that's a *rhythm*, which distracts from "these are just
  the five pitches".
- **Fix:** for pure pitch ladders use even quarter notes with stems, or all whole notes, and
  reserve mixed durations for when rhythm is the point.

## Ranked plan (once a direction is chosen)

| Order | Change | Level | Expected effect |
|---|---|---|---|
| 1 | Pick a direction (below); update `DESIGN_LOCK.md` | doc | unblocks everything else |
| 2 | Fix stale footer copy; fill/remove empty table cells | copy | trust |
| 3 | `NOW` tag: show only when ≠ NOW | component | the taxonomy starts working |
| 4 | Notation labels: spell them out | component | matches the source book |
| 5 | Left-gutter locator + lineage slot on ≥1024px | layout | the margin earns its space |
| 6 | `/learn` collapsible by stage | component | "where am I" in one glance |
| 7 | Pitch-ladder notation: even durations | content | notation stops over-speaking |

## Deliberately not changing

| Thing | Why it stays |
|---|---|
| The warm palette, the serif reading column, near-zero motion | Correct for a music-stand reading surface; the user has confirmed this repeatedly. |
| The notation well as the signature element | It's the right one memorable shape. |
| Light-first with real dark mode | Keep. (Note: it currently renders dark for this user — worth checking the light theme is as considered.) |
| One accent colour | Resist a second, per the lock. |

---

# Three directions to choose from

All three keep the Ground rules: a still reading surface, one play control, no gates, no voice,
music-stand legible. They differ in **how much personality the frame carries** and **what the
empty margin does**. Pick one and the lock gets rewritten around it.

## A — "The Critical Edition"  *(smallest leap, recommended)*

The page becomes a scholarly performing edition — Bärenreiter / Henle Urtext with your
teacher's pencil in the margin.

- **The bold move:** the **left margin is a second voice.** Main column teaches; the gutter
  carries the lesson locator, figure numbers ("Ex. 12"), and the *where-this-comes-from*
  citations ("Leopold Mozart, Violinschule §II", "Galamian on tone") set in small caps — the
  lineage made literally visible instead of promised.
- **Palette:** warm ivory `#FAF7F0`, sepia ink `#2A2318`, one oxblood accent `#7A2E2E`
  (or keep the current earth-brown). Hairlines in warm grey.
- **Type:** a true text serif with old-style figures and real small caps — keep Newsreader or
  move to Spectral / Source Serif 4. Mono stays for the locator only.
- **Feel:** you are studying from a great edition. Quiet, authoritative, dense with meaning in
  a small footprint.
- **Cost:** low. Mostly a layout change (add the gutter) + a `<Cite>` component + copy work.
- **Risk:** if the margin notes are thin it looks pretentious — needs real lineage content,
  which we owe anyway.

## B — "The Practice Room"  *(safe modern)*

Away from paper, toward a serene modern learning app — Oak / Things / iA Writer / Readwise.

- **The bold move:** the whole screen is **"what you're working on right now."** The lesson is
  one calm column; the practice bar grows into a proper docked companion (tuner · drone ·
  metronome · *this example's tempo*), always warm-lit at the edge, so there's no "chrome vs.
  content" — just the current task and its tools.
- **Palette:** near-monochrome warm greys, single amber accent, light and dark exactly equal.
- **Type:** one humanist sans everywhere (Geist / Söhne / Inter). Notation is the only "ink".
- **Feel:** a well-built native app that respects your attention. Nothing literary about it.
- **Cost:** medium. Re-theme + rebuild the practice bar into the companion panel.
- **Risk:** loses the "real teacher, real lineage" romance — becomes another tasteful study
  app. Sans-only also drops the italic-aside voice the lock leans on.

## C — "Conservatoire"  *(boldest)*

Lean into the romance of the instrument and the lineage.

- **The bold move:** **each stage opens with a title plate** — a full screen like a concert
  programme: the stage name large in a display face, one epigraph from the source, then
  silence. Lessons stay calm inside; the drama is only at the thresholds.
- **Palette:** walnut / rosin-brown ground as the *primary* (not the alternate), gold-leaf
  accent `#C9A15E`, ivory text. Light mode is the alternate here.
- **Type:** a Didone display face with real personality for stage & piece titles (Canela /
  GT Sectra / a serious Playfair alternative); the reading serif stays for body.
- **Feel:** the front matter of a critical edition, or the liner notes of a great recording.
- **Cost:** high. New display face, the plate system, art direction per stage, more to
  maintain.
- **Risk:** can tip into precious; dark-primary is harder to keep music-stand legible; most
  divergence from "does little".

## Recommendation

**A.** It's the shortest path from what exists, it directly discharges the one promise the site
is currently breaking (*taught in a real lineage* — the margin *is* the lineage), and it costs
mostly layout + writing, not a re-theme. **B** is the fallback if you decide the lineage angle
isn't worth the writing burden. **C** is worth doing later as the treatment for stage
intros and the Mozart module even if the lesson pages stay in style A.
