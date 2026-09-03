# Stage 5 — The bow: the research

**Research only. Written in passes — ~10 searches, then a section, repeat — so context doesn't
get lost.** This is the "research to the core" for Stage 5, the bow stage: how the bow makes a
tone, the three controls, string crossings, the core strokes to *perform*, the whole stroke
family as an atlas, **reading and planning a printed bowing**, dynamics as a bow decision, and
the Foundation gate that closes v1.

Read `docs/PRD.md` §4 + §6.1 + §7, `docs/CONTENT-STANDARD.md`, `RULES.md`, `docs/THE-PATH.md`
§6, and **`docs/LESSONS-FROM-MOZART.md` §1** alongside this. Read `CLAUDE.md` →
`## Mistakes to avoid` **before writing a single lesson**.

---

## Why Stage 5 is load-bearing

Stage 5 is the last stage of v1 and the gate to everything after it (`PRD.md` §4, the
**Foundation gate**). It is where the course stops being about *the page* and starts being
about *the sound the reader makes*.

- **Stage 3 taught the reader to *read* the bow marks** — `⊓`/`V`, slurs, staccato dots,
  hairpins, `arco`/`pizz.`, `sul G`. It deliberately deferred *doing* them. Two Stage 3
  `bow`-track lessons — `dynamics-are-a-bow-thing` (3b B6) and `a-slur-is-one-bow` (3a C6) —
  carry the read→perform bridge explicitly and **hand off to Stage 5**. Stage 5 collects that
  debt.
- **Détaché is already half-built.** `content/lessons/detache.mdx` was rebuilt to the
  `CONTENT-STANDARD` bar as the model lesson (`CONTENT-STANDARD.md` §6). It stays; it gets
  polished, not rewritten. Everything around it is a thin first-draft skeleton (14 lessons in
  `lib/curriculum.ts`, all `published`, all need the rebuild).

### The K.216 bowing debt (`LESSONS-FROM-MOZART.md` §1)

Every phrase of K.216 carries bowing information — some printed, most implied. A student who
only knows "détaché exists" cannot play a Mozart phrase. Stage 5 must teach:

1. **Bow distribution as a planned skill** — not "use more bow", but *deciding in advance
   where in the bow each note falls* so you don't run out at the phrase's end. This is Capet's
   central contribution to violin pedagogy (Pass 2, Pass 5).
2. **Reading a printed bowing** — a real part's bowing is information: direction, the retakes,
   *where in the bow* (frog / middle / tip / `Sp.` = *Spitze* / `Pt.` = *punta* / `au talon`),
   the slur groups, `f`–`p` echoes that need a **bow-speed** change (messa di voce, subito p).
   Editorial vs composer bowings (the K.216 "above the staff = Mozart's, below = the editor's"
   footnote). A lesson that walks a marked-up phrase the way `decode-a-dense-line` (Stage 3 I1)
   walked the symbols. (Pass 11.)
3. **The bow-position vocabulary** — frog / middle / tip / `Sp.` / `Pt.` / `au talon` / `WB` /
   `LH` / `UH` / `M` — recognise every abbreviation. (Pass 11.)
4. **Slurs *as bowing*** — a slur is not a phrase mark; it is "these notes fall under one bow,
   in one direction". (Pass 5, and Stage 3 C6 already seeded it.)
5. **`f`–`p` / messa di voce as a bow decision** — completes the Stage 3
   `dynamics-are-a-bow-thing` bridge. (Pass 12.)

### Scope note — what Stage 5 is *not*

- **No new positions.** Shifting and positions 2–7 are Stage 6. All of Stage 5 is first
  position, keys **G / D / A / C** (+ E minor), the same hand Stages 1–4 built.
- **No vibrato.** Vibrato is Stage 7, gated on "in tune, relaxed, first position stable"
  (`PRD.md`; the PDF's readiness gate). Stage 5 produces a **straight** tone — and that is the
  right order: you cannot hear your tone honestly through vibrato.
- **No new left-hand technique.** The new work is entirely the **right arm**: how it makes a
  tone, the strokes it can play, and how it reads and plans a bowing.
- **Perform ≠ read ≠ master** (`RULES.md` #7). The reader will *read* every stroke in this
  stage, *perform* three or four of them (détaché, legato, martelé, a clean string crossing),
  and *recognise but not drill* the rest (spiccato, sautillé, the far shore). Every lesson
  says which milestone it is asking for.

### The tabla bridge — honest about where it helps and where it doesn't

The user's rhythm is strong; the bow arm is new. Be precise about the transfer:

- **Where the tabla background helps.** Bow *rhythm* — even détaché (equal down and up, like
  even `dha`s), hooked-bow and slur groupings (a bowing pattern is a *tala*-like cell applied
  across a passage — exactly Yankelevich's Kreutzer-No.-2 bowing-variation drill, Pass 5),
  subdivided staccato, string-crossing patterns that repeat. The reader can already *feel*
  "two slurred + two separate" as a rhythmic group before the bow can do it cleanly.
- **Where it doesn't.** The physical production of a sustained tone — bow *weight*, bow
  *speed*, *sounding point*, keeping the bow straight, the seamless bow change — has no tabla
  analogue. The right arm is genuinely new territory. Say so; don't force the bridge.
- **One honest touch that does land.** Tabla strokes split into *open/resonant* (`na`, `tun`,
  `ge` — the drum rings) and *closed/damped* (`ka`, `ti`, `te` — the hand kills the ring).
  That is a real ear the user already has, and it maps loosely onto **a ringing open tone vs a
  choked/pressed one**, and onto *sounding point* (near the bridge = more overtones, ringing;
  over the fingerboard = fewer, veiled). Use it once, as a way in to "listen for the ring",
  not as a system.

### Lesson count

The existing skeleton is 14. The rebuild expands it substantially — bow physics and tone are a
multi-lesson block, the stroke atlas becomes real cards, and "reading a printed bowing" is 2–3
lessons, not one. Expect **~30–40 concept lessons + the gate + a handful of repertoire /
study-piece lessons**, grouped into movements the way Stage 3 (3a/3b) and Stage 4 (4a/4b/4c)
were. The movement plan is at the end of this document, drafted after the research settles.

---

## Pass 1 — Bow physics: what the bow does to the string, and the three controls

*(research batch 1: 2026-09-04 — 9 searches/fetches — Fischer *Basics* "Tone production" ×2;
McLeod, *Violin Pedagogy and the Physics of the Bowed String*, MA thesis, U. of Toronto 2019;
Schelleng 1973; euphonics.org; violinist.com; thestrad.com)*

### The one mechanism: friction pulls the string sideways, the string snaps back

The hair of the bow is rosined and rough. As it moves along the string it **catches** the
string by friction and drags it sideways; the string's tension builds until it **releases**
and snaps back the other way; the hair catches it again. This **catch–pull–release–catch**
cycle repeats — for the note A, 440 times a second — and *that* is the note. Helmholtz
described it in the 1860s; it is still called **Helmholtz motion**, and the two phases are the
**stick** phase (hair and string moving together) and the **slip** phase (string sliding back
under the hair) (McLeod 2019, ch. 2; euphonics.org 11.3).

- The whole string vibrates, bridge to finger — not just the piece under the bow. The
  sideways swing (the **amplitude**) is a blur widest at the *midpoint* between bridge and
  finger, and **the wider the amplitude, the more the tone carries** (Fischer, *Basics*, "Tone
  production").
- The **pitch never changes with amplitude.** Loud and soft are the *same* 440 swings a
  second — just narrower or wider. (Fischer.)
- **A note is not one tone.** It is a fundamental plus a series of fainter **upper partials**
  (overtones). The *number and strength* of the partials is the tone *colour*. This is Stage
  4's harmonic series (`the-harmonic-series`, `why-your-violin-rings`) reused — Stage 5 is
  where the reader *controls* it with the bow. (Fischer; McLeod ch. 2.)

### The three controls — speed, weight, sounding point

Every pedagogue from Flesch (1923) through Rolland (1960), Galamian (1962) and Fischer (1997)
reduces tone to the same three variables, and every one of them says **the three are
interdependent — change one and at least one other must change to keep a good tone** (Galamian
1962, 55; McLeod ch. 3).

| Control | What it is | Move it and… |
|---|---|---|
| **Bow speed** | how fast the bow travels along the string (cm/second) — equivalently, *how much bow* you spend on the note | faster → wider amplitude → **louder**. It is the *volume* control and the *expression* control. Galamian's primary tool for nuance: "the climax note should have more bow, the closing note less" (Galamian 1962, 56–57). |
| **Bow weight** (a.k.a. pressure, force) | how much of the arm's weight sinks into the string, through the hand | more weight → **sharper** partials → brighter, more "edge", *up to a limit*. Past the limit the string can't swing → the tone chokes and tears. Mostly a *colour* control, not a volume control (Rolland 1960, 36). |
| **Sounding point** (a.k.a. contact point) | where between **bridge** and **fingerboard** the hair meets the string — Fischer numbers five lanes, **1 = at the bridge, 5 = over the fingerboard** (Fischer 1997, 41) | toward the **bridge**: string is stiffer → needs *more* weight and a *slower* bow, gives a brighter, more powerful, more focused tone. Toward the **fingerboard**: string is slacker → needs *less* weight and a *faster* bow, gives a softer, veiled, flute-like tone (*flautando*). |

**The interdependence, stated as rules the reader can use** (McLeod, Table 1; Galamian 1962,
60; Rolland 1960, 34–37):

- Nearer the bridge ⇒ **slower** bow + **more** weight.
- Faster bow ⇒ needs **more** weight to keep the string caught (or move toward the
  fingerboard).
- Higher up a string / shorter vibrating length (higher positions — Stage 6, but true even for
  4th finger vs open) ⇒ sounding point moves **toward the bridge**, narrower margin for error.
- Thicker/lower strings (G, D) don't respond as close to the bridge as the E string — their
  sounding point sits a little further out (Rolland 1960, 34; Fischer 1997, 41).

### The limits — the "wedge" you have to stay inside (Schelleng)

For any sounding point there is a **minimum** weight (below it the hair skids and you get a
**whistle / surface sound / harmonics** — the string never really catches) and a **maximum**
weight (above it the string can't complete its swing and you get a **crushed, torn, scraped**
sound). Schelleng (1973) drew this as a wedge on a graph: the usable band of weight is **wide
near the fingerboard and narrows to almost nothing at the bridge**. That is *why* playing near
the bridge is hard and why beginners are told to play in the middle lane (Rolland's "zone II"
— "the logical spot for most playing, especially on the elementary level", Rolland 1960, 33).
(McLeod ch. 2, "The Ideal Limits of Helmholtz Motion"; Schelleng 1973.)

The two failure sounds, named for the reader so they can self-diagnose:

- **Whistle / glassy / skating** = too little weight, or too fast, or too far from the bridge.
  *Fix: a touch more weight, or slow down, or move toward the bridge.*
- **Crunch / scrape / tearing** = too much weight, or too slow, or too near the bridge.
  *Fix: less weight, or a faster bow, or move toward the fingerboard.*

Fischer's whole diagnostic for the reader: **listen for the ring.** Play, add a hair of
weight — did the string ring wider? keep going. Did it choke? back off a fraction. Home in on
the balance where the string sings widest (Fischer, *Basics*, "Working from the inside out").

### "Speed, not pressure" — the load-bearing principle

Fischer states it flatly: **"speed of bow is always the first consideration in drawing sound
and expression from the violin."** The physics: pressing *down* fights the string's *sideways*
swing — "like trying to drive the sound down toward your feet". Lightening the bow and using
speed lets the string swing free — a perception of *lifting* the sound out. This holds **even
in the loudest playing**: near the bridge, deep in the string, moving slowly, you still draw
the tone out with *horizontal* motion, not downward push (Fischer, *Basics*, "Tone
production", both articles).

This is the single most common beginner error and it gets its own lesson (Pass 2). Every
"scratchy tone" complaint traces back to weight substituting for speed.

### "Pressure" vs "weight" — a words problem worth one margin note

Many teachers ban the word *pressure* (it invites pressing/squashing) and say *weight* instead
("sink the weight of the arm into the string"). Others keep *pressure* for a focused point and
*weight* for a spread-out heaviness. Fischer's position: if the hand is balanced, the bow
leads, and you *listen*, the word doesn't matter (Fischer, *Basics*, "Working from the inside
out"). **Lesson choice: use "weight" throughout Stage 5**, with one margin note that the
reader will meet "pressure" and "bow force" in books and they mean the same thing.

### Keeping the bow straight — "the highway"

The bow travels **parallel to the bridge**, in one lane, for the whole stroke. Off-parallel
and the sounding point drifts mid-note (tone changes, often toward a skate or a crunch).
Beginners find this genuinely hard because the arm opens and closes on a hinge while the bow
must go straight — Stage 0's `holding-the-bow` and the open-string work started it; Stage 5
makes it a named skill with a mirror check. Galamian's "slightly slanted stroke" (frog a hair
toward the body, tip a hair toward the fingerboard, for a singing tone) is a **REFERENCE
aside**, not a beginner instruction — McLeod argues its benefit is that it nudges the player
to move the contact point, not any acoustic magic (Galamian 1962, 61; McLeod ch. 3).

### How much hair — tilt

Tilting the stick away from you (toward the scroll) puts **less hair** on the string; flat
(stick vertical) puts **all** the hair on. Traditional teaching: **flat for full/loud, tilted
for soft/dolce**; beginners start flat because flat gives the fullest, most secure sound and
one less variable (violinlounge; meghanfaw; thesession). The physics is subtler than the
teaching: more hair actually **dampens** the tone slightly and adds surface noise — the reason
tilting *helps* soft playing is mostly physiological (a tilted bow stiffens the hand and makes
it harder to over-press) and mechanical (a tilted bow is less bouncy, easier to control when
light) (McLeod ch. 2, "The Bow Hair" & ch. 3 on Rolland). **Lesson choice: teach the
traditional rule (flat = full, tilt = soft), keep the physics as a cited aside.** Also: near
the frog, a slight tilt helps keep the bow straight and the wrist flexible and compensates for
the frog's extra weight (Galamian 1962, 54; Auer 1920, 53).

### Why "one long tone, frog to tip" is the first bow lesson

Because the bow is **not evenly balanced**: heavier at the frog, effectively lighter at the
tip (the tip is the far end of a lever pivoted in the hand). "Equal pressure throughout the
bow gives *unequal* pressure on the string" (Galamian 1962, 57). So an even tone from frog to
tip is not a given — it is a *skill*: **more arm weight and firmer fingers as you approach the
tip, a lighter touch (little-finger counter-weight) near the frog.** Rolland makes this
literally the beginner's first task — "positive pressure" through the index finger, "negative
pressure" through the little finger, to level out the bow's own weight (Rolland 1960, 8). The
PDF's Part VI says the same in one line: *"before collecting fancy bow-stroke names, make one
open string sound steady from frog to tip and back."* That line is correct and we keep it.

### The four problems every bow technique must solve (McLeod's summary — a good lesson spine)

1. Compensate for the **uneven weight and springiness** of the bow (frog heavy, tip light).
2. Manage **speed, weight, sounding point** and understand their effect on the sound.
3. Know **when, how, and how much to tilt** the bow.
4. Compensate for what you **can't** control (string thickness, vibrating length) by adjusting
   what you can.

---

## Pass 2 — Tone: the sustained note, the bow change, catching the string, bow distribution

*(research batch 2: 2026-09-04 — Fischer *Basics* "Tone production" ×2; McLeod ch. 3 (Capet,
Galamian); the PDF Part VI; violinist.com son filé / whole-bow threads; Flesch 1923 via
McLeod)*

### Son filé — the spun tone

**Son filé** ("spun sound", French) is the foundational tone exercise: **one sustained note,
one whole bow, frog to tip, dead even** — even volume, even colour, even speed, no bump at the
start, no fade at the end, no lump in the middle. Then the same on the up-bow. Then slower
(more seconds per bow), which is harder. It is the violinist's equivalent of a singer's long
held note or a wind player's long tone, and nearly every method opens with some version of it
(Flesch; Galamian; Fischer *Basics* ex. on soundpoints; Capet's whole "bow distribution"
project rests on it).

What the reader is actually training:

- **Levelling the bow's own weight** (Pass 1) — the whole point.
- **A constant sounding point** — the bow stays in its lane the entire length.
- **A constant speed** — no rushing the easy middle third, no stalling near the tip.
- **The ear** — "is the string still ringing as wide at the tip as it was at the frog?"

### The bow change — the join that must be invisible

At the frog and at the tip the bow reverses direction. A good change has **no gap** (that
would be a break in the sound) and **no bump / accent** (that would be an unwanted sforzando).
The keys:

- **Keep the bow speed through the turn** — the commonest fault is decelerating into the
  change and accelerating out, which dips the sound at every join (this is exactly the
  détaché "usual mistake" already written in `detache.mdx`).
- **The hand and fingers absorb the reversal** — the arm changes direction slightly *before*
  the hand, so the stroke "turns a corner" smoothly rather than jerking. Flexible fingers and
  a flexible wrist are the shock-absorber (the "System of Springs", Galamian 1962, 58).
- **Match the weight across the change** — the up-bow near the frog wants to be heavier than
  feels natural; the down-bow near the tip wants more arm.

### Catching the string — the start of the note

Every note has to *start*. Fischer's model: the hair catches, pulls and releases the string
**once** — that single catch-and-release is a **"click"**, and it is the seed of the
Helmholtz cycle. That click is audible at the front of a *collé*, a *martelé*, a sharp accent.
A smooth *legato* start is the same catch with the click *hidden* — the string is already
moving before you hear it (Fischer 1997, 36; McLeod ch. 3). Teaching order: feel the click
first (short, from the string), then learn to soften it for a seamless start.

- A **from-the-air** start (the bow drops onto the string and moves) vs a **from-the-string**
  start (the hair is already resting on the string, then moves). Beginners should default to
  **from the string** — it is more secure and it is what détaché, legato and martelé all use.

### Bow distribution — the planned skill (Capet)

This is the `LESSONS-FROM-MOZART.md` §1 debt, and it has a clear pedigree. **Lucien Capet's**
central contribution to violin teaching was *bow distribution*: learning to play with an
**even, planned bow speed** so that you *compensate for the bow's weight* and *never run out
of bow before the phrase ends* (McLeod ch. 3, "Capet"). Galamian built his entire scale system
on even bow division for the same reason — it forces right-hand/left-hand coordination
(Galamian, *Contemporary Violin Technique* 1966; McLeod ch. 3).

What "bow distribution" means for the reader, concretely:

- A phrase is *n* notes long and you have *one* bow-length of hair. Decide **before you play**
  roughly how much bow each note gets — a long note more, a short note less, the phrase's peak
  more, the tail less.
- **Where in the bow** does each note fall — do you arrive at the tip exactly at the phrase
  end, or do you have half a bow spare (wasteful) or run out with two notes to go (disaster)?
- **Retakes** — a silent lift-and-reset to get the bow back to a usable part before the next
  phrase (links to Stage 3 D1 `down-bow-up-bow-and-the-retake`).
- Simple worked cases: 4 even notes = 4 equal quarter-bows; a dotted-half + quarter = ¾ bow +
  ¼ bow; a slur of 6 = plan the whole slur as one bow-length divided 6 ways (Pass 5).

Capet vs Galamian on whether bow speed should *also* be an expressive variable: Capet said
**keep it constant** (constant speed = constant tone quality); Galamian said constant speed is
the *beginner's* requirement, after which speed becomes "the main tool for nuance and
expression" (McLeod ch. 3). **Stage 5 teaches Capet's rule first** (plan an even bow, don't
run out), and introduces Galamian's expressive speed change under `dynamics` (Pass 12) and
`phrasing` (the bow-track phrasing lesson).

### The resonance test — the reader's daily tone check

Fischer's practical definition of a good ("resonant") tone: a short note **rings on after it
stops**, like a pizzicato; a long note **rings *during* the note as well** (Fischer 1997, 37).
Third-finger D on the A string is the test note — it sets the open D and G strings ringing
sympathetically (Stage 4 `why-your-violin-rings`). If your bowed D rings like the plucked D,
the bow is working. If it sounds duller than the pluck, you're choking it — less weight, more
speed, check the lane. **This is the ear the whole stage trains**, and it costs nothing.

### The "background resonance" listen

Fischer: "listen as much to the background resonance as to the sound of the principal note"
(*Basics*, "Working from the inside out"). The ringing of the *other* strings and the body of
the instrument is the sign the note is free. This is the honest-tone ear that must be built
**before** vibrato (Stage 7) can be allowed to cover anything.

### What the player hears ≠ what a listener hears

Worth one margin note, because it will save the reader from a wrong instinct: upper partials
**drop off fast with distance**. Near your ear a bright, near-the-bridge tone can sound edgy;
ten metres away that same tone is round and carries, while a sweet under-the-ear tone sounds
thin and weak by the time it arrives (Fischer, *Basics*, "Tone production"). Don't over-sweeten
the sound at source. (REFERENCE aside — the reader isn't playing to a hall yet, but it corrects
the instinct to always chase the mellowest possible sound.)

---

## Pass 3 — String crossings: arm levels, planes, forearm rotation, bariolage

*(research batch 3: 2026-09-04 — Fischer *Basics* "Smooth string crossings" (066pivot) &
"Forearm rotation" (074); thestrad.com "6 ways to improve your string crossing" & "Two simple
exercises for smooth string crossings"; stringsmagazine.com string-crossing / bariolage;
violinist.com "Crescent Bow Path, Planes and String Crossings"; Wikipedia "Bariolage";
violinspiration.com "Bariolage")*

### Each string is an arm level

The bow reaches the four strings at four **heights of the whole arm** — elbow and upper arm
**high for G, dropping for D, lower for A, lowest for E** (thestrad; strings magazine). The bow
and forearm stay in one plane at each level; the reader finds "the feeling of natural arm
weight" sitting on each string. Stage 0's open-string crossing work (`the D–A–D crossing`)
started this; Stage 5 names the four levels and the **in-between level** — the height at which
the hair touches *two* strings at once (used for double stops in Stage 6, and for the crossing
itself: you pass *through* it).

### The motion: upper arm leads, forearm rotation does the fine work

- **The impulse comes from the upper arm** moving vertically — that is what changes strings
  (Fischer, "Forearm rotation").
- **Forearm rotation** (the same movement as turning a doorknob), plus a small **wrist/hand**
  movement, does the fast, efficient version: "a small amount of forearm rotation replaces a
  large amount of vertical upper-arm movement." Crossing to a **higher** string = **higher
  wrist**; to a **lower** string = **lower wrist**. These can be "so slight as to be almost
  invisible".
- Fast, continuous crossing passages are easier with **very little upper-arm movement** — the
  impulse still starts there, but the visible motion is forearm rotation. Fischer's drill:
  rest the elbow against a wall so the upper arm can't move, and play the passage from the
  forearm.
- Even a plain up-and-down stroke on one string contains "an almost-invisible degree of
  forearm rotation" — the reader is not learning a new motion, just a bigger dose of one they
  already make.

### The keystone rule: cross *early* — technical timing vs musical timing

Fischer's single most useful idea here: **"to cross smoothly, the bow must start moving toward
the new string while it is still playing the old one."** *Musical* timing is when you want the
note to sound; *technical* timing (the bow's move) is always **before** that.

- Cross **too late** (technical timing ≈ musical timing) → fast passages feel awkward; slow
  legato passages get **unwanted accents** at every crossing.
- The practice fix — a good one for this reader — **play the note before the crossing and the
  note after it as a double stop.** You are deliberately crossing "too early", both strings
  sounding together, then you separate them again. Start slow and deep in the string, speed up
  toward tempo (Fischer, "Smooth string crossings"; thestrad "Two simple exercises"). Same
  "prepare the next move during the current note" logic the reader's tabla training already
  uses for hand placement.

### Attacking from the air — "like a plane approaching a runway"

When the bow starts a note from above the string (not resting on it), it should **curve into
the string**, not drop vertically onto it — "like a plane approaching a runway". Starting
down-bow at the frog on the E string, the bow approaches as if heading for an imaginary "B
string" beyond the E, then rotates onto the true E level *just as* it begins to sound (Fischer,
"Forearm rotation"). REFERENCE-level detail for our reader, but the runway image is worth
keeping for the retake / phrase-start lesson.

### Crossing on a slur vs on separate bows

- **Separate bows** across a crossing: each note is its own stroke; the crossing coincides
  with the bow change, so the direction reversal and the level change happen together —
  smoother than it sounds if you prepare early.
- **Under a slur** (one bow, two strings): the crossing happens *mid-stroke*, bow still moving
  the same direction. This needs the forearm-rotation "roll" and is the harder case — it is
  what makes a slurred arpeggio (Stage 4 `arpeggios-in-real-music`) hard. The **crescent /
  curved bow path**: on a slurred crossing the bow traces a shallow arc, not a straight line,
  so the hair arrives on the new string without a bump (violinist.com, Drew Lecher).

### Bariolage — recognise now, drill later

**Bariolage** (French, "multi-coloured") = rapid alternation between adjacent strings, **one
usually open**, exploiting each string's different *timbre*; often the *same pitch* played
alternately stopped and open (Wikipedia; violinspiration). The engine is a **rocking / flipping
motion of the hand and forearm** — the forearm rotation above, done fast and continuously.
Famous cases: **Bach, Preludio from Partita No. 3 in E** (open-E vs stopped-E rock);
**Vivaldi**, *Four Seasons*; bluegrass fiddle.

**For our reader:** bariolage as *repertoire* is LATER (Stage 6+). But the **rocking motion**
belongs in Stage 5 as a play-around, because (a) it is the clearest possible feel of
forearm-rotation string crossing, (b) it uses open strings, which the reader has, and (c) it
is a direct on-ramp to Baroque style and to the K.216 solo entrance's neighbourhood. A slow
two-string rock between open D and a stopped note on the A string is a legitimate Stage-5
play-around.

### The three quick wins (thestrad "6 ways") — "usual mistake" material

1. **Move the arm level early**, before the note.
2. **Keep the crossing small** — the bigger the arm motion, the later and bumpier it lands.
3. **Don't let the crossing disturb the bow's straight travel or its speed** — the commonest
   fault is that the sounding point lurches and the tone breaks at the crossing.

---

## Pass 4 — Détaché and its family (the core stroke to PERFORM)

*(research batch 4: 2026-09-04 — Galamian, *Principles* (via secondary sources); violinonline.com
"Bow Strokes"; violinspiration.com "Détaché Bowing" & "25 techniques"; violinlounge.com "12
Types of Détaché" & "102 bowing techniques"; iclassical-academy Zlata Brouwer 24 techniques)*

### Simple détaché — already built, stays

`content/lessons/detache.mdx` is the model lesson (`CONTENT-STANDARD.md` §6): **one separate
bow per note, alternating down/up, no accent, no gap, the full written length of each note.**
Its notation is the *absence* of a slur/dot/dash/accent. Its "usual mistake" (up-bow weaker
than down-bow; bow decelerating into the direction change) is written and correct. Its `<Cite>`
is Galamian's three-factor model. **Action at build: polish only** — check labels align, press
play, confirm the barcheck passes. Possibly add one play-around (currently has a `<TryThis>`
on open D + the D-string scale; could add a two-string version to preview the crossing).

### Where in the bow simple détaché lives

Not fixed — it follows the *speed of the notes* (Galamian; Fischer "Bowing patterns"):

- **Fast notes** → **short strokes, in the middle / upper-middle third** of the bow, small
  motion from the forearm.
- **Moderate notes** → around the middle, more bow.
- **Broad, slow notes** → **more of the bow, up to whole bows** — shades into *grand détaché*.

Fischer's practice frame: play the same passage **at the frog, at the middle, at the point,
then with whole bows** — each teaches a different part of the control (Fischer, "Bowing
patterns"). A legitimate Stage-5 play-around on an open string or a one-octave scale.

### The family — RECOGNISE, not drill

Détaché is a *category*, and the sub-names are **not perfectly standardised across sources** —
Galamian's *Principles* is the reference, and even secondary sources disagree on `lancé`.
Teach it as: *"the plain détaché you're learning has expressive relatives; here they are, shown
once."* The honest core set:

| Name | What changes vs plain détaché | Sound | Where in the bow | Music |
|---|---|---|---|---|
| **Simple détaché** | nothing — the baseline | even, seamless, no accent | middle, follows note speed | anything unmarked; Bach *E major Partita*, Vivaldi |
| **Grand détaché** | a lot more bow per note, more speed + weight, energetic | big, broad, ringing, slightly separated by sheer size | whole or near-whole bows | forte passages; Mozart D-major concerto opening, Beethoven concerto |
| **Accented détaché** | a defined attack at the *start* of each stroke — "with bite" (a martelé-like pinch) or "without bite" (a speed accent) — the note still sustains after | each note "leans in" then rings | middle/upper half | marcato passages; Kreisler *Preludium and Allegro* |
| **Détaché porté** | each note gently **swelled** by *bow speed* (no weight-accent, no click), then tapered — "carried" | singing, rounded, expressive | middle, moderate bow | lyrical slow movements; dotted rhythms in an *Andante*; Brahms sonatas |
| **Détaché lancé** | a small **gap** between notes — the bow slows or briefly stops — but **unaccented**; a "darted" note. Several often fit in one bow direction | light, articulate, separated | upper half / point | light passagework; also the "dotted-note" feel |
| **(Finger détaché)** | tiny fast strokes driven by the **fingers + flexible wrist**, almost no arm | very fast, very light | tip / upper half | virtuoso fast passages — REFERENCE only |

- **Détaché porté** is the one that matters most for the reader's near future: it is the
  stroke of a singing Mozart/Baroque slow line and it is *bow-speed expression*, the exact
  thing Stage 3's `dynamics-are-a-bow-thing` promised. A play-around: a scale where each note
  starts slow-bow, blooms, tapers.
- **Détaché vs martelé:** the family shades into martelé as you add bite. The line: martelé
  **stops** between notes with a sharp consonant start (Pass 6); accented détaché **leans and
  sustains**. `lancé` sits between them.

### Build choice

Either **one lesson** ("Détaché has a family" — the table above rendered as 4–5 short notated
play-arounds, `porté` and one other getting the most attention) **or two** (keep `detache`
as-is for simple; add `the-detache-family` for the shadings). Given the user's Stage-4
feedback ("don't compress a type into a table-only card"), lean to **the family lesson with
real notated play-arounds for at least porté, grand, and accented** — the rest can be a cited
line. Decide with the user in the plan.

---

## Pass 5 — Legato and slurred bowing: one bow, many notes; dividing the bow

*(research batch 5: 2026-09-04 — Fischer *Basics* "Bowing patterns"; violinspiration.com
"Violin Legato"; violinlounge.com "Legato" & "4 tricks"; stringsmagazine.com "How to Master
the Legato Bow Stroke"; thestrad.com "Five tips for flawless legato"; dummies.com "Three notes
in a bow" / "Slurring two notes"; violinist.com "Long slurs" thread)*

### What a slur is (Stage 3 C6 already said this — Stage 5 does it)

A **slur** = "these notes fall under **one bow**, in **one direction**, with **no gap**." It
is not a phrase mark (that is a Stage 3 / Stage 5-phrasing distinction — same curved line,
different job, `phrase-mark-vs-slur` from Stage 3). The bow **moves continuously**; the **left
hand changes notes while the bow just keeps drawing sound.** That independence — right arm
doing one smooth thing, left hand doing a different busy thing — is the whole difficulty
(stringsmagazine; violinspiration).

### The core skill: dividing / distributing the bow (Capet, Pass 2)

If four notes are slurred in one bow, each gets **one quarter of the bow** — *unless* the
music says otherwise (a long note in the slur gets more, the peak gets more). Teaching
sequence, straight from the sources and ideal for this reader:

1. **Look at the hair** (not the stick) and divide it into equal parts by eye — beginners can
   put a tape mark on the stick.
2. Play the slur as **portato first** — actually *stop* the bow at each division point, so you
   hear and feel the four equal portions.
3. **Smooth it out** — remove the stops, keep the portions identical. Now it's legato.
4. Then vary it deliberately: give note 3 (the peak) more bow, the last note less — planned
   distribution.

This is `LESSONS-FROM-MOZART.md` §1's "bow distribution as a planned skill", made concrete.
The **portato-first** step is a gift for a rhythm-strong learner: it turns "smooth bowing"
into "an even rhythmic grid", which the reader can already feel.

### The smooth bow change (frog and tip)

Connecting one slurred bow to the next without a bump:

- **Keep the bow speed through the turn** (same rule as détaché, Pass 4).
- **The fingers and wrist cushion the reversal** — a passive "give" in the bow-hand fingers at
  the start of a down-bow, a slight rise of the wrist at the start of an up-bow (thestrad;
  violinlounge). Galamian's "System of Springs" (Pass 1).
- **Don't grip** — pressing the bow-hand fingers down at the change is the commonest cause of
  an accent there.

### The slur across a string change — legato lives in the left hand

The single most useful rule (dummies; violinist.com): **do not lift the finger on the old
string until the new note has already sounded.** A hair of *overlap*, not a gap. Combined
with:

- the **forearm-rotation roll** and **curved (crescent) bow path** from Pass 3,
- an even bow so the crossing doesn't coincide with a speed change,

…the crossing disappears into the line. A slurred one-octave scale (G major, first position,
crossing G→D→A strings) is the canonical Stage-5 play-around and a direct feed to Stage 4's
`arpeggios-in-real-music`.

### Long slurs — saving bow

For a long slur (many notes, or a slow tempo): **use *less* bow early than feels natural**, so
you don't run out and have to crush the last notes or change bow audibly mid-slur. Plan
backward from the end: "I must still have a third of the bow left at note 6." (violinist.com
"Long slurs" thread; Capet.) Not a big issue for Stage-5 repertoire but the *principle* is the
lesson.

### Bowing variations — the pattern drill (the tabla bridge's best moment)

**Yuri Yankelevich** drilled even his advanced Moscow Conservatoire students on **Kreutzer
Étude No. 2** with **bowing variations**: apply one slur/separate pattern to the whole passage
— 2 slurred + 2 separate; 3 slurred + 1; 1 + 3; two slurred one separate; hooked; long slur
vs short — then the next pattern, and so on. Galamian's Kreutzer edition gives 60+ patterns;
Massart's gives 150 (Fischer, "Bowing patterns"). "The simple repetition, and the variety of
note patterns covered, makes this one of the single most effective methods of practising and
improving bow control."

**For our reader this is the headline play-around of the whole stage.** A bowing pattern *is*
a rhythmic cell — a *tala*-like grouping — applied across a line. The reader's ear for
"2+2 vs 3+1 vs 3+3+2" is already strong; here it drives the bow. A one-octave G scale with
five or six patterns stacked under it is a complete, satisfying Stage-5 lesson, and it is the
clearest place in the course where the tabla background does real technical work on the bow.

### Notation reminder (from Stage 3, reused)

Slur = curved line over/under the noteheads. Slur **+ staccato dots** under it = **portato**
(Pass 7) if the dots are "soft", or **slurred (one-bow) staccato** (Pass 7) if crisp. Slur
**+ a tie** shape but between *different* pitches = still a slur; a tie joins *identical*
pitches (Stage 2 `rests-ties-and-slurs-in-the-bow`).

---

## Pass 6 — Martelé: the hammered stroke (the third core stroke to PERFORM)

*(research batch 6: 2026-09-04 — Fischer *Basics* "Martelé" (103martelé); violinmasterclass.com
(Kurt Sassmannshaus) "Martelé"; violinlounge.com "Martelé explained"; violinspiration.com
"Martelé"; stringsmagazine.com "How to Master Martelé"; thestrad.com "Staccato" & Galamian
"rhythmic staccato"; violinist.com martelé/staccato threads)*

### What it is, and how it grows out of détaché

**Martelé** (French, "hammered") is a powerful accented on-string stroke: a sharp **bite** at
the start, then the note releases and rings, then the bow **stops** — silence (or the note
ringing on) — then the next bite. Fischer's progression makes it feel inevitable and connects
it straight to Pass 4:

| Stroke | Bow speed | Weight | Start | Between notes |
|---|---|---|---|---|
| **Simple détaché** | even | even | no accent | seamless, no break |
| **Accented détaché** | fast → slow | heavy → light | a lean | connected |
| **Martelé** | fast → slow | heavy → light | a **sharp attack — the "bite"** | a **definite space** |

(Fischer 1997, "Martelé".) So the reader already has two of the three ingredients from
détaché; martelé adds the *consonant* at the front and the *rest* at the back.

### The mechanism — prepare, bite, release, stop

The defining feature: **the accent is prepared during the silence before the note.**
(Fischer; Sassmannshaus; strings magazine — all agree.)

1. **Bow on the string, stopped.** Sink weight in — "grip" the string with the hair (push the
   middle of the stick down toward the hair). You can silently wiggle the string side to side
   without sounding it — that is the string *caught*.
2. **Move — fast bow — and release the weight the instant the bow moves.** The stroke starts
   with a **"click", not a scratch.** ("Poof" is the strings-magazine word — the pressure is
   only at the very front.)
3. **The rest of the note is a fast, light, sustaining bow** — the string rings.
4. **Stop the bow on the string** at the end. During the stop, **release the hand completely**
   — then re-prepare the next bite.

**The load-bearing "usual mistake":** keeping the weight *on* for the whole stroke → a
strangled, crushed sound. Weight is a spike at the front, gone by the middle. "Let the bow do
the work." The second mistake: no real stop between notes → it turns into accented détaché,
not martelé. The third: a slow bow → martelé needs a *fast* bow (fast ≠ heavy).

### Where in the bow

**Anywhere** — "all parts of the bow, from very little bow to almost whole bows", for any note
length "in everything but very fast passages" (Fischer). Teaching default: **start in the
upper half / at the middle**, moderate length, then try it from the frog (harder — bigger
muscles, the bow's own weight) and as broad whole-bow martelé (grand martelé).

### Bow hold under load (Fischer's five points — good `bow-arm-health` / `holding-the-bow` tie)

To play a powerful stroke without strain, the hand assembles its "power" configuration:
first finger slightly further from the thumb (leverage), knuckles a little flatter, hand
pronated slightly onto the first finger, elbow slightly higher (levers arm weight in), fingers
straighten a touch on the down-bow / curve on the up-bow. Then **release it all** between
strokes. (Fischer 1997, "Martelé".) This is the concrete content of a `bow hold under load`
lesson and it links back to Stage 0's `holding-the-bow`.

### Notation

No single unique symbol. Martelé is **read from context** — often a small **wedge / arrowhead
(▾)** over the note, or an **accent (>)**, or **`sfz` / `rfz`**, plus the character of the
passage (marked, detached, forte). Stage 3 taught the reader to *read* the wedge and the
accent (`the-accent-family` / articulation movement); Stage 5 is where those become "prepare
the bite."

### Martelé vs staccato vs accent — the distinction the reader must hold

- **Accent (>)** = one note leans harder; says nothing about length or a stop.
- **Staccato (dot)** = the note is *short*; a general instruction (Pass 7). It can be gentle.
- **Martelé** = a *specific* short/marked stroke: a **hard prepared bite + a stop**. Every
  martelé note is effectively accented and detached, but not every accented or staccato note
  is martelé.
- **Galamian's link:** martelé is the basis of *slow* (solid) staccato — a row of martelés,
  eventually many in **one** bow direction (up-bow or down-bow staccato, Pass 7). "In the slow
  staccato the pressure is released between each stroke; in the fast, nervous staccato the
  pressure is constant" (Galamian, via thestrad).

### Deferred connection (note, don't teach): the vibrato accent

Fischer pairs a slow/medium martelé with a **fast–slow, wide–narrow vibrato** so the hands
"accent together". That is **Stage 7** (vibrato). Flag the link in the Stage 7 plan; Stage 5
martelé is played with a **straight** tone.

### ABC/notation-build note

abcjs renders **`x` notes** (the "grip the string silently" ghost-note in Fischer's exercise)
and **`!accent!` / wedge decorations** — so a martelé play-around can show "stopped-and-gripped
(x) → the biting note → stop" honestly in notation. Verify decoration rendering in the browser
per `RULES.md` R5.

---

## Pass 7 — The NEXT layer: staccato, portato, collé, hooked bowing, retakes

*(research batch 7: 2026-09-04 — violinspiration.com "Staccato" / "Up-bow Staccato";
violinist.com Zlata "Multiple staccato on one bow" & Buri "Collé"; thestrad.com "Mastering
up-bow and down-bow staccato" & "Teaching collé" & "Staccato — the most controversial
element"; violinonline.com; cellofun.eu "Portato, Flying Staccato and Hooked Bowings" &
"Choosing Bowings"; takeshiabo.com "Circular motion"; Galamian via secondary)*

**All of Pass 7 is RECOGNISE + one light play-around each — nothing here is a Stage-5 perform
target.** These are the strokes the reader will *meet on the page* and should be able to name
and roughly attempt. The spine of the *bow-stroke atlas* (Pass 14).

### The "same direction, some separation" spectrum

Four things live on one line — one bow, multiple notes, increasing separation and bite:

| Stroke | One bow? | Stop between? | Accent/bite? | Sound | Notation |
|---|---|---|---|---|---|
| **Legato / slur** | yes | no | no | seamless | slur |
| **Portato / louré** | yes (usually) | barely — a *pulse*, bow stays on & moving | no | connected but "breathing", notes gently re-sung | slur **+ dashes** (tenuto lines), sometimes slur + dots |
| **Hooked bowing** | yes (same direction) | **yes — a clear stop** | slight | two notes "down-down" or "up-up" with a gap | slur **+ staccato dot** on the 2nd (or both) |
| **Slurred (solid) staccato** | yes (one direction) | **yes** | **yes — bitten** | a row of little hammered notes in one bow | slur **+ dots**, many notes |

- **Portato / louré** — the expressive one, and a genuine near-term target because it *is*
  bow-speed pulsing (the `dynamics-are-a-bow-thing` idea again). Connects to Stage 3 C3
  (`portato` was read there). A slow scale, 3–4 notes per bow, each gently swelled by the bow
  (or a small index-finger pulse), no stop. Good play-around.
- **Hooked bowing** — the *practical* one. Its job: **bow economy and landing the next strong
  beat on a down-bow.** A dotted-rhythm passage (long–short–long–short) bowed ⊓⊓ VV keeps the
  bow from marching off to the tip and running out. The reader's dotted-rhythm fluency (Stage
  2) makes this easy to *feel*; the bow just has to stop cleanly. Play-around: a dotted "Ode to
  Joy" fragment, hooked.
- **Slurred / up-bow staccato** — the virtuoso one (Wieniawski, Paganini). Many crisp bitten
  notes, one bow, usually up-bow from tip toward frog, bow stopping and re-gripping between
  each. This is a **far-shore / LATER card** — name it, hear a recording, move on. (thestrad
  "the most controversial element of right-hand technique" — even pros disagree on how it
  works; two schools, "set-arm" vs "moving".)

### Solid (on-string) staccato — the plain kind

Separate-bow staccato = **shortened, detached notes, each with a small bite at the front, bow
stays on the string.** It is essentially a **short martelé** (Pass 6) — same prepare-bite-stop,
just less bow and a quicker release. Notation: **a dot** over/under the note (Stage 3 taught
reading it; Stage 5 does it). The reader can attempt this once martelé is comfortable — it is
"martelé, smaller." Distinguish from **spiccato** (Pass 8), which leaves the string.

### Collé — "pizzicato with the bow" (Galamian)

**Collé** (French "glued" — misleadingly; the point is the *release*). From the string (or a
hair above it), a **sharp short pinch driven by the bow-hand fingers**, then an immediate
stop/lift. Galamian: "a pizzicato with the bow." (violinist.com Buri; thestrad "Teaching
collé".)

- **Its real value is as a training stroke** — it builds **bow-hand finger flexibility and a
  clean string "catch"**, which feed détaché, martelé, and every off-string stroke. A short
  daily play-around (four collé notes on open D, from the fingers, bow barely moving) is worth
  more to the reader than "learning collé" as repertoire.
- Notation: usually unmarked (context) or dots; you infer it from a very short, articulate,
  light passage.

### Retakes and circular bowing (ties Stage 3 D1 + `phrases-breathe` I5)

A **retake** = lift the bow off the string, reset it to a better part of the bow, put it back
down — a **silent space "filled only with resonance"** (cellofun). Uses:

- Two notes the same direction at the same spot (an alternative to hooked bowing).
- **Getting the bow home before a phrase** — you played to the tip, the next phrase wants to
  start down-bow with lots of bow, so you retake during the breath (Pass 2's bow distribution).
- **The circular motion:** the bow tip draws a small circle to make the retake smooth —
  **counter-clockwise for a down-bow retake, clockwise for an up-bow retake** (takeshiabo;
  cellofun). Not a beginner drill, but the *image* helps: a retake is a loop, not a stab.

Stage 3's `down-bow-up-bow-and-the-retake` (D1) taught the **symbol**; here the reader
*makes* the gesture, and it becomes part of `phrases-breathe` (the bow-track phrasing lesson).

### The rule of the down-bow (needed for hooked bowing and for Pass 11)

The **strong beat wants a down-bow** — down-bow is naturally heavier (gravity + the arm), so
by long convention the first beat of a bar, and accented notes, fall on ⊓. Hooked bowings,
retakes and slur choices all exist partly to *keep the strong beats on down-bows*. This is a
Baroque/Classical orchestral convention ("la règle du tiré" / "the rule of the down-bow",
associated with Lully's band and still taught) — full treatment in Pass 11 (reading a bowing),
seeded here.

---

## Pass 8 — Off the string: spiccato, sautillé, the brush stroke, the continuum

*(research batch 8: 2026-09-04 — thestrad.com "Spiccato and sautillé — two important bow
strokes which are often confused"; violinmasterclass.com (Sassmannshaus) "Spiccato";
violinspiration.com "Spiccato"; violinlounge.com "Sautillé vs Spiccato" & "Spiccato Bowing";
virtualsheetmusic.com "William" strokes; masterclass.com "What is Spiccato"; Galamian via
secondary; justviolin.org)*

**All LATER / RECOGNISE for our reader.** The lesson's job is: name them, hear them, know why
they're not a Stage-5 target yet, and give **one honest on-ramp** so the reader isn't
mystified. No off-string stroke is a Foundation-gate requirement.

### Spiccato — the controlled bounce

The bow **leaves the string** between notes. The player gives **an individual impulse for
every single note** (Galamian) — it is a *controlled* stroke. Dropped/thrown onto the string
and lifted, note by note.

- **Where:** at or **just below the middle** of the bow (détaché lives just *above* the middle
  — a useful contrast).
- **Tempo:** slow to medium. Each note is a deliberate little arc.
- **Sound:** crisp, separated, percussive, but **each note must still *ring*** — a bounce that
  doesn't let the pitch speak is just a click ("ictus" + ring, per Sassmannshaus).
- **The on-ramp:** play a **light, fast détaché in the middle of the bow, then stop
  controlling it so hard and let the bow start to bounce on its own.** Or: hold the bow a
  centimetre above the string and let it fall into a détaché motion. Spiccato is "détaché that
  you stopped holding down."

### Sautillé — the bounce that happens *to* you

A **fast** stroke where the **springiness of the stick** does the bouncing — the player is
*not* lifting each note. The hair barely leaves the string (some say it doesn't). "The task of
jumping is left principally to the resiliency of the stick" (thestrad).

- **Where:** the **dead centre** of the bow, where the stick flexes most.
- **Tempo:** fast only — roughly **> 100–130 bpm for sixteenths**; below that it doesn't
  self-sustain and you're back to spiccato.
- **Sound:** light, brilliant, glittering, more *connected* than spiccato (the notes blur
  together a little).
- **The on-ramp:** a very fast, small, light détaché in the centre of the bow — at some tempo
  it "takes off" and bounces itself. You *find* sautillé, you don't *place* it.

### The continuum — tempo moves you along it

This is the single clearest framing (thestrad; virtualsheetmusic):

> **Slow bounce → you lift and drop each note → spiccato.**
> Speed it up. At some point you can no longer lift each note individually; **the bounce
> transfers to the flex of the stick → sautillé.**
> They are the **same gesture at different speeds**, not two unrelated tricks.

### The brush stroke — the gentle cousin (a legitimate near-term play-around)

A **brush stroke** (Suzuki term) is a broad, gentle, *barely*-off-the-string stroke — more
**horizontal than vertical**, with some length to each note, singing rather than crisp. It is
how many methods introduce the *feeling* of an off-string stroke without the difficulty of a
true bounce. A relaxed arm, a flexible hand, a little "give" at each note. **This one the
reader can actually try** — a slow scale with a light, brushy, slightly-separated stroke in
the lower-middle of the bow — as a preview of Stage 6+ spiccato, and it doubles as a
tension check.

### Notation

**No unique symbol for any of them** — you infer the stroke from **dots + tempo + style +
context** (Stage 3 taught: "dots can mean several things; the tempo and the era tell you
which"). Fast light dotted passage in a Classical rondo → spiccato/sautillé. Slow dotted
passage → on-string staccato. This ambiguity *is* the lesson's "usual mistake" beat: reading
"dot = always short and off the string."

### The far shore (name only — Pass 9)

Ricochet/jeté, flying staccato, flying spiccato, fouetté — all are **thrown or flung**
off-string strokes built on spiccato/sautillé. Pass 9 handles them as a single REFERENCE card.

---

## Pass 9 — The far shore: ricochet, flying staccato, fouetté, the Viotti stroke, chopping

*(research batch 9: 2026-09-04 — violinspiration.com "Ricochet"; violinlounge.com "102 bowing
techniques"; thestrad.com "How did Viotti influence the Tourte bow" & "Turtle Island Quartet
techniques" & "Introducing the chop"; maestronet "Viotti stroke"; wbur.org on Richard Greene;
Kreutzer/Galamian via secondary)*

**One REFERENCE card for the whole group.** Goal: the reader can **name it, recognise its
sound, and know what era/style asks for it.** None is remotely a Stage-5 target. The card's
value is (a) so a marked-up score never contains a total mystery, and (b) the *Viotti stroke*
carries a concept worth having.

| Stroke | What it is | Built on | Notation | Where you hear it |
|---|---|---|---|---|
| **Ricochet / jeté / "thrown"** | throw/drop the bow and let it **bounce 2–6 times in one direction** — gravity + the stick do the work, almost always **down-bow** | spiccato | dots under a slur, down-bow | Rossini *William Tell* gallop; Paganini; Saint-Saëns; Mendelssohn concerto finale |
| **Flying staccato / flying spiccato** | a row of short notes in **one** bow direction that **lift off** the string — controlled arm/finger bounce, not gravity | up-bow staccato + spiccato | dots under a slur, many notes | Wieniawski; virtuoso showpieces |
| **Fouetté ("whipped")** | the bow is lifted and **flung at the string** for a single sharp accented note, usually **up-bow near the tip** | between spiccato and accented détaché | an accent + context | Mendelssohn concerto, 1st mvt |
| **Viotti stroke** | *not a bounce* — a bowing **rhythm/character**: two notes on one bow, a **short weak note → a long strong accented note**, on the principle of **energy and release** (work the short note, and the long note comes out *released*, singing) | martelé / détaché | read from the rhythm + slur + accent | named for **G. B. Viotti**, whose singing style helped shape the modern **Tourte bow**; a staple of Kreutzer study |
| **Chopping** | a **percussive** vertical strike of the bow near the frog, usually on two strings — a drum "chk"; combined with pitched notes for a rhythm-guitar effect | its own thing | a dedicated notation ("The Chop Notation Project") | invented by fiddler **Richard Greene** (mid-1960s, resting a sore wrist), spread by the **Turtle Island Quartet**; jazz, pop, contemporary fiddle |

- **The one idea to lift out of this card: energy and release** (the Viotti principle). Tension
  worked *into* a short note produces a *released*, ringing long note. It is "prepare the bite,
  then let go" (martelé, Pass 6) generalised into a musical instinct, and it belongs in the
  reader's ears even though the stroke itself is years away.
- **Chopping** earns its place because the reader may well *want* it (it is all over modern
  fiddle/pop violin), and because it is a good story about technique being invented, not
  handed down. But it is genuinely a different idiom — flag it as "a door, not a step."

---

## Pass 10 — Colour strokes: tremolo, sul ponticello / sul tasto / flautando, col legno, au talon

*(research batch 10: 2026-09-04 — violinonline.com "Bowing Directions" & glossary;
violinspiration.com "Tremolo"; violinlounge.com "Tremolo"; newt.phys.unsw.edu.au "Articulation
and vibrato"; andrewhugill.com *Orchestra Manual*; simplyforstrings glossary; the PDF Part VI
§63)*

**The hook:** these are the **sounding point** (Pass 1) pushed off the ends of the ruler, plus
two "use the wood not the hair" oddities. The reader met all these *as words to read* in Stage
3 (D3, `string-and-colour-words`); Stage 5 is where they *do* them — and most are a
ten-second try, not a skill.

| Term | What you do | Sound | Notation | Relation to the 5 lanes |
|---|---|---|---|---|
| **sul ponticello** (*sul pont.*) | bow **right by the bridge**, light and fast | glassy, metallic, thin, eerie — mostly upper partials | `sul pont.` … `ord.`/`nat.` to cancel | lane 1 and beyond |
| **sul tasto** (*sul tasto* / *flautato*) | bow **over the fingerboard**, light and fast | veiled, hollow, soft | `sul tasto` … `ord.` | lane 5 and beyond |
| **flautando / flautato** | extreme sul tasto, often less hair | flute-like, breathy, no core | `flautando` | past lane 5 |
| **col legno battuto** | **tap** the string with the **wood** of the stick | dry percussive "tick", little pitch | `col legno` (`col legno battuto`) … `arco` | — (not a lane thing) |
| **col legno tratto** | **draw** the wood across the string | ghostly, scratchy pitch | `col legno tratto` | — |
| **con sordino** | fit the **mute** on the bridge | soft, dark, "muffled" — mechanically removes upper partials (like playing sul tasto — Fischer, Pass 2) | `con sord.` … `senza sord.` | — |
| **au talon / à la pointe** | play **at the frog** / **at the tip** | heavier, more bite / lighter, less | `au talon`, `à la pointe`, `punta d'arco`, `Sp.`, `Pt.` | — (a bow-*place* instruction — Pass 11) |

### Tremolo — the one the reader should really try

**Tremolo** = rapid repetition of one note (or fast alternation of two).

- **Unmeasured tremolo** — as fast as possible, no counted rhythm; a small fast wrist/forearm
  oscillation, usually in the **upper half / near the tip**, arm relaxed. Notated with **three
  slashes** through the stem (like a 32nd-note beam) or `trem.`. Sound: shimmer, tension,
  storm.
- **Measured tremolo** — the note divided into a *counted* number of repetitions (2 slashes =
  sixteenths, etc.). **This is pure rhythm** — exactly what the reader is strong at. A measured
  tremolo play-around ("this half note = eight even sixteenths, keep them dead level") is a
  legitimate Stage-5 exercise and a confidence win.
- **Usual mistake:** a stiff, clenched arm (tremolo comes from a *loose* hand) and, for
  measured tremolo, letting the subdivision get ragged.

Tremolo notation was previewed in Stage 2 (`beams-and-how-notes-group` / the note-value tree)
and Stage 3; Stage 5 is where it makes a sound.

### Build note

sul pont / sul tasto / flautando are **safe, easy, genuinely fun play-arounds** — the reader
just moves the bow and hears the sounding-point principle in the most vivid possible way. Put
one in the *sounding point* lesson (Pass 1's content) as the "hear it" beat, not only in a
separate colour lesson. col legno and con sordino: one short REFERENCE lesson or a shared card.

---

## Pass 11 — Reading a printed bowing (the make-or-break of the stage — `LESSONS-FROM-MOZART.md` §1)

*(research batch 11: 2026-09-04 — violinonline.com "Bowing Directions" & glossary;
musiciangoods.com "Violin Bowing Symbols Explained"; violinlounge.com "Up-Bow or Down-Bow? 22
rules" & "Symbols of all 24 bowing techniques"; thestrad.com "Long read: Playing Baroque and
Classical" & "From the archive: Interpreting Bach"; violinist.com "Rules of Bowing" &
"Is bowing strictly a rule"; fiddlerman.com "Interpreting Bowing Notation"; Georg Muffat 1698
on Lully's rules, via secondary)*

**This is the reason Stage 5 exists as more than a stroke list.** A real part's bowing is
*information the composer/editor is handing you* — and a beginner who can play a clean détaché
still can't play a Mozart phrase, because they can't *read the plan*. This is the Stage-5
analogue of Stage 3's `decode-a-dense-line`, and it should probably be **2–3 lessons**.

### 1 — The direction signs, and "where in the bow"

| Mark | Means |
|---|---|
| **⊓** (or `n`, or `⊓` printed above the note) | **down-bow** — pull, frog → tip. Naturally heavier (arm + gravity). |
| **V** | **up-bow** — push, tip → frog. Naturally lighter. |
| **WB** | whole bow |
| **LH** (or **½L**, **Lo½**) | **lower half** — middle to frog |
| **UH** (or **½U**, **Up½**) | **upper half** — middle to tip |
| **M** / **MB** | middle of the bow (rarely marked — it's the default) |
| **frog** / **at the frog** / **au talon** / **talon** / **nut** | at the heel, by the hand — most weight available |
| **tip** / **point** / **punta d'arco** / **Sp.** (*Spitze*, German) / **Pt.** (*punta*) | at the far end — least weight, needs the most arm |
| **a small comma / apostrophe / "lift" / a half-circle** | a **retake** — lift and reset (Pass 7) |

The reader must simply **recognise every one of these** — that is a clean RECOGNISE lesson
(quiz-friendly). `Sp.` and `Pt.` and `au talon` are the ones the K.216 edition actually uses.

### 2 — Slurs are the bowing

A slur = "one bow, this many notes, one direction". Reading a phrase, the reader asks of every
slur: **how many notes, so how do I divide the bow (Pass 5)? which direction does it start —
and does that leave me set up for the next strong beat?**

### 3 — `f`–`p` echoes need a **bow** change, not just a volume knob

The Classical "echo": a phrase at `f`, then the *same* phrase at `p`. This is the
`dynamics-are-a-bow-thing` (Stage 3 B6) promise coming due:

- `f` → faster bow, more weight, nearer the bridge (lane 2–3).
- `p` → slower bow, less weight, toward the fingerboard (lane 3–4), often less hair.
- `< >` on one long note = **messa di voce** — a bow that speeds up and slides toward the
  bridge, then reverses. The purest "dynamics = bow" exercise there is.
- **subito p** = the change is *instant* at the barline — plan the bow so you land with the
  right speed/lane already set.

### 4 — Editorial vs composer bowings (ties Stage 3 H — editions)

Editions mark the difference, and the *preface* tells you the scheme. Common conventions:

- **Solid slur = composer's; dotted / dashed slur = editor's** (very common in Bach editions).
- **Square brackets** `[ ]` around a bow mark, fingering or dynamic = editorial.
- **"Bowings above the staff are the composer's; those below are the editor's"** — the exact
  footnote in the K.216 edition (`LESSONS-FROM-MOZART.md` §3).
- **Fingerings and position numbers** (`1 2 3 4`, and roman `III` `IV` for *positions*) are
  **almost always editorial** and are **not** bowing — the numeral-tangle keystone
  (`finger-string-or-position` G3 in Stage 3; `the-first-note-of-mozart` O2 in Stage 4). One
  beat of this lesson re-nails it.

### 5 — The rule of the down-bow ("la règle du tiré")

The **strong beat wants a down-bow.** Codified for Lully's orchestra (documented by **Georg
Muffat, 1698**) and still the default instinct in Baroque/Classical playing:

- The **first beat of the bar** falls on ⊓.
- Consequence for counting: an **even** number of notes before the barline ⇒ start that group
  **down-bow**; an **odd** number ⇒ start **up-bow** — so you *arrive* on a down-bow at the
  bar. (violinlounge "22 rules".)
- When the note-count doesn't work out, you fix it with a **retake** (two down-bows in a row,
  Pass 7), a **hooked bow** (Pass 7), or by **choosing a slur** that re-aligns it.
- Modern playing bends the rule for musical reasons, but "does the strong beat land
  down-bow?" is the first question when you bow a passage yourself.

This is a **satisfying lesson for a systems-minded, rhythm-strong reader** — it is a genuine
*rule* with an audible reason, and the note-counting is arithmetic they'll enjoy.

### 6 — Bowing a passage from scratch (the capstone)

The method, as a checklist the reader can run:

1. Find the **strong beats** — they want down-bows.
2. **Count notes** between them; decide slurs, hooks, retakes so the strong beats land ⊓.
3. **Plan bow distribution** (Pass 2) — will you run out? where does each phrase start in the
   bow? where do you retake to reset?
4. Mark it in, play it slow, adjust.

**The capstone example should be the K.216 first solo phrase** — decode its printed bowing
mark by mark (direction, `Sp.`, the slurs, the `f`, the editorial fingerings), exactly the way
`decode-a-dense-line` walked a dense phrase's symbols. This pays the last of the
`LESSONS-FROM-MOZART.md` §1 debt and closes the arc that `arpeggios-in-real-music` (Stage 4
J4) and `the-first-note-of-mozart` (Stage 4 O2) began.

---

## Pass 12 — Dynamics as a bow decision (completes the Stage 3 `dynamics-are-a-bow-thing` bridge)

*(research batch 12: 2026-09-04 — Wikipedia "Messa di voce"; violinist.com "The Messa di
Voce" thread & "How do you play Dynamics"; thestrad.com "10 views on dynamics for bowed
strings"; stringsmagazine.com "4 Ways to Achieve Masterful Bowing Dynamics"; violinlounge.com
"Bow Control" exercises; Fischer & Galamian, Passes 1–2)*

Stage 3 B "Dynamics" taught the reader to *read* `pp`–`ff`, hairpins, `sf`, `subito`, and the
lesson `dynamics-are-a-bow-thing` (B6) planted the flag: **loud and soft on a violin are bow
decisions, not a knob.** Stage 5 makes them.

### The two recipes

| | louder (`→ f`) | softer (`→ p`) |
|---|---|---|
| **bow speed / amount** | faster / more bow | slower / less bow |
| **weight** | more arm weight in | lighter |
| **sounding point** | toward the **bridge** (lane 2–3) | toward the **fingerboard** (lane 3–4) |
| **hair** | flat (all the hair) | tilted (less hair) |

All four move **together**. That is the physics of Pass 1: the three controls are
interdependent, and dynamics is just "move all of them the same way at once."

### Crescendo / diminuendo — two scales, two methods

- **Across a phrase** (a hairpin over several notes / bars): **use gradually more bow** per
  note into the crescendo, gradually less into the diminuendo; weight and lane drift with it.
- **On one long note** (a hairpin on a single held note, or `< >` = **messa di voce**): you
  **can't** just speed the bow up — you'd run out of bow. Instead **keep the bow speed roughly
  even, add weight and slide toward the bridge for the crescendo, then release weight and
  slide back for the diminuendo.** (This is the nuance the sources disagree on because they're
  talking about different scales — name both.)

### Messa di voce — the purest exercise there is

**Messa di voce** ("placing of the voice") = a long crescendo then a long diminuendo **on one
note**, *nothing changing but the volume* — not the pitch, not the timbre, not (for us) any
vibrato. Do it on a whole bow, down and up, at the frog and at the tip. A player who owns messa
di voce "is permanently ready to execute a crescendo on any bow, any part of the bow, any note
length" (violinist.com). It is the graduation exercise of the whole tone thread — and it is
`< >` on one note, a mark the reader already reads.

### `sf` / `sfz` / `fp` — a bow *attack*

A sforzando is a **prepared bite** on that one note (martelé's front end, Pass 6) then an
immediate return to the prevailing dynamic. `fp` = that bite, then instantly soft. The reader
already has the gesture from martelé; here it's applied to a single marked note in a line.

### The usual mistake

Trying to crescendo a **long held note by speeding the bow up** — you arrive at the tip with
half the note left and nothing to give. The fix: on one note, crescendo with **weight + lane**,
save the bow-speed method for **across** notes.

### Subito

`subito p` / `subito f` = the change is **instant**, usually at a barline or phrase start.
Plan the bow: arrive at that point with the *new* speed, weight and lane already set — don't
"fade into" a subito.
