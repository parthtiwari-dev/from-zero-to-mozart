# Stage 8 — Sight-reading & ear training: the research

**Research only. Written in passes — ~10 searches, then a section, repeat — so context doesn't
get lost.** This is the "research to the core" for Stage 8, the stage where the reader stops
decoding and starts **reading fluently**, and where the ear is built **from the ground up** so
that *"if I hear it, I can play it"* becomes true.

Read `docs/PRD.md` §3 (**the concrete north-star capability — play by ear**) + §4 + §6.1 + §7,
`docs/CONTENT-STANDARD.md`, `RULES.md`, `docs/THE-PATH.md`, and the memory
`play-by-ear-is-the-goal.md` alongside this. Read `CLAUDE.md` → `## Mistakes to avoid` **before
writing a single lesson**, and run `python tools/abc-barcheck.py` before every commit.

**Researched at the user's request (2026-09-04):** *"research for how to read music sheet for
anything — any notes and chords and shit — and then sight reading and ear training… start
stage 8 research full in depth. Reading fluently, and building the ear from the ground up."*
The campaign order is being taken out of sequence — Stage 6 (shifting) and Stage 7 (vibrato)
are not built — because (a) research needs neither, and (b) this is the stage that carries the
user's #1 goal, so knowing its shape now should inform how Stages 6–7 are planned.

---

## Why Stage 8 is the load-bearing stage for this user

`PRD.md` §3: the operative end goal is **play by ear** — hear a tune, play it back on the
violin unaided. `PRD.md` §6.1 (revised 2026-09-04): *"the ear-training track is core, not a
side-quest — and its target is 'play by ear'. Stage 8's ear gym is the course's centre of
gravity."* Stage 8 is where that gym is built.

It is also where **reading stops being decoding.** Stages 1–3 taught the reader to *name*
everything on a page — every note, every rhythm, every symbol. Stage 4 taught them to
*understand* it. Stage 8 is the fluency layer: **read it at sight, at a steady pulse, without
stopping, seeing patterns not notes** — and, the harder half, **read it with the ear on**, so
the page and the sound are one thing.

**Two axes, one stage:**

- **Reading fluency & sight-reading** — the practical bridge from "I can work this out" to "I
  can play this line I've never seen." PDF Part VII (§77–80). Includes **reading everything on
  the page** (the user's phrasing: "any notes and chords and shit"): notes fast and by
  pattern; rhythm; the flat keys; chromatic notes; **stacked noteheads / double stops**;
  **a chord chart / lead sheet** above a melody. (The chord *vocabulary* — symbols, roman
  numerals, figured bass — was built in Stage 4; Stage 8 reads it *at speed and in context*.)
- **Ear training from the ground up** — pitch, relative pitch, **functional/scale-degree
  hearing** (the sargam bridge, the centrepiece), chord & cadence hearing, melodic &
  rhythmic dictation, and the operative goal: transcription / play-by-ear. Entirely new — the
  PDF barely touches it.

The two feed each other: you **audiate** the page as you read it (hear it in your head before
the bow moves), and playing by ear teaches you what the notation is *for*.

### The Intermediate gate (`PRD.md` §4)

Stage 8 ends the intermediate half. The gate: *shift cleanly to 3rd (touch 2nd/4th/5th);
vibrate on a sustained note; **sight-read a Grade-4-ish line cold; take dictation of a short
phrase; learn a song by ear from a recording** (added 2026-09-04); play student concertos and
Baroque sonatas musically.* The three bold items are Stage 8's.

### What Stage 8 inherits (this is NOT from scratch)

A real foundation is already built and must be *named and consolidated*, not re-taught:

| Already built | Where | Stage 8 does |
|---|---|---|
| staff / landmark / register reading, key signatures | Stage 1 (`lines-and-spaces`, `all-the-first-position-landmarks`, `which-note-is-this`, `the-key-signature`) | speed + pattern reading on top |
| **scaffold removal** started (`taking-the-help-away`), the first-position reading check | Stage 1 | formalise A→E, extend past first position |
| full rhythm reading, counting, subdivision, "reading a steady beat" | Stage 2 | rhythm-first sight-reading; complex-rhythm reading |
| the whole score-symbol vocabulary; `decode-a-dense-line` | Stage 3 | read the dense line *at speed* |
| **`hearing-the-scale-degrees`** (the drone drill), **`tuning-by-ear`**, interval anchors from the course's tunes | Stage 4 (F4, F5) | the *systematic* ear gym grows straight out of these |
| harmony: chords of a key, cadences, the dominant 7th, non-chord tones | Stage 4 (H, I) | *hear* the harmony, not just analyse it |
| **`finding-a-tune-by-ear`** — the first real play-by-ear lesson; the reverse fingerboard map | Stage 5 (K1) | the full transcription method + a graded ladder |
| `reading-a-bowing`, `bowing-a-passage-yourself` | Stage 5 (I3–I4) | read the bowing at sight, inside the pre-read |

### Sequencing note — what can build before Stages 6–7

To settle in the plan (see Pass 22, the re-verification). First read:

- **The reading-fluency block** and **the whole ear-training gym** are **position-independent**
  — they can be built and started **now**, in parallel with Stage 6–7, or even pulled earlier
  as a "Stage 8a". The user's goal argues for starting the ear gym as soon as possible.
- **The graded sight-reading ladder's upper levels** and the **Grade-4 gate line** assume
  positions and vibrato-era repertoire — those wait for Stage 6.
- Likely outcome: **Stage 8a (reading fluency + ear foundation) builds next, in parallel with
  Stage 6**; **Stage 8b (the sight-reading ladder to the gate) closes after Stage 6–7.**

### Lesson count

Deliberately large — `PRD.md` §6.1 calls this "the biggest new investment." Expect **~30–40
lessons**: a reading-fluency block (~10), a sight-reading-method block (~8), the ear gym
(~15–18, the bulk), plus the gate. Grouped into movements the way Stage 3/4/5 were. The
movement plan is at the end.

---

## Pass 1 — What reading fluency actually is (the cognition)

*(research batch 1: 2026-09-04 — ~9 searches/fetches — PMC review "Eye-Hand Span in
Sight-Reading of Music" (2021); "Markers of Musical Expertise in a Sight-Reading Task:
An Eye-Tracking Study" (2024); "Towards a general model of skills involved in sight reading
music" (Kopiez & Lee); Sloboda's eye-hand-span work; ABRSM sight-reading guidance;
violinspiration.com "Violin Sight Reading")*

### Fluent readers do not read notes — they read *patterns*

The single most robust finding: **experts recognise patterns and use schemas; beginners
decode note-by-note.** Skilled readers "group dispersed notes into meaningful structural
units" — a scale run, an arpeggio, a familiar rhythm, a sequence — and process each unit as
*one chunk*, which drops the working-memory load enormously. Amateurs "maintain a linear,
note-by-note strategy" (PMC 2021; eye-tracking 2024).

Kopiez & Lee's model: sight-reading skill = **pattern recognition** + **prediction** (you
anticipate where the line is going, from tonal and rhythmic grammar) + **chunking** (you hold
the pattern, not the notes). All three are *learnable* and all three are what Stage 8 trains.

**For the build:** the reading-fluency lessons are not "read faster" — they are "learn to
*see* the shapes": step / skip / leap, the scale fragment, the broken chord, the sequence, the
rhythmic cell, the landmark. Each shape gets a lesson: *here is the pattern, here is what your
eye does with it, here is it in ten tunes.*

### The eye runs ahead of the hand — the eye-hand span (EHS)

**EHS** = how far ahead of the sounding note your eyes are reading. The numbers (PMC review):

- **Skilled players: ~3–6 notes ahead** (violinists ~3–6 depending on complexity). Beginners:
  ~0.5–3.7 notes, and *static*.
- Even experts **"rarely fixate a bar ahead"** — the span is modest. "Look as far ahead as
  possible" is **wrong advice**; the span needs to be *optimised*, not maximised — too large
  overloads, too small kills planning.
- **The span shrinks when the music is harder** (6 notes ahead on easy music → 3 on complex) —
  and expands when it's easy. Skilled readers have this *perceptual flexibility*; beginners
  don't. Teaching it is a real goal.
- Skilled readers **use long notes to look ahead** — they fixate the *gaps* between notes,
  and they land extra fixations on the key and time signature when a passage gets complex.
- Processing time is roughly constant — **~1 second of music "in the buffer"** regardless of
  tempo. Faster tempo = more notes in that second, so the *note* span grows but the *time*
  span holds.

**For the build:** the "reading ahead" lesson teaches the reader to (a) let the eyes drift
forward on a long note or a rest, (b) not stare at the note being played, (c) accept a *small*
lead (a beat or two), and (d) shrink it deliberately when a bar looks hard. Concrete drills:
cover the note you're playing with a card / a finger; "read the next bar during this held
note"; the metronome forces the pulse so the eyes *must* move on.

### The three things that break fluency (and their fixes)

From the pedagogy literature + the PDF's own §78:

1. **Stopping to fix a wrong note** — the fluency-killer. The rule everyone teaches: **"once
   you start, you can't stop"** (ABRSM's "golden rule"). A steady pulse from beginning to
   end, mistakes included. Recovery happens *on the next downbeat*, not by going back.
2. **Looking at the left hand** — every glance down is a fixation stolen from the page and the
   place lost. Fluent reading is done without watching the hand (the first-position map, built
   in Stage 1, is what makes this possible — the reader already knows where the notes *are*).
3. **Reading note-by-note** — see the pattern (above).

### Sight-reading is its own trained skill — practised *below* your playing level

The universal rule: **sight-read material a level or two *easier* than what you're learning to
perform**, every day, always something *new*, one look then one go, and only inch the
difficulty up once you can get through cleanly at a steady slow pulse (violinist.com;
violinspiration; ABRSM). You never get good at sight-reading by sight-reading hard things
badly — you get good by reading a large *volume* of easy things fluently.

**For the build:** this reframes the whole `/practice` relationship. Stage 8 wants a
**large, graded, disposable stream of short reading cards** — the reader plays each once, at
sight, and moves on. The PDF's 8 cards become a ladder of 20+, and the design is "quantity of
easy material," not "a few hard tests."

### Scales and arpeggios are sight-reading preparation

A quiet but important link (ABRSM; Stage 4 `how-to-practise-a-scale`): a scale *is* the finger
map of a key, and an arpeggio *is* the common leap pattern. A reader who has drilled G / D / A
/ C scales and arpeggios has already automated most of what a first-position line in those
keys asks for. Stage 4's `which-scales-to-practise-now` and Stage 5's `stage-5-tone-and-strokes`
feed this directly. **The pre-read includes "what key — and do I know that scale under my
hand?"**

---

## Pass 2 — The pre-read: the scan you do before the bow moves

*(research batch 2: 2026-09-04 — the PDF §77; the **S-T-A-R-S** mnemonic (Terry Ownby
sight-reading clinic; percussive-arts / band-method sources); Trinity & ABRSM sight-reading
checklists; violinspiration.com "Violin Sight Reading"; libertyparkmusic "12 Tips";
lifefromtheviolasection sight-reading checklist)*

### The routine — a fixed order, done fast

The PDF's §77 order is good and we keep it, tightened into a habit the reader runs *every
time*, in *this* sequence (order matters — each answer constrains the next):

1. **Clef** — treble, always, for us. (Named so the habit generalises; a violist or a Bach
   continuo part isn't always treble.)
2. **Key signature** → *name the key* (and its relative minor). Which major/minor? → which
   **finger pattern** (Stage 4 `whole-steps-and-half-steps`) → *do I know this scale under my
   hand?*
3. **Time signature** + any **tempo** word/mark → *feel one bar of the pulse* before anything
   else.
4. **The range** — glance at the lowest and highest note. Does it stay in first position? Any
   ledger lines? This tells you if you can play it at all yet.
5. **Accidentals** — scan for any sharp/flat/natural *not* in the key signature. Mark the
   hard ones with your eye. (Remember the bar-line resets them — Stage 1
   `accidentals-inside-a-bar`.)
6. **Rhythm traps** — dotted figures, syncopation, tuplets, a fast run, an awkward rest.
   *Clap or count the hardest bar now* (see below).
7. **Slurs & bow marks** — where does one bow cover several notes? any `⊓`/`V`, `Sp.`,
   staccato, an `f`–`p` echo? (Stage 5 `reading-a-bowing` inside the pre-read.)
8. **Repeats & road map** — `:||`, 1st/2nd endings, `D.C.`/`D.S.`/Coda, a fermata (Stage 3).
   Know the route before you start.
9. **Then: audiate beat 1.** Hear the first note (and its pull — is it *do*? *sol*?) and count
   yourself in, silently, one full bar, before the bow touches the string.

**S-T-A-R-S** is the compact classroom mnemonic for the middle of this (Sharps/flats · Time ·
Accidentals · Rhythm · Signs) — worth teaching as the fallback checklist. Our fuller version
adds clef/range/bows/roadmap/audiate around it.

### "Sight-read it in your head before you sight-play it"

The whole point of the pre-read: **the first time the line makes a sound should be the second
time you've "played" it** — the first time was silent, in your head, during the scan. This is
*audiation* (Pass 21) and it is what separates a reader from a decoder.

### Time budget

The PDF calls it a **"20-second pre-read"** and that's a good target once the habit is
grooved — but early on it's slower, and that's fine. In an exam you get ~30–90 seconds; in
practice you take what you need *the first few times*, then compress. The lesson teaches the
routine first, the speed second.

### Build

- One lesson: **`the-pre-read`** — the 9-step routine, walked on a real unseen line, ending
  "now play it once, no stopping."
- The routine then appears as a **standing checklist** at the top of every sight-reading card
  (like the "how to play" block on a tune) — not re-taught, just present.
- A **`<Quiz>`**-style "what would you check first?" recognition lesson is optional.

---

## Pass 3 — Reading by pattern: landmarks, intervals, shapes, sequences

*(research batch 3: 2026-09-04 — musicandtheory.com "Intervals and Landmark Notes vs
Mnemonics"; colorinmypiano "Intervalic Reading"; standrewspianotuition "The Landmark System" /
"Super Awesome Sight Readers"; dawnspiano "Sightreading 101: Intervallic Reading";
musicmattersblog "A Different Approach to Sight-Reading"; Kopiez & Lee model (Pass 1); Stage 1
`steps-and-skips`, `all-the-first-position-landmarks`)*

### The core method: landmarks + intervals, not letter names

**"Good sight-readers of all levels do not read by letter name."** They read:

- **Landmarks** (a.k.a. guide notes) — a handful of anchor notes you know *instantly* by
  position, no counting. On the treble staff: **G (bottom line), B (middle line), D (4th
  line), F (top line)** — and for us, the **open strings on the staff** (Stage 1
  `open-strings-on-the-staff`) and the first-position map (`all-the-first-position-landmarks`).
  You find the nearest landmark, then read *from* it.
- **Intervals** — the distance and direction to the next note. **Step** (2nd: line→space or
  space→line — they look *different*) vs **skip** (3rd: line→line or space→space — they look
  the *same*) vs **leap** (4th, 5th, 6th, octave — recognised by how many lines/spaces are
  jumped). You read "up a step, up a step, skip down, leap up a 4th" — a *shape*, not four
  letters.
- **Contour** — the melodic line as "a string on the page": follow it with the eye, up and
  down. Stage 1 `steps-and-skips` planted this ("reading the shape").

Mnemonics (Every Good Boy…, FACE) are a **beginner crutch to be outgrown** — a
mnemonically-trained reader "has no idea how the phrase sounds until they've decoded every
note." Stage 1 taught landmarks and steps/skips precisely to avoid this; Stage 8 makes it the
*only* way the reader reads.

### The shapes to name and drill

Each gets a short lesson — *see the pattern, know the fingering it implies, meet it in ten
tunes*:

| Shape | What the eye sees | What the hand does |
|---|---|---|
| **stepwise run** (scale fragment) | notes marching line-space-line-space, one direction | consecutive fingers / a scale segment you've drilled |
| **broken chord / arpeggio** | notes skipping same-to-same (line-line-line) | the arpeggio shape (Stage 4 J) — fingers 0-1-3 etc. |
| **the turn / neighbour figure** | up-and-back, or down-and-back, around one note | one finger wiggles to its neighbour and back |
| **the sequence** | a small shape **repeated a step or a third higher/lower** | the same finger pattern, shifted — read the *first* copy, predict the rest |
| **the leap** (4th/5th/6th/octave) | a big vertical jump | a string crossing and/or a finger jump — recognise the interval, know the target |
| **the repeated note** | the same note, several times | one finger stays, the bow articulates (Stage 5) |
| **the rhythmic cell** | a familiar rhythm figure (long-short-short, the dotted pair, the triplet) | play the *feel*, not the individual durations (Pass 4) |

The **sequence** is the highest-leverage one: a huge amount of Baroque and Classical music is
sequences, and once the eye catches "oh, that's the same 4-note shape three times, climbing,"
a whole bar is *one* chunk.

### The "early attraction" effect — the eye jumps to trouble

Research (PMC 2020, "Early Attraction in Temporally Controlled Sight Reading"): a hard spot
(an accidental, a dense chord, a big leap) **pulls the eye toward it before you get there.**
Skilled readers let this happen — they *pre-scan* the difficulty during an earlier easy bar.
The lesson: when the pre-read (Pass 2) flags a hard bar, your eye should visit it again *early*
while you're playing the easy bars before it.

### The other half of "not note-by-note": note-recognition *speed*

*(added at re-verification, Pass 22 — a genuine gap in the first draft)*

Reading by pattern (above) is the top layer. Under it there has to be **instant single-note
recognition** — "the bottleneck in most players' sight-reading isn't the fingers, it's how
fast the eye names a note" (notemasterapp; note-reading-speed sources). A fluent reader names
**any note in under ~2 seconds**, with **no mnemonic recital** ("E-G-B-D-F → count up…" is
too slow). This is a distinct, *drillable* sub-skill:

- **The one-minute challenge** — how many random notes can you correctly name in 60 seconds?
  A reasonable fluency target is **15+**. Repeat daily; watch the number climb.
- **10 minutes a day of timed recognition** builds lasting fluency in **2–4 weeks** (the same
  timescale as learning the landmarks in the first place — Stage 1).
- On the violin the target is really "name it *and* know the string+finger" instantly — so the
  drill doubles as fingerboard automaticity (ties Stage 5 K1's reverse map).

**Build:** `reading-notes-fast` — the timed-recognition drill (a `<NotatedExample>` or a
`<Quiz>`-style card showing single notes; the reader names/plays; a timer/score). This is a
*drill*, released as repeatable material like the sight-reading cards, plus one short framing
lesson.

### Build

- **`reading-notes-fast`** — instant single-note recognition; the one-minute challenge; the
  2-week timescale (the re-verification gap).
- **`landmarks-and-guide-notes`** — the anchor notes, read *from* them (consolidates Stage 1).
- **`reading-the-shape`** — step / skip / leap, contour, "a string on the page" (extends
  Stage 1 `steps-and-skips`).
- **`the-patterns-in-real-music`** — scale fragments, broken chords, turns, the **sequence**,
  the leap — each shown then hunted in tunes the reader knows. Possibly 2 lessons.
- **`your-eye-runs-ahead`** — the eye-hand span, reading the gaps, pre-scanning the hard bar,
  the card-over-the-note drill (Pass 1's content).

---

## Pass 4 — Reading rhythm fluently (the reader's home turf — leverage it)

*(research batch 4: 2026-09-04 — pas.org "Subdivide and Conquer"; classicalguitarcorner
"Sight Reading: Subdivision"; makemusic "Rhythmic Sight-Reading: Friend or Foe"; stringsmagazine
"3 Ways to Improve Your Sight-Reading"; learnjazzstandards "Rhythmic Sight-Reading"; digitabla
"The Language of the Tabla"; classicalsource "The Rhythmic Discipline"; Stage 2 decisions §0)*

### Rhythm fails first — so read it first

The universal finding: **"the greatest number of sight-reading errors are in the rhythm,"**
and "a player with right notes and wrong rhythm struggles more than one with a steady beat and
a few wrong pitches." So the method everywhere is **rhythm before pitch**:

- **Clap–tap–play**: clap the rhythm → tap the beat on your leg while saying it → then play
  the notes, keeping that beat.
- **Subdivide**: count in the smallest note value present ("1 e & a" if there are 16ths), so
  every longer note is measured against a grid you're already feeling.
- **Read the rhythm skeleton**: if the pitches are collapsing, drop to *just the rhythm* on
  one note (or open strings), keep the pulse, and add pitches back when you can — a live
  version of the four-layer rescue (Pass 8).

Stage 2 built all of this (`counting-the-beat`, `subdivision`, `reading-a-steady-beat`, the
`rhythmOnly` `<NotatedExample>` mode). Stage 8 **applies it at sight** and adds the harder
rhythms in a reading context.

### The tabla background is a genuine advantage here — name it once, honestly

Stage 2 already made the call (decision §0): **metric counting ("1 e & a"), not
Takadimi/konnakol** — and the tabla↔Western map is one optional skippable lesson
(`if-you-count-in-bols`). Stage 8 keeps that. But it should say, once and plainly, *why the
reader has a head start on rhythm reading*:

- A tabla player **feels a whole cycle as one sentence** (Teentaal = 16 beats felt as a
  unit) — the same skill as reading a whole 4-bar phrase's rhythm as a shape, not
  beat-by-beat.
- Tabla training is **pattern recognition in structured loops** — exactly the chunking that
  Pass 1 says separates fluent readers from decoders, already trained, just on the wrong
  notation.
- Complex subdivisions, tuplets, syncopation — Stage 2's "taught in full" list — are things
  the reader can already *play*; Stage 8's job is only to connect the **picture on the page**
  to the feel they have.

So the framing: *"Rhythm is the half of sight-reading you can already do. The notation is a
diagram of a thing your hands know. This stage is mostly about the other half — the pitches —
and about not letting your strong rhythm sit and wait for your slow eyes."*

**Accuracy guard** (`CLAUDE.md` Mistakes to avoid #10; the user *can* catch this): keep tabla
claims loose — "feels a cycle as a unit", "pattern recognition in loops" — cite a tabla source
(digitabla, or a tabla-pedagogy reference) if a bol or a tala is named. No shruti/cents; tala
is rhythm-grammar, not merely "a time signature."

### The specific hard rhythms to read at sight

Each is *already taught to play* (Stage 2) — Stage 8 drills *seeing then playing* without a
work-out first:

- dotted figures (long–short, short–long) and double-dotted
- the tie across a barline and across a beat
- triplets against a duple pulse; the "3 in the time of 2" look
- syncopation — off-beat accents, the note that starts on the "&"
- rests on strong beats (the silence you must *keep counting through*)
- compound metre (6/8, 9/8) read as *two/three big beats*, not six/nine little ones
- a fast even run (16ths) read as "a burst," played as a group

### Build

- **`read-the-rhythm-first`** — clap–tap–play, subdivide, the rhythm skeleton; on an unseen
  line. Names the tabla head start.
- **`the-rhythms-that-trip-you`** — the list above, each a quick read-then-play card.
- Both use `rhythmOnly` mode for the "clap it" step and full notation for the "now play" step.

---

## Pass 5 — Keep going: the never-stop rule and how to recover

*(research batch 5: 2026-09-04 — bulletproofmusician "Are Great Sight-Readers Born or Made?";
mi.edu "Practice Sight Reading Effectively"; jazzadvice "5 Steps to Mastering Sight Reading";
pianoworld / pianochronicles recovery threads; shelialee sight-reading exercise; ABRSM
"golden rule" (Pass 1))*

### The one rule that matters most: **once you start, you don't stop**

Every source, every instrument: **keep the pulse from the first note to the last, mistakes
included.** Stopping to fix a note is the single worst sight-reading habit, because:

- in every real setting the music *keeps moving* — an accompanist, an ensemble, an audition
  panel won't wait;
- stopping trains you to stop; a wrong note that you play through and forget costs nothing, a
  stop costs the whole line;
- the *pulse* is the thread. Lose a note, you've lost a note. Lose the pulse, you've lost the
  piece.

**Practice must reflect this.** A sight-reading card is played **once, through, no going
back** — then you diagnose (Pass 6), then tomorrow a *new* card. Re-playing a card to "get it
right" is practising the wrong skill.

### Recovery — the downbeat is the lifeline

When it falls apart (and it will), you don't scramble to catch every note. You:

1. **Keep tapping the pulse** — internally, or your foot. The beat never stops even when your
   hands do.
2. **Look ahead to the next strong beat** — usually the next **downbeat** (bar 1), or the next
   section marker / repeat sign (your "regrouping points").
3. **Re-enter there, cleanly, in time.** Drop whatever you missed. Land on that downbeat with
   the right note and the right beat, and you're back.

"Lose a note → keep the pulse, move on. Lose a bar → find the next downbeat, re-enter." Skilled
sight-reading is **mostly skilled *faking*** — you know the patterns (scales, arpeggios,
sequences, Pass 3), so even when you can't read every note you play something *close* in the
right rhythm and land the important notes. The ability to recover is worth more than the
ability to be perfect.

### The strong-beat / weak-beat priority

A practical hierarchy for when you can't get everything: **get the downbeat right; get the
other strong beats right; the notes in between can be approximate.** A line played with every
strong beat correct and the weak beats fudged sounds *musical*; the reverse sounds like a
breakdown. This also tells the eye where to prioritise its fixations (Pass 1 — skilled readers
fixate strong beats and structural points).

### Build

- **`the-never-stop-rule`** — why, and what "keep going" feels like; a card the reader plays
  through *with* a deliberate mistake, without stopping.
- **`getting-lost-and-getting-back`** — the downbeat lifeline, section markers as regrouping
  points, the strong-beat priority, "skilled faking." A card designed to be *hard enough to
  lose*, with the drill being the recovery, not the accuracy.

---

## Pass 6 — The four-layer rescue: diagnose, don't replay

*(research batch 6: 2026-09-04 — the PDF §78; makemusic "Definitive Guide to Sight Reading";
cellobello "A New Look at Sight-Reading (Part 3)"; theinstrumentalist "Sightreading Practice";
Stage 8 Pass 4 (rhythm-first); the four-layer table from the PDF)*

### The method

When a card fails, you do **not** replay the whole line ten times. You **identify which layer
broke** and fix *that*:

| Layer | Isolate it by | You're checking |
|---|---|---|
| **Pitch** | say the note names, out loud, **no rhythm** — just the sequence | did you *read* the notes? the key? the accidentals? |
| **Rhythm** | clap / tap / count, **one pitch or none**, with the metronome | did the durations and the pulse hold? |
| **Left hand** | finger the notes **silently**, or **pizzicato slowly**, off the pulse | do the fingers know where to go? the string crossings? |
| **Bow** | **air-bow** the rhythm and the slurs — no string | is the bowing plan (Stage 5) clear? the slur groups? |

Then **combine two at a time** (pitch + rhythm; left hand + bow), then all four. One recurring
problem → one specific correction → move on. This is the deliberate-practice principle
(`CURRICULUM.md` practice-science) applied to reading.

### Why it works for a string player especially

On the violin "the interplay between bow and left hand is almost impossibly complicated" —
rhythm can live in the left hand, the right, or both. When a line collapses it's usually
**one** of the four layers dragging the others down, and a beginner who replays the whole
thing never finds out which. The rescue makes the diagnosis explicit.

### The reader already has the pieces

- **Pitch alone** — Stage 1 (`which-note-is-this`, the reading checks).
- **Rhythm alone** — Stage 2 (`rhythmOnly` mode, `counting-the-beat`).
- **Left hand silently** — Stage 1 (`taking-the-help-away`), Stage 8 Pass 7.
- **Air-bow** — Stage 5 (`shadow-bowing` exists as a Stage-3/5 bow-track lesson;
  `reading-a-bowing`).

Stage 8 names them as a **kit** — "when it breaks, here are the four tools; pick the one for
the break."

### Build

- **`the-four-layer-rescue`** — the table, walked on a card that's been deliberately failed;
  each layer isolated on the same 2-bar line, then recombined. The card format's "diagnose"
  step points here.

---

## Pass 7 — Scaffold removal A → E: taking the help away

*(research batch 7: 2026-09-04 — the PDF §79; Stage 1 `taking-the-help-away`,
`the-first-position-reading-check`; the tab-scaffold approach the PDF credits to
Violinspiration; general reading-pedagogy on "fading prompts")*

### The idea

Early lessons show a lot of help — the note name, the string, the finger, printed under the
staff. That help is **a ramp, not a floor**: it has to come away, in stages, *"before it
becomes a crutch, but not so early that you practise wrong notes."* The PDF's five stages:

| Stage | What the page shows | The reader supplies |
|---|---|---|
| **A** | note name + string + finger + staff | nothing — just play |
| **B** | finger + staff | the note name (reads it) |
| **C** | staff + an occasional string cue | finger and string |
| **D** | normal notation; a finger only where non-obvious | fingering, mostly |
| **E** | a clean score | fingering *and* bowing, where the edition leaves it open |

Stage 1 already ran A→C for first-position naturals (`taking-the-help-away`). Stage 8 **runs
the whole ladder A→E**, and repeats it each time the material gets harder (a new key, then
accidentals, then — post Stage 6 — a new position). Every scaffold step is re-earned in the
new context.

### How our `<NotatedExample>` supports it

- The `labels` array *is* the scaffold. Stage A = full labels shown (`reveal="shown"`).
- Stage B–C = `reveal="hidden"` (the worksheet mode) — plain notation, "show the answer"
  reveals the labels.
- Stage D–E = a card with **no `labels` at all**, just the notation and a pass condition —
  the reader owns it.

So the sight-reading cards are literally `<NotatedExample reveal="hidden">` with the answer
one tap away, and the "advanced" cards drop `labels` entirely.

### Build

- **`taking-more-help-away`** — extends Stage 1's lesson: the A→E ladder in full, walked
  across the first-position keys; then the rule "re-run the ladder whenever the music jumps a
  level."

---

## Pass 8 — The graded sight-reading ladder: the card design and the levels

*(research batch 8: 2026-09-04 — ABRSM Bowed Strings Practical Grades Initial–8 (2020) +
"ABRSM Sight Reading: What to Expect at Each Grade"; Trinity sight-reading Initial–Grade 5
parameters; e-musicmaestro grade guides; the PDF §80.1–80.8; SightReadingFactory /
Read Ahead app models)*

### What the exam boards actually add, grade by grade (the ladder skeleton)

ABRSM/Trinity present sight-reading **cumulatively** — once a feature is in, it stays. The
progression, distilled for our first-position-only v1 span (Stage 8a), then extended
post-Stage-6 (Stage 8b):

| Level | Adds | (matches roughly) |
|---|---|---|
| 1 | open strings only; 2/4 & 4/4; crotchets, minims, semibreves + their rests; 4–6 bars | Trinity Initial |
| 2 | one string at a time (G, then D, then A, then E); quavers in pairs | — |
| 3 | **C & G major**, first position, whole strings; the low-2 / high-2 contrast | ABRSM Initial–1 |
| 4 | **D & A major**; **A & E minor**; dotted crotchets; ties across the bar | ABRSM G1–2 |
| 5 | **F major & D minor** (the first flat / the low-1 reach); single quavers; 3/8 | ABRSM G2 |
| 6 | **6/8** read in two; simple compound rhythms | ABRSM G4 |
| 7 | **chromatic notes** (an accidental outside the key); the **fermata**; the tenuto | ABRSM G4 |
| 8 | **syncopation**; a wider dynamic range; `rit.` / `rall.`; a bigger pitch range (ledger lines) | ABRSM G5 |
| 9 | **triplets**; a slur across a string; a light 2-note double stop (open + stopped) | — |
| 10 | **B♭ major, E minor harmonic/melodic**; the full first-position chromatic vocabulary | ~ABRSM G5 |
| **11+** | **3rd position**; then 2nd/4th; key changes; longer lines — *Stage 8b, after Stage 6* | ABRSM G4–6 |
| **gate** | a **Grade-4-ish line, cold** — first-to-third position, a real key, real rhythm, real marks (`PRD.md` §4) | ABRSM/RCM G4 |

Each level is **many short cards**, not one — "quantity of easy material" (Pass 1).

### The card format (uses existing components — `RULES.md` #17)

Each card is:

- a short **`<NotatedExample reveal="hidden">`** — 2–8 bars, ABC authored by us, no `labels`
  (or `labels` behind the reveal for the lower levels);
- the **standing pre-read checklist** above it (Pass 2), and the **"try once, no stopping"**
  instruction;
- a **pass condition** (from the PDF, kept): *steady slow pulse · ≥ 8/10 pitches correct · no
  panic pause longer than one beat*. Fail → slow the metronome, **new card tomorrow** (not a
  replay).
- a **"diagnose"** line → points at the four-layer rescue (Pass 6).

Cards live on a **`/practice`**-style page (or a Stage-8 sub-page) as a scrollable ladder, and
each is *disposable* — the point is volume and freshness, not mastering any one card.

### Where the cards come from

**Authored by us in ABC** — this is exactly what our pipeline is for, and it sidesteps every
copyright question. A card is 4–8 bars of newly-invented first-position music constrained to a
level's vocabulary. The PDF's §80 cards (8 of them) are the seed; the ladder wants **~5–10
cards per level × ~10 levels = 50–100 short cards**. These can be generated in batches and
don't each need a six-beats lesson — they're *material*, like the scale set.

### Build

- **`how-sight-reading-cards-work`** — one lesson explaining the ladder, the format, the pass
  condition, "one card a day, always new, always a level below your pieces."
- **the card ladder itself** — a page of levelled cards (authored ABC), released alongside the
  reading-fluency lessons. Not 60 lessons — one page, many cards.
- The **gate card** lives with `the-intermediate-check` (Pass 24).

---

## Pass 9 — Reading across keys, chromatics, textures (and, later, positions)

*(research batch 9: 2026-09-04 — violinist.com key-signature threads;
violinspiration.com "Violin Key Signatures" & "Double Stops"; musiciangoods "Violin Key
Signatures"; charveypublications "Playing in Keys" / "Double Stop Beginnings"; Stage 3
`beamed-notes-double-stops-and-vibrato`, Stage 4 `key-signatures-in-full`)*

### Sharp keys vs flat keys — a real reading shift for a violinist

Stages 1–5 lived almost entirely in **sharp keys** (G, D, A) plus C — because the open strings
G-D-A-E *are* the sharp side of the circle, and the finger patterns fall naturally
(`the-keys-the-violin-loves`, Stage 4 E2). **Flat keys read differently under the hand:**

- **F major** (1 flat) → **low 1st finger** where the reader is used to a normal 1: B♭ on the
  A string, F on the E string. The whole hand shifts its sense of "1".
- **B♭ major** (2 flats) → low 1 on A *and* E; the 2nd finger sits where a low-2 used to be.
- The mnemonic pair (`F C G D A E B` sharps / `B E A D G C F` flats) is Stage 4 material; the
  *reading* skill is recognising **"flats in the signature → my 1st finger creeps back."**

**For the build:** the card ladder introduces F major / D minor as its own level (level 5),
and there's a short lesson `reading-the-flat-keys` — the low-1 hand, the two or three flat
signatures a first-position player meets, how they *feel* different from the sharp keys.

### Chromatic notes at sight

An accidental *outside* the key — the reader has read these since Stage 1
(`accidentals-inside-a-bar`), but reading one **at speed** while keeping the pulse is the
skill. The pattern: an accidental almost always **leans** (a chromatic passing/neighbour note,
Stage 4 H3) — so you can *predict* it resolves by a half step to the note next to it. The
lesson `reading-a-chromatic-note` shows the common shapes (the raised leading tone, the
chromatic passing tone, the ♭6) and the "it leans, so I know where it's going" trick.

### Reading a vertical stack — double stops & light chords

Stage 3 taught *seeing* the stack (`beamed-notes-double-stops-and-vibrato` — "two in a row,
two at once, or a wobble") and the "Vivaldi visual problem." Stage 8 reads it at sight:

- **the four kinds of double stop** — open+open, open+stopped-above, open+stopped-below,
  stopped+stopped — and which are readable *now* (the first three; stopped+stopped is Stage 6).
- reading the **bottom note as the string level** and the top as the fingered note.
- a rolled 3-/4-note chord = read the top note (the melody) + know the roll is bottom-to-top
  (Stage 5 `rolling-a-chord-with-the-bow`).

A light lesson `reading-two-notes-at-once` — recognise the stack, read it as string + finger,
the first-three double-stop kinds; defers the real double-stop *technique* to Stage 6.

### Positions (Stage 8b — after Stage 6)

Once shifting exists: reading a line that leaves first position — recognising **from the
notation + the fingering + the phrase** that a shift is coming, reading the roman position
numbers (Stage 3 G3, Stage 5 I1), and the graded ladder's levels 11+. Flagged here, planned
in Stage 6's own plan and revisited in Stage 8b.

### Build

- **`reading-the-flat-keys`** · **`reading-a-chromatic-note`** · **`reading-two-notes-at-once`**
  — three short reading lessons.
- Positions-at-sight = Stage 8b.

---

## Pass 10 — Sight-reading as a daily habit, and the tools

*(research batch 10: 2026-09-04 — bulletproofmusician "Born or Made?"; pianochronicles
"10-Minute Practice System"; ABRSM Violin Sight-Reading Trainer app; Read Ahead / Sight
Reading Factory; violinist.com "catching up on missed basics"; the PDF's practice-hygiene
material)*

### The habit that actually builds the skill

Consensus across every source: **sight-reading is built by daily volume of easy new
material**, not by occasional hard tests. The routine:

- **5–10 minutes, every practice session**, at the start (before the ear tires and the
  standards slip).
- **Always something you have never seen**, and **a level or two below** your current
  repertoire.
- **One look (the pre-read), one go (no stopping), then move on.** Do not replay.
- Nudge the level up only when a whole level goes cleanly at a *slow* pulse.
- Over months, this is the difference — "great sight-readers are *made*, by reading a very
  large amount of music" (bulletproofmusician).

### Tools

- **The drone / metronome bar** (our own, always-present) — the metronome *is* the
  no-stopping enforcer; set it slow, and it drags the eyes forward.
- **The card ladder** (Pass 8) — the disposable stream.
- **External, named honestly** — the ABRSM *Violin Sight-Reading Trainer* app (Grades 1–5),
  *Read Ahead*, *Sight Reading Factory* — endless fresh graded material, which is exactly what
  the habit needs. A REFERENCE aside, not a dependency: our cards seed it, the apps sustain it.
- **Duet reading** — reading *with* someone (or a backing track) is the best forcing function
  for "keep going" because you literally can't stop. Flag it as the next step once the reader
  has a teacher or a group.

### Build

- **`the-sight-reading-habit`** — the 5-minutes-a-day routine, the "always new, always easier"
  rule, the tools; ties `how-to-practise-a-scale` (Stage 4) and `how-to-practise-a-bow-stroke`
  (Stage 5) — same deliberate-practice spine.

---

# THE EAR GYM — building the ear from the ground up

*This is the larger half of Stage 8 and the part that carries `PRD.md` §3. Passes 11–22.*

---

## Pass 11 — The architecture of an ear: what to build, and in what order

*(research batch 11: 2026-09-04 — musical-u "An Approach to Ear Training" / "Ultimate Guide to
Interval Ear Training"; the-maestro-online "Solfège vs Harmony — a research-driven comparison";
Karpinski, *Aural Skills Acquisition* (2000); tonesavvy / tonedear "Functional (Scale Degree)
Ear Training"; pitchd.net "Solfège Ear Training"; Edwin Gordon on audiation; the sargam
material in Stage 4 A3, Stage 1 `sa-and-the-letter-names`)*

### What "a good ear" is actually made of

Not one skill — a stack:

| Layer | The skill | Built by |
|---|---|---|
| **Pitch memory** | hold a pitch in your head, match it with your voice | singing, matching a drone (Pass 12) |
| **Tonal / functional hearing** | hear a note as *"the 5th"*, *"the leading tone"* — its role and pull in a key | scale-degree work against a drone (Pass 13) — **the core** |
| **Relative pitch** | hear the distance between two notes | falls out of functional hearing; interval drills as backup (Pass 14) |
| **Harmonic hearing** | hear chords, the bass, the progression, cadences | chord-quality + cadence drills (Pass 15) |
| **Rhythmic hearing** | take down a rhythm by ear | the reader's strength — build confidence (Pass 17) |
| **Timbre / instrument ID** | which instrument, which string | minor for us — one aside |
| **Melodic memory & transcription** | hold a whole tune, write it / play it | dictation + play-by-ear (Passes 16, 18) |

Absolute (perfect) pitch is **not** on this list — it's rare, mostly fixed in early childhood,
and **not needed**. Relative/functional pitch is the whole game, and it is trainable at any
age.

### The method question — and the answer for this user

Three ways people train relative pitch:

1. **Reference songs** — "that leap is the start of *Twinkle*, so it's a 5th." Fine as a
   *bootstrap*, useless at speed (you can't name a song for every interval fast enough). Stage
   4 F4 already planted a few anchors — keep them as a fallback, not the method.
2. **Interval drills** — "name the interval," context-free. A **real, useful skill** — you
   need it for a bare leap with no tonal context, and for harmonic (two-note-together)
   hearing. But **on its own it's not how tonal music is heard:** the same interval means
   different things in different functional contexts (a descending 5th ^5→^1 = a cadence;
   ^3→^6 = something darker), so an ear trained *only* on isolated intervals struggles to name
   them inside real music.
3. **Functional / scale-degree (numbers, or movable-do)** — hear every note as its **degree
   and its pull** relative to the tonic. *"Do/^1 sounds home, ti/^7 aches upward, fa/^4 sags,
   sol/^5 sounds open and expectant."* This models **how tonal listening actually works** —
   Karpinski's cognitive account (2000) puts **tonic inference first**: you locate "home", and
   every other pitch's identity and function *derives from its relationship to that tonic*.
   It's the Kodály tradition, and it's the primary method here.

**Both matter — but functional is the spine and it plays to this user's strength.** The
sargam system he already carries **is functional ear training** — Sa/Re/Ga/Ma/Pa/Dha/Ni are
scale degrees heard against a drone, "the emphasis is not on the scale but on the intervals
[i.e. the functional relationships]" (Stage 4 A3). The entire ear gym is: **take the ear he
has for Sa-relative hearing and point it at Western tunes, Western harmony, and the violin
fingerboard.** Intervals (Pass 14) are taught as *two scale degrees* and as a lighter,
complementary track.

**Notation choice — use scale-degree *numbers* (`^1`–`^7`) as the primary system.** They work
**identically in major and minor** (^1 is always the tonic; the minor scale is ^1 ^2 ♭^3 ^4
^5 ♭^6 ♭^7), which sidesteps the movable-do "do-based vs la-based minor" debate that Karpinski
(2021, *Choosing a Solmization System*) spends a whole article on. Movable-do syllables and
sargam ride along as the *familiar overlay* (the reader already thinks in Sa-Re-Ga), but the
course's written shorthand is the caret numbers it has used since Stage 4 A2.

### The order to build it

1. **Sing and match** — you can't train an ear you can't check; the voice is the test
   instrument. (Pass 12.)
2. **The tonic, and home** — establish a key with a drone/cadence, *feel* the tonic. (Pass 12.)
3. **The scale degrees, one at a time, against the drone** — the core drill, straight out of
   Stage 4 F4. (Pass 13.)
4. **Then**: intervals (Pass 14), chord quality & cadences (Pass 15), melodic dictation
   (Pass 16), rhythmic dictation (Pass 17), and **play-by-ear / transcription** (Pass 18) —
   the goal everything feeds.

### Build

- **`what-a-good-ear-is`** — the stack above; "not perfect pitch — *functional* pitch";
  "you already have this ear, it's called sargam" (cite a raga/sargam reference, `RULES.md`
  #8); the order of the gym. One framing lesson, then the drills.

---

## Pass 12 — Sing and match, audiate, and find home (the drone)

*(research batch 12: 2026-09-04 — Gordon, *Music Learning Theory* / audiation (letsplaymusic,
prodigies, allianceamm, makemusic "Developing the Skill of Audiation"); musical-u
"Audiation — It's All In Your Head"; fiddlehed "Audiation"; stringkick "Ear Training — The
Ultimate Guide"; Stage 4 F4/F5, Stage 1 `ringing-tones` / `hearing-a-wrong-note`)*

### Audiation — hear it before you play it

**Audiation** (Edwin Gordon's term): *hearing and comprehending music whose sound is not
physically present* — the mind's ear, the equivalent of the mind's eye. It is the foundation
skill under both halves of this stage: you **audiate the page** when you sight-read (Pass 2),
and you **audiate the target** when you play by ear (Pass 18). Everything in the ear gym is a
way of building it.

The training loop is always the same: **imagine the sound → produce it → let the ear judge
the match → adjust.** Repeated, this *is* ear training.

### The voice is the test instrument — and yes, he has to sing

Every ear-training tradition makes you **sing**, because singing is the only way to *externalise*
what you're audiating so the ear can check it. You imagine a pitch, you sing it, your ear
tells you if it matched. There's no substitute — playing it on the violin adds a layer of
"did my finger land right" that hides whether your *ear* was right.

**The "I can't sing" objection** — head it off directly, because an adult beginner will raise
it:

- The goal is **not** a beautiful voice — it's a *checkable* one. Humming quietly, in your
  own range, alone, is enough.
- "Can't sing in tune" is almost always an **untrained ear**, not a broken voice — and it's
  exactly what this training fixes. Matching improves fast.
- The violin *helps*: **sing a note, then play it, then sing along with the string.** The
  string is a perfectly in-tune reference to pull your voice onto. (This also improves your
  *intonation* — Stage 4 `tuning-by-ear`.)

### Pitch matching — the first drill

1. The drone bar plays a pitch. **Hum it.** Play it on the violin. Do the three match?
2. Play a note. **Hum it back** without looking. Check.
3. The drone plays; **hum a note a step above / a fifth above**; check against the violin.

This is Stage 4 `tuning-by-ear` turned into a daily 2-minute drill, and it's the base of
everything else.

### Find home — establish the tonic

Before any functional work you have to **set the key in the ear**:

- Play a **drone on the tonic** (our drone bar — the reader has used it since Stage 4 F4), or
- Play a **short I–IV–V–I** (Stage 4 H1) to plant the key harmonically.

Then the tonic *feels* like home — and every other note is heard *against* that feeling. This
is the sargam instinct exactly: choose Sa, and every swara is a distance-and-flavour from it.
The reader already does this; the drill makes it explicit and Western.

- **`hearing-home`** drill: drone plays; a random scale note sounds; *is that the tonic or
  not?* Then: *sing the tonic* (find your way home from wherever the note was). Then hum a
  short phrase and end it "at home."

### Build

- **`hearing-it-first`** — audiation, the imagine→sing→check loop, "the sound is made inside
  your head first"; cites Gordon.
- **`singing-is-not-optional`** — the voice as the test instrument; the "I can't sing"
  answer; sing-then-play-then-sing-along; the matching drills.
- **`finding-home`** — set the key (drone or cadence), feel the tonic, the "is this home?"
  drill. Straight extension of Stage 4 F4.

---

## Pass 13 — The scale-degree gym (the core of the whole stage)

*(research batch 13: 2026-09-04 — tonesavvy / tonedear "Functional (Scale Degree) Ear
Training" (the 3-unit / 5-level progression); the Kodály "LA SOL MI / RE DO LA" motive
sequence; sonicfit "Scale Degree Ear Training"; intmus "Integrated Aural Skills"; Karpinski
2000; Stage 4 A2 `the-scale-degrees-and-their-pull`, F4 `hearing-the-scale-degrees`)*

### This is the drill everything else is built on

Stage 4 F4 (`hearing-the-scale-degrees`) *introduced* it: drone on, play the scale, hear each
note pull against home — ^7 grinds up, ^4 sags to ^3, ^1/^3/^5 settle — then name a random
degree. Stage 8 turns that into a **systematic, levelled gym**, done a few minutes daily, and
it is the single highest-value thing in the course for this user.

### The progression (from the functional-ear-training research)

Build the seven degrees in **three waves**, each "locked in as a handbell" — a sound you know
instantly:

**Wave 1 — the stable three (the tonic triad): ^1 / ^3 / ^5** — *do, mi, sol*. These *rest*.
Drill: drone plays; one of ^1/^3/^5 sounds; name it (sing it, then check on the violin).
Then two in a row. Then a 3-note fragment (`do-mi-sol`, `sol-mi-do`).

**Wave 2 — the tendency four, by their pull: ^2 / ^4 / ^6 / ^7** — *re, fa, la, ti*. Don't
learn these as pitches — learn them as **motion toward a stable note**:
- **^7 → ^1** (*ti → do*) — the strongest pull, a half step, aches up
- **^4 → ^3** (*fa → mi*) — sags down, a half step
- **^2 → ^1** (*re → do*) — leans down, gently
- **^6 → ^5** (*la → sol*) — the melancholy one, falls to sol
Drill: a tendency note sounds; *sing where it wants to go*, then name the note itself.

**Wave 3 — all seven at once** — using the pull to disambiguate. Drone; any scale note; name
it. Then random sequences of 3, 4, 5 notes. Then **a phrase from a tune the reader knows**,
degree by degree.

**Wave 4 (LATER / Stage 8b) — the chromatic five** — ♯4, ♭6, ♭7, ♯1/♭2, ♯5 — each as an
altered version of a diatonic degree with its own lean (Stage 4 K3, H10). Recognise, don't
drill hard.

### The sargam bridge, made concrete

The reader can already do wave 1–2 *in sargam*. So the lesson is short and the drill is
familiar:

| Western | Sargam | Feel |
|---|---|---|
| ^1 *do* | **Sa** | home |
| ^2 *re* | **Re** (shuddha) | leans to Sa |
| ^3 *mi* | **Ga** (shuddha) | bright, stable |
| ^4 *fa* | **Ma** (shuddha) | sags to Ga |
| ^5 *sol* | **Pa** | open, expectant |
| ^6 *la* | **Dha** (shuddha) | melancholy, falls to Pa |
| ^7 *ti* | **Ni** (shuddha) | tense, aches to Sa |

*(Accuracy: this is the **major-scale / Bilawal-thaat** alignment. Say that — it's not "sargam
= the major scale", it's "the shuddha swaras line up with the major scale, and the *functions*
transfer." Cite Bhatkhande / a sargam reference. `RULES.md` #8, `CLAUDE.md` Mistakes #10.)*

### On the violin — the reverse map falls out of this

Once the reader can hear "that's ^5" against a G-major drone, they also know **^5 of G = D =
open D string / or 4th finger on the G string**. The scale-degree gym and the *reverse
fingerboard map* (Stage 5 K1, `finding-a-tune-by-ear`) are the same skill from two directions.
A drill: drone in D; a degree sounds; *play it* (not name it) — find ^6 of D on the violin,
now.

### Build — the biggest sub-block of the stage

- **`the-stable-three`** (^1/^3/^5 as handbells) · **`the-tendency-tones`** (^2/^4/^6/^7 by
  their pull) · **`all-seven-degrees`** (the full drill) · **`degrees-on-the-fingerboard`**
  (hear a degree → play it, the reverse map) · **`degrees-in-your-tunes`** (name the degrees
  of Ode to Joy / Twinkle / a folk tune by ear).
- Each is a short lesson + a repeatable drill (drone bar + `<NotatedExample>` playing the
  target; the reader sings/plays; the answer reveals).

---

## Pass 14 — Intervals: the backup skill (learned as two scale degrees)

*(research batch 14: 2026-09-04 — musical-u "Ultimate Guide to Interval Ear Training" /
"Interval Ear Training Tips" / "How can I improve at harmonic intervals"; music-theory-practice
"Ascending Interval Ear Training"; musiversal "Songs to Practice Intervals"; deftdigits "Scale
Degrees vs. Intervals"; Stage 4 F1–F3 (`what-an-interval-is`, the interval anchors))*

### Intervals matter — but they're the *second* method, not the first

Per Pass 11: tonal music is heard **functionally** (against the tonic), so the scale-degree
gym (Pass 13) is the spine. But intervals are a real complementary skill, and they matter
because:

- a **leap** in a tune has to be measured *somehow* (Pass 3 — the leap is one of the reading
  shapes);
- **harmonic intervals** (two notes together) are how you hear a double stop, and the seed of
  chord hearing (Pass 15);
- the same interval **sounds different in different functional contexts** (a descending 5th
  ^5→^1 = a cadence; ^3→^6 = something darker) — which is itself an argument for hearing it
  *as two degrees*, not as a context-free distance.

### The fix: hear an interval as *two scale degrees*

Instead of "that's a perfect 4th," hear "that's ^5 up to ^1" or "^1 up to ^4." The interval
falls out of the functional hearing you're already building (Pass 13). This is why Stage 8
teaches degrees *first* and intervals *second* — the second is nearly free once the first is
solid.

- The three forms: **ascending** (easiest — the low note anchors), **descending**,
  **harmonic** (both at once). Drill all three; each helps the others.
- **Anchor songs** as a bootstrap only (Stage 4 F4 already gave a few): Twinkle = P5 (^1→^5),
  *When the Saints* = M3 (^1→^3), *Amazing Grace* = P4 (^5→^1), the *Jaws* / semitone = m2,
  *Bridal Chorus* = P4, NBC chimes = the arpeggio. Fallback, not the method.

### On the violin

Every interval is also a **hand shape / string relationship** the reader half-knows:
- a **P5** = the same finger on the next string (Stage 0), or open-string to open-string
- a **P4** = across a string, roughly one finger's difference
- an **octave** = same note, string + two-away (Stage 1 open-string checks)
- a **3rd / 6th** = a double-stop shape (Stage 6, but readable now)

### Build

- **`hearing-a-leap`** — an interval = two degrees; the three forms; the anchor songs as
  backup; on the fingerboard. One lesson, one drill (a leap sounds; name the two degrees).
  Keeps it lean — the functional gym (Pass 13) does the heavy lifting.

---

## Pass 15 — Hearing harmony: chord quality, the bass, cadences

*(research batch 15: 2026-09-04 — musical-u chord ear-training material; tonedear / tonesavvy
chord & cadence trainers; Karpinski on chord-function hearing; Stage 4 G (`the-four-triad-
qualities`), H1 (`the-chords-of-a-key`), H5 (`the-dominant-seventh`), I1–I2 (cadences),
H2 (`harmonising-a-tune-you-know`))*

### Stage 4 analysed harmony — Stage 8 *hears* it

The reader can already spell and name I / IV / V / V7 and the cadences. The ear gym makes
them **audible**:

**1 · Chord quality — major vs minor first.** The single most useful harmonic ear skill. A
chord sounds; **major or minor?** (bright / dark; Stage 4 D1). Then add **diminished** (tense,
unstable) and **augmented** (uneasy, floating) — Stage 4 G2. Drill: a triad on a random root;
name the quality; then sing the 3rd (the note that decides it).

**2 · The bass line.** Hear the *lowest* note of a chord — it's what a violinist most needs
(you often play the bass or the top of a texture, not the middle). Drill: a chord sounds;
**hum the bottom note.**

**3 · The three functions — T / PD / D.** A chord (or short progression) sounds against the
established key; is it **home (I, vi)**, **leaving home (IV, ii)**, or **pulling home (V,
vii°, V7)**? (Stage 4 H1.) This is harder than quality and more useful — it's how you follow
a piece's harmony by ear.

**4 · Cadences.** A phrase ends; **which cadence?** — perfect (V→I, full stop) · plagal (IV→I,
the "amen") · half (ends on V, a comma) · deceptive (V→vi, the swerve). Stage 4 I1–I2 taught
the theory; here you hear the *four endings* and tell them apart. This is a genuine
Intermediate-gate skill.

**5 · The dominant 7th.** Its specific sound — the tritone inside it, the "we must go home
now" (Stage 4 H5). Drill: I chord, then V7, then resolve — and *sing the ^7→^1 and ^4→^3* that
collapse it onto I.

**6 · Hear the harmony *under* a melody.** The capstone — play a simple tune (Ode to Joy,
Twinkle) and, bar by bar, *hear which chord fits* (Stage 4 H2). This is what lets you
harmonise a tune, or play a bass line to one, by ear.

### Build

- **`major-or-minor`** (the quality drill) · **`hearing-the-bass`** · **`home-leaving-pulling`**
  (the three functions) · **`hearing-a-cadence`** (the four endings — gate skill) ·
  **`hearing-the-chord-under-the-tune`** (the capstone).
- Each: a drill using the drone bar + `<NotatedExample>` chords (rolled, per Stage 5) + reveal.

---

## Pass 16 — Melodic dictation: taking a tune down by ear

*(research batch 16: 2026-09-04 — risingsoftware "Mastering Melodic Dictation"; the Clendinning
& Marvin *Musician's Guide* dictation chapter (routledgetextbooks); openmusictheory "Basics of
Sight-Singing and Dictation"; musicstudent101 ep. 78; fiveable melodic-dictation guides;
tonedear / tonesavvy melodic-dictation trainers)*

### The method — the same order every time

A tune plays; you write it (or play it back). The universal 3-step order:

1. **Rhythm first — *where* before *what*.** Find the beat, the metre (simple/compound), tap
   it, and write down the rhythm on one line — no pitches yet. (The reader's strength; this
   step should be quick for him.)
2. **Contour — up / down / same, and mark the leaps.** A rough shape line over the rhythm.
   Stars where the line jumps rather than steps.
3. **Scale degrees — find the tonic, then fill in.** Using the functional ear from Pass 13:
   "starts on ^5… steps up to ^6… leaps down to ^1…" — write the degree numbers, then check
   by singing it back in numbers/solfège before you play it.

**Sing it back before you play it** — every source says this. If you can sing the phrase in
degree numbers, you've *got* it; playing it is then just the reverse map (Pass 13).

### Levels

- **L1:** 2–3 notes, stepwise, in the tonic triad, one key (G). "Where's home, and which way
  did it move?"
- **L2:** a 4–5 note fragment, steps + one skip, still diatonic.
- **L3:** a full 2-bar phrase with a leap and a simple rhythm.
- **L4:** a 4-bar phrase, a dotted rhythm, a tendency tone resolving.
- **L5:** an 8-bar tune (a folk melody the reader *doesn't* know), any first-position key.

### Build

- **`taking-a-tune-down`** — the 3-step method, walked on a short phrase; then a drill (a
  phrase plays; you write degrees; reveal). The drill card plays the target with the drone,
  hides the notation, reveals on tap — same shape as the sight-reading cards, reversed.
- Levels L1–L5 as a small ladder, not one lesson each.

---

## Pass 17 — Rhythmic dictation and the rhythm ear (build confidence here)

*(research batch 17: 2026-09-04 — the dictation sources above (rhythmic portion); Stage 2
(`counting-the-beat`, `subdivision`, the `rhythmOnly` mode); the tabla-advantage framing from
Pass 4)*

### The reader's home ground — use it to build confidence

Rhythmic dictation is where the tabla background makes the reader *strong*. Deliberately place
it **early in the ear gym** (right after pitch matching, before the hard degree work) so the
reader has a **win** — "oh, I can already do this half" — before the pitch work gets
demanding. Confidence is a real pedagogical input for an adult beginner on their weak axis.

### The method

A rhythm plays (on one pitch / a click); you write it. Steps:

1. **Find the beat and the metre** — tap along, feel strong/weak, 2s or 3s, simple or compound.
2. **Feel the phrase as a whole** — a tabla player's instinct (Pass 4): don't go note-by-note,
   catch the *cell* (long-short-short, the dotted pair, the triplet, the syncopated push).
3. **Write it against the grid** — subdivide in the smallest value, place each note.
4. **Clap it back** to check.

### Levels

L1 quarters + halves, 2/4 → L2 add eighths → L3 dotted figures + ties → L4 syncopation +
triplets → L5 compound metre (6/8) + a rest on a strong beat.

### The reverse — reading complex rhythm

The other direction (belongs half here, half in Pass 4): *seeing* a hard rhythm and playing
it right first time. The link: **if you can take it down by ear, you can read it** — the
notation is just a picture of the thing you can already hear and clap.

### Build

- **`taking-a-rhythm-down`** — the method + L1–L5 ladder; framed as "the half of ear training
  you came in already good at." Uses `rhythmOnly` mode for both the target and the answer.

---

## Pass 18 — Play by ear: the operative goal

*(research batch 18: 2026-09-04 — Stage 5 K1 (`finding-a-tune-by-ear`); the transcription /
learn-by-ear method (musicstudent101, risingsoftware, fiddlehed "learn tunes by ear");
Suzuki "mother-tongue" listening; `PRD.md` §3; `play-by-ear-is-the-goal.md`)*

### This is what the whole stage is for

`PRD.md` §3: *"if I hear something, I should be able to play it on my own."* Stage 5's
`finding-a-tune-by-ear` (K1) was the first real attempt — find home, sing each note as a
degree, play a guess, hear the error, fix it. Stage 8 makes it **systematic and graded**, and
extends it from "a tune you already know" to "**a song off a recording you've never played.**"

### The full method (combines Passes 13, 16, 17)

1. **Listen to the whole thing** a few times. Don't touch the violin. Get the tune *in your
   head* (audiation, Pass 12) — you should be able to hum it.
2. **Rhythm and phrases first** (Pass 17) — where are the beats, how long is a phrase, where
   does it breathe.
3. **Find home** (Pass 12) — hum the tune, find the note it rests on, locate it on the violin.
   Now you know the key and the finger pattern (Stage 4).
4. **Degree by degree** (Pass 13) — for each note: sing it, name its degree (or the interval
   from the last note), put the finger where the degree lives (the reverse map), play it.
5. **Play a guess, hear the error, correct** — the intonation loop (Stage 4 `tuning-by-ear`).
   Wrong guesses map the fingerboard; they're the method, not failure.
6. **Chunk and join** — phrase by phrase, then join them, then play along with the recording.

### The graded ladder

- **L1:** a nursery tune in G, you already know it (Happy Birthday — Stage 5 K1's example).
- **L2:** a folk tune you *don't* know well, first-position key, we give you the recording.
- **L3:** a pop hook / film theme's melody (`REPERTOIRE.md` appendix — Hedwig's, Over the
  Rainbow, Someone You Loved) — from a recording, first phrase.
- **L4:** a whole short tune, any key, phrase by phrase, then along with the track.
- **gate:** *hear a simple 4-bar tune in a known key and play it back unaided* (`PRD.md` §4,
  the Foundation-gate item — reused and raised for the Intermediate gate: *learn a song by ear
  from a recording*).

### The practice loop

**A new short tune by ear, every few days.** Slow, full of wrong guesses at first, fast within
weeks (Suzuki's whole method is built on this — children learn tunes by ear before reading,
"like learning to speak"). This is the single practice habit that most directly serves the
user's stated goal — it should be prescribed as plainly as the sight-reading habit (Pass 10)
and the scale routine (Stage 4).

### Build

- **`learning-a-tune-by-ear`** — the 6-step method, walked on L2; then the ladder L1–L4 as
  small "try this tune" cards (a recording / an `<NotatedExample>` playthrough as the target,
  notation hidden, reveal to check).
- **`play-along`** — the last step: playing *with* a recording, matching pitch and time, the
  ultimate "keep going" and the ultimate ear check.

---

## Pass 19 — The ear gym as a daily habit, and the tools

*(research batch 19: 2026-09-04 — musical-u "An Approach to Ear Training" (practice routine);
the Functional Ear Trainer (Alain Benbassat) / tonedear / teoria / EarMaster; Karpinski on
distributed practice; the drone bar; Stage 4/5 practice-routine lessons)*

### What a daily ear session looks like

**10 minutes, every practice session** — separate from, and ideally before, the instrument
work (a tired ear judges badly). A rotating menu:

- **2 min — sing & match** (Pass 12): drone plays, hum it, play it, check. Sing the tonic
  from a random note.
- **3 min — the scale-degree gym** (Pass 13): drone in a key; random degrees; name/sing/play;
  whichever wave the reader is on.
- **2 min — one harmony drill** (Pass 15): major/minor, or a cadence, or chord-under-a-tune.
- **2 min — one dictation** (Pass 16/17): a 2-bar phrase or rhythm; write the degrees; check.
- **~once every few days — a new tune by ear** (Pass 18), longer.

**Distributed, not massed** — a little every day beats an hour once a week; the ear consolidates
overnight (Karpinski). And **always sing** — a silent ear session isn't one.

### Tools

- **The drone bar** — our own, always present. It *is* the ear gym's home base (set the
  tonic, and every drill runs against it). Make sure it can hold a drone on any of the 12
  tonics, not just the open strings.
- **The metronome bar** — for the rhythm dictation and the "keep the pulse while you figure
  out the pitch" work.
- **External, named honestly** (REFERENCE aside): the **Functional Ear Trainer** (the
  Benbassat method — free, and it is *exactly* the Pass 13 drill), **tonedear.com**,
  **teoria.com**, **EarMaster**, the **Complete Ear Trainer** app. Endless drilling material.
  Our lessons teach the *method and the framing*; the apps sustain the *reps*. This is the
  same division of labour as the sight-reading apps (Pass 10).
- **A piano / keyboard app** — useful for playing yourself a target to sing back, or checking
  a dictation, without the violin's intonation getting in the way.

### Build

- **`the-ear-gym-routine`** — the 10-minute menu, "distributed not massed", "always sing", the
  tools. Mirrors `the-sight-reading-habit` (Pass 10) and the Stage-4/5 practice lessons — same
  spine, third application.

---

## Pass 20 — How reading and the ear feed each other

*(research batch 20: 2026-09-04 — makemusic "Taking the Pain Out of Sight Reading"; Karpinski
on the reading/aural link; the audiation material (Pass 12); Gordon "sound before symbol";
Kodály sequence "sound → sign → theory")*

### The two halves of this stage are one skill

They are usually taught in separate rooms; they shouldn't be:

- **Read with the ear on.** The pre-read (Pass 2) ends with "audiate beat 1" — but a fluent
  reader audiates the *whole line* as the eyes cross it. You hear the tune in your head a
  half-second before you play it, and your fingers are then chasing a sound you already know,
  not decoding symbols cold. This is why functional reading (Pass 3 — "up a step, skip down")
  is powerful: a scale-degree shape is *both* a visual pattern and an audiated sound.
- **Play by ear teaches you what the notation is *for*.** Once you've worked out a tune's
  degrees by ear (Pass 18) and *then* seen it written, the notation stops being arbitrary —
  "oh, *that* squiggle is the ^7→^1 I heard." The Kodály / Gordon principle: **sound before
  sign.** The reader has been doing sign-first for Stages 1–3; Stage 8 closes the loop by
  doing sound-first too, and letting them meet.
- **Sight-singing is the bridge.** Sing a written line (in degrees / solfège) *before* playing
  it — it forces you to audiate the page, and it's the single exercise that trains reading and
  ear at once. Every conservatoire aural course is built on it.

### The combined drill

**Sight-sing, then sight-play.** Take an unseen card: pre-read it, **sing it through in degree
numbers** (no violin), *then* play it. The singing is the audiation made audible; the playing
is then almost a formality. Do this with the lower-level cards.

### Build

- **`reading-with-your-ear-on`** — audiate the line as you read; "sound before sign"; the
  sight-sing-then-sight-play drill. One lesson that explicitly welds the two halves of the
  stage together — probably the last concept lesson before the gate.

---

## Pass 21 — The Intermediate gate

*(research batch 21: 2026-09-04 — `PRD.md` §4; `THE-PATH.md` §6; ABRSM/RCM Grade 4 sight-reading
+ aural test specs; the Stage 3 `the-score-language-check` / Stage 4 `the-musicianship-check`
/ Stage 5 `the-foundation-check` pattern)*

### What the gate tests (`PRD.md` §4)

The Intermediate gate closes the whole intermediate half (Stages 6–8). Its items:

1. **shift cleanly to 3rd** (touch 2nd/4th/5th) — *Stage 6.*
2. **vibrate on a sustained note** — *Stage 7.*
3. **sight-read a Grade-4-ish line cold** — *Stage 8.* First-to-third position, a real key
   (up to ~3 sharps/flats), real rhythm (dotted, 6/8, a triplet), real marks (dynamics,
   articulation, a bowing). One look, one go, steady pulse, ≥ 8/10 pitches, no panic pause.
4. **take dictation of a short phrase** — *Stage 8.* A 2–4 bar diatonic phrase; write the
   degrees / play it back accurately.
5. **learn a song by ear from a recording** — *Stage 8, the headline.* A short unfamiliar
   tune; find the key, work out the melody, play it along with the track. (This is the
   Foundation gate's "play back a 4-bar tune" item, raised.)
6. **play student concertos and Baroque sonatas musically** — *Stages 6–9 repertoire.*

### The check lesson

`the-intermediate-check` — a self-audit (not a gate — `RULES.md` #4), mould of the three
prior check lessons. Lists the six items; provides **the gate sight-reading card** (an
authored Grade-4-ish line) and **the gate dictation** (a phrase to take down); points at a
"learn this by ear" tune. Honest that this is the threshold to **the giants** — Bach, Vivaldi,
Kreisler, and the K.216 module.

### Build

- **`the-intermediate-check`** — in 8b, at the very end, after Stage 6–7 exist.

---

## Pass 22 — Re-verification: gaps, contradictions, the sequencing decision

*(research batch 22: 2026-09-04 — re-read passes 1–21 against `PRD.md` §3/§4/§6, the
inherited-lessons table, `CLAUDE.md` Mistakes to avoid, `CONTENT-STANDARD.md`, the campaign
order)*

### Gap 1 — solfège hand signs (Curwen/Kodály): include, lightly

The physical hand signs for do-re-mi (Curwen, adopted by Kodály) are a genuine aid — they give
each degree a *kinaesthetic* anchor to go with the aural one, and they're used precisely for
functional ear training. But they're a **REFERENCE aside**, not a spine: one short lesson
`the-hand-signs` showing the seven signs and "use them if they help you feel the degrees;
skip them if not." The user's sargam counting already gives him a syllable system; the signs
are an optional extra body-cue.

### Gap 2 — how a lesson "plays a drone" (checked the code)

`components/PracticeBar.tsx` + `lib/audio.ts`: the persistent drone bar has a `Drone` class
that accepts **any frequency**, but `DRONE_NOTES` (the pill buttons) is **only the four open
strings — G, D, A, E**. A *lesson* can't drive the PracticeBar anyway (it's separate
persistent UI). So the ear-gym drills need their own way to establish a key. **The clean
answer, no new component (`RULES.md` #17):**

- **The drill card uses `<NotatedExample>`** to play **"key-setting → rest → target"** in one
  ABC snippet — e.g. a rolled **I chord** (or a I–IV–V–I) `[G,B,D]2 z2 | e4 |` establishes G
  major harmonically, then the target degree sounds. `reveal="hidden"` gives the answer on
  tap. This is exactly the existing sight-reading-card shape, reversed (sound is the question,
  notation is the answer). No sustained drone needed for the *drills*.
- **Separately, expand `DRONE_NOTES`** in `lib/audio.ts` from 4 entries to a fuller set — at
  minimum **G · A · D · C · E · B · F♯ · F · B♭** (the tonics of every key the reader works
  in, major and relative-minor), ideally the **chromatic 12**. That's a **one-array data
  change**, and it makes the persistent drone bar genuinely usable for the reader's *own*
  practice against a held drone (which the sargam ear wants). Optional nicety: a small
  "12 notes / open strings" toggle so the bar isn't cluttered.

**So: no blocking infra dependency.** One tiny data edit (`DRONE_NOTES`) is a *nice-to-have*;
the drills themselves ship on `<NotatedExample>` as-is.

### Gap 3 — "which note did the violin play?" (the CURRICULUM's own bullet)

Absolute single-note ID against no reference is *not* worth training (it's near-perfect-pitch).
But **"the violin plays a note; sing it / find it"** *with* the drone or an open string as
reference IS the pitch-matching drill (Pass 12) — already covered. Reframe the CURRICULUM
bullet as "match it / place it", not "name it cold."

### Gap 4 — reading *chords and lead-sheet symbols* (the user's phrasing: "any notes and chords and shit")

The user asked specifically about reading **chords**. Stage 4 built `reading-a-chord-symbol`
(C, Cm, C7, Cmaj7, C/E…) and the roman-numeral analysis. Stage 8 should have one reading
lesson `reading-a-chord-chart` — a lead sheet / a chord chart above a melody, how a violinist
uses it (play the melody; know the harmony; be able to play a chord tone or a bass note if
asked; improvise an arpeggiated accompaniment). Ties `hearing-the-chord-under-the-tune`
(Pass 15) — read it *and* hear it. Add to the reading block.

### Contradiction check — none material

- **"Rhythm first" (Pass 4/16/17) vs "the pre-read scans everything" (Pass 2)** — no conflict:
  the pre-read *flags* the rhythm traps; "rhythm first" is what you do with the flagged bar.
- **Interval method (Pass 14) vs "functional beats interval" (Pass 11)** — resolved in-text:
  intervals are taught *as two degrees*, as a backup, lean.
- **"Don't replay a card" (Pass 8) vs "practise a little every day" (Pass 10/19)** — no
  conflict: you don't replay *the same* card; you read a *new* one daily.

### The sequencing decision (for the plan, with the user)

The research confirms the split:

- **Stage 8a — Reading fluency + the ear foundation** (Passes 1–20 minus the position-dependent
  bits): **position-independent, builds next, in parallel with Stage 6.** The ear gym
  especially should start ASAP — it's the user's #1 goal and it takes months to mature.
  Roughly: the reading-fluency block (~10) + the sight-reading method + the low card levels
  (1–10) + the whole ear gym (~18). **~35 lessons + the card/drill ladders.**
- **Stage 8b — Sight-reading to the gate** (the position-dependent bits): the card ladder's
  levels 11+, reading positions at sight, the Grade-4 gate line, `the-intermediate-check`.
  **Closes after Stage 6–7.** ~5 lessons + the upper ladder.

**Recommendation:** build **Stage 8a next** (before or alongside Stage 6 research), because the
ear gym is the operative goal and every month it runs earlier is a month of ear it gets. Then
Stage 6 (shifting), Stage 7 (vibrato), then Stage 8b + the Intermediate gate.

---

## The movement plan (drafted 2026-09-04)

One `stage: 8`, split **8a / 8b** on `/learn` (like 3a/3b, 4a/4b/4c, 5a/5b/5c). Tags: **N**OW
/ **X**=NEXT / **L**ATER / **R**EFERENCE.

### 8a — Reading fluently & the ear from the ground up *(builds next; position-independent)*

**Movement A — Reading fluently (`reading` track, ~8)**
| Slug | Teaches |
|---|---|
| `what-fluent-reading-is` | patterns not notes; chunking; the eye runs ahead; "sight-reading is its own skill, practised easy and daily" |
| `reading-notes-fast` | instant single-note recognition (no mnemonic recital); the one-minute challenge (target 15+); "name it *and* the string+finger". A drill + short framing. |
| `the-pre-read` | the 9-step scan (clef → key → time → range → accidentals → rhythm → bows → roadmap → audiate beat 1); S-T-A-R-S as the compact version |
| `landmarks-and-guide-notes` | anchor notes, read *from* them (consolidates Stage 1) |
| `reading-the-shape` | step / skip / leap, contour, "a string on the page" (extends Stage 1 `steps-and-skips`) |
| `the-patterns-in-real-music` | scale fragment · broken chord · turn · **the sequence** · the leap · repeated note — each hunted in known tunes |
| `your-eye-runs-ahead` | the eye-hand span; read the gaps; pre-scan the hard bar; the card-over-the-note drill |
| `read-the-rhythm-first` | clap–tap–play, subdivide, the rhythm skeleton; **names the tabla head start** |

**Movement B — Sight-reading as a trained skill (`reading` track, ~6)**
| Slug | Teaches |
|---|---|
| `the-never-stop-rule` | "once you start you don't stop"; the pulse is the thread |
| `getting-lost-and-getting-back` | the downbeat lifeline; regrouping points; strong-beat priority; skilled faking |
| `the-four-layer-rescue` | pitch / rhythm / left hand / bow — isolate the break, don't replay |
| `taking-more-help-away` | the A→E scaffold ladder in full; re-run it each level-up |
| `how-sight-reading-cards-work` | the ladder, the format, the pass condition, "one a day, always new, always easier" |
| `the-sight-reading-habit` | the 5-min routine; the tools (drone/metronome bar, the card ladder, the apps, duet reading) |
| **the card ladder** (levels 1–10) | a page of authored ABC cards, `reveal="hidden"`, disposable — *material, not lessons* |

**Movement C — Reading across contexts (`reading` track, ~4)**
| Slug | Teaches |
|---|---|
| `reading-the-flat-keys` | the low-1 hand; F major / D minor / B♭ major; how flats *feel* vs sharps |
| `reading-a-chromatic-note` | an accidental leans → predict its resolution; the common shapes |
| `reading-two-notes-at-once` | the four double-stop kinds (first 3 readable now); bottom = string level |
| `reading-a-chord-chart` | a lead sheet above a melody; how a violinist uses one (melody + know the harmony + play a chord tone / bass / arpeggiated accompaniment) — ties Pass 15 |

**Movement D — What a good ear is (`ear` track, ~4)**
| Slug | Teaches |
|---|---|
| `what-a-good-ear-is` | the skill stack; "not perfect pitch — *functional* pitch"; **"you already have this — it's sargam"**; the order of the gym |
| `hearing-it-first` | audiation (Gordon); the imagine → sing → check loop |
| `singing-is-not-optional` | the voice as the test instrument; the "I can't sing" answer; sing-then-play-then-sing-along + the matching drills |
| `finding-home` | set the key (drone or I–IV–V–I); feel the tonic; the "is this home?" drill |
| `the-hand-signs` (R) | Curwen/Kodály signs — an optional kinaesthetic anchor |

**Movement E — The scale-degree gym (`ear` track, ~5 — the core)**
| Slug | Teaches |
|---|---|
| `the-stable-three` | ^1/^3/^5 as handbells — the tonic triad rests |
| `the-tendency-tones` | ^2/^4/^6/^7 by their pull (^7→^1, ^4→^3, ^2→^1, ^6→^5) |
| `all-seven-degrees` | the full drill; the **sargam bridge table** (Bilawal-thaat alignment, cited) |
| `degrees-on-the-fingerboard` | hear a degree → *play* it; the reverse map (ties Stage 5 K1) |
| `degrees-in-your-tunes` | name the degrees of Ode to Joy / Twinkle / a folk tune by ear |

**Movement F — Hearing harmony (`ear` track, ~5)**
| Slug | Teaches |
|---|---|
| `major-or-minor` | the quality drill; then dim/aug; sing the 3rd |
| `hearing-the-bass` | hum the bottom note of a chord |
| `home-leaving-pulling` | T / PD / D by ear (I·vi / IV·ii / V·vii°·V7) |
| `hearing-a-cadence` | the four endings — perfect / plagal / half / deceptive (**gate skill**) |
| `hearing-the-chord-under-the-tune` | bar-by-bar, which chord fits (ties Stage 4 H2; read+hear with `reading-a-chord-chart`) |

**Movement G — Taking music down (`ear` track, ~4)**
| Slug | Teaches |
|---|---|
| `hearing-a-leap` | interval = two degrees; ascending/descending/harmonic; anchor songs as backup |
| `taking-a-rhythm-down` | rhythmic dictation, L1–L5 — **"the half you came in good at"** (confidence, placed early) |
| `taking-a-tune-down` | melodic dictation: rhythm → contour → degrees; sing it back before you play it; L1–L5 |
| `the-ear-gym-routine` | the 10-min daily menu; distributed not massed; always sing; the tools |

**Movement H — Playing by ear (`ear` track, ~3 — the payoff)**
| Slug | Teaches |
|---|---|
| `learning-a-tune-by-ear` | the 6-step method (listen whole → rhythm → home → degree-by-degree → guess-hear-fix → chunk & join); L1–L4 |
| `play-along` | playing *with* a recording — matching pitch and time |
| `reading-with-your-ear-on` | audiate the line as you read; **sound before sign**; sight-sing then sight-play — welds the two halves together |

### 8b — Sight-reading to the gate *(after Stage 6–7)*

- `reading-a-shift` · `reading-position-numbers` (recap Stage 3 G3 / Stage 5 I1) · the card
  ladder **levels 11+** (positions, key changes, longer lines) · `the-grade-4-line` (a worked
  hard card) · **`the-intermediate-check`** (the self-audit + the gate card + the gate
  dictation + a "learn this by ear" tune).

**Count:** 8a ≈ **35 concept lessons + 3 disposable ladders** (sight-reading cards ·
note-speed / degree / dictation drill sets · the play-by-ear tune list); 8b ≈ 5 + the upper
card ladder. Total in the Stage-4/5 range, weighted to the ear per `PRD.md` §6.1.

### Merge candidates (for the `stage-8.md` plan to weigh with the user)

- `hearing-it-first` + `singing-is-not-optional` could be one `the-ear-is-your-voice` lesson.
- `hearing-the-bass` could fold into `major-or-minor` (both are "hear one note of the chord").
- `hearing-a-leap` (intervals) could fold into `all-seven-degrees` — the research says
  intervals fall out of degrees anyway. Keeping it separate only if the user wants the
  interval vocabulary named explicitly.
- The **card ladder** and the **drill sets** (degree drills, dictation drills) are *material*,
  not lessons — build as one or two `/practice`-style pages, not 60 MDX files.
- `read-the-rhythm-first` + `taking-a-rhythm-down` — the reading and the dictation halves of
  the same rhythm skill; could pair.

### Infra — checked, not blocking

Per Pass 22 Gap 2: the ear-gym drills ship on **`<NotatedExample>`** playing "key-setting →
target" — no new component, no blocker. The one *nice-to-have* is expanding `DRONE_NOTES` in
`lib/audio.ts` (4 → ~9–12 tonics) so the persistent drone bar is usable for the reader's own
drone practice — a one-array data edit, do it early in the build, not a dependency.

### Small fixes applied at re-verification (Pass 22)

- Softened the Karpinski claim (Pass 11, 14, sources): functional hearing is *primary*
  (tonic-inference-first, per Karpinski's cognitive model) — **not** "interval training is
  worse." Intervals are a real complementary skill, taught as two degrees.
- Chose **scale-degree numbers `^1`–`^7`** as the primary shorthand (works in major & minor,
  avoids the do-based/la-based minor problem); movable-do + sargam are the familiar overlay.
- Added **`reading-notes-fast`** (Movement A) — instant single-note recognition speed, the
  one-minute challenge — a genuine gap in the first draft.
- Corrected the drone-bar infra story (above).
- Fixed a stray "Pass 25" reference (there are 22 passes).

---

## Sources

**Reading / sight-reading — research**

- **Review on Eye-Hand Span in Sight-Reading of Music** (PMC, 2021) — EHS numbers (~3–6 notes
  for skilled violinists), perceptual flexibility, chunking, "look-as-far-ahead-as-possible is
  wrong", ~1 s processing buffer.
- **"Markers of Musical Expertise in a Sight-Reading Task: An Eye-Tracking Study"** (2024) —
  experts modulate gaze by complexity; extra fixations on key/time signature in hard passages.
- **Kopiez & Lee, "Towards a general model of skills involved in sight reading music"** — the
  pattern-recognition + prediction + chunking model.
- **"Early Attraction in Temporally Controlled Sight Reading of Music"** (PMC, 2020) — the eye
  jumps to trouble before you get there.
- **Sloboda** — the original eye-hand-span work.

**Sight-reading — pedagogy**

- **ABRSM** — "golden rule" (once you start you can't stop); the Bowed Strings Practical
  Grades Initial–8 sight-reading parameters (cumulative by grade); the Violin Sight-Reading
  Trainer app.
- **Trinity College London** — Sound at Sight / sight-reading Initial–Grade 8, the stepped
  parameters.
- **S-T-A-R-S** — Terry Ownby sight-reading clinic; the band-method tradition.
- violinspiration.com "Violin Sight Reading"; stringsmagazine "3 Ways to Improve Your
  Sight-Reading"; bulletproofmusician "Are Great Sight-Readers Born or Made?"; makemusic
  "Definitive Guide to Sight Reading" / "Taking the Pain Out of Sight Reading" / "Rhythmic
  Sight-Reading: Friend or Foe"; cellobello "A New Look at Sight-Reading"; pas.org "Subdivide
  and Conquer"; the four-layer rescue + the 8 cards from **the PDF, Part VII §77–83**.
- **Note-recognition speed:** notemasterapp "Note-Reading Speedruns"; noterushapp / practito /
  "Name That Note" — the "bottleneck is recognition speed not fingers" finding, the one-minute
  challenge (target 15+), the 2–4-week timescale.

**Ear training — research & method**

- **Karpinski, *Aural Skills Acquisition* (2000)** — the cognitive model of tonal listening:
  **tonic inference is the first and most fundamental process**, and every scale degree's
  identity and function *derives from its relationship to the tonic*. This is the argument for
  scale-degree hearing as the *primary* method (not "interval training is bad" — intervals are
  a real complementary skill). Also Karpinski, *Choosing a Solmization System* (MTO 27.2,
  2021) — the do-based vs la-based minor problem, which using **numbers** avoids.
- **Edwin Gordon, Music Learning Theory** — audiation; "sound before sign"; singing as the
  externalising step.
- **Kodály / Curwen** — movable-do solfège, the hand signs, the LA-SOL-MI → RE-DO-LA motive
  sequence.
- musical-u "An Approach to Ear Training" / "Ultimate Guide to Interval Ear Training" /
  "Audiation — It's All In Your Head"; the-maestro-online "Solfège vs Harmony — a
  research-driven comparison"; stringkick "Ear Training — The Ultimate Guide"; pitchd.net
  "Solfège Ear Training"; risingsoftware "Mastering Melodic Dictation"; openmusictheory
  "Basics of Sight-Singing and Dictation"; Clendinning & Marvin *Musician's Guide* dictation
  chapter.
- **Tools:** the Functional Ear Trainer (Benbassat); tonedear.com; teoria.com; EarMaster;
  tonesavvy; sonicfit "Scale Degree Ear Training".

**The sargam bridge**

- Stage 4 `stage-4-research.md` Pass 1 (sargam = functional, sung against a drone, "emphasis
  on the intervals"); Bhatkhande's thaat system; a sargam / raga reference for any named
  swara (`RULES.md` #8, `CLAUDE.md` Mistakes to avoid #10 — shuddha swaras align with the
  major scale = Bilawal thaat; the *functions* transfer; not "sargam = major scale").

**Inherited from earlier stages** — Stage 1 (`steps-and-skips`, `all-the-first-position-landmarks`,
`taking-the-help-away`, `sa-and-the-letter-names`, `hearing-a-wrong-note`, `ringing-tones`);
Stage 2 (`counting-the-beat`, `subdivision`, `rhythmOnly` mode, `if-you-count-in-bols`); Stage
3 (`decode-a-dense-line`); Stage 4 (`the-scale-degrees-and-their-pull`, `hearing-the-scale-degrees`,
`tuning-by-ear`, `do-re-mi-and-sa-re-ga`, the harmony movement H, the cadence movement I,
`reading-a-chord-symbol`); Stage 5 (`finding-a-tune-by-ear`, `reading-a-bowing`).

---

## Status

**RESEARCH DONE 2026-09-04** — 22 passes + re-verification + movement plan. `stage-8.md` (the
build plan) not yet written. **Recommendation: build Stage 8a next** (the ear gym is the
operative goal; every month earlier is a month of ear). Confirm the 8a/8b split and the drone-
bar dependency with the user before writing `stage-8.md`.
