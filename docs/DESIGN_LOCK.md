# DESIGN LOCK — From Zero to Mozart

Single source of truth for the visual language. Resolved once, here. Later work reads this
instead of re-deriving.

Rewritten 2026-09-02 around **Direction A — "The Critical Edition"** (chosen by the user; the
audit and the three candidates are in `DESIGN_REVIEW.md`). Supersedes the 2026-09-02
warm-editorial lock; the parts that carried over are noted.

## Ground

- **What this is:** a violin course you read like a book and practise from with the instrument
  in your hands.
- **Who lands on it, how they arrive:** one adult beginner, at a music stand, often mid-practice,
  usually returning to where they left off.
- **The page's single job:** teach one idea clearly, let them hear it once, get out of the way.

## Target

The page is a **scholarly performing edition** — a Bärenreiter / Henle Urtext with a good
teacher's pencil in the margin.

- **Borrowed structurally from the critical edition:** a narrow reading measure with a wide
  **left margin that carries apparatus** — figure numbers, the lesson locator, and the
  *where-this-comes-from* citations. Numbered examples ("Ex. 12"). Hairline rules, no boxes,
  no shadows-as-decoration.
- **Carried over from the previous lock:** Linear's type discipline (one continuous voice,
  weight restraint 400–600, negative tracking on large text, positive on micro-labels); the
  4px spacing base; **depth by hairline and surface-shift only**; near-zero motion; the
  notation well as a recessed panel; light-first with a real dark mode.
- **Explicitly NOT borrowed:** an actual edition's density and silence (we still teach, in
  prose, one idea per screen); its clinical coolness (our paper is warm, our accent is
  oxblood, the margin voice is a person). No decorative engraving, no faux-leather, no serif
  everywhere — chrome stays sans/mono.

## Divergence

The reference is a printed edition. Two or more mutation operators, so the result is not a
skeuomorph of one:

| Mutation operator | What it changed |
|---|---|
| **Add** (new capability the reference lacks) | A real edition's margin holds only bar numbers. Ours holds a **running teacher's voice** — the lineage citation, the "watch for this" note — as first-class marginalia. |
| **Invert** (static → live) | The edition is fixed ink. Every example here **plays on one press** and every worksheet **reveals its answer**. |
| **Deflate** (dense → calm) | An edition packs the page. We keep **one idea per screen**, generous leading, and let the margin be mostly white. |

**Clone check** — would a Henle editor recognise their work here? *"No — the margin talks back,
and the page makes sound. But the discipline is ours."*

## Dials

| Dial | Value | Why |
|---|---|---|
| DESIGN_VARIANCE | 3 | Every lesson is the same shape; attention goes to the idea. |
| MOTION_INTENSITY | 2 | Content never moves. Route-fade, the play button, the contents drawer, the reveal — nothing else. |
| VISUAL_DENSITY | 3 | One idea per screen; generous measure; music-stand legibility. The margin adds information, not clutter — it stays quiet. |

`prefers-reduced-motion`: route-fade → instant; drawer → instant; play-button press → none.

## Palette

Warm ivory ground, sepia ink, one oxblood accent. Named by role. **The only interactive
colour is the accent — resist a second.**

| Role | Light | Dark | Notes |
|---|---|---|---|
| canvas | `#FAF7F0` | `#181410` | warm ivory paper / warm brown-black |
| well | `#F2ECDD` | `#211C15` | the recessed panel a notated example sits in |
| ink | `#2A2318` | `#E9E1D2` | body + headings (a sepia-black, not neutral) |
| ink-muted | `#6E6152` | `#A99C86` | secondary prose, captions, the margin's note voice |
| ink-faint | `#9C8E79` | `#6F6453` | micro-labels, the lesson locator, disabled |
| hairline | `#E4DBC7` | `#332B1F` | every border, rule, gate line, margin divider |
| accent | `#7A2E2E` | `#C97C5D` | oxblood / warm brick — play button, links, focus ring, figure numbers, the citation's source name, gate labels, stage numbers |
| accent-contrast | `#FAF7F0` | `#181410` | text/glyph on an accent fill |

Focus ring: 2px `accent` at 45%, 2px offset. Selection: `accent` at ~16%.

## Type

Three faces, each one job. Unchanged from the previous lock except the citation style.

| Role | Face | Size | Weight | Tracking | Leading |
|---|---|---|---|---|---|
| display (landing hero only) | Newsreader | `clamp(2.25rem, 5vw, 3.25rem)` | 400 | -0.02em | 1.08 |
| lesson-title (h1) | Newsreader | 1.75rem | 500 | -0.011em | 1.2 |
| section-head (h2) | Newsreader | 1.1875rem | 600 | -0.005em | 1.35 |
| prose | Newsreader | 1.1875rem (19px) | 400 | 0 | 1.62 |
| aside (inline "Leopold Mozart told…") | Newsreader *italic* | 1.1875rem | 400 | 0 | 1.62 |
| ui / button / "Try" | Geist Sans | 0.9375rem | 500 | 0 | 1.3 |
| label / eyebrow / tag / breadcrumb | Geist Mono | 0.6875rem | 500 | 0.18em, UPPERCASE | 1.3 |
| **margin note** (body) | Geist Mono | 0.6875rem | 400 | 0.02em | 1.6 |
| **margin citation — source name** | Newsreader | 0.8125rem | 500 | 0.04em, `small-caps` | 1.45 |
| **margin citation — detail** | Newsreader | 0.8125rem | 400 | 0 | 1.5 |
| caption / tempo readout | Geist Mono | 0.8125rem | 400 | 0.02em | 1.4 |
| figure label ("Ex. 12") | Geist Mono | 0.625rem | 500 | 0.16em, UPPERCASE | — |

- Newsreader's real italic *is* the inline teacher-aside voice; the margin citation uses its
  small-caps for the source name.
- Fonts via `next/font/google`. No `@import`, no FOUT.
- Measures: prose **34rem** (~62–66 chars). Lesson content column **38rem**. Landing **42rem**.
  **Left margin (gutter) 10rem**, gap **3rem** → lesson block ~51rem, centred.

## Spacing and rhythm

- Base unit **4px**. Scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96.
- Paragraph gap 16px. Title → first paragraph 20px. Prose → notated example 32px.
- Lesson screen padding: 40px top / 64px bottom (room for the practice bar).
- **The gutter:** present at ≥ 1024px as a 10rem left column, `sticky` at the top so the
  locator stays in view. Below 1024px it collapses — the locator becomes a thin line above the
  title, and margin notes fall inline as hairline-ruled asides.
- Radius: play button & tags `9999px`; the notation well `14px` on the previous lock →
  **`3px`** now (an edition's rules are square); nothing else rounded.
- Depth: **hairlines and one surface-shift only.** The notation well keeps a single
  `inset 0 1px 2px` at ~6% ink so it reads as pressed into the paper.

## Motion budget

- Default 200ms, `cubic-bezier(0.32, 0.72, 0, 1)`.
- May move: route transition (opacity, 180ms); contents drawer (slide, 240ms); play button on
  press (`scale 0.97`, 90ms) + its glyph crossfade; a reveal (labels/answer) fades in 120ms.
- Never moves: body copy, headings, notation, tags, the margin, the practice bar, anything on
  scroll.

## Signature element

**The scholarly margin.** At ≥1024px, a 10rem left column runs beside the reading measure,
`sticky` to the top of the viewport. It carries, top to bottom:

1. the **lesson locator** — `STAGE 1` (mono micro-label) over `Lesson 8 of 23` (ink-faint).
2. inline **`<Margin>`** notes declared in the lesson — a "watch for this" in mono, or a
   **`<Cite>`** (source name in small-caps oxblood, then the detail), each separated from the
   next by 16px and a hairline. They align, by float, to roughly where they're declared in the
   prose.
3. **figure references** — "Ex. 12" beside the notated example it labels.

Everything in the margin is quiet — small, mono or small-caps, `ink-faint`/`ink-muted`, oxblood
only on a source name or figure number. It is apparatus, not a sidebar. Below 1024px it
dissolves into the flow.

The **notation well** stays as the second recognisable shape (recessed, hairline, square-ish,
the round accent play button overlapping its lower-left) but it no longer competes — the margin
is the one bold move now.

## Banned (overrides the design skill — do not re-litigate)

| Banned | Reason |
|---|---|
| Scroll-triggered reveals, fade-up entrances, stagger | Content must be still — read mid-practice. |
| Glassmorphism, `backdrop-blur`, OLED black, gradient orbs | Wrong mood; not a reading surface. |
| Faux-paper texture, torn edges, book-spine chrome, wax seals, ligature flourishes | Direction A is the *discipline* of an edition, not a skeuomorph of one. |
| A second accent colour; decorative colour of any kind | One oxblood accent, used sparingly. |
| Nested bezel cards, magnetic buttons, bento asymmetry | One recessed well is the whole depth story. |
| Big hero type on lesson pages | Display size is the landing page only. |
| Dashboard, progress ring, streak, XP, badges, confetti | "Nothing gates progress." |
| Sticky edge-to-edge top navbar | The only fixed chrome is the practice bar (bottom); the header scrolls away. |
| A margin that becomes a nav sidebar, a TOC, or a comment thread | It's apparatus — locator, citation, figure ref. Nothing clickable-heavy, nothing that pulls attention off the prose. |
| Icon libraries with thick strokes | If truly needed: inline SVG, 1.25px, `currentColor`. Prefer a word. |

## Rejected findings (from `high-end-visual-design`)

| Finding | Why overruled |
|---|---|
| "Variance Mandate — never the same layout twice" | It's a course. Every lesson screen is deliberately identical. |
| "Section padding py-24 to py-40" | Kept loosely for the landing; lesson screens are short and single-view. |
| "Custom cubic-bezier on ALL transitions" | Almost nothing transitions here. |
| "Double-bezel all major cards" | Replaced by the single notation well. |
