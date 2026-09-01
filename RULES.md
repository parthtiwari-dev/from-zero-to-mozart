# RULES

Hard, non-negotiable rules for this repo. If a change breaks one of these, the change is
wrong — not the rule. Longer reasoning lives in `docs/DECISIONS.md`, `docs/CONTENT-STANDARD.md`
and `docs/DESIGN_LOCK.md`; this file is the short list you check every time.

---

## Notated examples

1. **Every pitched example labels every note: name + string + finger. No exceptions.**
   Not "the first note," not "when it changes strings," not "the finger is enough." A beginner
   who cannot read music has to be able to decode *every single note* — which letter, which
   string, which finger — from the label under it. `<NotatedExample labels={[...]} />` with a
   `{ name, string, finger }` object for **each** note.
   - Single-string example? Still label the string on every note. Repetition is the point.
   - Worksheet? Use `reveal="hidden"` — the labels still exist, they're just hidden until
     tapped.
   - The only examples without per-note string+finger are **rhythm-only** examples (no pitch,
     or a single repeated pitch you clap): the caption must then say so ("clap this — don't
     play it" or "all on the open D string").

2. **The ABC is the source of truth.** Pitch, rhythm and playback all come from the ABC
   string. Labels must match the ABC exactly. Verify **at desktop *and* phone width** (≤ 360px):
   render + press play + check every notehead is visible, the whole line fits without a
   horizontal scrollbar (R5), and every label sits centred under its note. Most notation bugs
   only show on mobile.

3. **Every fingering is the first-position beginner default, and contextual fingerings say
   so.** Never assert "the one correct fingering." When a note has more than one first-position
   home, give the standard one and mention the alternative.

## Content depth

4. **Every lesson hits the six beats** (`docs/CONTENT-STANDARD.md`): idea → see it → hear it →
   try it → the usual mistake → where it comes from. A lesson that only *states* its fact is
   not done.

5. **A lesson has enough to actually play.** Not one four-note fragment. The teaching example,
   then several variations/patterns/contrasts, then a real short tune that uses the idea — all
   fully labeled. Reading and technique lessons especially.

6. **Lineage attribution is mandatory on concept and annotated-line lessons** — one `<Cite>`
   with a real, checked source.

7. **`read` and `perform` are always separate milestones.** Reading a trill and playing a
   trill are different lessons; never blur them.

## Repertoire & notation (see `docs/THE-PATH.md`)

R1. **Never display a scanned or PDF-style sheet — not once.** Every melody, from Twinkle to
   K.216, is authored in our **annotated note-line** (staff + name/string/finger per note +
   playback). A supplied score is a *source to transcribe*, never a thing to embed.

R2. **Every stage ends at real music** — 10–30 melodies tied to its skills, authored once and
   shown both in the curriculum and on the practice page. Release melodies mid-stage where the
   notes are already covered.

R3. **Every melody line carries a how-to-play note** — where to start the bow, direction, part
   of the bow, weight, what to listen for. Specific, not generic.

R4. **Every notation symbol, note-value and marking is taught somewhere.** Keep
   `docs/NOTATION-COVERAGE.md` current. A symbol may appear before its lesson only with a
   "proper lesson in Stage N" pointer — never unexplained forever.

R5. **A single line of notation fits the screen** — no horizontal scroll for one line. It
   scales to the container width; the reader scrolls the *page*, never the staff.

## Accuracy

8. **Every music fact is verified against ≥ 2 sources (a syllabus for theory) before it
   ships.** The user cannot catch a wrong fact. A plausible-sounding wrong fact is worse than
   no lesson.

9. **Quotes are facts.** A lineage quote or close paraphrase is checked like any other claim
   and attributed to a real, named source.

## Interaction & voice

10. **Nothing gates progress.** No streaks, no locked lessons, no "answer to continue," no XP.

11. **No voice / narration / TTS / auto-scroll.** Written prose only.

12. **One primary control per screen** — the play button. Reveals are one tap. Hands stay on
    the violin.

13. **Teacher voice**: second person, warm, plain, casual. No first-person "I" persona. The
    lineage is a named aside, never a citation dump.

## Design

14. **Direction A holds** (`docs/DESIGN_LOCK.md`): warm ivory / sepia / one oxblood accent; the
    scholarly left margin; near-zero motion; the notation well and the margin are the only two
    recognisable shapes. Check the banned list before adding anything.

## Process

15. **Don't move forward while the built lessons are below standard.** New stages wait until
    every existing lesson meets rules 1–7.

16. **Keep the map honest.** `docs/PDF-MAP.md` stays current ("nothing lost"). This file and
    `docs/CONTENT-STANDARD.md` stay current when a rule changes.
