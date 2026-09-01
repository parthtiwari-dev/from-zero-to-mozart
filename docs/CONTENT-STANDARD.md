# Content standard — how a lesson is written

Written 2026-09-02, after the user read the live Stage 0–5 lessons and said they felt "too
short… they don't go into that much depth," and that no lesson yet "explains each and every
musical note the way a concert music sheet would." This doc is the answer to that: an honest
assessment, then the standard every lesson is held to, then the order we fix things in.

Read alongside `DECISIONS.md` (the voice/shape rules this builds on) and `DESIGN_REVIEW.md`
(the visual side of the same problem — the empty margin that should carry the lineage).

---

## 1. Honest assessment of what we have

**The curriculum is genuinely strong.** The sequence, the small steps, the ordering, the two
gates, the parallel tracks — a conservatoire teacher would nod at the map. Nothing in it is
false; the accuracy discipline has held.

**The lesson *writing* is under-taught — not merely short.** A typical lesson today states a
fact, shows one notated example, and adds one or two sentences. That is what a *reference book*
does. It is not what a teacher does in the room. A teacher walks your eye across the actual
notes, tells you what you're about to get wrong, tells you why it matters, and tells you where
the idea comes from. That connective tissue is roughly half missing across the current lessons.

**Nothing yet does the thing the user most wants** — take one real line of music and go
through it, note by note, mark by mark, the way an annotated edition or a good teacher's
marked-up part does. This is the single biggest gap.

**The lineage voice is promised and absent.** `CLAUDE.md` and `DECISIONS.md` both say lessons
name their sources ("Leopold Mozart tells his students…"). Almost no lesson actually does.

**Verdict:** as a *syllabus and a reference*, this is good — a beginner reading it will not be
misled. As a *teacher* — something you could learn from alone, without a person in the room —
it is not there yet. Call it a strong 6 out of 10 against a world-class course. The fix is not
a rewrite of the map; it's writing each lesson the way the map deserves.

---

## 2. Lesson types

Not every lesson should be the same length. Five types:

| Type | Length (floor, not target) | What it is | Examples |
|---|---|---|---|
| **Atom** | ~150–280 words | one small concrete fact in a chain of siblings | `the-g-string`, `rests`, `common-time` |
| **Concept** | ~350–750 words | one idea *with consequences* — the reader has to understand *why*, not just *that* | `why-g-major-has-one-sharp`, `detache`, `ties-and-slurs` |
| **Melody / piece** | as long as the tune needs | one real tune in our annotated line — every note labelled, **a how-to-play note per line** (bow placement, direction, part of bow, weight, what to listen for), playback. This is how *all* repertoire is presented, Twinkle to K.216. | *new* — Ode to Joy, Twinkle, the Vivaldi *Spring* theme, … (`THE-PATH.md`) |
| **Reference / atlas card** | structured, not prose-bound | a lookup entry with fixed fields | bow-stroke atlas, symbol dictionary |
| **Checkpoint** | short | a gate — "here's where you should be" + a self-check | `the-foundation-check` |

Today almost everything is written at **atom** length. The **concept** lessons are the ones
most hurt by that and get fixed first, then the **melody** lessons get built (they don't exist
yet — no repertoire has been authored).

---

## 3. The six beats

Every lesson — a 180-word atom included — moves through these, in whatever order reads
naturally. They are not headings; they are what has to be *there*.

1. **The idea.** What this is, in one plain sentence, before any jargon. (An atom can be one
   line. A concept lesson still starts here, not with a definition.)
2. **See it.** Where it lives — on the page and on the instrument. *Walk the eye across the
   actual notation*: "G sits below the staff on its own short line; A is the space just under
   the bottom line; B climbs onto that bottom line…" Not "here is an example."
3. **Hear it.** What it should sound like, and *what to listen for* — the one thing that tells
   you it's right or wrong. The one-press example belongs here.
4. **Try it.** The smallest concrete thing to do on the violin right now.
5. **The usual mistake.** What goes wrong for most beginners at exactly this point, and the
   fix. This is the teacher-in-the-room beat, and it is the one most often missing today.
6. **Where it comes from.** One or two sentences of lineage — Leopold Mozart, Auer, Flesch,
   Galamian, Suzuki, Simon Fischer, a Hahn interview — quoted or closely paraphrased, **with
   the source named**. Mandatory on concept and annotated lessons; welcome on atoms where it's
   real (not forced).

Where it applies, also state the **read vs. perform** line: which milestone this lesson serves.
Reading a trill and playing a trill are different lessons and we never blur them.

**The failure mode is stopping early, not being brief.** A 180-word atom that genuinely hits
all six beats is finished. A concept lesson under ~300 words has almost certainly skipped
beats 5 and 6 — check.

---

## 3a. Anatomy of a lesson — everything that can go in one

**This is the definitive list.** The six beats are the *spine*; these are the *parts* a lesson
is built from. Not every part in every lesson — but a concept or reading lesson that has only
prose + one example is not finished.

### Always

- **Title** — plain, concrete (`the-key-signature`, not "Understanding Key Signatures").
- **The idea, first sentence** — no jargon, before any definition (beat 1).
- **Teacher-voice prose** — second person, warm, casual, specific (§4). GFM tables where a
  table genuinely helps (a note/finger/where grid, a "you hear → means → try" grid).
- **The usual mistake** (beat 5) — spelled out with the fix. The teacher-in-the-room beat.
- **Where it comes from** (beat 6) — a `<Cite>` with a real source from
  `docs/LINEAGE-QUOTES.md`. Mandatory on concept, reading and melody lessons.

### The musical content — this is where "depth" lives

- **The teaching example** — one `<NotatedExample>` making the lesson's single point. Every
  note `{ name, string, finger }`. Fits the screen.
- **Play-around exercises — 2 to 4 per concept/skill lesson** (`RULES.md` #5). These are the
  reps. Types:
  - a **pattern** (a scale fragment, a broken chord, a finger-pattern drill on one string);
  - a **variation** — the same notes in a different rhythm, bowing, or order;
  - a **contrast** — the right version next to the wrong one (`why-g-major`'s F♯ vs F♮);
  - a **transfer** — the same idea moved to another string / key.
  Each is a labelled `<NotatedExample>` with a one-line caption saying what to do and listen
  for.
- **A real tune** where the lesson's notes allow one — even a 6-note phrase of a named melody
  beats another synthetic fragment. Full melodies are **melody lessons** (§5) in Movement F /
  `/practice`; a *taste* can live inside a skill lesson.
- **`<Diagram>`** — a labelled line drawing where a picture is needed (the instrument, a hand
  shape, the fingerboard, the bow lanes). `components/Diagram.tsx`.
- **`<TryThis>`** — the "now do this on the violin" prompt (beat 4). One concrete action,
  often silent/slow. Not a task to complete.
- **`<Quiz>`** — recognition questions (name this symbol, which finger) where checking
  understanding matters. Reveal on tap; never a gate.

### Melody / piece lessons also carry

- **A how-to-play note per line** (`RULES.md` R3): where to start the bow (frog / middle /
  tip), which direction, which part of the bow, how much weight, what to listen for. Specific.
- **Playback** with a moving cursor; adjustable tempo; optional walk mode (`AnnotatedScore`).
- **Key · lowest position · the one skill it drills · was-in-the-PDF** — metadata for the
  `/practice` filter.

### Structural

- **Margin apparatus** — the lesson locator (auto), plus `<Margin>` / `<Cite>` the author
  places. One or two per screenful.
- **`read` vs `perform`** stated where they differ (`RULES.md` #7).
- **Forward pointers** — if a symbol appears before its own lesson, "you'll meet this properly
  in Stage N" (`RULES.md` R4, `docs/NOTATION-COVERAGE.md`).
- **Prev / next** nav (auto).

### The test (§7 checklist, expanded)

A lesson is done when a beginner could work through it *alone*, at a music stand, and come out
able to do the thing — not just recognise it. If they'd still be lost, a beat or a
play-around is missing.

---

## 3b. The methods we follow — concrete, from the standard literature

Not invented here. The course's content approach is a synthesis of the established beginner
methods, chosen part by part.

### Introducing a new note — the multi-sensory sequence

Every method that works does this in order (Essential Elements, Suzuki, Doflein, all-for-strings):

1. **Hear it** — the pitch, from playback or a drone, *before* the hand moves.
2. **Place it on the instrument** — which string, which finger, the gap to its neighbours
   (whole step / half step). A fingerboard picture if it helps.
3. **See it on the staff** — its line or space, and its *interval* from the note before it.
4. **Play it** — alone, slow, checked against an open string or drone.
5. **Drill it in a finger pattern** — in a scale fragment, a broken chord, a 1↔3 / 2↔4 swap.
6. **Use it in a familiar tune** — the moment the notes allow one.

A lesson introducing a note is not done until steps 5 and 6 are in it.

### The note set expands gradually — and there's music from the start

**Doflein's model** (our closest cousin — reading + technique + theory together): chapters are
"music with five notes" → "six notes" → "eight notes", then finger patterns, then keys.
Pieces and duets appear from the first chapter, not after the technique is "done." We follow
this: **a stage adds a small set of notes/skills, and turns them into tunes immediately.**

### One teaching point per tune — Suzuki's rule

Suzuki Book 1 is 17 pieces, each with **one** point: *Twinkle* = staccato + quick finger
drops; *Lightly Row* = bow division (upper/lower half); *Song of the Wind* = the 1↔3 "jumping
finger" (the left-hand frame) + bow retakes; *Long Long Ago* = the D string via first-finger
hopping; *Perpetual Motion* = the 4th finger; *Etude* = low 2 in G. Our **melody lessons**
carry the same discipline — the how-to-play notes name the *one* thing that tune is for.

### Intonation is ear-first, not eye-first

The consensus: **hear the pitch, then place the finger** — tapes are a crutch the ear must
outgrow. Method: **sing it → play it → check it against a drone or the ringing open string**,
adjusting the finger by millimetres until the beating stops. Familiar tunes are the training
ground (you know when they're sour). Solfège / movable-do is the bridge — for this user, from
**Sa**. Ringing tones (sympathetic resonance) are a free built-in check.

### Reading is pattern-first, not name-first

Percival Hodgson's principle, now standard: read **landmarks + intervals** (steps / skips, up
/ down) — not the name of every note. **Pre-read** first: clef, key, time signature, range,
rhythm patterns, dynamics. **Rhythm before pitch** — clap and count. **Keep going** — recover
on the downbeat, never stop for one wrong note. **Read ahead** of the bow.

### The left-hand-action drill family

Concrete, from the pedagogy: hold all four fingers down, **lift and tap one at a time**,
1-2-3-4 then 4-3-2-1; **1↔3** back and forth; **2↔4** back and forth; lift 1+3 while dropping
2+4. **Keep the fingers behind the sounding note down.** Left-hand pizzicato for strength.
These are the play-arounds in any left-hand lesson.

*Sources: Doflein Method Book I (Schott); Suzuki Violin School Vol. 1 + teaching-point
guides (stringpedagogy, kiyoematsuura); Essential Elements for Strings Book 1; Simon Fischer
*Basics* / *The Violin Lesson*; ABRSM Grades 1–2 syllabus; violinist.com / thestrad.com /
violinspiration on intonation, finger action and sight-reading; Percival Hodgson on
pattern reading.*

---

## 4. Voice (unchanged, restated)

Second person, warm, casual, specific — the way a good studio teacher actually talks. No
first-person "I" persona. Contractions yes. The lineage is a *named aside* in the reader's own
flow, never a citation dump. See `DECISIONS.md` 2026-09-02.

New: keep a small **`docs/LINEAGE-QUOTES.md`** bank — verified quotes and close paraphrases
with citations, from the sources in `PLAN.md`'s pedagogical spine — so beat 6 is written from
checked material, not memory. Quotes are facts; the accuracy rule applies to them.

---

## 5. The melody lesson + `AnnotatedScore` component

**How all repertoire is presented — Twinkle to K.216. See `docs/THE-PATH.md`.** One real
tune, in our annotated line, gone through completely. Never a scanned sheet.

**Component** — `AnnotatedScore` (extends `NotatedExample`):

- Renders the tune, **scaled to fit the width** — a single line never scrolls sideways
  (`RULES.md` R5). Long tunes wrap to multiple staves; the label overlay handles each stave.
- **name / string / finger under every note** (the scaffold; may fade in later stages).
- One-press playback with a **moving cursor** on the sounding note (abcjs `TimingCallbacks`);
  adjustable tempo. Optional **walk mode** — step one note/marking at a time (opt-in).
- **A how-to-play note per line** (`RULES.md` R3): where to start the bow, direction, part of
  the bow, weight, what to listen for. Specific — *"Start at the frog, short down-bow to the
  middle; carry on in the upper half, light hand — one long breath."*
- Optional **per-note commentary** for deep studies (K.216 first system): tap a note ↔ its
  entry.
- Correct by construction: ABC + labels + notes all authored in the same MDX block.

**The melody set lives twice, authored once:** in the curriculum (woven into the stage where
its skill is taught) and on the **practice page** `/practice` — a filterable list (key ·
lowest position · skill drilled · in-the-PDF?). Release a melody the moment its notes are
covered, not only at the stage's end.

**First melodies to build (Stage 1 end-goal set — refine in the Stage 1 plan):**
Hot Cross Buns · Mary Had a Little Lamb · Twinkle (theme + one variation) · Lightly Row · Song
of the Wind · Go Tell Aunt Rhody · Merrily We Roll Along · Au Clair de la Lune · French Folk
Song · Long Long Ago · **Ode to Joy** (phrase by phrase → whole) · When the Saints. Then the
one-octave G major scale as an `AnnotatedScore`. Vivaldi *Spring* theme lands in **Stage 4**.

---

## 6. Order of work — the campaign

**Decision (2026-09-02, user): no new stages, no new features, until every one of the ~90
built lessons meets `RULES.md` 1–7.** The rewrite should have happened before the first draft;
it didn't, so it happens now, as one focused campaign. It runs research-first.

**Done so far:**
- ✔ This standard + `RULES.md` + the margin components (`<Margin>`, `<Cite>`) + the gutter.
- ✔ Four reference lessons rewritten: `meet-the-violin`, `the-g-string`,
  `why-g-major-has-one-sharp`, `detache`. `the-g-string` is the model for a *reading* lesson
  (ladder → skips → two real tunes, every note name+string+finger).

**Working mode (user, 2026-09-02):**
- **Plan each stage with the user before writing it.** Produce the research + a lesson-by-lesson
  list (what each lesson teaches, its examples, its tune/pattern, its lineage cite) as a short
  doc; the user approves or adjusts; *then* write.
- **Tunes: Claude picks and notates them** from the approved bank in `PLAN.md` Part B
  (Tier 0/1 first), in ABC, matched to the notes each lesson teaches. The user reviews the
  result. Real scores from the user only for bigger pieces later (Vivaldi, Mozart, anything
  not a simple PD tune).
- The four already-reworked lessons (`meet-the-violin`, `the-g-string`, `why-g-major-has-one-
  sharp`, `detache`) **stay as they are** and get their final polish when the campaign reaches
  their stage — no separate pass.

**The campaign, per stage:**

1. **Research + plan.** Collect: verified facts + ≥2 sources; the lineage quote(s) for each
   concept lesson (→ `docs/LINEAGE-QUOTES.md`); the tunes/patterns that fit each lesson's notes
   (name + string + finger worked out); fingering decisions. Write it up as the stage plan.
   **Send to the user for approval.**
2. **Rewrite the stage** to the six beats + rules 1–7. Every pitched example fully labelled;
   every concept lesson 2–4 examples + a real tune/pattern.
3. **Verify** every example (render + play + labels aligned) and every fact against its sources.
4. Next stage. **Order: 0 → 1 → 2 → 3 → 4 → 5.**
5. `AnnotatedScore` + the first annotated lines come **after** Stages 0–5 are all at standard.

**Next action:** the Stage 0 research + plan, for approval.

**Audit — what each built lesson needs** (from a 2026-09-02 scan; 61 `NotatedExample`s across
~60 lessons):

- **~30 lessons have a pitched example with NO per-note labels** — every one needs full
  name/string/finger labels added (or, if genuinely rhythm-only, a caption saying so). Worst
  offenders to fix early: `the-staff`, `the-treble-clef`, `lines-and-spaces` (Stage 1 core
  reading with unlabelled examples), `dynamics`, `articulation`, `tempo-words`, `ornaments`
  (Stage 3 — still pitched), all the Stage 5 stroke lessons (`martele`, `staccato`,
  `spiccato`, `one-long-tone`, `string-crossings`, …).
- **~9 lessons have labels but no `string`** — `cadences`, `intervals`, `triads`,
  `major-and-minor`, `what-a-scale-is`, `counting-and-konnakol`, `sa-and-the-letter-names`,
  `lines-and-spaces` — add `string` to every label.
- **~29 lessons (mostly Stage 0) have no example** — most are fine (setup/posture), but each
  gets the six-beats treatment and a lineage cite where it's a concept.
- **All ~90 lessons are currently too thin** on the six beats (esp. beats 5 and 6) and on
  "enough to actually play" (rule 5).

Everything after that — Stages 2–5 retrofit, Stages 6–9, the full annotated repertoire — comes
once the pattern is confirmed. This phase is **Phase 1.5** in `PLAN.md`.

---

## 6a. Authoring the margin and the examples (mechanics)

- **One or two margin notes per screenful, not more.** They float in an 11rem gutter; if you
  stack three or four with little prose between them they run past the text. A point that needs
  a paragraph goes in the body — the margin is for a short aside, a citation, or a figure
  pointer.
- **`<Cite source="…">…</Cite>`** puts beat 6 in the margin: source name (small caps) + one or
  two sentences. **`<Margin>…</Margin>`** is the "watch for this" / cross-reference aside.
- **Every `NotatedExample` label carries `{ name, string, finger }` — always** (`RULES.md`
  R1). Single string or not; worksheet or not. No shortcuts.
- **Keep a teaching example short** — a handful of notes makes its one point. A tune runs
  long, and that's fine; it scales to fit and (later) wraps to multiple staves like a printed
  sheet. Never a horizontal scrollbar (`RULES.md` R5).

## 7. "Done to standard" — the review checklist

- [ ] Opens with the plain-language idea; no jargon in the first sentence.
- [ ] Walks the eye across the *actual* notation, not just "here's an example".
- [ ] Says what to listen for.
- [ ] Gives one concrete thing to try on the violin now.
- [ ] Names the usual beginner mistake and the fix.
- [ ] One attributed line of lineage (concept + annotated lessons; optional on atoms).
- [ ] `read` vs `perform` stated where relevant.
- [ ] Every music fact checked against ≥ 2 sources / a syllabus.
- [ ] Every notated example verified: render + press play + labels aligned with the notes.
- [ ] Still passes the hands-free test: readable from a music stand, one control to press.
