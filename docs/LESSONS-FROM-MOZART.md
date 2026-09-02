# What the K.216 run taught us

We tried to rebuild the Mozart K.216 solo part as our annotated line (see
`docs/stage-plans/mozart-k216.md` for where that got to). It's **deferred** — it's Phase 3
material and it's far too hard for the user, who has just learned *Ode to Joy*. But the attempt
exposed real holes in how the curriculum currently plans to teach the middle stages. Fold this
into the Stage 2–7 plans before writing them.

---

## 1. Bowing is a whole language, not a footnote

Every phrase of K.216 carries bowing information — some printed, most implied:

- **Where in the bow**: frog / middle / tip. The edition abbreviates: `Sp.` = *Spitze*, `Pt.` =
  *punta* — both mean "at the tip"; `au talon` = at the frog.
- **Direction**: down-bow ⊓ / up-bow V, and the *retakes* (lift and reset).
- **How much bow** — bow distribution, planned in advance so you don't run out.
- **Slurs** = which notes fall under one bow.
- **f–p echoes** need a bow-*speed* change, not just a weight change (messa di voce, subito p).

A student who only knows "détaché exists" cannot play a Mozart phrase.

→ **Stage 5 (the bow)** must teach: bow *distribution* as a planned skill (not just stroke
names); **reading a printed bowing**; the bow-position vocabulary (frog/middle/tip/Sp./Pt./au
talon); slurs *as bowing*; f–p / messa di voce control.
→ **Every repertoire lesson from here** spells out the bowing **phrase by phrase** — bow part,
direction, amount, the slurs, what to listen for — the way the Twinkle / Ode lessons started to.

## 2. Chords and double stops need real theory *and* real technique

K.216's solo entrance is a rolled three-note chord (D–B–G). To read and play that you need:

- **What a chord is** — triad = 1-3-5, inversions, the added 7th; diatonic chords I–vii°;
  "in G major the chords are…". This is more than a Stage 4 aside.
- **How it's spelled** — stacked noteheads, one stem; rolled-chord squiggle; divisi.
- **How it's played on the violin** — you can't sustain three strings (the bridge is curved):
  roll it bottom-to-top, or break it; which two notes to actually hold; the strong downbeat.
- **When composers write them** — cadential punctuation, arrival points.

→ **Stage 4** needs a proper harmony thread: triads, inversions, primary chords I–IV–V,
dominant 7th, cadences.
→ **Stage 3** needs the *notation* of chords / rolled chords / divisi.
→ **Stage 6** needs the double-stop / chord *technique* ladder (open+open → open+stopped →
stopped+stopped; 3rds, 6ths, octaves).

## 3. A real page is dense — the "complex musical syllables"

K.216 **page 1 alone** had: grace notes (acciaccatura vs appoggiatura), **trills** (start on
the note or the note above? Baroque vs Classical), slurs, staccato dots, dotted rhythms,
`f` / `p` / `fp`, hairpins, rehearsal letters, `Tutti` / `Solo`, **editorial fingerings**
(1 2 3 4, and `III` / `IV` for *positions* — which are **not** finger numbers), `Sp.`,
bracketed dynamics (the editor's, not Mozart's), and a footnote that "bowings above the staff
are Mozart's, those below are the editor's."

→ **Stage 3 (score symbols) is the make-or-break stage.** Its plan must be *thorough* — not
"here are twelve symbols," but the full working vocabulary, each lesson at Stage-0 depth:
   - ornaments **with Baroque vs Classical realisation** (does the trill start on the note or
     above? does it take an accidental?)
   - the **editorial-vs-composer** distinction (brackets, the edition's preface)
   - **position numbers (roman) ≠ finger numbers**
   - the **bow-word glossary** (arco, pizz., col legno, sul G, sul pont., sul tasto, Sp., au
     talon, …)
   - articulation *stacking* (staccato + slur = portato; accent + staccato; …)

## 4. "Reading it" and "playing it the way it's played" are far apart

A perfect transcription still doesn't give you the **style**: Classical restraint, where to
breathe, vibrato as an *ornament* not a constant, the messa di voce on a long note, not
over-Romanticising Mozart. That's Stage 7 (expression) + the K.216 module's listening study,
and it deserves real weight — it's not a coda.

## 5. Practical rules for building lessons right now

- **Repertoire lessons spell out the bowing phrase by phrase** — not one generic line.
- **Melody lessons present the *complete* tune**, not two or three phrases. (The current
  Stage 1 tunes are partial — a known gap; see `CLAUDE.md`.)
- When a piece uses a symbol/technique not yet taught, that's the curriculum telling you it has
  a hole — log it in `docs/NOTATION-COVERAGE.md` and make the teaching lesson deep enough.
- **Keep a machine-readable source (MusicXML) for every real piece.** Transcribing dense music
  by eye from a scan is unreliable and the accuracy rule (RULES.md #8) forbids guessing. The
  K.216 `.mxl` + a `music21` → our-notation converter is the pattern; the converter script is
  in the session scratchpad and should be committed to `tools/` when the module resumes.
