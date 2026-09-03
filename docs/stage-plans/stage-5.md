# Stage 5 — The bow: the plan

Built from `docs/stage-plans/stage-5-research.md` (15 research passes + a re-verification pass).
Read that for the *why* behind every lesson; this doc is the **build list** — what ships, in
what order, wired how.

Held against `docs/PRD.md` §3 + §4 + §6 + §7, `docs/CONTENT-STANDARD.md` (six beats, lesson
types), `RULES.md`, **`docs/LESSONS-FROM-MOZART.md` §1**, `docs/THE-PATH.md` §6. Read
`CLAUDE.md` → `## Mistakes to avoid` **before writing a single lesson**, and run
`python tools/abc-barcheck.py` before every commit.

---

## What this stage is for

Stage 5 is the **last stage of v1** and the gate to everything after it (`PRD.md` §4, the
**Foundation gate**). It is where the course stops being about *the page* and becomes about
*the sound the reader makes*.

- **Stages 0–3 built *read*.** Stage 3 taught the reader to *read* every bow mark — `⊓`/`V`,
  slurs, dots, hairpins, `arco`/`pizz.`, `sul G` — and deferred *doing* them. Two Stage-3
  `bow`-track lessons (`dynamics-are-a-bow-thing` 3b B6, `a-slur-is-one-bow` 3a C6) carry the
  read→perform bridge explicitly and **hand off here.** Stage 5 collects that debt.
- **Stage 4 built the foundation of *hear* and *understand*.** Stage 5 turns the bow into the
  tool that plays what you hear and understand — and takes the first real run at the operative
  goal (`PRD.md` §3): **"if I hear it, I can play it."**

**The K.216 bowing debt** (`LESSONS-FROM-MOZART.md` §1). Every phrase of K.216 carries bowing
information — most of it implied. A student who only knows "détaché exists" cannot play a
Mozart phrase. Stage 5 owns: **bow distribution as a planned skill**; **reading a printed
bowing** (direction, `Sp.`/`Pt.`/`au talon`, slur groups, `f`–`p` as a bow change, editorial
vs composer); **slurs as bowing**; **`f`–`p` / messa di voce as a bow decision**. The capstone
lesson decodes the K.216 first solo phrase's bowing, closing the arc that Stage 4's
`arpeggios-in-real-music` (J4) and `the-first-note-of-mozart` (O2) began.

**Scope note.** Stage 5 adds **no new positions** (Stage 6), **no vibrato** (Stage 7 — and the
order is deliberate: you cannot hear your tone honestly through vibrato), **no new left-hand
technique**. All of it is first position, keys **G / D / A / C** (+ E minor). The new work is
entirely the **right arm**: how it makes a tone, the strokes it plays, how it reads and plans
a bowing. `read` / `perform` / `recognise` stay separate milestones (`RULES.md` #7) and every
lesson says which it asks for.

---

## The decisions (Claude's call — the user delegated them, 2026-09-04)

The user (2026-09-04): *"idk these answers. I am trying to learn violin, not just play Mozart.
End goal: if I hear something, I should be able to play it on my own. From now, this is the
goal to achieve… plan stage 5 fully, write that doc, and then we implement it."* So the open
questions from the research doc are resolved here, through the **play-by-ear lens**, and using
the standing Stage-3/4 steering (*keep it all, structure it so nothing feels like filler; no
dropping; REFERENCE material as cards not padded lessons; don't over-engineer*).

1. **The PERFORM set = détaché · legato · martelé · one clean string crossing · a controlled
   sustained tone (son filé).** Everything off the string — spiccato, sautillé, the far shore
   — is **RECOGNISE + an honest on-ramp**, never a target. Rationale: `PRD.md` §4's Foundation
   gate asks for "an even, controlled tone with the **core** bow strokes"; the off-string
   strokes need Stage-6/7 security and months of bounce work, and making them gate targets
   would break "nothing gates progress." The **brush stroke** gets a real play-around as the
   spiccato preview.

2. **"Reading a printed bowing" gets 4 lessons** (`where-in-the-bow` · `the-rule-of-the-down-bow`
   · `reading-a-bowing` · `bowing-a-passage-yourself`). It is the stage's signature skill
   (`LESSONS-FROM-MOZART.md` §1, "the make-or-break bit"), the Stage-5 analogue of
   `decode-a-dense-line`, and the systems-minded, rhythm-strong reader will *enjoy* the
   rule-of-the-down-bow arithmetic. Not compressed into one lesson.

3. **The play-by-ear thread runs through the stage.** Each of 5a / 5b / 5c ends with a
   **"play it back"** beat (hear a short phrase → find it on the violin unaided), there is one
   dedicated `ear`-track lesson `finding-a-tune-by-ear` (5c), and the **Foundation gate gains
   an ear-to-instrument check**. Stage 5 is *not* the ear gym (that's Stage 8) — its ear
   contribution is: intonation self-correction under the bow, bowing the phrasing you hear,
   and reinforcing the **reverse fingerboard map** (given a pitch, know the string+finger
   without hunting) in every stroke lesson.

4. **Two gaps the research found are folded in as real lessons** (not cards): `pizzicato`
   (right hand — a distinct skill, real repertoire value, uses the reader's finger dexterity)
   and `rolling-a-chord-with-the-bow` (the right-arm half of the K.216 entrance — the
   satisfying "you can now play the first gesture of Mozart" moment, tied to Stage 4 O2).

5. **Minimal merging** (per the "no dropping" steering) — only the safe folds: the brush
   stroke → into `spiccato`; the far shore (ricochet/fouetté/Viotti/chop) → one REFERENCE
   card; the colour strokes → one REFERENCE card; the atlas → ~18 real cards on one page.
   Everything else stays a distinct lesson.

6. **The stage reads in three parts** — a divider in `/learn`, **one `stage: 5`** throughout
   (minimal code, exactly as 3a/3b and 4a/4b/4c):
   - **5a — Tone: how the bow makes a sound** (Movements A–C, 9 lessons)
   - **5b — The strokes** (Movements D–H, 17 lessons)
   - **5c — Reading & shaping with the bow, and the gate** (Movements I–L + P, 10 + repertoire)

**Net count: ~36 concept/skill lessons + 5 repertoire ≈ 41 lessons.** In the Stage 3 (46) /
Stage 4 (70) range; smaller than Stage 4 because this is a *doing* stage, not the course's
widest concept block.

---

## The 14 existing skeleton slugs — fate

All in `lib/curriculum.ts` (`published: P`), all thin first-draft except `detache`.

| Existing slug | Becomes | |
|---|---|---|
| `how-the-bow-makes-sound` | **A1** | rewrite |
| `one-long-tone` | **A2** | rewrite (absorbs "keeping the bow straight" + tilt) |
| `string-crossings` | **D4** | rewrite |
| `detache` | **D1** | **polish only** (already at `CONTENT-STANDARD.md` §6 bar) |
| `legato-and-slurs` | **D3** | rewrite |
| `martele` | **E1** | rewrite |
| `staccato` | **E2** | rewrite |
| `portato-and-colle` | **E3** | rewrite |
| `spiccato` | **F1** | rewrite (absorbs the brush stroke) |
| `sautille-and-beyond` | **F2 `sautille-and-the-continuum`** | rewrite + rename |
| `bow-effects` | **G1 `colour-strokes`** | rewrite + rename → REFERENCE card |
| `the-bow-stroke-atlas` | **H3** | rewrite → ~18 real cards |
| `reading-bowings` | **splits → I1 + I3** | rewrite + split (I2, I4 new) |
| `the-foundation-check` | **P-end** | rewrite → self-audit |

**New slugs:** `the-bow-change`, `speed-weight-and-sounding-point`, `speed-not-pressure`,
`the-five-lanes`, `planning-the-bow`, `the-flexible-bow-hand`, `how-to-practise-a-bow-stroke`,
`the-detache-family`, `slurred-crossings-and-bariolage`, `hooked-bowing-and-retakes`,
`the-far-shore`, `tremolo`, `pizzicato`, `rolling-a-chord-with-the-bow`, `where-in-the-bow`,
`the-rule-of-the-down-bow`, `bowing-a-passage-yourself`, `dynamics-with-the-bow`,
`messa-di-voce`, `phrasing-with-the-bow`, `finding-a-tune-by-ear`,
`the-baroque-bow-and-the-modern-bow`, + Movement P slugs.

`sautille-and-beyond.mdx`, `bow-effects.mdx`, `reading-bowings.mdx` are **renamed** (new slug,
old MDX deleted). `detache` keeps its slug.

---

## 5a — Tone: how the bow makes a sound

*Every 5a lesson is `bow` track, tag **NOW**. This is the foundation — a controlled sustained
tone is a Foundation-gate criterion.*

### Movement A — The sustained note

| # | Slug | Teaches | Cite |
|---|---|---|---|
| A1 | `how-the-bow-makes-sound` | *(rewrite)* rosined hair **catches** the string, drags it sideways, it **snaps back**, the hair catches it again — the catch–pull–release cycle, 440×/sec for A, **is** the note (Helmholtz motion, stick + slip); the whole string vibrates bridge-to-finger; **amplitude = carrying power**; pitch never changes with loudness; a note = a fundamental + **upper partials** (Stage 4's `the-harmonic-series` reused — Stage 5 *controls* them) | Helmholtz, *On the Sensations of Tone* (1863); Fischer, *Basics* "Tone production" |
| A2 | `one-long-tone` | *(rewrite)* **son filé** — one note, one whole bow, frog to tip, dead even (volume, colour, speed); then the up-bow; then slower. What it trains: **levelling the bow's own weight** (frog heavy, tip light — "equal pressure gives unequal pressure on the string"), a constant sounding point, a constant speed, the ear. **Keeping the bow straight** ("the highway", the mirror check) and **tilt** (flat = full, tilted = soft) as sections | Flesch, *The Art of Violin Playing* (1924) — "a place of honor… the most tiresome item"; Galamian 1962, 57; Rolland's "positive/negative pressure" |
| A3 | `the-bow-change` | *(new)* the reversal at frog and tip must be **invisible** — no gap (a break in the sound), no bump (an unwanted accent). Keep the speed through the turn; the **fingers and wrist cushion** the reversal (the arm turns the corner before the hand); match the weight across the change | Galamian's "System of Springs" (1962, 58) |

### Movement B — The three controls

| # | Slug | Teaches | Cite |
|---|---|---|---|
| B1 | `speed-weight-and-sounding-point` | *(new)* the three interdependent controls: **bow speed** (= how much bow = the *volume/expression* control), **bow weight** (= the *colour* control, up to a limit), **sounding point** (bridge ↔ fingerboard). Move one and at least one other must move. The rules: nearer the bridge → slower + heavier; faster bow → more weight; the E string takes a nearer sounding point than the G | Flesch 1924 / Rolland 1960 / Galamian 1962 / Fischer 1997 — all agree; McLeod (2019) Table 1 |
| B2 | `speed-not-pressure` | *(new)* the load-bearing principle: pressing *down* fights the string's *sideways* swing ("driving the sound toward your feet"); use **speed**, feel like you're **lifting the sound out** — even in the loudest playing. The **two failure sounds**: **whistle/glassy** (too light / too fast / too far from the bridge → add a hair of weight, or slow down, or move in) and **crunch/scrape** (too heavy / too slow / too near the bridge → less weight, or faster, or move out). Fischer's diagnostic: **listen for the ring**, home in on where the string sings widest | Fischer, *Basics* "Tone production" ×2; Schelleng (1973) — the wedge that narrows toward the bridge |
| B3 | `the-five-lanes` | *(new)* the sounding point numbered **1 (at the bridge) → 5 (over the fingerboard)**; near the bridge = bright, focused, powerful, needs care; near the fingerboard = soft, veiled, flute-like (*flautando*); **hear it** — sweep the bow from lane 1 to lane 5 on one open string (this is `sul ponticello` → `sul tasto`, which Stage 3 D3 taught you to *read*). Rolland's oboe / clarinet / flute "zones". "Ride the hair against the sounding point like a surfer against a wall of water" | Galamian 1962, 56 ("sounding point" = the *ideal* contact point); Flesch / Rolland 1960 — the wind-instrument timbres; Fischer, *Basics* "Son filé" |

### Movement C — Planning and holding

| # | Slug | Teaches | Cite |
|---|---|---|---|
| C1 | `planning-the-bow` | *(new)* **bow distribution** — a phrase is *n* notes and you have *one* bow-length; decide **in advance** how much bow each note gets (long note more, the peak more, the tail less), and *where in the bow* each falls so you **don't run out**. The method: divide the hair by eye → play it **portato first** (stop at each division) → smooth it out keeping the portions. **Retakes** to reset. This is `LESSONS-FROM-MOZART.md` §1's "planned skill" | Lucien Capet — bow distribution as the founding skill; Galamian, *Contemporary Violin Technique* (1966) |
| C2 | `the-flexible-bow-hand` | *(new)* the hold **under load** — Stage 0 built a *resting* hold; sinking weight for a `f`, preparing a martelé bite, absorbing a bow change all lock up a stiff hand. **The string carries some of the bow's weight** — the hand only balances and steers. The pieces: **thumb** (bent, soft, the counter-pressure pivot), **little finger** (curved, the counter-weight, lifts the tip), **index** (where weight enters), **middle two** (the stable contact). The **tension audit** (a recurring beat): hang the hand limp, carry that in; tap each finger while playing; check the shoulder | Galamian's "System of Springs"; Rolland 1960, 8; strings magazine / proviolin on relaxed holds; Stage 0 `holding-the-bow` |
| C3 | `how-to-practise-a-bow-stroke` | *(new)* mirrors Stage 4's `how-to-practise-a-scale`: **why** first (a bow stroke is a *gesture you're grooving*), then the routine — slow, **from the string**, one element at a time; son filé daily (30–60 s, metronome 60); the **bowing-variation drill** (see D3); **stop the moment the hand tightens** ("a tense détaché only teaches tension" — already in `detache.mdx`) | Fischer, *Practice* & *Basics* "Son filé" / "Bowing patterns"; Galamian's rhythm method; the PDF Part VI intro |

---

## 5b — The strokes

### Movement D — The core strokes to PERFORM

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| D1 | `detache` | bow | NOW | *(polish only — the model lesson)* one separate bow per note, alternating, no accent, no gap, the full written length; notation = the *absence* of a slur/dot/dash/accent; where it lives follows note speed (fast → short, upper-middle; broad → whole bows). Usual mistake (weak up-bow; decel into the turn) already written | Galamian 1962 — the three-factor model |
| D2 | `the-detache-family` | bow | NEXT | *(new)* détaché is a *category*; names vary across sources (Galamian is the reference). Notated play-arounds for: **grand détaché** (whole bows, big), **accented détaché** (a defined attack, note sustains), **détaché porté** (each note *swelled by bow speed* — no click — the singing stroke of a Mozart/Baroque slow line, the `dynamics-are-a-bow-thing` idea), **détaché lancé** (a small unaccented gap). Détaché→martelé is a spectrum: add bite and you get martelé | Galamian, *Principles*; violinlounge "12 Types of Détaché" (with the caveat that terms vary) |
| D3 | `legato-and-slurs` | bow | NOW | *(rewrite)* a slur = **one bow, many notes, one direction, no gap**; the bow **moves continuously while the left hand changes notes** — that independence is the difficulty. **Dividing the bow** (portato-first then smooth). The **smooth bow change** (fingers/wrist cushion, don't grip). The **slur across a string change**: *don't lift the finger on the old string until the new note has sounded* (Leopold Mozart). The **bowing-variation drill** (2+2, 3+1, hooked, long-slur — Yankelevich on Kreutzer No. 2) as the headline play-around — a bowing pattern is like a rhythmic cell the reader can already feel | Leopold Mozart, *Violinschule* (1756) — "leave the finger down"; Fischer, *Basics* "Bowing patterns"; Capet |
| D4 | `string-crossings` | bow | NOW | *(rewrite)* each string is an **arm level** (G high → E low) + the **in-between level** (hair on two strings); the **upper arm leads**, **forearm rotation** (like a doorknob) does the fine work; **cross early** — the bow starts toward the new string *while still playing the old* (technical timing before musical timing); the practice trick: play the note before and the note after as a **double stop**. Crossing under a slur = the **crescent bow path** | Fischer, *Basics* "Smooth string crossings" & "Forearm rotation"; thestrad "6 ways" / "Two simple exercises" |
| D5 | `slurred-crossings-and-bariolage` | bow | NEXT | *(new)* the harder crossing — *mid-stroke*, one direction (what makes a slurred arpeggio hard); the roll, the curved path. **Bariolage** = rapid rocking between adjacent strings, one usually open, exploiting timbre (Bach *E-major Preludio*; Vivaldi). Repertoire is LATER, but the **rocking motion** is a Stage-5 play-around (slow open-D ↔ stopped-A rock) — the clearest feel of forearm-rotation crossing, and an on-ramp to Baroque style | Wikipedia "Bariolage"; violinspiration; Drew Lecher "Crescent Bow Path" |

### Movement E — Martelé and the marked strokes

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| E1 | `martele` | bow | NOW | *(rewrite)* the third core stroke. Grows out of accented détaché (fast→slow, heavy→light) + **a sharp prepared bite** + **a stop**. The mechanism: bow stopped, sink weight, **grip the string** (silently wiggle it); **move — fast bow — release the weight the instant it moves** ("a click, not a scratch"); the note rings; **stop**, release the hand, re-prepare. Usual mistake: keeping the weight on → strangled tone. Notation: read from context — wedge / accent / `sfz` | Fischer, *Basics* "Martelé"; Sassmannshaus (violinmasterclass); Galamian — martelé as the basis of slow staccato |
| E2 | `staccato` | bow | NEXT | *(rewrite)* solid on-string staccato = **a short martelé** (prepare, bite, stop — less bow, quicker release); notation = **the dot** (Stage 3 taught reading it). Distinguish from **spiccato** (leaves the string, Movement F). One line on **slurred / up-bow staccato** (many bitten notes, one bow) as a far-shore card | thestrad "Staccato — the most controversial element"; Galamian |
| E3 | `portato-and-colle` | bow | NEXT | *(rewrite)* **portato / louré** = pulsed notes, one bow, **no stop** (bow-speed pulses or a small index-finger pulse) — the *expressive* one, connects to Stage 3 C3 and `dynamics-are-a-bow-thing`; a slow scale, 3–4 notes per bow, each gently swelled. **Collé** = "pizzicato with the bow" (Galamian) — a sharp finger-driven pinch then a lift; its real value is a **bow-hand finger-flexibility training stroke** (four collé notes on open D, from the fingers) — and the tabla hand's finger independence gives the reader a head start | violinonline; violinist.com (Buri) "Collé"; thestrad "Teaching collé" |
| E4 | `hooked-bowing-and-retakes` | bow | NEXT | *(new)* **same direction + a stop** — two notes "down-down" (slur + staccato dot), for **bow economy** and to land the next strong beat on a down-bow; the reader's dotted-rhythm fluency (Stage 2) makes it easy to feel. **Retakes** = a silent lift-and-reset, "a space filled only with resonance" — the **circular motion** (a loop, not a stab). Seeds **the rule of the down-bow** (Movement I). Ties Stage 3 D1 (`down-bow-up-bow-and-the-retake`) + Stage 4 I5 (`phrases-breathe`) | cellofun "Portato, Flying Staccato and Hooked Bowings"; takeshiabo "circular motion" |

### Movement F — Off the string (RECOGNISE)

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| F1 | `spiccato` | bow | LATER | *(rewrite)* the **controlled** bounce — an individual impulse for **every** note, at/just below the middle, and **each note must ring**, not just click. The **on-ramp**: a light fast détaché in the middle of the bow that you *stop controlling so hard* and let bounce. The **brush stroke** (broad, gentle, barely off the string, more horizontal than vertical) as a real Stage-5 play-around + tension check. Framed honestly: "not a target yet — here's what it is and the first step toward it" | Galamian — "an individual impulse for every tone"; Sassmannshaus "Spiccato"; Suzuki "brush stroke" |
| F2 | `sautille-and-the-continuum` | bow | LATER | *(rewrite + rename)* the **stick springs** (not you), dead centre, **fast only** (~>100–130 bpm sixteenths); lighter, more connected than spiccato. **The continuum**: slow bounce = spiccato (lift each note); speed up until you can't → the bounce transfers to the stick → sautillé. Same gesture, different speed | thestrad "Spiccato and sautillé — often confused"; virtualsheetmusic |
| F3 | `the-far-shore` | bow | REFERENCE | *(new — one card)* **ricochet/jeté** (throw, 2–6 bounces, one direction, down-bow) · **flying staccato** · **fouetté** ("whipped", up-bow at the tip) · **Viotti stroke** (short weak → long strong on one bow, "energy and release" — the one *idea* worth keeping) · **chopping** (percussive, Richard Greene / Turtle Island — "a door, not a step"). Name, hear, know the style | thestrad "Turtle Island techniques" / "Viotti and the Tourte bow"; violinspiration "Ricochet" |

### Movement G — Colour

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| G1 | `colour-strokes` | bow | REFERENCE | *(rewrite + rename — one card)* the sounding point off the ends of the ruler: **sul ponticello** (glassy, at the bridge) · **sul tasto / flautando** (veiled, over the fingerboard) · **col legno** *battuto* (tap the wood) / *tratto* (draw the wood) · **con sordino** (the mute — mechanically removes upper partials) · **au talon / à la pointe** (at the frog / tip). Stage 3 D3 taught reading these; here they're a 10-second try. sul pont / sul tasto also belong in B3 as the "hear it" beat | violinonline "Bowing Directions"; andrewhugill *Orchestra Manual*; the PDF Part VI §63 |
| G2 | `tremolo` | bow | NEXT | *(new)* rapid repetition of one note. **Unmeasured** (as fast as possible, no rhythm, a small *loose* wrist oscillation near the tip — shimmer, tension) vs **measured** (a *counted* subdivision — 2 slashes = sixteenths). **Measured tremolo is pure rhythm** — a confidence win for this reader ("this half note = eight dead-level sixteenths"). Usual mistake: a clenched arm. Notation previewed in Stage 2 (the note-value tree) | violinspiration / violinlounge "Tremolo"; newt.phys.unsw "Articulation" |

### Movement H — The bow hand does more than bow

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| H1 | `pizzicato` | bow | NEXT | *(new — folds the research's Gap 1)* **right-hand pizz** — pluck with the side/tip of the index finger, **thumb anchored** on the corner of the fingerboard; pull *across* the string for a round sound, not a thin snap. For a single stray pizz mid-passage, keep the bow in the hand and pluck with the thumb. **`pizz.` ↔ `arco`** and the half-second it costs (composers leave time — or don't). **Left-hand pizz (`+`)** = recognise only, virtuoso/LATER | the PDF Part VI §67; standard technique; Stage 3 `string-and-colour-words` (read it there) |
| H2 | `rolling-a-chord-with-the-bow` | bow | NEXT | *(new — folds Gap 2)* the **right-arm half** of a rolled chord (Stage 4 taught the concept: curved bridge → roll bottom-to-top). On **open strings and open-heavy chords** (`G-D-A` open; open `D-A` + one finger): the weight **drops onto the low strings and rolls up** through the arm levels as the bow moves, landing/sustaining the top. **This is the exact gesture the K.216 solo entrance needs — and you can do it now.** Stopped double-stop chords = Stage 6 | `LESSONS-FROM-MOZART.md` §2; ties Stage 4 O2 (`the-first-note-of-mozart`) |
| H3 | `the-bow-stroke-atlas` | bow | REFERENCE | *(rewrite — ~18 real cards, a reference-library page)* one card per stroke: name (Fr./It./Ger.) · **milestone for you** · on/off + where in the bow · notation (a tiny `<NotatedExample>`) · sound · how it's made · **don't confuse it with** (the spectrum neighbour) · where you hear it. Replaces the PDF's §63 (identical paragraph pasted 25×) | the PDF Part VI §63 done right; `CLAUDE.md` Mistakes to avoid #5 |

**5b "play it back" beat:** at the end of Movement E — hear a 2-bar phrase from a tune the
reader knows (Ode to Joy, When the Saints), play it back by ear with a clean détaché.

---

## 5c — Reading & shaping with the bow, and the gate

### Movement I — Reading a printed bowing (the signature skill — `LESSONS-FROM-MOZART.md` §1)

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| I1 | `where-in-the-bow` | reading / bow | NOW | *(from `reading-bowings`)* recognise every mark: **⊓ / V** · **WB / LH / UH / M** · **frog / au talon / talon / nut** · **tip / point / punta d'arco / `Sp.` (*Spitze*) / `Pt.` (*punta*)** · the **retake** sign. `<Quiz>`-friendly. `Sp.` / `Pt.` / `au talon` are what the K.216 edition actually uses | violinonline; musiciangoods "Violin Bowing Symbols"; `LESSONS-FROM-MOZART.md` §3 |
| I2 | `the-rule-of-the-down-bow` | reading / bow | NOW | *(new)* **"la règle du tiré"** — the strong beat wants a **down-bow** (naturally heavier); the first beat of the bar falls on ⊓. The arithmetic: an **even** number of notes before the barline → start **down**; **odd** → start **up** (so you arrive on ⊓ at the bar). Fix a mismatch with a **retake / hooked bow / slur choice**. A genuine, satisfying *rule* for a systems-minded reader; modern playing bends it, but it's the first question | Georg Muffat, *Florilegium Secundum* (1698) — Lully's rules; **Leopold Mozart, *Violinschule* (1756)** — "each bar not beginning with a rest should start with a down-bow" |
| I3 | `reading-a-bowing` | reading / bow | NOW | *(from `reading-bowings`)* a marked-up phrase decoded **mark by mark** (the `decode-a-dense-line` method): direction · slurs as the *bow plan* (how many notes → how to divide the bow) · **`f`–`p` echoes need a bow-speed + weight + lane change**, not a knob · `< >` = *messa di voce* · **editorial vs composer** (solid slur = composer, **dotted slur** = editor; **`[ ]`** = editorial; "bowings above the staff = the composer's, below = the editor's" — the K.216 footnote) · fingerings & roman positions are **not** bowing (the numeral tangle again — Stage 3 G3, Stage 4 O2) | Bach-edition conventions; thestrad "Long read: Playing Baroque and Classical"; `LESSONS-FROM-MOZART.md` §3 |
| I4 | `bowing-a-passage-yourself` | reading / bow | NOW | *(new — the capstone)* the checklist: find the **strong beats** (they want ⊓) → **count notes** → choose slurs / hooks / retakes so the strong beats land down → **plan the distribution** (will you run out? where does each phrase start? where do you retake?) → mark it in, play slow, adjust. **Capstone example: the K.216 first solo phrase**, bowing decoded and planned — closing the arc from Stage 4 J4 / O2. Pays the last of the `LESSONS-FROM-MOZART.md` §1 debt | the annotated-edition / studio tradition; `LESSONS-FROM-MOZART.md` §1 |

### Movement J — Shaping with the bow

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| J1 | `dynamics-with-the-bow` | bow | NOW | *(new — completes the Stage 3 `dynamics-are-a-bow-thing` bridge)* the **two recipes**: louder = faster bow + more weight + toward the bridge + flat hair; softer = the reverse — all four move **together**. **Crescendo across a phrase** = gradually more bow; **on one held note** = more weight + slide toward the bridge (you can't speed up — you'd run out). Usual mistake: crescendoing a long note with bow speed. **Subito** = arrive with the new settings already set | Galamian 1962, 56–57 — bow speed as the nuance tool; thestrad "10 views on dynamics" |
| J2 | `messa-di-voce` | bow | NOW | *(new)* `< >` on **one note** — a long crescendo then a long diminuendo, **nothing changing but the volume** (no pitch drift, no vibrato — Stage 7). Whole bow, down and up, at the frog and the tip. The **tone thread's graduation exercise** — a player who owns it is ready to shape any note. Tartini → Leopold Mozart → the French school → Flesch/Galamian lineage | Wikipedia "Messa di voce"; violinist.com "The Messa di Voce"; Leopold Mozart / Tartini on the swelled stroke |
| J3 | `phrasing-with-the-bow` | bow | NOW | *(new — the bow-track completion of Stage 4 I5 `phrases-breathe`)* **bow speed is expression** (Galamian) — the phrase's peak gets more bow, the tail less; a **retake is a breath** at a phrase-end; the phrase arc (grow to the peak, settle to the cadence) drives the bow plan. Uses a tune the reader has (Ode to Joy shaped, Amazing Grace) | Galamian 1962, 56–57; Leopold Mozart / singing-tone tradition; Stage 4 I5 |

### Movement K — Playing by ear, and how to practise

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| K1 | `finding-a-tune-by-ear` | ear | NOW | *(new — the stage's payoff for `PRD.md` §3)* the method: **find "home"** (hum the tune, find its tonic on the violin — try open strings and their neighbours until one feels like rest) → **name the key / finger pattern** (Stage 4) → **sing then find each note** as a scale degree or an interval from the last (Stage 4 F4's anchors: Twinkle's leap = P5, *When the Saints* = M3) → **play a guess, hear the error, correct it** (the intonation loop = the same skill) → **rhythm is yours already**. Worked on a simple tune the reader has *not* been given the notation for (e.g. *Happy Birthday*, *Frère Jacques* in a new key). The **reverse fingerboard map** — given a pitch, the string + finger without hunting — is the thing this drills | `PRD.md` §3 + §6.1; Stage 4 F4 (`hearing-the-scale-degrees`), A3 (sargam); Suzuki "mother-tongue" listening; functional-ear-training research |
| K2 | `how-to-practise-a-bow-stroke` | bow | NOW | *(moved here from C3 if C3 feels early — otherwise C3 stays; see note)* | — |

*Note: `how-to-practise-a-bow-stroke` is drafted as **C3** (with the setup material). If in the
build it reads better as a late "pull it together" lesson, move it to Movement K. One or the
other, not both.*

### Movement L — Reference

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| L1 | `the-baroque-bow-and-the-modern-bow` | bow | REFERENCE | *(new — one card/short lesson)* the **Baroque bow** (pre-~1785): shorter, lighter, **convex**, weaker at the tip — a long note **naturally tapers**, separation comes free; Baroque style *is* articulated partly because of the bow. The **modern (Tourte) bow** (c. 1785, developed with **Viotti**): **concave**, heavier, even tension — built for a **sustained, seamless détaché** and a bigger sound. The aside: "the even détaché you learn as 'the default' was, in a real sense, *invented*." Ties `non-legato-was-normal` (Stage 3) + F3 (Viotti) | annemctighe *The Baroque Violin*; givensviolins; thestrad "Viotti and the Tourte bow" |

---

## Movement P — The repertoire (also on `/practice`)

All **first position**, all **public domain**, authored in our annotated line (`RULES.md` R1 —
**never** the copyrighted Suzuki arrangements), each the **complete** short piece phrase-by-phrase
(fully labelled) **plus** a whole-piece unlabelled `followPlayback` playthrough (`RULES.md`
R3). Every repertoire lesson **spells the bowing out phrase by phrase** — bow part, direction,
amount, the slurs, what to listen for (`LESSONS-FROM-MOZART.md` §5) — plus a "the usual
mistake" beat, plus a **"try it by ear first"** invitation (`PRD.md` §3).

| # | Slug | Piece | Key / form | The one thing it's for | Source & status |
|---|---|---|---|---|---|
| P1 | `stage-5-tone-and-strokes` | authored set | G/D/A/C, 1st | the **daily bow routine** as playable lines: a son filé set · a détaché scale · a slurred scale (2s, 4s, the octave) · a martelé scale · the **bowing-variation drill** (5–6 patterns on a G scale). The stage's "system" deliverable (also `REPERTOIRE.md`) | authored |
| P2 | `tune-bach-air` | **Bach, "Air" (BWV 1068)** — opening phrase, **simplified, first position (D)** | D, slow, common time | **legato + son filé + bow distribution + `dynamics` as bow** — a seamless singing line | Bach d. 1750 — PD. Author from the IMSLP full score; **not** the "on the G string" transposition (needs higher positions). Keep a MusicXML source (`LESSONS-FROM-MOZART.md` §5). Simplify the range; flag |
| P3 | `tune-gossec-gavotte` | **Gossec, Gavotte** (from the opera *Rosine*) — **first position, G** | G, alla breve, Allegretto | **the bow-stroke piece** — simple détaché, staccato, **retakes, hooked bows**, slurs, all in one tune. **Clears the Stage 3 J5 deferral** | Gossec d. 1829 — original PD. Author from IMSLP / a non-Suzuki first-position edition; **not** the copyrighted Suzuki arrangement |
| P4 | `tune-conquering-hero` | **Handel, "See, the Conqu'ring Hero Comes"** (*Judas Maccabaeus*) — first position | G or C, march | **martelé / grand détaché in real music** — a marked, dotted, marcato tune; the prepared bite with a purpose | Handel d. 1759 — PD (IMSLP). *(Alternative if the range fights: a short first-position Wohlfahrt Op. 45 Vol. 1 study — PD — as a pure martelé étude.)* |
| P5 | `tune-foundation-gate-piece` | **Bach, *Musette* in D** (Anna Magdalena Notebook) *(or Handel *Bourrée*, first-position arr. — pick at build)* | D, ABA, drone bass | **everything at once** — even détaché, a dynamic scheme, a clean string crossing, in tune; the drone bass ties Stage 4's drone work | Bach / Handel — PD (IMSLP). Author our line |

**Release mid-stage** where the notes and strokes are covered (`RULES.md` R2): the
tone-and-strokes set with Movement C · the *Air* with Movement D (legato) · the *Gavotte* with
Movement E (the marked strokes + hooked bows) · *Conqu'ring Hero* with E1 (martelé) · the gate
piece with Movement J.

### P-end — the Foundation check

| Slug | Track | Tag | Teaches |
|---|---|---|---|
| `the-foundation-check` | reading / bow | NOW | *(rewrite — a **self-audit**, not a gate; `RULES.md` #4/#10; mirrors Stage 3 `the-score-language-check` and Stage 4 `the-musicianship-check`)*. Lists the **six Foundation-gate capabilities** (`PRD.md` §4/§7): (1) read & play any first-position tune in G/D/A/C at sight · (2) keep steady time · (3) an even, controlled tone with the core strokes (son filé, détaché, a legato slur, a martelé bite, a clean crossing) · (4) **hear when a note is out and fix it** · (5) **hear a simple 4-bar tune in a known key and play it back unaided** *(new — the play-by-ear check)* · (6) **read a printed bowing** (direction, where-in-the-bow, slurs, `f`–`p`, editorial vs composer). Points at the P pieces. Honest that this is the **end of v1** and the threshold to the giants + Stage 6 (shifting). No score, no unlock |

---

## Build order & wiring

1. **5a first** (A–C), then **5b** (D–H), then **5c** (I–L), movement by movement. Repertoire
   released as its movement lands.
2. Each lesson: `content/lessons/<slug>.mdx` (pure body — no frontmatter) +
   `content/lessons/registry.ts` entry (`"<slug>": () => import("./<slug>.mdx")`) +
   `lib/curriculum.ts` `LESSONS` entry (`stage: 5`, `track`, `tag`, `published: P`). The 14
   skeleton slugs are **re-pointed or renamed** per the fate table; `sautille-and-beyond.mdx`,
   `bow-effects.mdx`, `reading-bowings.mdx` are **deleted** (renamed slugs); `detache` keeps
   its slug.
3. **No new components** (`RULES.md` #17). `<NotatedExample>` (+ `labels`, `followPlayback`,
   `howToPlay`, `rhythmOnly`, `defaultBpm`/`minBpm`/`maxBpm`), `<Quiz>`, `<TryThis>`,
   `<Margin>`/`<Cite>`, `<BowHoldDiagram>`, `<BowLanesDiagram>`, `<BowDiagram>`, the drone/
   metronome bar — all exist. Rolled-chord and double-stop examples use a **combined label**
   (`{ name: "G + D + B", string: "G, D & A", finger: "0, 0 & 1" }`) like the Stage-3/4
   `[G,DB]` pattern. `x`-notes render (for the martelé "grip silently" beat). Verify every
   `!decoration!` (accent, hairpin, `!>!`, `!<(!`/`!<)!`) in the browser (`RULES.md` R5).
4. **`python tools/abc-barcheck.py` before every commit** — every `<NotatedExample>` with an
   explicit `M:` + `L:` must sum. abcjs renders a bad bar silently (`CLAUDE.md` Mistakes to
   avoid #1). Free-meter tone/stroke examples use `M:none`.
5. **Octave check** (`CLAUDE.md` #2): first-position scale examples use `G, A, B, C  D E F G`
   (commas/capitals), never `G A B c d e f g`. Cross-check every ABC pitch against its label.
6. `docs/NOTATION-COVERAGE.md` — add the Stage-5 reading vocabulary: **⊓ / V** (confirm not
   already from Stage 3), **WB / LH / UH / M**, **`Sp.` / `Pt.` / `au talon` / punta d'arco**,
   the **retake** sign, **`sul pont.` / `sul tasto` / `flautando` / `col legno` / `con sord.`**
   (confirm Stage 3 coverage), **tremolo slashes**, **the phrase-mark vs slur** (from Stage 4
   I5). Each → its lesson slug.
7. `docs/PDF-MAP.md` — Part VI rows → `done` (with the "we replaced the §63 padding with real
   atlas cards" note). `CLAUDE.md` status table + Stage-5 detail section + the "Stage 5 built"
   note. `docs/THE-PATH.md` §6 row → built. `docs/CURRICULUM.md` §Stage 5 marker.
   `docs/REPERTOIRE.md` — the 4 tunes + the tone/strokes set + the bow-stroke atlas as a
   reference-library entry. **`docs/PRD.md` §4** — the Foundation-gate row already updated with
   the play-by-ear check (2026-09-04); confirm it reads right once built.
8. `npm run build` (target: green — currently 231 pages, expect ~271), `npm run lint`,
   `npx tsc --noEmit`. **Browser spot-check** a lesson from each movement (render + press play
   + reveal labels — aligned under the noteheads, no horizontal scroll; `RULES.md` #1, R5) —
   especially the atlas cards (H3), the marked-up-phrase decode (I3–I4), and any example with
   decorations or `x`-notes.
9. Every music fact double-checked against `stage-5-research.md`'s sources before it ships
   (`RULES.md` #8). Each concept lesson cites the **specific pedagogue per fact** (Galamian /
   Fischer / Rolland / Capet / Leopold Mozart / Schelleng), not a generic "teachers say".
10. **The tabla claims** (the stage intro, E3's finger-independence note, B3's open/closed
    aside) get the strict check — the user *can* catch a wrong Indian-music fact. Keep them
    **loose, few, analogy-not-equivalence** (`CLAUDE.md` Mistakes to avoid #10; the bowing-
    pattern = "like a rhythmic cell", never "is a tala").

## The bar every lesson clears (`PRD.md` §7 / `CONTENT-STANDARD.md` §7)

- **Six beats**: idea → see it → hear it → try it → **the usual mistake** → **where it comes
  from** (a cited `<Cite>`). Grep new lessons for "usual mistake" / "<Cite" before committing
  (`CLAUDE.md` #8).
- **Concept/skill lesson: 2–4 play-arounds** then a real line or tune. REFERENCE **cards**
  (F3, G1, H3, L1) are exempt from the count but still show the stroke **in notation**, not
  just a grid row (`CLAUDE.md` #5 — the user pushed back on table-only cards twice).
- **Every pitched example labels every note — name + string + finger** (`RULES.md` #1). Rolled
  chords use a combined label; rhythm-only / free-bow examples say so in the caption.
- **`perform` / `read` / `recognise` stated wherever they differ.** Stage 5 *performs*
  détaché, legato, martelé, a clean crossing, a sustained tone; *reads* every bowing; *
  recognises* everything off the string.
- **The "hear it" beat and the "play it back" beat carry real weight** — this is where the
  play-by-ear thread lives (`PRD.md` §3). Every movement ends able to hear-and-do, not just
  name.
- Hands-free: readable from a music stand, one control to press. **No interactivity beyond
  the existing components** — no "tension meter", no gamified checklist (`RULES.md`; the hard
  steering).

## What must not be cut (the load-bearing set)

- **The tone block** — `how-the-bow-makes-sound` (A1), `one-long-tone` (A2),
  `speed-not-pressure` (B2), `the-five-lanes` (B3). A controlled tone is a Foundation-gate
  criterion (`PRD.md` §4).
- **The three PERFORM strokes** — `detache` (D1), `legato-and-slurs` (D3), `martele` (E1) —
  and `string-crossings` (D4).
- **The bow-distribution / reading-a-bowing spine** — `planning-the-bow` (C1),
  `where-in-the-bow` (I1), `the-rule-of-the-down-bow` (I2), `reading-a-bowing` (I3),
  `bowing-a-passage-yourself` (I4). This is `LESSONS-FROM-MOZART.md` §1, the make-or-break.
- **The K.216 bowing capstone** — `rolling-a-chord-with-the-bow` (H2) + `bowing-a-passage-
  yourself` (I4)'s K.216 example. Closes the arc from Stage 4.
- **`finding-a-tune-by-ear` (K1)** — the stage's payoff for the operative goal (`PRD.md` §3),
  and the new Foundation-gate check.
- **`dynamics-with-the-bow` (J1) + `messa-di-voce` (J2)** — the completion of the Stage 3
  `dynamics-are-a-bow-thing` bridge.
- **The 5 repertoire pieces + `the-foundation-check`** — every stage ends at real music
  (`RULES.md` R2), and this stage ends v1.

---

## Status

**PLANNED 2026-09-04.** Research: `stage-5-research.md` (15 passes). Not yet built. Next:
build 5a → 5b → 5c → P, movement by movement, to the bar above.
