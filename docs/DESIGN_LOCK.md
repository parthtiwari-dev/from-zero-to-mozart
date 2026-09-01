# DESIGN LOCK — From Zero to Mozart

Single source of truth for the visual language. Resolved once, here. Later work reads this
instead of re-deriving. Synthesised 2026-09-02 from: the user's steering (`DECISIONS.md`), the
`high-end-visual-design` + `apple-design` skills, and the Linear/Vercel reference languages in
`design-pass`.

## Ground

- **What this is:** a violin course you read like a book and practise from with the instrument
  in your hands.
- **Who lands on it, how they arrive:** one adult beginner, at a music stand, often mid-practice,
  usually returning to where they left off.
- **The page's single job:** teach one idea clearly, let them hear it once, get out of the way.

## Target

- **Borrowed structurally** from **Linear**: the type discipline (one continuous voice from
  display to body, weight restraint — 400–500, never 700+; negative tracking on large text,
  slight positive tracking on micro-labels), a 4px spacing base, and **depth by hairline and
  surface-shift, never by drop shadow**.
- **Borrowed** from `high-end-visual-design`'s *Editorial Luxury* archetype: warm paper ground,
  a real reading serif for headings and body, a whisper of restraint everywhere.
- **Explicitly NOT borrowed:** Linear's dark-only canvas, its lavender, its
  "screenshots-as-protagonist" rhythm. The skill's maximalism — glass, bezels, bento, magnetic
  buttons, scroll-reveal choreography, the "never the same layout twice" mandate. This product
  wants the *opposite*: every lesson screen identical so attention lands on the content.

## Divergence

1. Reading column, not marketing canvas — a ~34rem measure of serif prose is the protagonist.
2. Light-first with a real dark mode (Linear ships no light theme; we lead with it).
3. Warm neutrals + a single earth-tone ink accent (Linear is cool near-black + lavender).
4. Serif for content, sans + mono only for chrome (Linear is all-sans).
5. Motion budget near zero — content is still; only navigation and the one play control move.

| Mutation operator | What it changed |
|---|---|
| Invert (dark→light) | Lead theme flipped to light; dark is the alternate. |
| Deflate (density→calm) | One idea per screen; section padding cut; no card grids. |
| Swap voice (sans→serif) | Content set in Newsreader; chrome keeps the sans/mono. |

**Clone check** — would Linear's designer recognise their work here? *"No, but I see the shared
logic — the type restraint and the hairline depth are ours."*

## Dials

| Dial | Value | Why |
|---|---|---|
| DESIGN_VARIANCE | 3 | The course must feel consistent; every lesson is the same shape. |
| MOTION_INTENSITY | 2 | Content never moves. Only page-fade + the play button + the drawer. |
| VISUAL_DENSITY | 3 | One idea per screen, generous measure, music-stand legibility. |

`prefers-reduced-motion`: page-fade → instant; contents drawer → instant; play-button press
scale → none. (Nothing else moves, so nothing else to disable.)

## Palette

Four working roles + one accent. Named by role.

| Role | Light | Dark | Notes |
|---|---|---|---|
| canvas | `#FAF7F1` | `#141109` | warm paper / warm near-black (brown-black, not blue-black) |
| well | `#F1ECE0` | `#1E1A12` | the recessed panel a notation example sits in |
| ink | `#26221B` | `#E9E3D6` | body + headings |
| ink-muted | `#6B6355` | `#A49A88` | secondary prose, the "named aside" voice, captions |
| ink-faint | `#9A9082` | `#6E6555` | micro-labels, disabled |
| hairline | `#E4DCCB` | `#2C2619` | all borders, rules, the gate lines |
| accent | `#7A5A34` | `#C99A63` | the ONE interactive colour — play button, links, focus ring, stage number, gate labels. Resist a second. |

Focus ring: 2px `accent` at 45% opacity, 2px offset. Selection: `accent` at ~18%.

## Type

Three faces, each with one job.

| Role | Face | Size | Weight | Tracking | Leading |
|---|---|---|---|---|---|
| display (landing hero only) | Newsreader | `clamp(2.25rem, 5vw, 3.25rem)` | 400 | -0.02em | 1.08 |
| lesson-title (h1) | Newsreader | 1.75rem | 500 | -0.011em | 1.2 |
| section-head (h2 in prose) | Newsreader | 1.1875rem | 600 | -0.005em | 1.35 |
| prose | Newsreader | 1.1875rem (19px) | 400 | 0 | 1.62 |
| aside ("Leopold Mozart told…") | Newsreader *italic* | 1.1875rem | 400 | 0 | 1.62 |
| ui / button / "now try this" | Geist Sans | 0.9375rem | 500 | 0 | 1.3 |
| label / eyebrow / NOW-tag / breadcrumb | Geist Mono | 0.6875rem | 500 | 0.18em, UPPERCASE | 1.3 |
| caption / tempo readout | Geist Mono | 0.8125rem | 400 | 0.02em | 1.4 |

- Newsreader is a screen-reading serif with real italics — the italic *is* the teacher-aside
  voice, so asides need no box, no icon, no colour change beyond `ink-muted`.
- Fonts via `next/font/google` (Newsreader, Geist, Geist Mono). No `@import`, no FOUT.
- Prose measure: **34rem** (~62–66 characters). Lesson content column: **38rem** (gives the
  notation breathing room). Landing: **42rem**.

## Spacing and rhythm

- Base unit: **4px**. Scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96.
- Paragraph gap in prose: 16px. Title → first paragraph: 20px. Prose → notated example: 32px.
- Lesson screen vertical padding: 64px top / 96px bottom (room for the practice bar).
- Radius: buttons & tags `9999px` (pill — the one place we differ from Linear's 8px, because a
  round play button reads as "press me"); the notation well `14px`; nothing else is rounded.
- Depth: **hairlines and a one-step surface shift only.** The single exception is the notation
  well's inner top shadow (`inset 0 1px 2px` at ~6% ink) so it reads as recessed, not lifted.

## Motion budget

- **Default:** 200ms, `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Allowed to move:** the route transition (opacity 0→1, 180ms); the contents drawer (slide,
  240ms); the play button on press (`scale 0.97`, 90ms) and its play↔pause glyph crossfade.
- **Never moves:** body copy, headings, the notation, tags, the practice bar contents, anything
  on scroll. No entrance animations, ever.

## Signature element

**The notation well.** Every musical example sits in a panel *inset* into the page: `well`
background (one step off `canvas`), a `hairline` border, `radius 14px`, `28px` padding, and a
single `inset 0 1px 2px rgba(ink, 0.06)` top shadow so it reads as pressed *into* the paper like
an example clipped into a textbook. The round `accent` **play button** sits in its lower-left,
overlapping the bottom edge by ~50%. To its right, inline, a hairline **tempo slider** with a
mono BPM readout. Nothing else in the UI is recessed; nothing else is a pill; this is the one
memorable shape.

## Banned (overrides the design skill — do not re-litigate)

| Banned | Reason |
|---|---|
| Scroll-triggered reveals, blur-up / fade-up entrances, stagger | Content must be still — the user reads this mid-practice. |
| Glassmorphism, `backdrop-blur` panels, OLED black, gradient orbs | Wrong mood; not a reading surface. |
| Double-bezel "machined hardware" nested cards | One soft well is the whole depth story. |
| Magnetic buttons, button-in-button icon capsules, card rotation, bento asymmetry | Fussy; competes with the content. |
| A second accent colour; decorative colour of any kind | One earth-tone ink accent, used sparingly. |
| Big hero type on lesson pages | Display size is the landing page only. |
| Dashboard, progress ring, streak, XP, badges, confetti | "Nothing gates progress." |
| Sticky edge-to-edge top navbar | The only fixed chrome is the practice bar (bottom). |
| Icon libraries with thick strokes (Lucide default, FontAwesome, Material) | If an icon is truly needed: hand-drawn inline SVG, 1.25px stroke, `currentColor`. Prefer a word. |

## Rejected findings

| Finding (from `high-end-visual-design`) | Why overruled |
|---|---|
| "Variance Mandate — never the same layout twice" | This is a course. Every lesson screen is deliberately identical so attention goes to the idea, not the chrome. |
| "Section padding `py-24` to `py-40`, breathe heavily" | Kept loosely for the landing; lesson screens are short and single-view — heavy padding would force scrolling. |
| "Custom cubic-bezier on ALL transitions; nothing instant" | Almost nothing transitions here. The few that do use the one curve above. |
| "Double-bezel all major cards" | Replaced by the single notation well. |
