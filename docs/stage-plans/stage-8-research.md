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
  can play this line I've never seen." PDF Part VII (§77–80).
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

To settle in the plan (Pass 25). First read:

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

### Build

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
