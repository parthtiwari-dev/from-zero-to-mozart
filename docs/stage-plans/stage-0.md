# Stage 0 — Setup: research + plan

**Status: written (2026-09-02).** All 11 lessons rewritten to the six beats + `RULES.md`;
`<Diagram>` component + 4 SVGs built; open-string audio examples added to tuning / bow
geography / first sound. Verified: examples render with aligned labels and zero overlap,
diagrams render and fit the well, at desktop and ~330px. **The detuned "beating" demo landed
as a drone-based TryThis** — a labelled double-stop doesn't fit the label system cleanly and
the drone is the better tool for hearing beats anyway. **Awaiting the user's live review.**

Stage 0 is "before a note" — the instrument, the body, the hold, tuning, the first sound, and
how to practise. It has almost no notated music today; the plan adds **real open-string audio
examples** (tuning, bow geography, first sound) so even the setup stage has something you press
play on and do.

Sources consulted are listed per lesson; the lineage quotes are in `docs/LINEAGE-QUOTES.md`.

---

## What Stage 0 needs that doesn't exist yet

**A small diagram component.** Three or four lessons genuinely need a labelled picture — you
can't learn the parts of the violin, or a bow hold, from prose alone. Proposal:

- A `<Diagram>` component: a hand-drawn **inline SVG** (1.25px stroke, `currentColor`, no
  photos, matches `DESIGN_LOCK`) with the same HTML label overlay the notation uses.
- Four drawings: **violin (front, named parts)**, **the bow (named parts)**, **the bow hold**
  (hand on frog), **the five sounding-point lanes** (bridge → fingerboard).
- ~half a day of work. Alternative: skip it and lean on "look at your own instrument" (more
  Leopold Mozart, less helpful for a total beginner). **Your call** — flagged again at the end.

Everything else (open-string `NotatedExample`s, `<Margin>`, `<Cite>`) already exists.

---

## The eleven lessons

Order = teaching order. "Track" is the parallel thread (`curriculum.ts`).

### 0.1 — How this course works  ·  track: setup  ·  *NEW*

**Teaches.** Absorbs the PDF front matter (p1, p4, p6, p7, p193). What you're building: three
separate layers — **read** (name every note, rhythm and mark), **play** (your body executes
it), **interpret** (you decide what's musical). You reach "read" long before "play", and
that's the plan. *"Your first victory is: look at a note, know what it is, know where it lives
on the violin, know how long it lasts, and explain the marks around it."* **Nothing gates
you** — no streaks, no locked lessons, no quiz to pass; worksheets are offered, answers are one
tap away, you set the pace. **The four tags:** NOW (build it now) / NEXT (after first-position
reading is comfortable) / LATER (real for Mozart, premature today) / REFERENCE (know the word,
don't drill it). **The scaffold:** early examples show name + string + finger under every note;
later, the cues drop away one at a time until you're reading plain notation — try first, then
reveal. **Contextual fingering:** where a note has more than one first-position home, we give
the beginner default and say it's contextual. **How the players you admire actually learned**
(documented, for Hilary Hahn): started with Suzuki and the Twinkle Variations — she's said
every note she plays began there; listened to recordings daily; five years with Klara
Berkovich on bowing, double stops, vibrato and *phrasing from the start*; lots of Wohlfahrt
études. We borrow the **principles** — listen daily, master small motions, revisit
fundamentals forever, add technique in layers, keep the phrasing musical from day one — not a
prodigy's schedule.

- **The usual mistake:** treating it as a book to binge; skipping the "try it on the violin"
  step; chasing the next lesson instead of making the current motion easy; not listening to
  recordings.
- **Where it comes from:** Suzuki (mother-tongue: listen, small motions, a real tune early);
  Hilary Hahn's documented start; the read/play/interpret split is the PDF's closing principle.
- **Example:** none. Keep it short — orientation, not a task.

Sources: PDF front matter p1–8, p192–193; violinist.com & Strings Magazine (Hahn's Suzuki
start, Berkovich, #100DaysOfPractice); Suzuki method literature.

### 0.2 — Meet the violin  ·  track: setup  ·  *already rewritten, light polish only*

Covers: every named part of the violin (scroll, pegs, pegbox, nut, neck, fingerboard, bridge,
f-holes, sound post, tailpiece, fine tuners) and the bow (frog, tip, screw, hair, rosin); the
loosen-the-bow-every-time habit.

Polish when we reach it: "≈150 horsehairs" → **"150–200 hairs"** (sources disagree: 150–200 /
160–180); add the **violin + bow `<Diagram>`s** if we build the component; the Leopold Mozart
`<Cite>` stays.

Sources: Violinspiration (bow parts, violin parts), CodaBow blog, Wikipedia (violin). Lineage:
Leopold Mozart opens the treatise with the instrument before any playing.

---

### 0.3 — Gear, and looking after it  ·  track: setup

**Teaches.** The small kit: violin + bow, **rosin**, case, a soft cloth, a tuner or tuner app,
a music stand; a shoulder rest and spare strings. **Sizing** — a full-size (4/4) violin for an
adult; the arm-length check. **Rosin** — dried tree sap; a new or freshly-cleaned bow makes
almost no sound until rosined; apply with ~5–10 light strokes along the hair, more only when
the grip fades. **Care** — wipe rosin dust off the strings and body with a dry cloth after
every session (left to harden it damages the varnish); never touch the bow hair with your
fingers (skin oil kills the grip in a stripe); keep the violin out of heat, direct sun and
very dry air (cracks) — a case humidifier in dry winters. **Strings** last ~6–12 months or
until they sound dull, feel rough, or start to unravel.

- **The usual mistake:** over-rosining → a gritty, crunchy sound and white dust everywhere;
  leaving rosin dust to bake onto the varnish; storing the violin in a hot car.
- **Where it comes from:** workshop / luthier lore; Leopold Mozart's Ch. I on choosing and
  keeping the instrument. *(Cite optional — practical lesson.)*
- **Example:** none. A short "what you need" checklist table.

Sources: Violinspiration (rosin, chinrest, care), CodaBow (frog, anatomy), Strings Magazine
(care), givensviolins, yourmusicsupply.

---

### 0.4 — How you stand  ·  track: setup

**Teaches.** A balanced, tall, unlocked stance — everything else is built on it. Feet about
shoulder-width; weight even across both feet (some players carry a touch more on the left, the
violin side); **knees soft, never locked**; spine tall; shoulders level and **down**, not
hunched or hiked; head balanced over the spine, not craned forward. **Keep breathing** —
holding your breath is a tension tell. **Sitting** (for practice or orchestra): forward on the
chair, both feet flat, same tall spine, don't lean back. **Rest position** — violin down at
your side between attempts, not clamped up the whole session. Why: tension in the legs and
feet travels up the body and into the sound.

- **The usual mistake:** locked knees; hiking the left shoulder up to meet the violin; head
  craned down toward the chin rest; holding the breath.
- **Where it comes from:** Kató Havas's *New Approach* (balance, release of tension) and the
  Alexander-technique influence in modern string teaching; Leopold Mozart on standing straight
  and steady.
- **Example:** none. A short posture checklist (mirror check).

Sources: Violinspiration (posture), The Strad ("8 ways to improve posture"), justviolin.org,
violinist.com (posture checklist), bodymap.org, violinonline (playing position).

---

### 0.5 — Holding the violin  ·  track: setup

**Teaches.** The violin is **balanced between the collarbone and the gentle weight of the
head** — not gripped, and **not held up by the left hand**. It sits on the collarbone, in
against the neck; the **jaw** (it's really a jaw rest, not a chin rest) goes on the chin rest,
just left of the tailpiece; a relaxed neck lets the head's weight settle and hold it. Scroll
roughly level (or a hair below), pointing a little left of straight ahead. **The "let go"
test:** set it up, take the left hand right away for a few seconds — it should stay put. If it
droops, the setup needs adjusting *before* you go on. **Shoulder rest** — fills the gap
between collarbone and jaw so you don't lift the shoulder or clamp the head; fit it so the
violin still rests on the collarbone (it's not there to add height for a long neck at the cost
of contact). **Chin rest** — sets the jaw-to-collarbone distance and protects the varnish;
centre- or side-mounted. Don't clamp the jaw down hard — that causes neck and jaw pain and
locks the left hand.

- **The usual mistake:** propping the violin up with the left hand (then the hand can't move);
  clamping the jaw (pain); shoulder hiked up; scroll drooping toward the floor.
- **Where it comes from:** Leopold Mozart, Ch. II — his two ways of holding the violin, and
  the "against the neck, under the chin" method; the modern "let go and it stays" test
  (Wikipedia, violinist.com); the shoulder-rest-optional lineage (Heifetz, Milstein, Menuhin
  played without one — noted, not prescribed).
- **Example:** none. `<Diagram>` of the hold (front view) if we build the component.

Sources: violinist.com ("How to Hold a Violin"), Wikipedia (violin technique), Strings
Magazine (chin rest, shoulder rest), Metzler Violins (fitting guide), bodymap.org.

---

### 0.6 — The left-hand frame  ·  track: left-hand

**Teaches.** The **frame** — one stable hand shape that all four fingers work from, so the
hand doesn't re-form for every note. **Thumb:** rests lightly on the *side* of the neck, about
opposite the 1st/2nd finger, relaxed — **not** gripping, **not** pressing sideways (that
triggers counter-pressure from the fingers = squeezing). The neck rests in the crook where the
thumb meets the base of the first finger, but *lightly* — the base of the first finger stays
in gentle contact with the neck. **Base knuckles:** roughly parallel to the neck, not
collapsed flat. **Fingers:** curved, dropping onto their **tips** (near the nail) like small
hammers; each hovers close to its note even when it's not playing. **Wrist:** straight-ish, or
gently in — **never collapsed** (bulging toward you); a straight wrist frees the fingers and
guards against strain. The frame is the same on every string — only the elbow swings under to
carry the fingers over the lower strings.

- **The usual mistake:** squeezing the neck between thumb and first finger; collapsing the
  wrist toward you; flat fingers instead of on the tips; the thumb creeping too far under the
  neck.
- **Where it comes from:** Simon Fischer, *Basics* — "the single most important factor in
  positioning the left hand is which part of the fingertip contacts the string," and keeping
  the thumb as light as possible; Galamian on the left-hand frame and fingers kept over the
  string.
- **Example:** none playable yet (no notes until Stage 1). A **silent** try-this: form the
  frame, tap 1-2-3-4 lightly on the A string keeping the ones behind down, then release the
  whole hand and shake out. `<Diagram>` of the frame optional.

Sources: The Strad ("Setting up the left hand"), simonfischeronline ("Positioning the left
hand" PDF), Violinspiration (left-hand position), violinist.com threads.

---

### 0.7 — Holding the bow  ·  track: bow

**Teaches.** Build the hold finger by finger (on a pencil first, then the bow, at the frog).
**Thumb:** always **bent**, never locked straight; tip in the little nook where the stick
meets the frog, slightly under. **Middle two fingers (2 & 3):** draped over the stick around
the middle joint, opposite the thumb — they + the thumb form the **ring** that actually holds
the bow. **Index (1st):** slightly apart from the middle finger, contacting the stick nearer
its side / second joint — your **leverage** finger for arm weight. **Pinky (4th):** **curved**,
on **top** of the stick near the screw — it balances the bow, most of all at the frog, and it
must stay curved (a straight pinky = tension). Whole hand soft and springy; knuckles not
white. The default taught here is the **Franco-Belgian / Galamian** hold; **Russian** (more
index, flatter wrist, heavier feel) and **German** (older) are named as alternatives you may
meet.

- **The usual mistake:** locked straight thumb; collapsed / straight pinky; gripping until the
  knuckles whiten; the index finger bearing down hard.
- **Where it comes from:** Galamian's modified Franco-Belgian hold — the standard through his
  lineage (Capet → Galamian → DeLay → Perlman, Zukerman); Carl Flesch names the "old German,
  newer Franco-Belgian, newest Russian" holds.
- **Example:** none playable. Silent try-this: build on a pencil, then the bow; lift/lower the
  bow using only the fingers, pinky staying curved; rock the tip up and down. `<Diagram>` of
  the bow hold **strongly wanted** here.

Sources: Violinspiration (bow holds), violinist.com ("How to Hold the Bow"), sagemusic,
sarahwallinhuff (bowhold comparison), MasterClass (Russian), CSUN (Franco-Belgian thesis).

---

### 0.8 — Tuning  ·  track: ear  ·  *first real ear-training moment*

**Teaches.** The four strings — **G3, D4, A4, E5** — a stack of **perfect fifths**. Standard
pitch: **A = 440 Hz** (the A next to the E). **Order: tune A first** to a reference (a tuner
app, a piano, or the practice-bar **drone**), then **D, then G, then E** — each a fifth from
the last; this order keeps the string tension balanced. **Two tuners on the instrument:**
**pegs** for big moves (friction-held — turn *slowly*, and **push the peg gently in** toward
the pegbox as you turn so it grips and doesn't slip straight back; always tune *up* to the
note from just below; stop the instant you reach it; if the pitch is dropping you're turning
the wrong way); **fine tuners** on the tailpiece for tiny moves (turn in / clockwise = up; if
one won't turn any further, unscrew it most of the way and take up the slack with the peg).
Beginners: get it roughly right with the pegs once (or have someone do it), then live on the
fine tuners for a while. **Hearing "in tune":** play two strings a fifth apart together — in
tune, they lock into one clean, ringing sound; slightly out, you hear a **wobble / beating**
that slows and vanishes as you close in. Check the tuning **every time** before you play.

- **The usual mistake:** yanking a peg past the note and snapping the string; forcing a
  fully-screwed-in fine tuner; tuning out of order / E first; not pushing the peg in, so it
  slips back down.
- **Where it comes from:** A = 440 as the modern international standard (ISO 16); tuning in
  fifths is built into the violin — Leopold Mozart, Ch. I.
- **Example — `<NotatedExample>`:** the four open strings as whole notes, `G, D A e` in K:C,
  labelled `{G, open} {D, open} {A, open} {E, open}`. Press play to hear each string's pitch.
  *(Possibly a second tiny example: A + E together, in tune vs. a few cents out, to hear the
  beating — needs checking that abcjs can voice a deliberately-out-of-tune note; if not, this
  is a "do it with the drone" try-this instead.)*

Sources: violinonline (tuning), Violinspiration ("tune with pegs", "as a beginner"),
get-tuned, gear4music, fisherviolins, violinist.com (fifths, ringing tones), angelesacademy.

---

### 0.9 — The geography of the bow  ·  track: bow

**Teaches.** The **map** of the bow: **frog** (heel, by your hand), **tip** (point),
**middle**; the **lower half** (frog→middle) and **upper half** (middle→tip); "at the frog",
"at the tip", "whole bow", "half bow". **Direction:** **down-bow** (frog→tip, symbol **⊓** —
like a staple) and **up-bow** (tip→frog, symbol **V**). Down-bow is naturally heavier and
stronger (moving away, gravity helping); up-bow naturally lighter — much of bow technique is
evening the two out. The bow travels in a **lane parallel to the bridge** — "the highway" —
between bridge and fingerboard; it never climbs onto the fingerboard or skids up the bridge.
The **contact point / sounding point:** Galamian and Flesch divide the bridge-to-fingerboard
space into **five lanes** — **1 at the bridge** (loudest, most core), **5 at the fingerboard**
(softest, flaut(whisper)) — each about the width of the bow hair. For now: aim for the middle
lane (**3**) and a straight bow. **String levels:** each string sits at a different height for
the bow arm; the whole arm rises and falls (elbow leading) to change strings — the bow hold
stays put.

- **The usual mistake:** the bow skidding toward the fingerboard as it nears the tip (the arm
  collapses); "climbing the bridge" near the frog; changing the bow *hold* to change strings
  instead of moving the whole arm.
- **Where it comes from:** Galamian, *Principles of Violin Playing and Teaching* — tone =
  **speed × weight × sounding point**, and the five numbered contact points; Flesch's earlier
  division; the Baroque **"rule of the down-bow"** (first beat of the bar = down-bow).
- **Example — `<NotatedExample>`:** open D whole notes with bow marks, `!downbow! D4 |
  !upbow! D4 |` in K:C, labelled `{D, open} {D, open}`. Press play. Plus a `<Diagram>` of the
  bow's parts and (ideally) the **five lanes** between bridge and fingerboard.

Sources: violinist.com (Galamian points of contact; Brian Lewis pedagogy class),
simonfischeronline (bow/arm PDF), Violinspiration ("how to bow straight", bowing exercises),
violinlounge (contact points), the "20 on the highway" exercise.

---

### 0.10 — Your first sound  ·  track: bow  ·  *the payoff of Stage 0*

**Teaches.** Put it together: stand, hold the violin, hold the bow, set the **flat** hair on
the open **D** string in the **middle lane**, at the **middle of the bow**, and **draw it** —
slowly. **Weight, not pressure:** let the natural weight of the arm sink through a soft hand
into the string; don't press. Flat hair (all of it) for the fullest starting sound. Keep the
bow **straight** (parallel to the bridge). A good open-string sound is **even, ringing, no
scratch**. The three dials that shape it — **bow speed, arm weight, contact point** — change
one, hear it move. **First sounds and their fixes:** *scratch / crunch* = too much weight, too
little speed, or too near the bridge → lighten, move a little toward the fingerboard, keep the
bow moving; *whistle / glassy* = too little weight, too much speed, or too near the
fingerboard → let a little arm weight in, slow down; *thin, surface-y* = not enough weight, or
the bow tilted so only some hair touches → flatten the hair, let the arm settle. Do all four
open strings, whole slow bows. Then a first pattern: **D D | A A | D D** — crossing with the
whole arm.

- **The usual mistake:** pressing instead of letting weight in (choked, scratchy); racing the
  bow (thin, whistly); a crooked bow (the sound wanders); a tilted bow (weak surface sound);
  holding the breath / hunching.
- **Where it comes from:** Leopold Mozart — *"A beginner should always play firmly, with all
  his strength, energetically and sonorously — never weakly and timidly,"* and *"only with time
  and patience will the harshness of the sound disappear";* Simon Fischer / Galamian — the
  open, resonant tone rests first on **bow speed** and a freely vibrating string.
- **Example — `<NotatedExample>`:** the four open strings, whole notes, `!downbow!` /
  `!upbow!` alternating, labelled `{string, open}`; press play for the target sound. Then the
  **D–A–D** crossing pattern (`M:2/4 L:1/2`, `D A | D2`), labelled, so there's a real thing to
  loop.

Sources: Violinspiration (bowing exercises, "how to bow straight"), simonfischeronline
(weight vs. pressure; speed-first tone), violinlab (tone production), maiteiglesias (Leopold
Mozart quotes).

---

### 0.11 — How to practise  ·  track: setup

**Teaches.** The **practice loop** for anything: (1) know **what** you're fixing — *one*
thing (the bow staying straight; the frame not squeezing; a clean string crossing); (2) know
**why** it's off and what "right" feels and sounds like; (3) do it **slowly**, in the
**smallest useful chunk**; (4) **repeat** until it's easy, then a little faster; (5) **rest** —
shake out. **Slow practice:** only as fast as you can do it correctly — speed is a by-product
of accuracy, never the target. **Short and frequent beats long and rare:** for a beginner,
**~15–20 minutes, once or (better) 2–3 times a day, every day** — consistency builds the
physical habit; long sessions build tension and bad form. **No pain, ever** — aching,
pinching or tingling means stop, shake out, check the setup; mild muscle tiredness is fine,
sharp or nerve pain is not. Warm up gently (open strings, slow). End on something that went
well. Violin in **rest position** between attempts. **#100DaysOfPractice** (Hilary Hahn) —
show up daily *for the process, not the result*. And the oldest rule (Leopold Mozart): sort
out the **rhythm** — clap it, count it — before the violin comes up.

- **The usual mistake:** playing tunes start-to-finish again and again (that rehearses the
  mistakes); practising fast before it's clean; practising through pain; marathon sessions;
  no plan.
- **Where it comes from:** Leopold Mozart (beat the rhythm before taking up the violin);
  Hilary Hahn, #100DaysOfPractice — *"for the process rather than the results"*, *"light,
  meandering practice"*; the deliberate-practice research; Simon Fischer, *Practice*.
- **Example:** reuse the **D–A–D** crossing from 0.9 as the worked example of one loop (name
  what's hard → 5× slow → rest). No new notation.

Sources: JohnsonString ("how much to practice"), ViolinLab (practice guide), Violinspiration
(practice routine), violinist.com (slow practice; "100 Days of Practice with Hilary Hahn"),
Strings Magazine (Hahn 100 days), austinkleon.

---

## PDF-MAP check

Stage 0 covers PDF **Part I** (orientation, setup, the instrument, tuning, first sound,
practice). Nothing in Part I is dropped; `how-you-stand` + `holding-the-violin` split the
PDF's posture section, and `the-geography-of-the-bow` + `your-first-sound` split its "first
bowing" section. `docs/PDF-MAP.md` to be re-confirmed line-by-line when writing.

## Decisions (approved 2026-09-02)

1. **Build the `<Diagram>` component — all four drawings** (violin front, bow, bow hold, the
   five bow lanes). Hand-drawn inline SVG, 1.25px stroke, `currentColor`, `DESIGN_LOCK`-
   compliant, reusing the notation label overlay. Reused later for the fingerboard.
2. **The out-of-tune "beating" demo in 0.7 — attempt it as an audio example.** If abcjs can't
   voice a deliberately-detuned note cleanly, fall back to a drone-based try-this.
3. Lesson list approved as written.

## Build order for the write session

1. `<Diagram>` component + the four SVGs (violin, bow, bow-hold, bow-lanes).
2. The three open-string `NotatedExample`s (four strings; bow-direction marks; D–A–D crossing)
   + test the detuned-fifths example for 0.7.
3. Write the ten lessons 0.1 → 0.10 to the six beats + `RULES.md`, pulling citations from
   `LINEAGE-QUOTES.md`.
4. Verify every example and diagram at desktop **and** phone width; verify every fact against
   its sources.
5. Re-confirm `docs/PDF-MAP.md` Part I line by line.
6. User reviews Stage 0 live → then Stage 1 research + plan.
