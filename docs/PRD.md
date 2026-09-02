# PRD — what we're building, and what "done" means

The doc that sits above everything. `THE-PATH.md` describes the *journey*, `PLAN.md` the
*phasing*, `CURRICULUM.md` the *content map*. This one answers the question those three
assume: **what is the actual objective, and how do we know we've hit it?**

Written 2026-09-02 to settle a drift the user named directly: *"what we want to achieve —
is it to play Mozart, or is it to play violin and learn music? From my side it's the latter.
From yours I don't really know."*

---

## 1. The product, in one sentence

A calm, single-purpose website that teaches **one adult beginner** to read, play, hear and
understand music on the violin — the way a serious studio teacher would, in a real
pedagogical lineage — to the point where they can pick up an unfamiliar score and make
something honest of it on their own.

## 2. Who it's for

One person. Adult. Tabla / North-Indian-classical background — **rhythm is a strength,
Western pitch / harmony / staff-reading / ear-for-pitch are the growth axis.** Approaches
music as a system; wants to understand *why*, not just *that*. Learns from a fixed path with
set practice, the way Suzuki or a conservatoire student does. Cannot yet catch a wrong music
fact, so accuracy is not negotiable. Full profile: `docs/RESEARCH.md`.

## 3. The objective — the thing this doc exists to pin down

**The goal is independent musicianship on the violin. Not a specific piece.**

Concretely, the end state is a person who can:

- **Read** — open any score in first-to-fifth position and name every note, string, finger,
  rhythm, symbol and marking, at sight, without help.
- **Play** — get through that score slowly, in tune, in time, with the bowing and
  articulation the page asks for. "Read" and "play" are tracked as **separate milestones**
  everywhere; you reach "read" years before "play" on hard music, and that's fine.
- **Hear** — follow what's happening: the key, the harmony under a melody, whether a note is
  sharp or flat, where a phrase is going. This is the weakest axis today and gets the biggest
  investment.
- **Understand** — know *why* the music is written the way it is: the scale it's built on, the
  form, the era's conventions, what the composer is asking for.
- **Choose** — once the above are in place, make their own interpretive decisions and defend
  them — tempo, phrasing, ornament realisation, tone colour.

If the user reaches this and never performs K.216, the project **succeeded**. If they can
grind out K.216 by rote but can't sight-read a new piece or explain what they're playing,
the project **failed**.

### Where Mozart K.216 actually sits

K.216 is the **north star** — the named summit that makes the path concrete and keeps the
motivation alive. It's musically deep (diploma-level phrasing and taste) but technically
reachable (upper first position through fifth, some shifting, Classical bowing). It's the
piece that *proves* the objective has been met, because playing it honestly requires every
one of the five capabilities above.

It is **not the deliverable.** The deep K.216 module (Phase 3) is a capstone and a listening
study, and it stays deferred until the user is ready — possibly indefinitely. The project is
not measured by whether that module ships.

The repo is named `from-zero-to-mozart` because it's a good name, not because Mozart is the
point.

## 4. Success criteria (testable)

The course is doing its job when, at each gate:

| Gate | The user can… |
|---|---|
| **Foundation** (end Stage 5) | read & play any first-position tune in G/D/A/C at sight; keep steady time; produce an even, controlled tone with the core bow strokes; hear when a note is out and fix it; play ~30 real melodies |
| **Intermediate** (end Stage 8) | shift cleanly to 3rd (and touch 2nd/4th/5th); vibrate on a sustained note; sight-read a Grade-4-ish line cold; take dictation of a short phrase; play student concertos and Baroque sonatas musically |
| **The end state** (Stage 9+) | open Bach, Vivaldi, Kreisler, Mozart — read it completely, play it slowly and truthfully, say what it's doing and what they'd do with it |

Per-stage "you can play…" targets: `THE-PATH.md` §6. Every stage ends at **real music**
(`RULES.md` R2).

## 5. Non-goals

- **Not "get to K.216 fast."** Speed to any one piece is never a design input. Depth is.
- **Not a performance coach.** We teach to "read it, and play it slowly and honestly." Concert
  polish, competition tempo, and stage craft are out of scope.
- **Not a platform / app / dashboard.** No accounts, no streaks, no gamification, no social,
  no "practice tracker" beyond a `localStorage` convenience. (`RULES.md` 10, 12, 14.)
- **Not comprehensive for its own sake.** The repertoire bank, the reference libraries and the
  "20 famous works" thread exist to *build the five capabilities* — not to be an encyclopedia.
  If a piece or a topic doesn't teach something the objective needs, it doesn't earn a lesson.
- **Not for anyone but this user.** Every decision optimises for one person. No "what if a
  beginner without a rhythm background…" — that's not who this is.
- **Not multi-instrument, not multi-tradition.** Western classical violin, taught in its own
  lineage. The tabla background is used as a *bridge* into that, not as a second subject.

## 6. What this clarification changes (priorities, from here on)

Now that the objective is "musicianship, not the piece," some weights shift:

1. **The ear-training track is core, not a side-quest.** Stage 8's ear gym, and the seeds
   planted earlier (movable-Sa, ringing tones, "hear a wrong note", functional listening),
   are load-bearing. Budget real lesson count for them.
2. **"Understand what you're playing" runs through every repertoire lesson** — not just
   "here's the tune", but what key, what's the harmony doing, why this bowing, what era-
   convention applies. The `AnnotatedScore` / annotated-line format is the vehicle.
3. **Sight-reading is a trained skill with its own stage** (Stage 8) and its own thread from
   Stage 1 (scaffold removal). It is not assumed to "just happen" from playing tunes.
4. **Repertoire is chosen for what it teaches**, then for motivation, then for the K.216 path
   — in that order. A tune that drills a needed skill beats a tune that's one step closer to
   Mozart.
5. **The K.216 module can stay deferred forever without the project being incomplete.** Ship
   the capability; the piece is optional.
6. **"Reading" milestones are celebrated on their own.** The user should feel the win of *"I
   can now read this whole page"* long before they can play it — that's real progress toward
   the objective, and the course should mark it.

## 7. The quality bar (non-negotiable)

Every lesson **teaches** its one idea — it does not merely state it. The test: a beginner
could work through the lesson alone, at a music stand, and come out able to *do* the thing,
not just recognise it.

- **The six beats** (`CONTENT-STANDARD.md` §3): idea → see it → hear it → try it → the usual
  mistake → where it comes from. All six present, in whatever order reads naturally.
- **2–4 play-arounds per concept/skill lesson** (`RULES.md` #5) — pattern, variation,
  contrast, transfer — then a real tune or pattern to play. Not one four-note fragment.
- **Every pitched notated example labels every note: name + string + finger** (`RULES.md`
  #1). No exceptions.
- **Every music fact verified against ≥2 sources** (`RULES.md` #8). The user can't catch the
  next mistake.
- **A cited lineage aside** on concept and annotated lessons (`RULES.md` #6).
- **Every stage ends at real music**; every melody is the *complete* tune with a per-line
  how-to-play note (`RULES.md` R2, R3).

This bar has been missed twice on a first pass (Stage 1, then Stage 2) and corrected each
time. `RULES.md` #15: **no new stages while built lessons are below this bar.**

## 8. Constraints

- **The hard rules live in `RULES.md`.** Check every change against them.
- **Deep content, minimal code** (`RULES.md` #17). Extend what exists; static over dynamic;
  no speculative features; if a build is getting complicated, it's probably wrong.
- **One primary control per screen** — the play button. No voice / TTS / auto-scroll. Nothing
  gates progress. Hands stay on the violin.
- **Teacher's voice**: second person, warm, plain, casual; a real lineage; no first-person
  "I" persona.
- **Next.js 16 + MDX, fully static, Vercel.** No database, no accounts.
- **Design is locked** — Direction A, `DESIGN_LOCK.md`.

## 9. How progress is really measured

Not by lesson count or pages shipped. By: **can the user, with the course and a violin and no
other help, actually acquire the capability that stage is for?** That's the only metric. Every
audit and review asks that question of every lesson.

---

*This doc changes rarely. When the objective or the success criteria shift, update here first,
then propagate to `THE-PATH.md` / `PLAN.md` / `CURRICULUM.md`.*
