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

## 6a. Authoring the margin and the examples (learned while building the pattern)

- **One or two margin notes per screenful, not more.** They float in a 10rem gutter; if you
  stack three or four with little prose between them they run past the text and leave a gap.
  If a point needs a paragraph, put it in the body — the margin is for a short aside, a
  citation, or a figure pointer.
- **`<Cite source="…">…</Cite>`** puts beat 6 in the margin: source name (small caps) + one or
  two sentences. **`<Margin>…</Margin>`** is the "watch for this" / cross-reference aside.
- **Single-string `NotatedExample`s: don't repeat the string under every note.** Say "All on
  the G string" in the caption and give each label just `{name, finger}`. Repeating "G string"
  eight times crowds the labels. Use per-note `string` only when the example actually crosses
  strings.
- Examples with **more than ~6 labelled notes** scroll horizontally inside the well by design
  (they keep full size rather than compressing) — keep teaching examples shorter than that
  where you can.

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
