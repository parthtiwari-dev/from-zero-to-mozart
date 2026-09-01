# Stage 1 — First position & reading the staff: research + plan

**For approval before writing.** A full **rebuild** — the current 23 Stage-1 lessons are thin,
use rhythm notation Stage 2 hasn't taught, and end at nothing you can play.

Read `docs/THE-PATH.md` and `docs/CONTENT-STANDARD.md` §3a–3b first. Every lesson here is
built from the parts in §3a and follows the methods in §3b.

**Stage 1's end state:** you can read any first-position natural note off the staff by
*interval* (not by naming every one), know its string and finger, land it roughly in tune
against a drone or open string — and play **~15 real first-position tunes**, each an annotated
line with a per-line how-to-play note, also on `/practice`.

**User decisions (2026-09-02, all locked):**
- **Do the whole stage at once.**
- **String order: A → D → G → E** — "the way Hilary Hahn learned" (Suzuki). The A string is
  the natural first hand shape (close 2–3), the bow arm sits in a comfortable middle plane,
  and the tunes are singable. G comes third; the "why beginner violin is in G/D/A" point
  (`why-g-major-has-one-sharp`, Stage 4) still holds — A, D, G are the fifth-related open
  strings.
- **Movement D is interleaved, not a separate block:** `landing-in-tune` (D1) moves to right
  after the **first** string lesson so checking intonation is a habit from note one; the rest
  of D (ringing tones, Sa, hearing wrong notes) stays as a short cluster after Movement C.
- **`/practice` page built with this stage.**
- **Vivaldi *Spring* stays Stage 4** (from `docs/source/vivaldi-spring-easy.pdf`).
- **Nothing cut** from the six movements; add only if something is genuinely missing — added
  `hands-together` (Movement A) and a string-crossing focus, below.
- The earlier reference lessons (`the-g-string`, `why-g-major-has-one-sharp`) fold in where
  they land; `the-g-string` becomes the Movement A G-string lesson with its tune fragments
  moved out to Movement F.

## Readiness — is this ready to implement?

**Yes.** The research (appendix below) covers the established methods lesson-by-lesson —
Doflein's full chapter list, Suzuki Bk 1 piece-by-piece with teaching points, Essential
Elements, Simon Fischer, ABRSM Gr 1–2, plus the granular pedagogy (exact first-position notes,
the perfect-4th frame, finger-placement detail, bow distribution, string crossing, ear-first
intonation, movable-do/Sa, pattern-first reading, the Twinkle rhythms). Every lesson is spec'd
to Stage-0 depth and cites its sources. Nothing left to guess.

**Depth, not complication.** The lesson *content* goes as deep as the plan shows. The *code*
stays minimal — see "keep it lean" below. `AnnotatedScore` is a thin extension of what exists,
`/practice` is a static list.

**One pre-flight check:** the `responsive:"resize"` notation change (2026-09-02) still needs a
visual look on desktop + phone (the Chrome extension had dropped) — do that first, before
building tunes on top of it.

**Build order:** notation check → `AnnotatedScore` + pieces manifest proven on **one** tune →
Movements A–C (the reading/hand spine) → Movements D–E → the 15 tunes + `/practice`. Straight
through; the movement boundaries are natural review points.

---

## What's wrong with Stage 1 now

1. **Thin** — most lessons are a fact + one 4-note fragment. No skill is *drilled*.
2. **Un-taught notation** (`NOTATION-COVERAGE.md`) — the reading drills show a common-time
   signature and whole/half notes. Stage 1 is about *pitch*; pure pitch drills carry no metre.
3. **No end goal** — no tune exists anywhere in the course.
4. **Missing skills** — no intervallic reading (landmarks + steps/skips), no finger-pattern
   lesson, left-hand *action* barely touched, no ear-first intonation method.

## The research that shapes the rebuild

*(Full sources in `CONTENT-STANDARD.md` §3b. Key points for Stage 1:)*

- **Note introduction is the 6-step multi-sensory sequence** (hear → place → see on staff →
  play → drill in a pattern → use in a tune). Every note lesson does all six.
- **Doflein's model** — expand the note set gradually, pieces from the first chapter. Our
  string lessons each add ~5 notes and immediately turn them into a tune.
- **Note order: A → D → G → E** (Suzuki / "the way Hilary learned" — decision above). The
  systematic per-string lessons run in that order; a tune may borrow an open string or a
  single 1st finger from a not-yet-covered string (Suzuki does — Twinkle uses open E), with a
  one-line "the E string proper is coming" note. Ledger-line reading arrives with the **G**
  string (3rd) — by then the reading method (anchors + intervals) is solid, so it lands as
  "the staff continued", not an exception.
- **The four first-position finger patterns**: `1–23–4` (major), `12–3–4` (natural minor),
  `1–2–34` (high 3), `1–2–3–4` (whole-tone). Every first-position key is one of these shapes.
- **Intonation is ear-first**: sing it → play it → check against a drone / ringing open string,
  adjust by millimetres. Tapes are a crutch the ear must outgrow. Solfège from **Sa**.
- **Reading is pattern-first** (Percival Hodgson): landmarks + steps/skips, pre-read, rhythm
  before pitch, keep going, read ahead.
- **Rhythm-lite for Stage 1**: one short lesson on quarter / half / whole counted 1-2-3-4, so
  the tunes are playable; the full system is Stage 2 (forward pointer).
- **The left-hand-action drill family**: hold all 4 down, lift/tap 1-2-3-4 then 4-3-2-1;
  1↔3; 2↔4; keep fingers behind the note down; left-hand pizzicato.

---

## Movement A — The hand on the string (11 lessons)

### A1 · `four-strings-four-fingers` *(rewrite)*
- **Teaches.** The 4 strings under the left hand, low to high (G D A E). Finger numbers **0–4
  are fingers, not pitches** — the same "2nd finger" is a different note on every string, so a
  finger number is meaningless without a string. The elbow swings *under* the violin for the
  G and D strings, back out for E. First finger is roughly a whole step from the nut on every
  string.
- **Examples & play-arounds.** (1) tap each string's 1st finger, name the resulting note
  (A on G, E on D, B on A, F♯ on E — noted, taught properly later); (2) "say the string,
  then the finger" drill; (3) silent: place 1-2-3-4 on the A string, lift all, repeat.
- **The usual mistake.** Thinking "2nd finger = C" (it's C on the A string, F♯ on the D
  string, B on the G string). Always pair the number with a string.
- **Where it comes from.** `<Cite>` — the finger-number convention is universal beginner
  shorthand (Violinspiration, every method); Leopold Mozart already numbers the fingers 1–4.
- Sources: violinspiration "finger positions", violinlounge first-position chart.

### A2 · `the-four-finger-patterns` *(new)*
- **Teaches.** The four hand shapes first position is built from — where the **half step**
  falls between two fingers: `1–23–4` (2 & 3 together — major), `12–3–4` (1 & 2 together —
  natural minor), `1–2–34` (3 & 4 together — major with high 3), `1–2–3–4` (all whole steps —
  whole-tone). You *feel* the difference; the ear confirms it.
- **Examples & play-arounds.** Each pattern as a 4-note `<NotatedExample>` on the **D string**
  (D-string patterns are the clearest): D E F♯ G (`1–23–4` = D major tetrachord), D E F G
  (`12–3–4`), D E F♯ G♯ (`1–2–34`), D E F♯ G♯… actually keep to two clear ones + a "feel the
  gap" silent drill: place the major pattern, then slide 2 back for the minor pattern, back
  and forth.
- **The usual mistake.** Even finger spacing — putting 2 halfway between 1 and 3 by default.
  The gap *moves*; the hand isn't a fixed grid.
- **Where it comes from.** `<Cite>` — the pattern system: Doflein Book I ("combination of both
  attitudes of the fingers"), Whistler, Simon Fischer; violinspiration's four-pattern chart.
- Sources: violinspiration "finger positions/patterns", violinlounge, Doflein Book I.

### A3 · `low-and-high-fingers` *(rewrite)*
- **Teaches.** Which single finger slides a half step: **low 1 / 1** (only on the E string —
  F♮ is a low 1, F♯ a normal 1), **low 2 / high 2** (the big one — F♮/F♯ on D, C♮/C♯ on A,
  B♭/B♮ on G), **3 / high 3**. Moving one finger changes the pattern (back to A2). The half
  step = fingers *touching*; the whole step = a finger's-width gap.
- **Examples & play-arounds.** (1) on the D string: F♮ (low 2, touching 1) then F♯ (high 2,
  touching 3) — the same finger, a half step apart; (2) on the A: C♮ then C♯; (3) the E-string
  special case: open E → F♮ (low 1) → F♯ (1); (4) drone-backed: play high 2, then low 2,
  hear which one the D-major scale wants.
- **The usual mistake.** Forgetting the E string's low 1 — playing F♯ where the music wants
  F♮ right next to the open string.
- **Where it comes from.** `<Cite>` — the low/high-finger geometry is the frets-free reality
  every method teaches; ties to `whole-steps-and-half-steps` (Stage 4).
- Sources: violinlounge first-position chart, violinwiki fingering chart, violinspiration.

### A4 · `keeping-fingers-down` *(new)* — track: left-hand
- **Teaches.** Fingers **drop from the base knuckle** onto the tip, curved and firm but not
  pressing hard (minimum pressure — the string just needs to touch the fingerboard). **Keep
  the fingers behind the sounding note down** ("blocked" fingers) — a finger that flies off
  has to travel back and lands late and out of tune. Each finger hovers over its note when
  it's not playing.
- **Examples & play-arounds.** The left-hand-action drill family, silent then bowed:
  (1) hold 1-2-3 down on the D string, bow G (3rd finger), lift only 3, bow F♯ (2), lift only
  2, bow E (1) — the fingers behind stay down; (2) hold all four down, lift/tap one at a time
  1-2-3-4 then 4-3-2-1; (3) **1↔3** back and forth keeping 2 hovering; (4) **left-hand
  pizzicato** — pluck the string with the 4th finger to feel the drop.
- **The usual mistake.** Lifting every finger for every note (the "typewriter" hand) — kills
  speed and intonation. And squeezing (from Stage 0's frame lesson — check the thumb wiggles).
- **Where it comes from.** `<Cite>` — Simon Fischer, *Basics*, on finger action and blocked
  fingers; the drill family is standard (violinspiration, violinlounge finger-independence).
  Suzuki's *Song of the Wind* "jumping finger 1↔3" is exactly this.
- Sources: Simon Fischer *Basics*; violinspiration finger exercises; violinist.com "all-purpose
  left-hand exercise"; Suzuki teaching points.

### A4b · `hands-together` *(new)* — track: bow / coordination
- **Teaches.** The bow and the left hand are **independent** — the bow keeps a steady, even
  speed while the fingers change notes underneath. Beginners let the bow lurch or stop every
  time a finger drops. Method: practise **hands separately** (air-bow the rhythm; finger the
  notes silently), then **together, slow**, keeping the bow's speed unbroken through every
  finger change.
- **Examples & play-arounds.** (1) a 4-note line: bow one long even down-bow while the fingers
  walk 0-1-2-3 — the bow doesn't know the fingers moved; (2) the same, one bow per note,
  matching the down and up; (3) air-bow the line (no fingers), then finger it silently
  (no bow), then combine.
- **The usual mistake.** The bow hitching or slowing at every finger drop; or the fingers
  waiting for the bow. They run on separate tracks.
- **Where it comes from.** `<Cite>` — Galamian's "correlation of the hands"; the hands-separate-
  then-together method is universal (Simon Fischer *Practice*).
- Sources: Galamian *Principles*; Simon Fischer *Practice*.

### A5 · `landing-in-tune` *(moved up from Movement D — D1)*
Placed here, right after the first string lesson, so intonation-checking is a habit from the
first stopped note. Full spec in **Movement D** (D1) — but it is taught here, in sequence.

### A6–A9 · the core string lessons, in Suzuki order: `the-a-string` → `the-d-string` →
`the-g-string` → `the-e-string`

Each: the 6-step multi-sensory sequence (`CONTENT-STANDARD.md` §3b) for that string's five
natural notes.

- **A6 `the-a-string`** — A(0) B(1) C(low 2) D(3) E(4). The natural C is a **low 2**; C♯
  (high 2) is what A major and Twinkle want — the first place the low/high-2 choice bites.
  4th-finger E = open-E check. The A string first: middle bow-arm plane, easiest hand shape.
- **A7 `the-d-string`** — D(0) E(1) F(low 2) G(3) A(4). Natural F is **low 2**; F♯ (high 2) is
  the D-major note. 4th-finger A = open-A check. First string *crossing* territory (with the
  A string).
- **A8 `the-g-string`** — G(0) A(1) B(high 2) C(3) D(4). Natural B is a **high 2** (up against
  3, not halfway). **This is where ledger-line reading arrives** (Movement B, `ledger-lines`,
  is timed with this). 4th-finger D = open-D check. The Ode-to-Joy and Hot-Cross-Buns fragments
  currently inside the old `the-g-string` move out to full tunes in Movement F; this lesson
  keeps the ladder + a skip drill + the check.
- **A9 `the-e-string`** — E(0) F(low 1) G(low 2) A(3) B(4). **The one string where 1st finger
  has a low option** (F♮ is a low 1, right by the open string; F♯ is a normal 1). No open
  string above — check A on the E string against 4th-finger A on the A string, or a drone.
  *(Twinkle, in Movement F, borrows open E + 1st-finger F♯ before this lesson — with a
  one-line "the E string proper is A9" note.)*
- **Each lesson's play-arounds.** (1) the natural-note ladder up and down (labelled,
  `M:none`); (2) skips — the 0–2–4 broken chord; (3) one finger pattern from A2 on this
  string; (4) the same-pitch check against the neighbouring open string; (5) a short
  step/skip *reading* line on this string alone.
- **The usual mistake** (per string): A — C♮ where C♯ is wanted in A major; D — F♯ where F♮
  is written (and vice-versa); G — 2nd finger halfway instead of high; E — F♯ where F♮ (low 1)
  is written.
- **Where it comes from.** `<Cite>` — Suzuki teaches one string completely, with a tune,
  before mixing (Book 1: A string → *Long Long Ago* on D → *Allegretto* on G); Doflein "music
  with five notes"; the same-pitch checks are the PDF's verified list.
- Sources: Suzuki Book 1 + teaching points; Doflein Book I; violinwiki/violinlounge
  first-position charts; the PDF accuracy policy.

### A10 · `crossing-between-strings` *(new)* — track: left-hand / coordination
- **Teaches.** Moving between two strings in first position: the **whole arm** changes level
  (elbow leads) — Stage 0's "stopping a lift on a different floor" — and the left-hand **frame
  stays the same shape**, only the elbow swings a little under for the lower string. Prepare
  the next finger *before* the crossing where you can.
- **Examples & play-arounds.** (1) open A ↔ open D, slow, whole arm; (2) 1st-finger B (A
  string) ↔ 1st-finger E (D string) — same finger, arm changes level; (3) a 6-note line that
  crosses A↔D twice; (4) the crossing in slow motion, naming "arm down… arm up".
- **The usual mistake.** Twisting the wrist or re-shaping the hand to reach a string, instead
  of moving the arm; the bow hitting two strings at once at the crossing.
- **Where it comes from.** `<Cite>` — Galamian on arm levels / planes; ties to Stage 5
  `string-crossings` (the bow side of it, later).
- Sources: Galamian *Principles*; Stage 0 `your-first-sound` / `the-geography-of-the-bow`.

### A11 · `one-pitch-more-than-one-place` *(rewrite — was `same-pitch-more-than-one-place`)*
- **Teaches.** A written pitch can have more than one first-position home. The **verified
  same-pitch checks**: G-string 4 = open D · D-string 4 = open A · A-string 4 = open E. A
  D-string 3rd-finger G is an **octave above** open G, *not* the same pitch (the PDF's own
  correction). The course always gives the **beginner / lower-string default** and says it's a
  choice.
- **Examples & play-arounds.** (1) play 4th-finger D then open D — identical; (2) play the
  written note D four ways it *could* be reached, hear they're the same pitch (except the
  wrong octave one); (3) "which would you use, and why" — usually the one that avoids a string
  crossing.
- **The usual mistake.** Assuming there's one legal fingering; or confusing the octave (D 3rd
  finger on the G string is G4, not the low open G).
- **Where it comes from.** `<Cite>** — the PDF's accuracy policy; the "contextual fingering,
  here's the default" rule (`DECISIONS.md`).
- Sources: the PDF accuracy policy p5; `docs/DECISIONS.md`.

---

## Movement B — Reading pitch off the page (10 lessons)

### B1 · `the-staff` *(rewrite)*
- **Teaches.** Five lines, four spaces. Higher on the staff = higher pitch. A note is a dot
  on a line or in a space. That's the whole idea — everything else is which dot is which.
- **Examples & play-arounds.** (1) point at "higher / lower" pairs; (2) a shape that goes
  up-up-down read as a *contour* before any names; (3) clap-nothing, just trace the line with
  a finger.
- **The usual mistake.** Reading a stack of notes as unrelated symbols instead of a rising or
  falling line.
- **Where it comes from.** `<Cite>` — staff notation from the 11th-century monks (Guido
  d'Arezzo); "pitch = height" is the one durable idea.
- Sources: Britannica / Wikipedia "staff (music)"; roli.com treble-clef history.

### B2 · `the-treble-clef` *(rewrite)*
- **Teaches.** The curly sign is a stylised capital **G** — its inner curl wraps the **second
  line**, fixing that line as the note **G** (the G above middle C, = 3rd-finger on the D
  string, or open... no, it's G4). Everything else is counted from there. It's the violin's
  home clef; you'll almost never read another.
- **Examples & play-arounds.** (1) find "the clef's G" and play it; (2) count up a third from
  it to B (the middle line); (3) trace the clef shape, see the G.
- **The usual mistake.** Memorising "Every Good Boy…" and then being lost the moment a note
  is on a ledger line. The clef gives you *one* anchor; you count from it.
- **Where it comes from.** `<Cite>` — the G clef evolved from a plain capital G by the 13th
  century (Smithsonian; roli.com).
- Sources: Smithsonian "evolution of the treble clef"; Britannica; Wikipedia "clef".

### B3 · `lines-and-spaces` *(rewrite)*
- **Teaches.** Naming line and space notes — **and the landmark method**: don't memorise all
  nine, memorise **four anchors** (the clef's G on line 2; and the three upper open strings on
  the staff — open D just below the staff, open A in the 2nd space, open E in the top space),
  then read everything as a step or skip from an anchor.
- **Examples & play-arounds.** (1) place the four anchors on a blank staff; (2) "this note is
  one step above open A — what is it?"; (3) a 5-note line read entirely by anchor + interval.
- **The usual mistake.** Counting up from the bottom line every single time — slow, and it
  breaks on ledger lines.
- **Where it comes from.** `<Cite>` — landmark-note reading is the standard modern method
  (musicandtheory.com, colourfulkeys); Percival Hodgson's pattern principle.
- Sources: musicandtheory.com; colourfulkeys.ie "4 stages of teaching music reading".

### B4 · `steps-and-skips` *(new)* — the intervallic-reading lesson
- **Teaches.** Read the *shape*, not the names. A **step** (2nd) moves line→space or
  space→line — adjacent. A **skip** (3rd) moves line→line or space→space. Bigger jumps are
  4ths, 5ths (open-string to open-string on the staff). Read a line as "step up, step up, skip
  down, step up" *before* naming a note — the names fill in as you play.
- **Examples & play-arounds.** (1) a line labelled only with ↑step / ↑skip arrows; (2) the
  same line, now name the notes using an anchor; (3) two lines with the same *contour* but
  different starting notes — read the shape, transpose by ear.
- **The usual mistake.** Naming every note out loud and losing the pulse. The shape carries
  you; names are a check.
- **Where it comes from.** `<Cite>` — Percival Hodgson's pattern-recognition system; the
  Suzuki "steps and skips" teaching (teachsuzuki).
- Sources: colorinmypiano "intervalic reading"; teachsuzuki "steps and skips"; Wikipedia.

### B5 · `ledger-lines` *(rewrite)*
- **Teaches.** Short lines that extend the staff up or down for notes outside it. Middle C is
  one ledger line below; the whole **G string reads below the staff** on and between ledger
  lines — normal for the violin, not an exception. The E string's top notes ride ledger lines
  above.
- **Examples & play-arounds.** (1) the G-string ladder (from A8), now *on the staff* with its
  ledger lines; (2) count a ledger note as a skip from open D; (3) match a ledger note to a
  finger on the G string.
- **The usual mistake.** Panicking at ledger lines. They're just the staff continued — same
  step/skip rules.
- **Where it comes from.** `<Cite>` — ties to B3's anchors: open D is *the* anchor for
  everything below the staff.
- **Timing:** this lesson runs with **A8 `the-g-string`** — ledger reading and the G string
  arrive together.
- Sources: as B1/B3.

### B6 · `open-strings-on-the-staff` *(rewrite)*
- **Teaches.** Where the four open strings sit — G below (ledger), D just under the bottom
  line, A in the second space, E in the top space. These are your fixed anchors; every stopped
  note is a step or skip from one.
- **Examples & play-arounds.** (1) the four open strings as whole-less notes, played; (2) a
  line that touches all four open strings — read by anchor; (3) "which open string is this
  nearest?"
- **The usual mistake.** Not using them — reading a stopped note from scratch when an open
  string sits a step away.
- **Where it comes from.** `<Cite>` — the open strings as a tuned reference on the page and in
  the ear (ties to Stage 0 `tuning`).
- Sources: as B3.

### B7 · `reading-the-a-and-d-strings` *(rewrite — merges the two old reading drills)*
- **Teaches.** Connect **finger → pitch → staff position** for every natural note on the A and
  D strings (the first two learned). A **pitch-only** reading line (`M:none`, stemless — no
  un-taught rhythm) with `reveal`.
- **Examples & play-arounds.** (1) an A-string line, work out name/string/finger, reveal;
  (2) a D-string line; (3) a line that crosses A↔D; (4) the same line at a slower "say it
  first" pace.
- **The usual mistake.** Reading name → finger and skipping the *pitch* — you're decoding, not
  hearing. Sing it first.
- **Where it comes from.** `<Cite>` — the scaffold-removal idea (name+string+finger fades) is
  the PDF's, mirroring Violinspiration's tab-scaffold approach.
- Sources: the PDF scaffold section p4; Violinspiration "how to read sheet music".

### B8 · `reading-the-g-and-e-strings` *(rewrite)*
- Same as B7 for the G and E strings — G below the staff (ledger), E at the top. Note the E
  string's low 1 (F♮).
- **Play-arounds.** A G-string line (ledger reading) · an E-string line · a line crossing
  G↔D↔A · a line spanning a whole first-position hand.

### B9 · `which-note-is-this` *(rewrite — was `which-b-is-this`)*
- **Teaches.** The register problem — the same letter appears in more than one octave (B on
  the G string vs B on the A string; C on the A string vs C an octave up). **C4 / C5** as
  *labels for later* — for now, "the lower B" / "the higher B", read from the staff position.
- **Examples & play-arounds.** (1) two B's on the staff, an octave apart — which string/finger
  each; (2) a line that uses both; (3) "same letter, which one" quiz.
- **The usual mistake.** Seeing "B" and playing the first B you know, ignoring the octave the
  staff shows.
- **Where it comes from.** `<Cite>` — the PDF calls this a keystone lesson; octave numbering
  (Helmholtz / scientific pitch) deferred as "later language".
- Sources: the PDF §7; `docs/CURRICULUM.md`.

### B10 · `all-the-first-position-landmarks` *(rewrite)*
- **Teaches.** The full first-position natural-note map on the page — every string, every
  finger, as one picture. A mixed **pitch-only** drill + reveal that spans all four strings.
- **Examples & play-arounds.** (1) the whole map as a `<Diagram>` (fingerboard + staff side by
  side — new diagram); (2) a mixed line; (3) a "name the odd one out" quiz.
- **The usual mistake.** Knowing each string in isolation but freezing when a line jumps
  between them. Read by anchor + interval, not by re-deriving.
- **Where it comes from.** `<Cite>` — Doflein "music with eight notes" then more; the map is
  the thing every first-position method builds toward.
- Sources: Doflein Book I; first-position charts.
- **Needs a new `<Diagram>`:** `FingerboardFirstPosition` — the fingerboard with the natural
  notes marked, beside their staff positions. Flag in decisions.

---

## Movement C — Sharps, flats & the key signature (5 lessons)

### C1 · `sharps-flats-and-naturals` *(rewrite)*
- **Teaches.** ♯ raises a note a half step, ♭ lowers it, ♮ cancels either. On the violin **a
  finger moves** — ♯ usually slides the finger *toward the scroll... no, toward the bridge*
  (higher), ♭ toward the nut. The half step is fingers *touching* (back to A3).
- **Examples & play-arounds.** (1) F♮ then F♯ on the D string — the 2nd finger slides a half
  step; (2) B♮ then B♭ on the G string; (3) a line with an accidental, play it both ways, hear
  the difference; (4) drone-backed — which one does the key want.
- **The usual mistake.** Thinking ♯/♭ is a different *finger*. It's the *same* finger, moved.
- **Where it comes from.** `<Cite>` — accidentals as the fret-free finger-shift; ties forward
  to Stage 4 `whole-steps-and-half-steps`.
- Sources: music theory basics; violinlounge/violinspiration first position.

### C2 · `the-key-signature` *(rewrite)*
- **Teaches.** The ♯s or ♭s straight after the clef apply **all through the piece, every
  octave** — so you don't write the accidental every time. **Order of sharps: F C G D A E B**
  (itself a chain of ascending fifths — the circle of fifths, Stage 4). One sharp = F♯ = **G
  major**; two = F♯ C♯ = D major; three = A major. A mnemonic, but the *pattern* (each key a
  fifth up, one more sharp) is the real thing.
- **Examples & play-arounds.** (1) a G-major line with no written ♯s — every F is F♯ because
  the signature says so; (2) spot the F that's really F♯; (3) same melody in G then D — the
  hand shape shifts, the reading rule is identical.
- **The usual mistake.** Playing F♮ in a sharp key because there's no ♯ written next to that
  note — the signature already said it.
- **Where it comes from.** `<Cite>` — the order of sharps is a chain of fifths (muted.io,
  music-theory-practice); ABRSM Grade 1 keys are C, G, D.
- Sources: muted.io "order of sharps"; music-theory-practice; ABRSM Grade 1 syllabus.

### C3 · `accidentals-inside-a-bar` *(rewrite)*
- **Teaches.** An accidental *not* in the key signature lasts **only to the next bar-line**,
  then resets. It applies to that note's octave for the rest of the bar. Courtesy (reminder)
  accidentals in brackets.
- **Examples & play-arounds.** (1) a bar with a ♯ on the first F — every F in that bar is F♯,
  next bar back to normal; (2) find where the natural returns; (3) a courtesy-accidental line.
- **The usual mistake.** Carrying an accidental past the bar-line, or forgetting it applies to
  the *rest* of the bar.
- **Where it comes from.** `<Cite>` — standard notation convention; the PDF's own §20.
- Sources: the PDF §20; music theory basics.

### C4 · `reading-in-g-major` *(rewrite — was `reading-g-major`)*
- **Teaches.** Put it together: one sharp (F♯), read by interval, land the high 2 on the D
  string. A **pitch-only** G-major reading line + reveal. This is where Movement A's hand and
  Movement B's eye meet.
- **Examples & play-arounds.** (1) the one-octave G-major note-row (G string → D string,
  crossing at open D) — *reading* it, not the scale drill yet (that's Stage 4); (2) a short
  G-major phrase; (3) the same phrase with the F written as ♮ — hear it fight.
- **The usual mistake.** Low 2 for F where the key wants F♯ (high 2).
- **Where it comes from.** `<Cite>` — ties to `why-g-major-has-one-sharp` (already written).
- Sources: as C2.

### C5 · `reading-in-d-and-a` *(new — was folded into `reading-g-major`)*
- **Teaches.** Two sharps (F♯ C♯ = D major), three (F♯ C♯ G♯ = A major). The reading rule is
  the same; the hand shape shifts (C♯ = high 2 on the A string; G♯ = high 3 on the D). D and A
  are the other two "beginner-friendly" keys — they fall under the first-position hand for the
  same open-string reason as G.
- **Examples & play-arounds.** (1) a D-major phrase; (2) an A-major phrase (the Twinkle key);
  (3) the same tune in G, then D — read both.
- **The usual mistake.** Forgetting C♯ / G♯ from the signature.
- **Where it comes from.** `<Cite>` — ABRSM Grade 1–2 keys (C, G, D, then A); Suzuki Book 1
  lives in A.
- Sources: ABRSM Grade 1–2 syllabus; Suzuki.

---

## Movement D — Landing it in tune — the ear, this user's growth axis

**D1 `landing-in-tune` is taught in Movement A (as A5)** — right after the first string
lesson, so it's a habit from the first stopped note. Its full spec:

### D1 · `landing-in-tune` *(rewrite · taught at A5)*
- **Teaches.** Knowing the finger's *place* is not the same as playing *in tune*. The method:
  **hear the pitch first** (sing it, or a drone), *then* place the finger, then **check** —
  against the open string a fourth/fifth away, or the drone — and adjust by millimetres until
  the beating stops.
- **Examples & play-arounds.** (1) sing E (1st finger on the A string), then play it, then
  check it against the open string; (2) drone on A, play C♯ (high 2), slide until it locks;
  (3) play a familiar phrase, deliberately land one note flat, hear it, fix it.
- **The usual mistake.** Placing the finger by eye/memory and moving on — never checking. And
  gripping (a tense hand can't make the millimetre adjustment).
- **Where it comes from.** `<Cite>` — the ear-first consensus (violinist.com "intonation
  without exterior guides"); "put your fingers where you *hear* the note".
- Sources: violinist.com intonation threads; fiddlerman "drones for intonation".

**The rest of Movement D is a short cluster after Movement C:**

### D2 · `ringing-tones` *(new)*
- **Teaches.** Some stopped notes make an **open string ring by itself** — D on the A string
  rings the open D; A on the E string rings the open A; and the octave/fifth partners. When
  the note is exactly in tune, you *hear and feel* the sympathetic ring. A free, built-in
  tuner on every violin.
- **Examples & play-arounds.** (1) play 3rd-finger D on the A string — listen for the open D
  humming; nudge it in and out of tune, hear the ring appear and vanish; (2) the same with
  A on the E string; (3) a G-major phrase, notice which notes ring.
- **The usual mistake.** Not listening for it — the ring is quiet and easy to miss until you
  know to expect it.
- **Where it comes from.** `<Cite>` — Galamian and Simon Fischer on resonance / ringing tones
  as an intonation guide; ties to Stage 4 `the-harmonic-series`.
- Sources: Simon Fischer *Basics*; violinist.com "ringing tones" (Laurie Niles).

### D3 · `sa-and-the-letter-names` *(rewrite)*
- **Teaches.** **Sa** as a *movable* function — the tonic, "home", wherever the key puts it —
  vs **G / A / B** as *fixed* letter names. Movable-do solfège (do re mi… = Sa re ga…) as the
  bridge: in G major, G is do/Sa; in D major, D is do/Sa. This is built for this user's tabla
  / North-Indian-classical ear.
- **Examples & play-arounds.** (1) the G-major phrase sung in letters, then in do-re-mi, then
  in Sa-re-ga; (2) the *same* phrase transposed to D — the solfège/Sa is identical, the
  letters all change; (3) "find Sa" in three keys.
- **The usual mistake.** Treating letter names as the music. The *function* (this is the
  tonic, this is the leading note) is what the ear actually tracks.
- **Where it comes from.** `<Cite>` — movable-do / functional solfège (Kodály, and the direct
  parallel to sargam); the PDF's "movable-Sa ↔ fixed-letter bridge" (new for this user).
- Sources: `docs/RESEARCH.md` user profile; Kodály / movable-do literature; sargam ↔ solfège.

### D4 · `hearing-a-wrong-note` *(new)*
- **Teaches.** The ear catching *itself*: a note that's too high sounds "bright / sharp /
  pinched", too low sounds "flat / dull / sagging" — and the fix is a **tiny** finger move,
  not a re-place. Slow, drone-backed, one note at a time. This is the skill that makes every
  later intonation lesson possible.
- **Examples & play-arounds.** (1) drone on D, play F♯ deliberately high, then deliberately
  low, then centred — name what each felt like; (2) a phrase where one note is planted wrong —
  find and fix it by ear only; (3) "too high or too low?" quiz against a drone.
- **The usual mistake.** Hearing "wrong" but not *which way* — so the correction is a guess.
  And over-correcting past the note.
- **Where it comes from.** `<Cite>` — "adjust the finger slightly each time until it sounds
  right" (the familiar-tune method); Simon Fischer on hearing direction of error.
- Sources: violinist.com / Quora intonation practice; Simon Fischer.

---

## Movement E — Taking the scaffolding off (3 lessons)

### E1 · `reading-a-steady-beat` *(new — rhythm-lite)*
- **Teaches.** Just enough rhythm to play the tunes: a **quarter note** = one beat, a **half**
  = two, a **whole** = four; count **1-2-3-4** out loud against the metronome. The time
  signature's top number = beats per bar. **The full rhythm system is Stage 2** — pointer.
- **Examples & play-arounds.** (1) clap quarters, then halves, then a whole, counting;
  (2) a one-string line in quarters and halves, counted then played; (3) the same pitches, a
  different quarter/half arrangement.
- **The usual mistake.** Playing the notes with no pulse — "reading" without counting.
- **Where it comes from.** `<Cite>` — Leopold Mozart: beat the time before the violin comes
  up; Essential Elements teaches subdivision from the first page.
- Sources: `LINEAGE-QUOTES.md` (Leopold Mozart); Essential Elements.
- **`NOTATION-COVERAGE.md`:** this lesson + its forward pointer closes the common-time /
  note-value gap for Stage 1.

### E2 · `taking-the-help-away` *(rewrite)*
- **Teaches.** The scaffold fades one cue at a time — name + string + finger → name + finger →
  name only → plain notation. **You pick your level** (the `reveal` toggle, and later lessons
  default to less). Try the line first every time, *then* reveal.
- **Examples & play-arounds.** The *same* 8-note line shown at each scaffold level in turn;
  a "cover the labels" self-test; a plain-notation line with the answer one tap away.
- **The usual mistake.** Leaning on the labels forever — glance, don't stare; work it out,
  then check.
- **Where it comes from.** `<Cite>` — the PDF's scaffold-removal, mirroring Violinspiration's
  string-letter/finger-number tab scaffold.
- Sources: the PDF p4; Violinspiration.

### E3 · `the-first-position-reading-check` *(rewrite — checkpoint)*
- **Teaches.** A short mixed line, plain notation, all four strings, keys C/G/D — self-check.
  "You can read first position." Plus the **pre-read routine** in miniature: clef, key, range,
  before the bow moves.
- **Content.** A `<Quiz>`-style self-check + one plain-notation line with reveal + a "where you
  should be" list (like `the-foundation-check`).
- **Where it comes from.** `<Cite>` — the pre-read routine (Stage 8 does it in full); ABRSM
  Grade 1 sight-reading scope (simple time, the grade's keys and range).
- Sources: thestrad "how to help students with sight-reading"; ABRSM.

---

## Movement F — The tunes (~15 melody lessons, released across the stage)

Each is an **`AnnotatedScore`** (`CONTENT-STANDARD.md` §5): our re-notation, name/string/finger
per note, playback, and **a how-to-play note per line** — the *one* thing that tune is for
(Suzuki's rule). All are public-domain; **Claude notates them**, verified. Also on `/practice`.

Order follows the string order (A → D → G → E) and Suzuki Book 1's sequence.

| # | Tune | Key / strings | Unlocks after | The one point (Suzuki-style) |
|---|---|---|---|---|
| F1 | **Twinkle rhythms** (open strings) | open A, open E | A1 + A4b | the Twinkle rhythm variations bowed on open strings — before any fingers; hands-together warm-up |
| F2 | **Twinkle, Twinkle** (theme) | A major — A string + open E (+ 1st-finger F♯) | A6 | the Suzuki start: 0-1-2-high 2-3 on the A string; small bows in the middle, quick finger drops |
| F3 | **Ode to Joy** (phrase 1 → whole) | A major — A string + open E | A6 + E1 | the course's namesake tune; a singing line, phrasing across four phrases (a dotted bar → Stage 2 pointer) |
| F4 | **Lightly Row** | A major | A6 | bow division — upper half vs lower half |
| F5 | **Song of the Wind** | A major | A6 + A4 | the 1↔3 "jumping finger" (the frame); energy, bow retakes |
| F6 | **Go Tell Aunt Rhody** | A major | A6 | phrasing; a held, in-tune last note; bow distribution |
| F7 | **Au Clair de la Lune** | A + D strings | A7 + A10 | your first string crossing *in a tune* — whole arm |
| F8 | **Long, Long Ago** | D major | A7 + C5 | a singing line, whole bows, right elbow for tone |
| F9 | **French Folk Song** | D minor / D | A7 + C5 | minor colour; a smooth legato-*feel* line (slurs are Stage 5) |
| F10 | **When the Saints Go Marching In** | D major, D + A | A7 + C5 + E1 | a confident skip up to start; consecutive down-bows |
| F11 | **London Bridge** | D major | A7 | very short, pure step/skip reading; a light bow |
| F12 | **Hot Cross Buns** | G string (B A G) | A8 | three notes, one string; the high-2 B; all down-bows to start |
| F13 | **Merrily We Roll Along** / **Mary Had a Little Lamb** | G string | A8 | stepwise motion on one string, even bows |
| F14 | **Frère Jacques** (round) | G major | A8 + B8 | play it as a round against the playback |
| F15 | **Jingle Bells** (chorus) | A or D major | A9 + E1 | repeated notes, quick finger drops, a familiar target; touches the open E string |

*(F3, F10, F15 touch a dotted rhythm — they carry the "you'll learn this properly in Stage 2"
pointer, `NOTATION-COVERAGE.md`.)*

---

## The `/practice` page (built with this stage)

- Route `/practice` (or `/pieces`). A flat list of every melody unlocked so far.
- Per row: **title · key · lowest position · the one skill · was-in-the-PDF**. Filterable by
  those.
- Tap a row → the same `AnnotatedScore` + how-to-play notes + playback as in the curriculum
  (authored once; the curriculum lesson and the practice row render the same MDX/component).
- Sits in the site nav next to "Contents". It's the "just let me play" door; Contents is the
  "teach me why" door.

---

## Sourcing

Every tune above is a **public-domain nursery / folk / Suzuki-vein melody — Claude notates it**
in ABC, first position, verified against the standard version. The Suzuki *sequence* is
referenced; the notation is ours. **No PDF needed.** Vivaldi *Spring* → Stage 4, from
`docs/source/vivaldi-spring-easy.pdf`.

---

## New components / infra this stage needs — keep it lean

Deep content, simple code. Build the minimum that serves the plan; no speculative features.

1. **`AnnotatedScore`** — a thin extension of `NotatedExample`: the tune + the existing
   name/string/finger labels + one **how-to-play line of text per system** + a
   **moving-cursor** on playback (abcjs `TimingCallbacks` — a few lines). **No walk mode, no
   per-note commentary UI** for Stage 1 — those wait until a lesson genuinely needs them
   (K.216). Most Stage 1 tunes fit one line; handle a second line only when a tune needs it.
2. **`/practice` page** — a **static list**, no database, no search index. A table generated
   from the pieces manifest (title · key · position · skill · in-the-PDF), each row a link to
   the tune. Add real filtering later if it's ever wanted.
3. **Pitch-only notation** — one abcjs flag path: `M:none` + hide stems, for pure pitch
   drills. Small.
4. **A pieces manifest** — `content/pieces.ts`, the same shape as `lib/curriculum.ts`'s lesson
   list. Feeds both the in-lesson `AnnotatedScore` and `/practice`.
5. *(Optional, only if quick)* a first-position fingerboard `<Diagram>` for B10 — otherwise
   B10 uses a table + the notes on the staff. Don't hold the stage for it.

---

## Decisions — all locked (2026-09-02)

1. **String / note order: A → D → G → E** — the way Hilary Hahn (Suzuki) learned. The
   systematic per-string lessons run in this order; a tune may borrow an open string or one
   1st finger from a not-yet-covered string (with a one-line pointer), exactly as Suzuki does.
2. **Movement D interleaved** — `landing-in-tune` (D1) is taught in Movement A right after the
   first string lesson; D2–D4 (ringing tones, Sa, hearing wrong notes) are a short cluster
   after Movement C.
3. **Build the whole stage at once.** Within that: build and prove **`AnnotatedScore` on one
   tune first**, and do the deferred visual check of the `responsive:"resize"` notation, before
   writing the other 14 tunes.
4. **Nothing cut.** Added: `hands-together` (A4b — bow independent of the fingers) and
   `crossing-between-strings` (A10 — the left-arm side of string changes). Stage 1 is now
   **~35 skill lessons + 15 tunes + `/practice`**.

## Final count

| Movement | Lessons |
|---|---|
| A — the hand on the string | 11 (A1, A2, A3, A4, A4b, A5=D1, A6–A9 strings, A10, A11) |
| B — reading pitch | 10 |
| C — sharps, flats, keys | 5 |
| D — landing in tune (D2–D4; D1 at A5) | 3 |
| E — scaffold removal + rhythm-lite | 3 |
| F — the tunes | 15 melody lessons |
| **infra** | `AnnotatedScore`, `/practice`, `FingerboardFirstPosition` diagram, pitch-only notation mode, pieces registry |

**Ready to implement.** Pick up next session.

---

## Research appendix — the concrete pedagogy behind each lesson

*(All web-researched 2026-09-02. Every claim below is cited; write the lessons from this, not
from memory.)*

### How the standard methods sequence first position

- **A real teacher's first-four-lessons plan** (ensembleschools.com "ultimate violin lesson
  plan"): L1 = bow hold + violin hold + **open strings**; L2 = **left hand** + (for kids)
  tapes, then practise in **three modes — bows only / fingers only / bows + fingers**; L3 =
  first song = **Twinkle**, colour-coded + finger numbers, *not reading yet*; L4 = basic note
  reading + Suzuki Book 1. Open-string emphasis: **A, D, G** (E taught later; C is cello).
  → This is exactly our A → D → G → E order and our `hands-together` lesson (the three modes).
- **Doflein Method Book I, full chapter list** (schott-music.com, sharmusic): 1 *Music with
  five notes* · 2 *six notes* · 3 *eight notes* · 4–5 *key-note on the first finger* ·
  6 *combination of both attitudes of the fingers* (the finger patterns) · 7 *dotted
  crotchets* · 8 *key-note on the third finger* · 9 *key-note on the second finger (C major)* ·
  10 *the keys and their signatures* · 11 *songs and pieces to play* · 13 *syncopation*.
  → validates: expand the note set gradually, patterns before keys, **pieces from the start**.
- **Essential Elements Book 1** (halleonard, westmusic): note names written **inside the
  noteheads**, then eliminated (our scaffold); **subdivision from page one**; **listening
  exercises for intonation**; **finger-pattern mixing pages**; large fingering charts; ~195
  tunes so progress is visible. Introduces the **D string + low 2** early.
- **Suzuki Book 1 order + teaching points** (stringpedagogy, kiyoematsuura, teachsuzuki):
  Twinkle (staccato vs détaché, small bows in the middle, quick finger drops) → Lightly Row
  (bow division upper/lower half) → Song of the Wind (1↔3 "jumping finger" = the frame; bow
  retakes, land below the balance point) → Go Tell Aunt Rhody (stepwise LH; rhythm via
  listening + singing) → O Come Little Children (bow distribution; consecutive up-bows) →
  May Song (dotted quarter–eighth) → **Long Long Ago (D string** via 1st-finger hopping;
  right elbow for tone) → Allegro (pattern 1-2-3-1) → Perpetual Motion (**4th finger** first
  time) → **Allegretto (G string)** → Etude (**low 2 in G**) → Minuets 1–3 (key changes,
  down-up-up, crossings, slurs) → Happy Farmer / Gavotte.

### The Twinkle rhythms (Suzuki Variation A–D — F1)

Four rhythmic variations on the Twinkle notes, bowed on **open strings first**, then with
fingers (teachsuzuki, stringskeysandmelodies): **A** = "Mississippi Stop-Stop" /
"taka-taka-stop-stop" (♬♬ ♩ ♩) · **B** = "Down Polly / Mommy-Daddy" (dotted, ♩. ♪) · **C** =
"Run Pony" (♪. ♬ …) · **D** = the plain theme (♩ ♩). They drill **détaché, staccato and a
stopped bow** before any left hand. (Rhythm names vary by teacher — pick one set.)

### Left-hand finger placement — the concrete detail

- Fingers **tall on the tips, never the pads** — the pad lets the pitch wander because the
  notes are so close together (violinspiration "finger placement", the Strad).
- The **first finger takes the shape of "three sides of a square."** Base knuckles roughly
  **level with the fingerboard**; the **base knuckle of the index touches the right side of
  the neck**.
- Fingers hover **slightly above the string they're about to play**. **Minimum pressure** —
  the string just needs to reach the fingerboard; no thumb/index clenching (Nathan Cole,
  the Strad).
- The **perfect 4th frame**: 1st finger to 4th finger is a **perfect fourth** in three of the
  four finger patterns — hold that interval constant and intonation locks
  (violinspiration/masterclass positions guides). 1st finger on G/D/A **rings the next open
  string**; 4th finger reaches the **octave** of the open string (check against the natural
  harmonic).
- **Common LH faults to name in the lessons** (ronaldsachs, fiddlehed, violinist.com):
  clutching / "frozen" hand (wrong muscles), collapsed wrist, tight grip, flat fingers,
  twisting the finger from the side instead of dropping from above, thumb clenched underneath.

### The finger-independence / action drill family (A4 `keeping-fingers-down`)

From violinspiration & violinist.com "all-purpose left-hand exercise": hold all four fingers
down, **lift and tap one at a time, 1-2-3-4 then 4-3-2-1**; **1↔3** back and forth (2
hovering); **2↔4** back and forth; lift 1+3 while dropping 2+4. **Keep the fingers behind the
sounding note down.** **Left-hand pizzicato** for the drop and for strength.

### Exact first-position natural notes + the low/high choices

| String | 0 | 1 | 2 | 3 | 4 | notes |
|---|---|---|---|---|---|---|
| **A** | A | B (1) | **C = low 2** / C♯ = high 2 | D (3) / D♯ = high 3 | E (4) | A major wants C♯ (high 2), D♯ rare |
| **D** | D | E (1) | **F = low 2** / F♯ = high 2 | G (3) / G♯ = high 3 | A (4) | D major wants F♯ (high 2), G♯ rare |
| **G** | G | A (1) | **B = high 2** / B♭ = low 2 | C (3) / C♯ = high 3 | D (4) | natural B is the **high** 2 (up against 3) |
| **E** | E | **F = low 1** / F♯ = 1 | **G = low 2** / G♯ = high 2 | A (3) / A♯ = high 3 | B (4) | the only string where **1st finger has a low option** — F♮ is a low 1 (reach back near the fingerboard end); F♯ is the normal 1; G♮ is low 2 |

*(Sources: violinlounge & violinspiration first-position charts; fisherviolins "natural notes
of the first position"; violinist.com "playing F natural on the E string". Cross-checked
against the interval structure — E→F, B→C are the natural half steps.)*

### Bow distribution for the tunes (the how-to-play notes)

From dummies.com "plan bow division", violinist.com: **whole bow** for whole and half notes,
**half bow** for quarters and eighths. The classic drill: mentally divide the bow into 4
sections, one note per section; then 3; then 2 (**half at the frog, half at the tip**); then
one note in a whole bow. Suzuki's *Lightly Row* point — first two quarters in the **upper
half**, last two in the **lower half**. This is the vocabulary for every melody's per-line
note.

### String crossing (A10)

From thestrad, stringsmagazine, Zlata Brouwer: **arm and bow stay in one plane** — "a plate of
glass under the arm." The **elbow leads** the crossing; the hand keeps its shape. Arm/elbow
**high for G, dropping** for D, A, E (hinge from the shoulder). **Beginner exercise:** play the
two strings as a **double stop** to find the balanced elbow *between* them, then do the
crossing **without changing the elbow level or the bow speed**.

### Intonation — ear-first (Movement D)

- **Hear the pitch before the finger moves** — sing it, or a drone (violinist.com "intonation
  without exterior guides", fiddlerman "drones"). Tapes are a crutch the ear must outgrow.
- Play **familiar tunes** and nudge each finger "slightly each time until it sounds right"
  (violinist.com, Quora).
- **Ringing tones** (D2): 1st finger on G/D/A rings the next open string; the note *feels*
  right when the sympathetic string hums (Simon Fischer, Laurie Niles "ringing tones").
- **Direction of error** (D4): too high = bright/pinched, too low = flat/dull; correct by a
  *millimetre*, don't re-place.

### Movable-do / Sa (D3)

Movable-do: **do sits on the tonic of whatever key you're in**, so a melody keeps the same
syllables in every key (Kodály standard; myeartraining, pitchd.net). **Sol wants to resolve
to Do; Ti leads up to Do; Fa pulls down to Mi.** Direct parallel to **sargam** (Sa Re Ga Ma
Pa Dha Ni) — Sa = the tonic/drone reference in North-Indian classical, which this user already
has in the ear. **Sing the syllable every time you play the note.**

### Reading — pattern-first (Movement B)

- Percival Hodgson's principle: read **patterns**, not the name of every note (thestrad
  "how to help students with sight-reading").
- Method: **landmarks + intervals** (steps line↔space, skips line↔line / space↔space) —
  memorise ~4 anchor notes, count everything else as a step/skip from an anchor
  (musicandtheory.com, colourfulkeys).
- **Drill note recognition separately first** (flashcards, games) so names become automatic,
  *then* read pieces (nycviolinstudio, practito). 10 min/day beats long sessions.
- **Pre-read**: clef, key, time signature, range, rhythm patterns, dynamics — before the bow
  moves. **Rhythm before pitch** (clap and count). **Keep going**, recover on the downbeat.
  **Read ahead** of the bow.

### Rhythm-lite (E1)

Quarter = 1 beat (count "1 2 3 4"), half = 2 ("1-2, 3-4"), whole = 4 ("1-2-3-4"); top number
of the time signature = beats per bar. **Clap the rhythm before the bow** (separates the
rhythmic problem from the technical one). Metronome at ~60, only speed up when accurate
(classicalguitarshed, rozannasviolins, lessonsinyourhome).

### The treble clef & the order of sharps (B2, C2)

The treble clef is a stylised **capital G**; its inner curl wraps the **2nd line**, fixing it
as G. Evolved from a plain capital G by the 13th century (Smithsonian). The **order of sharps
F C G D A E B is itself a chain of ascending fifths** — the circle of fifths clockwise from F;
each sharp key is a fifth up and adds one sharp (muted.io, music-theory-practice). ABRSM
Grade 1 keys: C, G, D major; Grade 2 adds A, B♭, F and one-octave minors.
