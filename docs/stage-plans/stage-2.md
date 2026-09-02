# Stage 2 — Rhythm: when & how long — the plan

**For approval before writing.** Built on `docs/stage-plans/stage-2-research.md` (the research
+ the verification pass + the user's decisions in §0 there). Read that first; this doc turns
it into a lesson-by-lesson spec.

A **rebuild**: 15 thin Stage-2 drafts already exist (`content/lessons/`), they're atom-length,
they don't hit the six beats, most have no real tune, and at least one has a factual error
(the *Twinkle*/*Ode* pickup claim — already patched). Same bar as the Stage 1 rebuild.

---

## Stage 2's end state

You can **read any first-position rhythm off the page and count it out loud** in standard
counting ("1 e & a"); you know every note-value, dot, rest, tie and time signature by sight;
you can tell a **beamed pair from a double stop from a vibrato wobble** (the Vivaldi confusion
— the reason this project exists); you understand **simple vs compound metre** including 6/8
properly (and 9/8, 12/8); you can read **triplets and syncopation**; you know how a
note-value becomes **a length and speed of bow**; and you play **~9 real first-position
tunes in their true rhythm** — no more Stage-1 rhythm simplification — each an annotated line
with a per-line how-to-play note that now includes bow-rhythm, all also on `/practice`.

## How this stage is taught (from `stage-2-research.md` §0)

- **One Western counting system, everywhere: metric counting** — "1", "1 & 2 &", "1 e & a",
  held notes "1 – 2 –". The way a conservatoire / ABRSM / Galamian / Western-Suzuki teacher
  counts. It ties rhythm to the barline, and it matches every other resource the user will
  ever open.
- **The stage does not "feel Indian."** The user's tabla background is acknowledged **once**,
  plainly (A1), as the reason we can move fast on *feel*. The tabla ↔ Western map is **one
  optional, skippable lesson** (D3) that introduces no term the rest of the stage uses. After
  that, never mentioned again.
- **Rhythm before pitch** (Kodály; Leopold Mozart). Most teaching examples are **rhythm-only**
  — one line, clap and count, no pitch — so rhythm is the only variable. Pitched examples sit
  on the **D string** (known from Stage 1, full name/string/finger labels — `RULES.md` #1).
  The **tunes** use the full first-position range.
- **Compound metre in full** (user: "teach it very properly"); **triplets and syncopation
  in depth**; **navigation split** — barlines/repeats/endings here, D.C./D.S./Coda → Stage 3;
  **overdotting** → a one-line pointer here, real coverage Stage 3.

## Decisions — locked (2026-09-02)

All nine in `stage-2-research.md` §0. In short: metric counting only; tabla bridge = one
optional lesson; **don't** fold in the Stage-1 tune-completion (stays deferred); 6/8 + 9/8 +
12/8 taught for real; triplets + syncopation in depth; barlines/repeats/endings in Stage 2
and D.C./D.S./Coda in Stage 3; overdotting = pointer now / lesson in Stage 3; the recitation
étude is in; build `RhythmTree` + a rhythm-only `<NotatedExample>` mode.

**One open sub-question:** *When the Saints Go Marching In* is a near-perfect Stage-2 tune
(pickup + dotted rhythm + ties in one PD melody) but it's one of the five "coming soon"
Stage-1 tunes the user said to leave deferred. Promote **just that one** to a Stage-2 tune,
or use *This Old Man* / *Pop Goes the Weasel* instead? (Plan assumes the substitutes.)

---

## Build order

Notation infra first — `RhythmTree` diagram + rhythm-only `<NotatedExample>` mode, proven on
**one** lesson (A4). Then Movements A→C (the note-length spine + the Vivaldi keystone) →
D (counting) → E (metre) → F (bending the beat) → G (the bow's half) → H (reading checks) →
I (the tunes). Straight through; movement boundaries are the review points.

---

## Movement A — Pulse, and the anatomy of a note (4 lessons)

### A1 · `rhythm-first` *(rewrite of `rhythm-before-the-instrument`)*
- **Teaches.** Rhythm is a steady **pulse, divided**. It comes before the instrument and
  before the staff: feel it, say it, clap it, *then* play it. The user's head-start named
  once, plainly: *"you come from a rhythmic tradition — a lot of this stage is learning to
  read notation for things your hands already feel. We'll count the standard Western way so
  the page, and every teacher and app you'll ever meet, line up."*
- **Examples.** (1) rhythm-only: four even pulses, then again — just the pulse, nothing else;
  (2) the same four, now counted "1 2 3 4" out loud; (3) rhythm-only: a simple long-short
  pattern clapped against the counted pulse.
- **The usual mistake.** Letting the pulse follow your hands — the fingers wander and the
  beat stretches to fit. The beat is the boss; the hands obey it.
- **Where it comes from.** `<Cite>` — Leopold Mozart: a pupil should *beat the time, keeping
  the quarter-notes in mind, before taking the violin in hand*, and *"never omit to attend to
  the evenness of the time"* (*Violinschule*, 1756, Ch. I). Kodály: **sound before symbol** —
  rhythm is spoken and clapped before it's read.
- Sources: `docs/LINEAGE-QUOTES.md`; Kodály pedagogy (funmusicco, musical-u).

### A2 · `beat-tempo-and-metre` *(new)*
- **Teaches.** Four words people muddle. **Beat** = the pulse you tap. **Tempo** = how fast
  that pulse goes (beats per minute; the metronome; the Italian words come in Stage 3).
  **Metre** = how the beats group — 2s, 3s, 4s — an accent pattern. **Rhythm** = the actual
  pattern of longs and shorts you play *over* the beat.
- **Examples.** (1) one pulse at ♩=60, then ♩=100 — same beat, different tempo; (2) rhythm-only:
  eight even taps felt "in 4" (accent every 4th), then "in 3" (accent every 3rd) — same taps,
  the metre moved; (3) a long-short-short rhythm over a plain pulse — the rhythm is not the
  beat.
- **The usual mistake.** Saying "faster" when you mean "more notes" — playing eighth notes
  isn't a faster tempo, it's a smaller subdivision of the same beat.
- **Where it comes from.** `<Cite>` — standard theory; the pulse-first idea traces to Leopold
  Mozart and every method since.
- Sources: Open Music Theory (metre); `stage-2-research.md` §2.

### A3 · `how-a-note-shows-its-length` *(rewrite — splits from `note-values`)*
- **Teaches.** A note's **shape** tells its length. A filled or open **head**; a **stem**;
  a **flag** on a lone short note, or a **beam** joining short notes. Those four parts, and
  what each one signifies. (Stem *direction*, up or down, is only engraving — it never
  changes the length.)
- **Examples.** (1) the parts labelled on one big note; (2) the same D on the staff as whole
  → half → quarter → eighth: watch the head fill, the stem arrive, the flag arrive
  (pitched, full labels — all "D, D string, open"); (3) a rhythm-only row mixing the shapes,
  name each.
- **The usual mistake.** Reading the head's *height* (pitch) and skipping its *fill* — an
  open head and a filled head at the same staff line are the same pitch and very different
  lengths.
- **Where it comes from.** `<Cite>` — modern noteheads descend from medieval **mensural
  notation** (open vs filled = long vs short); the system settled by ~1600.
- Sources: standard notation history (Wikipedia "mensural notation").

### A4 · `the-note-tree` *(new — builds `RhythmTree`)*
- **Teaches.** Whole = 2 halves = 4 quarters = 8 eighths = 16 sixteenths. Every step
  **halves**. That one relationship generates every value. Their counts in 4/4: whole
  "1 – – –", half "1 – ", quarter "1", eighth "1 &", sixteenth "1 e & a". (32nd notes — a
  third beam — exist; REFERENCE, you'll meet them in K.216.)
- **Examples.** (1) the `RhythmTree` `<Diagram>` — the halving, and the rest tree beside it;
  (2) rhythm-only: one whole note, then 2 halves, then 4 quarters, then 8 eighths over the
  **same** unchanging pulse — press play, hear the pulse hold; (3) quick maths: "how many
  eighths in a dotted half?"
- **The usual mistake.** Thinking a quarter note is a fixed length of time (like a second).
  It's **relative to the tempo** — faster tempo, every value shorter, the *relationships*
  unchanged.
- **Where it comes from.** `<Cite>` — the "note-value tree" is in every method book (Essential
  Elements, ABRSM Grade 1); the binary halving is the whole of Western duration notation.
- Sources: `stage-2-research.md` §2d; ABRSM Grade 1 theory.
- **Keep** the current `note-values.mdx` line: *"duration is relative to a steady beat, not
  an absolute length of time"* — it's good.

---

## Movement B — The marks that change a length (5 lessons)

### B1 · `the-dot` *(rewrite of `dotted-notes`)*
- **Teaches.** A dot **after** a notehead adds **half that note's value** again. Dotted half
  = 2 + 1 = **3**. Dotted quarter = 1 + ½ = **1½**. One rule, any value. Counting a dotted
  quarter + eighth: "**1** 2 **&**" (the dotted quarter holds through "1‑2", the eighth is on
  "&"). Double dot (adds half *then* a quarter again) — REFERENCE.
- **Examples.** (1) rhythm-only: quarter, then dotted quarter + eighth — hear the "long–short"
  lean; (2) rhythm-only: half vs dotted half in a 4/4 bar — the dotted half plus a quarter
  fills the bar; (3) pitched D-string: `D3/2 E/2 F2` — the dotted figure on known notes.
- **The usual mistake.** Playing the dotted quarter as *two* beats (ignoring the dot) or as
  an even "long–long". The dot is exactly half again — no more, no less.
- **Where it comes from.** `<Cite>` — the augmentation dot is medieval (*punctus
  additionis*); the "march" feel of dotted rhythm is Baroque and Classical (Stage 3 goes
  into how far to lean it).
- Sources: standard theory; `stage-2-research.md` §7 rows 7–8.

### B2 · `the-two-dots-that-look-alike` *(new)*
- **Teaches.** Same little dot, two completely different jobs, told apart only by **where it
  sits**. A **duration dot** sits *after* the head, on the note's line or space, and adds
  half the length again (B1). A **staccato dot** sits *above or below* the head and means
  *short and detached* — a way of playing, nothing to do with length. **read vs perform:**
  you *read* both here; you *play* staccato in Stage 5.
- **Examples.** (1) the same quarter note printed three ways — plain, with a dot after, with
  a dot above — name each; (2) rhythm-only: a line with duration dots vs a line with staccato
  dots, same note-count, very different look on the page; (3) a line that has both.
- **The usual mistake.** Seeing any dot near a note and lengthening it — or seeing a dotted
  quarter and clipping it short. Check the dot's *position* first.
- **Where it comes from.** `<Cite>` — the PDF flags this exact confusion (p61 §29); it's one
  of the most common early misreadings.
- Sources: the PDF §29; `docs/NOTATION-COVERAGE.md`.

### B3 · `rests` *(rewrite)*
- **Teaches.** Silence is written, and it has an exact length — the same value system as
  notes, no pitch. Whole 4, half 2, quarter 1, eighth ½, sixteenth ¼ (a rest tree, from A4's
  diagram). A rest is **active**: keep counting, and prepare the next thing — lift or reset
  the bow, move a finger, breathe. Multi-bar rest — REFERENCE.
- **Examples.** (1) rhythm-only: note, rest, note, rest — a full beat of silence between,
  keep the pulse through the gap; (2) rhythm-only: the rest value changing (quarter → eighth
  → half rest) in a 4/4 bar; (3) pitched D-string: a short phrase with a rest where you'd
  reset the bow.
- **The usual mistake.** Treating a rest as "nothing to read" — rushing off it, or losing
  the count during it, so the next note lands early.
- **Where it comes from.** `<Cite>` — the PDF (p60 §28): *"a rest is not 'nothing to read.'
  You must keep the pulse and prepare the next bow/finger."*
- Sources: the PDF §28.

### B4 · `beams-and-flags` *(rewrite of `one-beam-two-beams`)*
- **Teaches.** Flags and beams do the same job — they mark short values. **One** flag/beam =
  eighth; **two** = sixteenth; three = 32nd (REFERENCE). Lone note → flag; grouped notes →
  beam. And the useful part: **beams group by the beat** — a bar of eighths in 4/4 is beamed
  in pairs, one pair per beat, so the beaming *shows you where beats 1, 2, 3, 4 are*.
- **Examples.** (1) rhythm-only: four eighths beamed in 2 pairs — count "1 & 2 &", the beam
  = the beat; (2) rhythm-only: eight sixteenths in 2 groups of 4 — "1 e & a 2 e & a"; (3) the
  same eight sixteenths re-beamed a different (wrong) way — see how it hides the beat.
- **The usual mistake.** Reading a beam as a bow instruction ("all in one bow"). A beam is
  **rhythm grouping only** — whether beamed notes share a bow is a *slur* (B5), a different
  mark.
- **Where it comes from.** `<Cite>` — standard engraving convention (beam to the beat); the
  PDF p58–59.
- Sources: the PDF §26–27; Gould *Behind Bars* (engraving) — confirm a citable line.

### B5 · `ties-and-slurs` *(rewrite)*
- **Teaches.** Same curved line, two jobs, told apart by **what it joins**. A **tie** joins
  two noteheads at the *same pitch* — don't replay the second, hold the first through it
  (used across a barline, or for a length no single notehead shows). A **slur** joins notes
  at *different* pitches — a phrase mark; on the violin, usually "play this group in **one
  bow**." Instant test: curve between two identical staff positions = tie; curve over notes
  that move = slur.
- **Examples.** (1) pitched D-string: `D2-D2` tied — one 4-beat sound, one attack; (2)
  pitched: `(DEFG)` slurred — one bow, four pitches; (3) a line with both, name each.
- **The usual mistake.** Re-bowing or re-articulating across a tie; or reading a slur as a
  tie and holding one pitch when the notes actually move.
- **Where it comes from.** `<Cite>` — the tie/slur ambiguity is a standard early hurdle; the
  slur-as-one-bow convention is specific to strings (comes up again in Stage 5).
- Sources: the PDF §30; `docs/NOTATION-COVERAGE.md`.

---

## Movement C — Two notes, or two at once? (1 lesson — the keystone)

### C1 · `beamed-notes-double-stops-and-vibrato` *(rewrite of `beams-or-a-double-stop`)*
- **Teaches.** The confusion this whole project started from. On one line, separate three
  layers — **pitch** (which note), **rhythm** (how long), **bowing** (one bow or separate) —
  and three visual contrasts:
  | You see | Play it | Not to be confused with |
  |---|---|---|
  | noteheads **side by side**, joined by a **horizontal beam** | one after another, fast | a double stop |
  | noteheads **stacked vertically** at one point in time | **together** — two strings — a **double stop / chord** | a beam |
  | a wavy line, `tr`, or nothing at all, on one sustained note | that's **vibrato** — a pitch wobble, **never extra noteheads** | either of the above |
  And: a **beam is not a slur** — beaming is rhythm grouping; a shared bow is the curved slur.
- **Examples.** (1) beamed `D/2E/2` next to stacked `[DA]` — sequential vs simultaneous;
  (2) a fragment *in the style of* the Vivaldi *Spring* line (our notation — never the scan,
  `RULES.md` R1), the beamed sixteenths labelled and counted; (3) `<Quiz>` — "beam / stack /
  wobble: what is this and how do you play it?"
- **The usual mistake.** Seeing tightly-grouped short notes and freezing — reading them as a
  chord, or as "vibrato", instead of as fast notes in a row. Count the beam.
- **Where it comes from.** `<Cite>` — this is the PDF's stated reason for existing (p54): *be
  able to tell a quick pair of notes from a double stop from a slur from vibrato — the exact
  confusion that came up in Vivaldi Spring.*
- Sources: the PDF Part III opener + §24–25; `stage-2-research.md` §5.

---

## Movement D — Counting (3 lessons)

### D1 · `counting-the-beat` *(rewrite of `counting-and-konnakol`, renamed)*
- **Teaches.** The standard system, out loud. Quarters: "**1 2 3 4**". Eighths: "**1 & 2 & 3
  & 4 &**". Sixteenths: "**1 e & a 2 e & a**". Held notes: keep the number going — half note
  "**1 –**", whole "**1 – – –**". Say it with your voice and tap with your foot, so mouth and
  foot hold the pulse while your hands learn the notes. The **metronome**: start slow
  (~60–70), only speed up when it's accurate.
- **Examples.** (1) rhythm-only: eight eighths, counts under every note, say them out loud
  while it plays; (2) rhythm-only: a mixed bar (quarter, two eighths, quarter, four
  sixteenths) fully counted; (3) pitched D-string: a short line — count it *before* you bow.
- **The usual mistake.** Counting only the notes you play and going silent on the "&"s and
  the held beats — the count has to run *continuously*, especially through long notes and
  rests.
- **Where it comes from.** `<Cite>` — metric counting is the near-universal Western studio
  and syllabus method (ABRSM, Trinity, Galamian's studio, most Suzuki teachers). Leopold
  Mozart's "beat the time" is the same instinct, 1756.
- Sources: `stage-2-research.md` §2e, §3d; chromatone.center (counting systems).

### D2 · `subdivision` *(new)*
- **Teaches.** The skill of **feeling the smaller notes even when you're not playing them**.
  On a held half note, keep "& 2 &" ticking inside. Before a run of sixteenths, already feel
  "e & a". Subdivision is what stops you **rushing** — the commonest rhythm fault there is.
- **Examples.** (1) rhythm-only: a half note, then the same half note with the internal "1 &
  2 &" shown as ghost notes — feel the difference; (2) rhythm-only: a quarter followed by
  four sixteenths — subdivide *during* the quarter so the sixteenths don't bolt; (3) clap the
  beat, whisper the subdivisions.
- **The usual mistake.** Rushing the moment the notes get shorter (sixteenths, a fast run) —
  because the pulse was being felt in whole beats, not subdivisions. And clipping long notes
  because nothing was counted inside them.
- **Where it comes from.** `<Cite>` — Essential Elements teaches subdivision "from page one";
  Simon Fischer / Galamian on subdividing the long note. "Rushing when the notes get short"
  is the single most-cited beginner rhythm fault.
- Sources: `stage-2-research.md` §2b, §5-faults; violinist.com "Rhythmic Rainbow".

### D3 · `if-you-count-in-bols` *(new — optional, cordoned)*
- **Framing.** Marked **optional** in the lesson header and the contents — *"skip this unless
  you come from an Indian-rhythm background; nothing later depends on it."*
- **Teaches.** A one-time map, for this user only. Your tabla training already contains all
  of Stage 2's *feel*. The rough correspondences: **laya** ≈ tempo; **mātrā** ≈ beat; **sam**
  ≈ the downbeat / "1"; **layakārī** — *dugun* ≈ eighth notes, *tigun* ≈ triplets, *chaugun*
  ≈ sixteenths, *āḍ / dedh gun* ≈ 3-against-2 (hemiola). The one real difference: Western
  metre is **short, regular and divisive** — a bar cut into equal beats — where a tāl is a
  longer **cycle** you return to. Use whichever counting sits in your mouth when you practise
  alone; **this course keeps saying "1 e & a"** so the page and every other resource match.
- **Examples.** (1) one rhythm-only line, shown with "1 e & a" counts and — in a muted second
  row — the layakārī names, side by side, once; (2) nothing else. It's a reference card, not
  a drill.
- **Uses no term** — mātrā, laya, sam, layakārī — anywhere else in the stage.
- **Where it comes from.** `<Cite>` — Rafael Reina, *Applying Karnatic Rhythmical Techniques
  to Western Music* (Routledge, 2015): the architecture of Karnatic rhythm as a tool for
  Western rhythmic training. Adopted in Western practice by drummers like Victor Wooten and
  in the Berklee curriculum.
- Sources: `stage-2-research.md` §3; routledge.com; bmusician.com.

---

## Movement E — Grouping the beats (7 lessons)

### E1 · `time-signatures` *(rewrite)*
- **Teaches.** The two stacked numbers after the key signature. **Top** = beats per bar.
  **Bottom** = which note value is one beat (4 = quarter). **2/4** (march — strong-weak),
  **3/4** (waltz — strong-weak-weak), **4/4** (strong-weak-medium-weak). The metre is an
  **accent pattern**, not just an arithmetic.
- **Examples.** (1) rhythm-only: the same eight quarter notes barred as 2/4, then 3/4, then
  4/4 — hear the accent land differently; (2) pitched D-string: a 3/4 phrase, count "1 2 3";
  (3) a bar with the wrong number of beats — spot it.
- **The usual mistake.** Reading the bottom number as "how many" of something, or ignoring
  the metre's accent and playing everything flat.
- **Where it comes from.** `<Cite>` — time signatures as we know them settled in the 17th
  century out of mensural proportions; the accent-pattern idea is how conductors and players
  actually use them.
- Sources: Open Music Theory (metre); the PDF §31.

### E2 · `common-time-and-cut-time` *(rewrite of `common-time`)*
- **Teaches.** A big **C** where the time signature goes = **4/4**. **It is not a letter C
  and not short for "common"** — it's a *broken circle* left over from medieval notation (a
  full circle meant triple time, a broken circle meant duple). A **C with a slash** (**¢**) =
  **cut time / alla breve / 2/2** — felt "in 2", a quicker lilt. And: never read the C as the
  pitch C — its position (right after the clef and key) tells you it's a metre mark.
- **Examples.** (1) the C and the ¢ side by side, each with its bar of notes — 4/4 counted in
  4, cut time counted in 2; (2) a K.216-style excerpt opening with C (Mozart's editions use
  it); (3) "metre mark or pitch?" — the C in the time-signature slot vs a note on the third
  space.
- **The usual mistake.** Believing the C stands for "common" (it's a nice mnemonic, but it's
  wrong and it trips you up on ¢). Or pausing to wonder if it's a note.
- **Where it comes from.** `<Cite>` — the broken-circle history: medieval *tempus perfectum*
  (full circle, triple) vs *tempus imperfectum* (broken circle, duple).
- Sources: `stage-2-research.md` §7 row 16 (Wikipedia "Time signature"; liveabout.com).

### E3 · `simple-and-compound-time` *(new)*
- **Teaches.** The one question that sorts every time signature: **does the beat split in 2
  or in 3?** Split in **2** = **simple** time (2/4, 3/4, 4/4 — each beat = a quarter = two
  eighths). Split in **3** = **compound** time (6/8, 9/8, 12/8 — each beat = a *dotted*
  quarter = three eighths). In compound time the top number is the count of *eighths*, and
  you divide by 3 to get the beats.
- **Examples.** (1) rhythm-only: one beat split "1 &" (simple) then "1 & a" / "1-2-3"
  (compound) — the two ways a beat divides; (2) a 2/4 bar vs a 6/8 bar — same six-ish
  eighths, different *beat*; (3) tap the beat (2 taps) while saying all the eighths.
- **The usual mistake.** Counting 6/8 as six beats. It's **two** beats, each worth three
  eighths.
- **Where it comes from.** `<Cite>` — simple vs compound is the standard first cut in every
  theory syllabus; a compound beat is "a dotted note's worth".
- Sources: Open Music Theory (compound metre); ABRSM Grade 2.

### E4 · `six-eight` *(new — taught in full)*
- **Teaches.** 6/8 completely. Six eighth notes are written; they group **3 + 3**, giving
  **two dotted-quarter beats**. Count "**1 2 3 4 5 6**" with 1 and 4 stressed, then feel it
  as "**1 – – 2 – –**" — two big swung beats. This is the difference between a **march** (2/4,
  straight) and a **jig** (6/8, lilting). Why 6/8 ≠ 3/4 even though both hold six eighths:
  the *accent* (6/8 stresses 1 and 4; 3/4 stresses 1 and has three beats).
- **Examples.** (1) rhythm-only: a bar of six eighths beamed 3+3, counted then felt in 2;
  (2) the classic 6/8 figure — dotted-quarter, then quarter-eighth (long, short-inside) —
  clapped; (3) a 3/4 phrase and a 6/8 phrase with the same notes — hear the accent move;
  (4) pitched D-string: a short 6/8 line.
- **The usual mistake.** Counting all six as beats (so the tune plods), or accenting every
  eighth. Feel the two dotted beats.
- **Where it comes from.** `<Cite>` — 6/8 as compound duple; the march/jig contrast is the
  standard way it's taught. *Row, Row, Row Your Boat* is the classroom example.
- Sources: `stage-2-research.md` §7 row 17; rhythm-in-music.com.

### E5 · `nine-eight-and-twelve-eight` *(new — NEXT)*
- **Teaches.** Same idea, more beats. **9/8** = three compound beats (a slip jig). **12/8** =
  four compound beats (the blues shuffle; *We Three Kings*). Each beat is still a dotted
  quarter = three eighths. (And the odd cousin: **3/8** is *simple* triple — one beat felt as
  three eighths — not compound.)
- **Examples.** (1) 9/8 and 12/8 bars, beamed in 3s, counted; (2) a 12/8 shuffle groove
  clapped; (3) "how many beats?" quick check across 6/8, 9/8, 12/8, 3/8.
- **The usual mistake.** Assuming any x/8 is compound — 3/8 isn't.
- **Where it comes from.** `<Cite>` — the compound family; slip jig / shuffle as the
  real-music anchors.
- Sources: Open Music Theory; `stage-2-research.md` §7 row 18.

### E6 · `barlines-and-the-pickup` *(rewrite — absorbs the pickup half of `syncopation-and-pickups`)*
- **Teaches.** **Barlines** divide music into **measures**; before playing a line, count the
  bars and find where **beat 1** sits in each. Some tunes don't start on beat 1 — they open
  with a **pickup (anacrusis)**: an incomplete first bar that leads into the first downbeat,
  and the missing beats are usually completed in the *last* bar. It changes how you count the
  phrase, not the pitches. Real pickup tunes: *When the Saints* ("Oh, when the…"), *Happy
  Birthday*, *Auld Lang Syne*. (*Twinkle* and *Ode to Joy* start **on** the beat — no pickup.)
- **Examples.** (1) a 4-bar rhythm-only line, mark beat 1 of each bar; (2) the same melody
  with and without a pickup — where "1" falls shifts; (3) a pickup phrase — count the
  incomplete bar aloud ("3 4 |" into "1").
- **The usual mistake.** Playing the pickup as if it were beat 1 (so the whole phrase is
  displaced), or not noticing the short first bar at all.
- **Where it comes from.** `<Cite>` — anacrusis, standard; the "last bar completes the first"
  convention.
- Sources: `stage-2-research.md` §7 row 23 (Wikipedia "Anacrusis"); the PDF §33.

### E7 · `repeats-and-endings` *(new — minimal)*
- **Teaches.** Just enough navigation to play a strophic tune or a round. **`||:` … `:||`**
  = play the enclosed section twice. **1st / 2nd endings** (the bracketed "1." and "2.") —
  play through ending 1, take the repeat, then skip ending 1 and play ending 2. That's it —
  **D.C., D.S., Coda, Fine, segno and rehearsal marks are Stage 3** (the rest of the
  road-signs).
- **Examples.** (1) an 8-bar tune with a repeat — play it twice; (2) the same with 1st/2nd
  endings — the route drawn out; (3) count the total bars you actually play.
- **The usual mistake.** Playing both endings in a row, or missing the repeat.
- **Where it comes from.** `<Cite>` — standard notation; forward-pointer to Stage 3 for the
  full set.
- Sources: the PDF §40 (filed there in Part IV → Stage 3); `docs/NOTATION-COVERAGE.md`.

---

## Movement F — Bending the beat (4 lessons)

### F1 · `syncopation` *(rewrite — the syncopation half of `syncopation-and-pickups`, now in depth)*
- **Teaches.** Accent landing **off** the expected strong beat, without breaking the pulse.
  The ways it's written: a **rest on the downbeat** (the note arrives on the "&"); a note
  **tied into a beat** instead of restruck on it; an **accent mark** on a weak part of the
  beat; the **back-beat** (stress on 2 and 4). **Anticipation** — the note comes a half-beat
  early and ties over the barline. Syncopation is what makes a line feel alive instead of
  mechanical — and it's everywhere: fiddle tunes, ragtime, pop, and Haydn and Beethoven.
- **Examples.** (1) rhythm-only: a straight bar, then the same notes with a rest on beat 1 —
  hear the push; (2) rhythm-only: a tied-over syncopation ("1 &(2)& " — the 2 doesn't
  restrike); (3) the back-beat clapped against a counted "1 2 3 4"; (4) pitched D-string: a
  short syncopated phrase, counted carefully first.
- **The usual mistake.** "Straightening" the syncopation — pulling the off-beat note back
  onto the beat because it feels wrong. Keep the pulse dead steady *underneath* and let the
  note sit where it's written. And: dropping the count during the tied/rested beat.
- **Where it comes from.** `<Cite>` — syncopation across the eras; the tie and the
  displaced-accent as its two notations.
- Sources: `stage-2-research.md` §4; standard theory.

### F2 · `triplets` *(rewrite — in depth)*
- **Teaches.** A **bracketed 3** over a group = **three notes in the time two of that value
  would normally take**. The **eighth-note triplet** (3 in one beat — count "1 & a" or
  "1-la-li" or "trip-a-let"). The **quarter-note triplet** (3 across 2 beats). Half-note
  triplet (3 across a 3/4 bar or 2 bars of ¾ time... keep to the common cases). A triplet in
  simple time is the beat momentarily **borrowing the compound (÷3) division** — the link
  back to E3.
- **Examples.** (1) rhythm-only: a beat of two eighths, then a beat of an eighth triplet —
  the same beat, three notes instead of two; (2) rhythm-only: a quarter-note triplet across
  two beats; (3) a bar alternating duple and triplet beats — the switch is the skill;
  (4) pitched D-string: `(3DEF` — the triplet on known notes.
- **The usual mistake.** Playing the triplet as "long-short-short" (a dotted feel) or as two
  even notes plus a grace — a triplet is **three even notes**. And rushing out of it.
- **Where it comes from.** `<Cite>` — the tuplet as a borrowed division; ABRSM introduces
  triplets at Grade 2, right after the basics.
- Sources: `stage-2-research.md` §4, §7 row 25; ABRSM Grade 2.

### F3 · `other-tuplets` *(new — NEXT / REFERENCE)*
- **Teaches.** Any bracketed number does the same thing: fit *that many* notes into the
  normal space of a different number. The **duplet** (2 in the space of 3, in compound time),
  the **quintuplet** (5 in a beat), **sextuplet**, **septuplet**. Recognise the bracket, do
  the maths, feel it against the steady beat. REFERENCE — you'll meet these in K.216 and in
  Romantic repertoire, not in Stage-2 tunes.
- **Examples.** (1) a quintuplet and a septuplet bar, bracket labelled, counted evenly
  against one beat; (2) a compound-time duplet ("2 in the space of 3"); (3) `<Quiz>` — "how
  many, in the space of what?"
- **The usual mistake.** Trying to find a neat syllable for a 7 — instead, keep the beat
  rock-steady and spread the notes evenly across it.
- **Where it comes from.** `<Cite>` — tuplets as a family; the K.216 runs are the payoff.
- Sources: `stage-2-research.md` §7 row 25.

### F4 · `dotted-and-snap-rhythms` *(new — NEXT)*
- **Teaches.** Two opposite leans. The **dotted rhythm** — dotted-eighth + sixteenth,
  "long–short" — the march, the hornpipe. The **Scotch snap / Lombard rhythm** — sixteenth +
  dotted-eighth, "short–long" — the Strathspey, and some Bach. Same two note values, order
  reversed, completely different character. **REFERENCE pointer:** in Baroque music a written
  dotted rhythm is often played *more* dotted than the page shows (**overdotting / notes
  inégales**) — that's a Stage 3 topic (style), not a Stage 2 one.
- **Examples.** (1) rhythm-only: dotted-eighth-sixteenth, then the snap (reversed) — clap
  both; (2) a familiar tune's dotted figure (e.g. the *This Old Man* "knick-knack");
  (3) pitched D-string: a dotted-rhythm line.
- **The usual mistake.** Flattening the dotted rhythm to even eighths (loses the march), or
  turning the snap into a triplet.
- **Where it comes from.** `<Cite>` — the Scotch snap in Scottish and Baroque music;
  overdotting as a performance-practice convention (Stage 3 / the style thread).
- Sources: `stage-2-research.md` §7 rows 28–29 (Wikipedia "Notes inégales").

---

## Movement G — The bow's half of rhythm (3 lessons)

### G1 · `a-note-value-is-a-length-of-bow` *(new)*
- **Teaches.** On the violin, a duration is a **distance and speed of bow**. A whole note ≈
  one slow bow, frog to tip. A half ≈ half the bow, unhurried. Quarters ≈ a modest length in
  the middle. Eighths ≈ short and quicker, upper half. The bow is a **ruler for time** — if
  you plan the bow to match the rhythm, you don't run out. Bow *speed* changes with the
  value.
- **Examples.** (1) pitched open D: one whole note = one full slow bow (watch the playback
  cursor); (2) open D: four quarters = four middle-bow strokes; (3) open D: eight eighths =
  short fast strokes — same bar of time, the bow moves faster.
- **The usual mistake.** Using the same amount of bow for every value, so long notes die
  early (bow ran out) and short notes are scratchy (too much bow, too fast).
- **Where it comes from.** `<Cite>` — bow distribution as a planned skill (Galamian; and
  `docs/LESSONS-FROM-MOZART.md` §1 — bowing spelled out phrase by phrase from here on).
- Sources: `docs/LESSONS-FROM-MOZART.md`; dummies.com "plan bow division"; Stage 5 preview.

### G2 · `rests-ties-and-slurs-in-the-bow` *(new)*
- **Teaches.** How the length-marks feel in the bow arm. A **rest** = the bow stops, or lifts
  and **retakes** (resets) — an active silence, prepare the next stroke. A **tie** = do not
  change the bow, do not re-articulate — the sound just continues. A **slur** = several
  notes, **one bow**; the rhythm is exactly as written, only the bow-changes move. And a
  reading aid from the old school: the **downbeat tends to take a down-bow** ("the rule of the
  down-bow") — so a down-bow mark near the start of a bar is a hint about where beat 1 is.
- **Examples.** (1) pitched: note – rest – note, bow stopping cleanly in the gap; (2) a tied
  pair — one unbroken bow across the tie; (3) a 4-note slur — one bow, the rhythm still
  clearly articulated by the left hand.
- **The usual mistake.** Re-bowing across a tie; or filling a rest with sound because the bow
  didn't stop; or changing bow *mid-slur*.
- **Where it comes from.** `<Cite>` — the "rule of the down-bow" (Baroque, Lully's orchestra;
  in `docs/LINEAGE-QUOTES.md`); slur = one bow (strings-specific).
- Sources: `docs/LINEAGE-QUOTES.md`; performance-practice literature.

### G3 · `shadow-bowing` *(new)*
- **Teaches.** The four-step that isolates rhythm from everything else, before you play a
  line: **(1) clap and count** the rhythm; **(2) air-bow** it — bow the rhythm in the air,
  no fingers, matching down/up to the beat; **(3) finger it silently** — the left hand only,
  no bow; **(4) play**. If it breaks, you know which layer failed. This is the PDF's method,
  made a lesson.
- **Examples.** (1) a short line taken through all four steps with the reader; (2) a line
  that's rhythmically tricky but easy on the fingers — shadow-bow reveals it's a rhythm
  problem; (3) `<TryThis>` — pick any Stage-1 tune and shadow-bow one phrase.
- **The usual mistake.** Skipping straight to step 4 and then repeating the whole line ten
  times hoping it fixes itself. Isolate the layer.
- **Where it comes from.** `<Cite>` — Essential Elements' "shadow bowing"; the PDF's
  "tap / say / air-bow / play" (p56, p65); Simon Fischer on practising in layers.
- Sources: `stage-2-research.md` §6; the PDF §34; Essential Elements.

---

## Movement H — Reading checks (6 lessons)

All **rhythm-only** unless noted; try-first, reveal the answer. Pitched ones stay on the D
string (full labels). Caption on rhythm-only examples: *"clap and count — the pitches aren't
the point here."*

### H1 · `clap-this-line` *(new — the recitation étude)*
A page of pure rhythm reading, no violin: 4–6 short lines of increasing difficulty (quarters
→ eighths → a dotted figure → a triplet → a syncopation), each to **clap and count aloud** at
a marked tempo. A pass = steady pulse, every value its full length, no stumble on the
subdivisions. One closing optional line: *"if you have your own counting syllables, use
them — the clapping is what matters."* This is "rhythm before the instrument" as a graded
skill.

### H2 · `reading-quarters-and-eighths` *(rewrite)*
Pitched, D string. Quarters and eighth-pairs up and down the D string. Clap → say the names
in rhythm → air-bow → play → reveal. The four-layer fix note if it falls apart.

### H3 · `reading-sixteenths` *(new)*
Pitched, D string. Eighth + sixteenth mixes — the subdivision that most often rushes. Slow
metronome; only speed up when clean.

### H4 · `reading-dotted-rhythms` *(rewrite)*
Pitched, D string. The long–short dotted feel on known notes — tap the rhythm before looking
at the pitches.

### H5 · `reading-in-six-eight` *(new)*
Pitched, D string. A compound-time line — count in 2, feel the dotted beats. The first tune
where the metre itself is the test.

### H6 · `reading-triplets-and-syncopation` *(new)*
Pitched, D string. Triplet beats next to duple beats; a rest-on-the-downbeat syncopation.
The two "bending the beat" ideas, read cold.

### H7 · `reading-mixed-rhythms` *(rewrite — the capstone check)*
Pitched, D string, and long enough to be a real phrase: a tie, a dotted figure, an eighth
run, a rest. "If your rhythm *and* your pitches both land here, you've covered what Stage 2
set out to teach." Plus the miniature **pre-read**: metre, key, the rhythm traps, before the
bow moves.

*(H2–H7 is 6; with H1 the recitation étude that's 7 — trim H3 or H6 into a neighbour if it
runs long.)*

---

## Movement I — The tunes (~9 melody lessons)

Each an **`AnnotatedScore`**: our notation, name/string/finger per note, playback with the
moving cursor, and **a how-to-play note per line that now includes bow-rhythm** (which part
of the bow, how much, how fast, for these note values). All first position, all public
domain, **Claude notates them**, verified. All also on `/practice`.

Per **decision 2**, Stage 2 does **not** complete the Stage-1 tunes — that stays deferred.
Instead:

**Re-read (3–4 Stage-1 tunes, now in their true rhythm — not the Stage-1 simplification):**

| # | Tune | The rhythm point |
|---|---|---|
| I1 | **Twinkle** (theme, true rhythm) | even quarters and the half-note ends — held full value; the anacrusis myth corrected (starts on the beat) |
| I2 | **Ode to Joy** (theme, true rhythm) | the one dotted-quarter–eighth bar, read properly at last (Stage 1 pointed here) |
| I3 | **Lightly Row** or **Mary Had a Little Lamb** | quarter/eighth mix straight off the page |

**New, rhythm-chosen:**

| # | Tune | Key / metre | The one point |
|---|---|---|---|
| I4 | **Frère Jacques** (round) | G, 4/4 | played as a real round against the playback; clean even eighths |
| I5 | **Row, Row, Row Your Boat** (round) | C, **6/8** | the compound-metre tune — count in 2, lilt the dotted beats (its metre is debated — we teach 6/8) |
| I6 | **This Old Man** | D, 4/4 | the dotted "knick-knack" figure — long–short, not even |
| I7 | **Pop Goes the Weasel** | G, 6/8 | 6/8 again, with the "Pop!" as an off-beat surprise — a first taste of syncopation in a tune |
| I8 | **Twinkle — Variation A** | A, 4/4 | the Suzuki rhythm lifted straight from the **Bach Double Concerto** opening — détaché sixteenths, staccato eighths; a sixteenth-vs-eighth reading drill with a real link to the canon |
| I9 | **A moto-perpetuo étude** (Claude-notated original, Suzuki *Perpetual Motion* feel) | G, 2/4 | unbroken eighth notes — the "keep the pulse through everything" tune; steady bow, steady count |

*(If the user promotes **When the Saints** from the deferred five, it replaces I6 — it carries
pickup + dotted rhythm + ties in one PD melody.)*

Rhythm simplification **stops here.** From Stage 2 on, a tune is written in its real rhythm.

---

## New components / infra — keep it lean (`RULES.md` #17)

1. **`RhythmTree` `<Diagram>`** (`components/Diagram.tsx`) — the binary halving (whole → 2
   halves → 4 quarters → 8 eighths → 16 sixteenths), with the matching rest tree beside it.
   Static labelled SVG, same house style as the existing diagrams. One diagram, used in A4
   and referenced from B1/B3.
2. **Rhythm-only mode for `<NotatedExample>`** — a prop (`rhythmOnly`) that renders a
   **one-line stave** (abcjs single stafflines / percussion clef), no pitch, with all the
   rhythm marks (stems, beams, flags, dots, rests, ties, tuplet brackets, time signature),
   and turns `labels` into **count strings** under each note. Auto-caption note: "clap and
   count." This is the vehicle for most Movement A–F teaching examples and all of Movement H.
3. **Counting overlay** — reuse the existing label overlay; a count like "1 e & a" is just a
   `{ name }` with no string/finger, allowed because the example is rhythm-only (`RULES.md`
   R1 exception; caption says so).
4. **No** metronome/clap-back widget, **no** interactive rhythm trainer, **no** tap-tempo.
   Playback + the moving cursor (already built) is enough. A rhythm trainer is Phase 2 at the
   earliest and only if a lesson genuinely needs it.

---

## What's wrong with the 15 existing drafts (fix in the rewrite)

From the `stage-2-research.md` scan:

1. **All atom-length** — state the fact, one D-string example, two sentences. None hits "the
   usual mistake" or "where it comes from"; none has a `<Cite>`; none ends at a real tune.
   Same problem the user flagged for Stage 1.
2. **`syncopation-and-pickups`** — claimed *Twinkle* / *Ode to Joy* have pickups (**patched**;
   the lesson still needs the full rewrite and splitting into E6 + F1).
3. **`common-time`** — treats "C" as the letter / word "common". Fix per E2.
4. **`time-signatures`** — punts on 6/8 ("you'll meet that feel properly … in repertoire").
   6/8 is now E3–E4, taught in full.
5. **`counting-and-konnakol`** — conflates the user's Hindustani tabla background with
   (Carnatic) konnakol; the stage now leads with metric counting and the bridge is the one
   optional lesson D3.
6. **`rhythm-before-the-instrument`** — presents the Leopold Mozart line as a near-quote
   ("put it plainly: …"). Phrase as a paraphrase until the wording is confirmed.

---

## Final count

| Movement | Lessons |
|---|---|
| A — pulse & note anatomy | 4 |
| B — the marks that change a length | 5 |
| C — the Vivaldi keystone | 1 |
| D — counting (incl. 1 optional) | 3 |
| E — grouping the beats | 7 |
| F — bending the beat | 4 |
| G — the bow's half of rhythm | 3 |
| H — reading checks | 6–7 |
| I — the tunes | ~9 |
| **infra** | `RhythmTree` diagram · rhythm-only `<NotatedExample>` mode |

≈ **33 skill lessons + 9 tunes** — the scale of the Stage 1 rebuild, and compressible: E and
H have the most give if it runs long.

---

## Readiness

**Not yet — needs the user's sign-off on this doc**, plus the one sub-question (promote *When
the Saints*?). After that: build the infra (item 1–2), prove it on A4, then straight through
A→I. Research is done and verified (`stage-2-research.md` + its verification pass); the one
unconfirmed item is the exact Leopold Mozart wording, which affects one `<Cite>` and has a
stable paraphrase to fall back on.

---

## Lineage cites to bank first (`docs/LINEAGE-QUOTES.md`)

Before writing: confirm and add — Leopold Mozart (beat the time / evenness of the time),
Kodály (sound before symbol; rhythm before pitch), Suzuki (rhythm by listening; the Twinkle
variations' rhythms are from real repertoire — Var. A ≈ Bach Double), Gordon (audiation;
beat-function counting), Galamian / Simon Fischer (subdivide the long note; practise in
layers; bow distribution), Rafael Reina (the Karnatic-rhythm precedent — for D3 only).
Details in `stage-2-research.md` §10.
