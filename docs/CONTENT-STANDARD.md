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

Not every lesson should be the same length. Four types:

| Type | Length (floor, not target) | What it is | Examples |
|---|---|---|---|
| **Atom** | ~150–280 words | one small concrete fact in a chain of siblings | `the-g-string`, `rests`, `common-time` |
| **Concept** | ~350–750 words | one idea *with consequences* — the reader has to understand *why*, not just *that* | `why-g-major-has-one-sharp`, `detache`, `ties-and-slurs`, `the-key-signature` |
| **Annotated line** | as long as the music needs (600–1500+) | one real piece of music, gone through completely — every note, every mark | *new* — see §5 |
| **Reference / atlas card** | structured, not prose-bound | a lookup entry with fixed fields | bow-stroke atlas, symbol dictionary |
| **Checkpoint** | short | a gate — "here's where you should be" + a self-check | `the-foundation-check` |

Today almost everything is written at **atom** length. The **concept** lessons are the ones
most hurt by that and get fixed first.

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

## 5. The annotated-line lesson + component

The lesson type that "explains every note the way a concert sheet would." One real, mostly
public-domain line of music, gone through completely.

**Component** — extend `NotatedExample` into (or add alongside it) `AnnotatedScore`:

- Renders one real line (abcjs), every note individually addressable.
- Below the staff, a **commentary list** — one entry per note or per small group:
  *"Bar 1, notes 1–2 — E, E. Third finger on the D string, played twice. Same bow length for
  both; don't let the second one shrink."* Tapping an entry highlights its note(s); tapping a
  note jumps to its entry.
- One-press playback with a **moving cursor** on the note being sounded (abcjs
  `TimingCallbacks`).
- Optional **walk mode**: step forward one note / one marking at a time. Opt-in — the default
  is still one play button and nothing else to press.
- Correct by construction: the commentary is authored next to the ABC in the same MDX block,
  so it can't drift from the notes.

**First four annotated lines to build:**

1. **Ode to Joy** (the course's own starting point) — first position, D and A strings.
2. **The one-octave G major scale** — the thing every other scale lesson refers back to.
3. **A Suzuki Book 1 phrase** — e.g. the opening of *Lightly Row* or *Song of the Wind*
   (sequence referenced, line re-notated ourselves — see `PLAN.md` Part D).
4. Later, in the Mozart module: **the first system of K.216**, every mark categorised.

---

## 6. Order of work (the sequencing decision)

**Do not rewrite all 90 lessons in one pass.** Prove the pattern, let the user feel it, then
decide the cadence.

1. ~~Write this standard.~~ ✔ (this doc)
2. Build `AnnotatedScore` (or extend `NotatedExample`) + the moving-cursor playback.
3. Start `docs/LINEAGE-QUOTES.md`.
4. Rewrite to standard: **all of Stage 0 (10)** + the **Stage 1 reading spine** —
   `the-staff`, `the-treble-clef`, `lines-and-spaces`, `ledger-lines`, `the-g-string`,
   `the-d-string`, `the-a-string`, `the-e-string`, `reading-g-major`. (~19 lessons.)
5. Build annotated lines **1 and 2** (Ode to Joy, G-major scale).
6. **User reviews on the live preview** and says whether it now feels like a teacher.
7. Decide: continue the retrofit stage by stage, or adjust the standard first.

Everything after that — Stages 2–5 retrofit, Stages 6–9, the full annotated repertoire — comes
once the pattern is confirmed. This phase is **Phase 1.5** in `PLAN.md`.

---

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
