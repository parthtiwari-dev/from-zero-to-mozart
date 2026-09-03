# Stage 4 — Scales & musicianship I: the plan

Built from `docs/stage-plans/stage-4-research.md` (20 research passes + a re-verification pass).
Read that for the *why* behind every lesson; this doc is the **build list** — what ships, in
what order, wired how.

Held against `docs/PRD.md` §3 + §6.1 + §7, `docs/CONTENT-STANDARD.md` (six beats, lesson
types, §3a anatomy), `RULES.md`, `docs/LESSONS-FROM-MOZART.md` §2 + §4, `docs/THE-PATH.md` §6.

---

## What this stage is for

`PRD.md` §3: the objective is **independent musicianship** — read, play, **hear**,
**understand**, choose. Stages 0–3 built *read*. Stage 4 builds the foundation of **hear** and
**understand**: the scale under the tune, the chord under the melody, the interval you just
leapt, the cadence you just landed on. From Stage 4 on, every repertoire lesson can say *what
key, what the harmony is doing, why this bowing* — and that sentence is only writable if the
reader has done this stage properly.

**The K.216 first-note debt** (`LESSONS-FROM-MOZART.md` §2). The solo entrance of K.216 is a
rolled **G-major chord / arpeggio** on a one-sharp key signature, with editorial finger
numbers that aren't string numbers that aren't position numbers. Stage 4 owns the theory half
of that: key, triad, arpeggio, the numeral tangle. **After this stage, "I can't even read the
first note of Mozart" must be impossible.** That was the user's explicit ask.

**Scope note.** Stage 4 adds no new *positions* (Stage 6) and no new *bow strokes* to *perform*
(Stage 5). Playing stays first position — G/D/A/C major, E minor, separate bows and simple
slurs. The new work is *knowing what you're playing*. `read` / `understand` / `perform` stay
separate milestones (`RULES.md` #7).

---

## The decisions (user, 2026-09-03)

The user's standing guidance (from Stage 3): *"keep it all but structure it so nothing feels
bullshit"* · merge thin siblings · REFERENCE material as **cards**, not padded six-beats
lessons · *"don't over-engineer"* · specifics are Claude's call. **User, 2026-09-03: "no
dropping just better structuring and writing" — keep every lesson; Q1 & Q2 as recommended.**
Applied here:

1. **Keep the full coverage — nothing dropped.** The research draft landed at **~63 concept
   lessons**; the merges below (thin siblings folded, not deleted — every topic still taught)
   bring it to **48** distinct lessons. REFERENCE items (`the-twelve-keys`,
   `the-other-scales-and-the-modes`, `the-other-seventh-chords`) written as cards.
   - **Q1 (Vivaldi *Spring*) — as recommended:** build the *theme* here as **P6**; the full
     first movement stays in the Phase-2 Vivaldi module. So Stage 4 ships **6 tunes + the
     scale/arpeggio set**.
   - **Q2 (ear thread) — as recommended:** F4–F5 (`hearing-the-scale-degrees`, `tuning-by-ear`)
     stay inside Movement F as its back half — no separate "Ear" movement.
   - **Q3 (cut deeper) — no.** All 48 concept + 7 repertoire ship.

2. **The stage reads in three parts** — a divider in `/learn`, **not** three stage numbers
   (`stage: 4` throughout, minimal code — exactly as Stage 3's 3a/3b):
   - **4a — Scales & keys** (Movements A–E, 14 lessons): what a scale is, the major formula,
     key signatures, the circle of fifths, minor, the 12 keys.
   - **4b — Intervals, chords & harmony** (Movements F–I, 19 lessons): intervals + the ear
     thread, triads, diatonic harmony (+ non-chord tones, harmonic rhythm) and the dominant 7th,
     cadences and phrase structure. *This is the load-bearing block (`PRD.md` §6.1).*
   - **4c — Arpeggios, the physics & the rest** (Movements J–O, 15 lessons): arpeggios (+ the
     K.216 bridge), the physics, other scale families, scale practice, transposition, the
     capstone.

3. **Tunes: Claude notates** the end-of-stage melodies from public-domain sources, verified
   against ≥2 references (`THE-PATH.md` §7), same as Stages 1–3. **5–6 tunes + the scale/arpeggio
   set** (Stage 3 shipped 4) — 5 firm, Vivaldi *Spring* conditional (open question 1).

**Net count: 55 lessons** — 48 concept/skill + 7 repertoire (the scale set + 6 tunes).
Larger than Stage 3 (46) on purpose: this is the widest concept block in the course, and
`PRD.md` §6.1 calls the harmony/ear thread load-bearing.

**BUILT 2026-09-03: 55 live.** Then **EXPANDED 2026-09-04 → 70 live** after the user asked for
*"all type of scales and all type of chords… add more lessons"*: the single "other scales"
card and single "other 7ths" card were the compressed version of completeness. Added **15
lessons**:
- **Every scale** (Movement L, 2 → 9): `the-modes` · `dorian-and-mixolydian` ·
  `phrygian-lydian-and-locrian` · `the-pentatonic-scales` · `the-blues-scale` ·
  `the-chromatic-scale` · `the-symmetrical-scales` (whole-tone + octatonic) ·
  `scales-from-around-the-world` (card: Phrygian-dominant, double harmonic, Hungarian minor,
  Japanese, acoustic, bebop, Neapolitan + the raga pitch-set note) · `a-raga-is-not-a-scale`
  (kept). `the-other-scales-and-the-modes` deleted, content redistributed.
- **Every chord** (Movement G, 3 → 6; Movement H, 6 → 11): `suspended-and-added-tone-chords` ·
  `reading-a-chord-symbol` (the lead-sheet code: C, Cm, C7, Cmaj7, C°, C+, Csus4, Cadd9, C6,
  C/E, C5) · `chords-on-the-violin` (double stops = chord fragments) · `extended-chords`
  (9/11/13) · `secondary-dominants` (V7/V, tonicization) · `borrowed-chords-and-mode-mixture`
  (♭VI ♭VII iv in major; the Picardy third as the reverse) · `the-chromatic-chords` (card:
  Neapolitan sixth, augmented sixths, dim7 pivot) · `altered-and-quartal-chords` (card: 7♯9,
  quartal, polychords, clusters).

`npm run build` green (231 pages), `npm run lint` + `npx tsc --noEmit` clean. Movements A–P
written to the six-beats bar; every pitched example name/string/finger labelled; chord stacks
use combined labels; tune playthroughs unlabelled per `RULES.md` R3.

**Audit (2026-09-04, user: "recheck everything from my lens").** Ran a bar-sum checker over
every ABC block + a music-fact re-read. Fixed **15 issues**: 8 bar-sum / metre errors (abcjs
renders short bars silently, so the build never caught them) — `secondary-dominants` (3+3+3+4
in 4/4; also made V/V a real A7), `in-tune-is-not-one-thing`, `what-a-scale-is` (6 quarters in
a bar), `the-blues-scale`, and 4 chord examples that needed `M:3/4`; 2 tune rewrites —
`tune-scarborough-fair` (didn't scan in 3/4) and `tune-fur-elise-theme` (11/16 bar + wrong
pitches in the answer figure, now C–E–A); 2 music-fact fixes — the augmented scale's last
note (`the-symmetrical-scales`) and the enigmatic scale spelling (`scales-from-around-the-world`);
3 quality-bar fixes — an imprecise caption in `chords-on-the-violin`, and a missing "usual
mistake" beat in `arpeggios-in-real-music` and `the-first-position-arpeggios`. The Indian-music
claims (thaat/raga, drone intonation, the augmented-2nd aside) all checked out accurate and
hedged. `tune-aura-lee`'s melody flagged for a lead-sheet verify. The 8 old thin Stage-4
slugs (`major-and-minor`, `parallel-and-relative`, `your-scale-practice-order`, `other-scales`,
`intervals`, `triads`, `cadences`, `arpeggios`) deleted; `what-a-scale-is` /
`whole-steps-and-half-steps` / `why-g-major-has-one-sharp` / `the-circle-of-fifths` /
`the-three-minors` / `the-twelve-keys` / `the-harmonic-series` rewritten in place. Vivaldi
*Spring* (P6) and Eine kleine Nachtmusik (P2) are simplified versions, flagged in-lesson;
verify P6 against `docs/source/vivaldi-spring-easy.pdf` when convenient.

### Merges from the research draft

| Research draft | Ships as |
|---|---|
| A2 `the-scale-degrees` + A3 `notes-that-rest-and-notes-that-lean` | **A2 `the-scale-degrees-and-their-pull`** |
| B1 `whole-steps-and-half-steps` + B2 `the-four-finger-patterns` | **B1 `whole-steps-and-half-steps`** (the patterns are the second half) |
| B5 `the-order-of-sharps-and-flats` + B6 `reading-any-key-signature` | **B4 `key-signatures-in-full`** |
| D1 `what-major-and-minor-mean` + D2 `the-natural-minor-scale` | **D1 `what-major-and-minor-mean`** |
| D4 `relative-major-and-minor` + D5 `parallel-major-and-minor` | **D3 `relative-and-parallel`** (back to one lesson, deeper) |
| E1 `the-twelve-keys` + E2 `double-sharps-and-double-flats` | **E1 `the-twelve-keys`** (double accidentals as a section) |
| E4 `keys-used-to-have-characters` | folded into **E2** (violin resonance) as the historical half, with the temperament link in **K3** |
| F2 `the-intervals-in-the-major-scale` + F4 `flipping-an-interval` | **F2 `the-intervals-in-the-major-scale`** (inversion as a section) |
| F3 `augmented-diminished-and-the-tritone` + F5 `consonance-and-dissonance` | **F3 `augmented-diminished-and-the-tritone`** (consonance/dissonance folded in) |
| F6 `hearing-the-scale-degrees` + F7 `interval-anchors-from-your-own-tunes` | **F4 `hearing-the-scale-degrees`** (anchors as a section) |
| G3 `chord-inversions` + G4 `spelling-any-triad` | **G3 `inversions-and-spelling`** |
| H1 `the-chords-of-a-key` + H2 `the-three-jobs-chords-do` | **H1 `the-chords-of-a-key`** (function families as a section) |
| L1 `the-other-scale-families` + L2 `the-seven-modes` | **L1 `the-other-scales-and-the-modes`** |
| M1 `why-practise-scales` + M2 `how-to-practise-a-scale` | **M1 `how-to-practise-a-scale`** (leads with the "why") |
| N1 `transposing-a-tune` + N2 `concert-pitch-and-the-c-instruments` | **N1 `transposing-a-tune`** (concert pitch as an aside) |

Everything else maps 1:1 (research letter → ship letter, same intent).

### The 15 existing Stage-4 slugs

All in `lib/curriculum.ts` (currently thin). Fate:

| Existing slug | Becomes |
|---|---|
| `what-a-scale-is` | **A1** (rewrite) |
| `whole-steps-and-half-steps` | **B1** (rewrite, absorbs finger patterns) |
| `why-g-major-has-one-sharp` | **B3** (kept — already rebuilt, `CONTENT-STANDARD.md` §6) |
| `the-circle-of-fifths` | **C1** (rewrite) |
| `major-and-minor` | **D1 `what-major-and-minor-mean`** (rewrite, absorbs natural minor scale) |
| `the-three-minors` | **D2** (rewrite) |
| `parallel-and-relative` | **D3 `relative-and-parallel`** (rewrite) |
| `the-twelve-keys` | **E1** (rewrite → REFERENCE card) |
| `intervals` | **F1 `what-an-interval-is`** (rewrite; spawns F2–F3) |
| `triads` | **G1 `what-a-triad-is`** (rewrite; spawns G2–G3) |
| `cadences` | **I1 `what-a-cadence-is`** (rebuild; spawns I2–I3; fixes the `RULES.md` #1 bare-`"V"` labels) |
| `arpeggios` | **J1 `what-an-arpeggio-is`** (rewrite; spawns J2–J4) |
| `other-scales` | **L1 `the-other-scales-and-the-modes`** (rewrite) |
| `the-harmonic-series` | **K1** (rewrite) |
| `your-scale-practice-order` | **M2 `which-scales-to-practise-now`** (rewrite; spawns M1) |

Old slugs stay in the `LESSONS` array and are re-pointed; `major-and-minor`, `parallel-and-relative`,
`your-scale-practice-order` get **renamed** (new slug, old MDX deleted).

---

## 4a — Scales & keys

### Movement A — What a scale is

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| A1 | `what-a-scale-is` | ear | NOW | an ordered set of pitches heard from a **tonic**; *scala* = "ladder"; **scale ≠ key** (the ladder vs the gravity); diatonic (7, wide-spaced ½s) vs chromatic (12); the octave frame. Lead with the sound — play C, stop on the 7th, let the ear finish it | movable-do / Guido's hexachord lineage |
| A2 | `the-scale-degrees-and-their-pull` | ear | NOW | the 7 names (tonic … leading tone / subtonic) + the sub-/super- symmetry; `^1`–`^7` notation; **stable 1/3/5** (the tonic triad — rest) vs **tendency 2/4/6/7** (lean, mostly by nearest step; **7→1** the strongest, 4→3, 2→1, 6→5) | technical-names tradition; "the ear seeks repose" (Fux / Schenker, lightly) |
| A3 | `do-re-mi-and-sa-re-ga` | ear | NOW | movable-do syllables = degrees = **functions** (*ti* leans up, *fa* sags, *sol* points home); **Sa = do = tonic, Pa = sol**; achala ("fixed": Sa, Pa) vs vikrut ("movable"); **guard: a raga is not a scale** (aaroha/avaroha, pakad, rasa — → L2) | sargam "the emphasis is on the intervals"; Kodály movable-do |

### Movement B — Steps & the major formula

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| B1 | `whole-steps-and-half-steps` | ear / left-hand | NOW | the two step sizes are **distances**, not notes; on the violin — **fingers touching = ½ step, apart = whole step**; the **four first-position finger patterns** (pattern 1 = 1–2 touch = C-major shape · 2 = 2–3 touch = **D/G major** · 3 = 3–4 touch = A major · 4 = none touch / low 1). The touching pair locates the key | Doflein / Essential Elements / ViolinOnline finger-pattern method |
| B2 | `the-major-scale-formula` | ear | NOW | **W-W-H-W-W-W-H**; two matching **tetrachords** a whole step apart (= the same hand shape a string higher); **build a major scale on any note** by walking the formula (it *tells* you the sharps); contrast — lower the 7th of C → not major any more | Glarean, *Dodecachordon* (1547) — the Ionian mode |
| B3 | `why-g-major-has-one-sharp` | ear | NOW | *(kept — already rebuilt)* the formula forces E→F♯; that one sharp **is** the key signature; F♯ vs F♮ contrast; D major forces a second (C♯) | first-principles derivation; Leopold Mozart |
| B4 | `key-signatures-in-full` | reading | NOW | the full order — **F C G D A E B** and its reverse **B E A D G C F**; each a 5th apart (a new sharp = the new key's 7th; a new flat = its 4th); the fixed staff shape; **the two reading tricks** (last sharp +½ = tonic; 2nd-to-last flat = tonic; F major on its own); every signature is a major key **or** its relative minor; the ♭ glyph = "be molle" (musica ficta) | *Dodecachordon*; ABRSM Grades 1–3 key list; en.wikipedia "Flat (music)" |

### Movement C — The circle of fifths

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| C1 | `the-circle-of-fifths` | ear | NOW | the wheel = the order of sharps/flats + key counts + relatedness, one picture; clockwise = up a 5th, +1 sharp; anticlockwise = +1 flat; **the violin's G–D–A–E are four consecutive spokes** — the instrument is a segment of the circle; the enharmonic bottom (light). Uses `<CircleOfFifths highlight="…" />` | Heinichen, *Der General-Bass* (1728); the violin's fifths |
| C2 | `near-keys-and-far-keys` | ear | NEXT | adjacent keys share **6 of 7** notes; the **dominant is the nearest neighbour** — which is why pieces travel there (the missing "why" behind Stage 3's binary-form repeat); opposite side = a tritone away = distant; **modulation** — how you spot a key change (a new accidental appearing consistently + a cadence in the new key) | closes the Stage-3 binary-form plant |

### Movement D — Minor

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| D1 | `what-major-and-minor-mean` | ear | NOW | it's the **3rd** (major 3rd = 4 ½-steps vs minor 3rd = 3); also ♭6, ♭7; **"major ≠ happy"**; the natural-minor formula **W-H-W-W-H-W-W** (= the major scale from its 6th degree); **E natural minor = the exact G-major first-position hand** — the reader already owns the fingering | the PDF's own "major does not mean happy" line; Zarlino on the M/m third |
| D2 | `the-three-minors` | ear | NEXT | natural / harmonic / melodic; **raise the 7th** to get a leading tone (natural minor's 7→8 is a whole step — no pull, and a weak V); the **augmented 2nd** (♭6→♯7) and its colour; melodic minor raises 6 **and** 7 ascending, reverts descending; *don't memorise 36 minors — learn the three forms* | C.P.E. Bach / theory tradition; the world-music aug-2nd aside (guarded — "this wide step appears widely," never "= raga X") |
| D3 | `relative-and-parallel` | ear | NOW | **relative** = same key signature, tonic a minor 3rd apart (major's 6th degree ↔ minor's 3rd degree): G major ↔ E minor; **parallel** = same tonic, signature changes by 3 notes: G major ↔ G minor; **how to tell a major key from its relative minor** (does it rest on G or E? is there a raised-7th D♯ floating around — the giveaway?); mode mixture for colour | — |

### Movement E — The twelve keys

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| E1 | `the-twelve-keys` | ear | REFERENCE | **card**: 12 pitch-class keys, **15 written signatures** (B=C♭, F♯=G♭, C♯=D♭); the fewer-accidentals spelling rule; **double sharps / flats** (𝄪 𝄫 — the raised leading tone in a sharp minor key, e.g. G♯ minor's F𝄪 — barely seen in first position); the PDF's practical spelling tables | reference card |
| E2 | `the-keys-the-violin-loves` | ear | NOW | open-string **sympathetic resonance** → **G/D/A/E major (and minor) ring**; **D major is the most resonant key** (all four opens are useful degrees); flat keys sound **muted**; this is *why* Stages 1–4 live in sharp keys. Plus the historical half: **keys used to have characters** (Schubart 1806 — D major "triumph", C minor "the lament of unhappy love"; Charpentier, Mattheson) — mostly **lost to equal temperament** (→ K3), a "the era tells you how" note | Stradivari/D-major lore (flagged as lore); Schubart, *Ideen zu einer Ästhetik der Tonkunst*; `CONTENT-STANDARD.md` §3b ringing-tones |

---

## 4b — Intervals, chords & harmony

### Movement F — Intervals & the ear

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| F1 | `what-an-interval-is` | ear | NOW | **number** (count letter names *inclusive*) + **quality**; two families — 2/3/6/7 come as **minor/major**, 1/4/5/8 as **perfect**; **melodic** (a leap in a tune) vs **harmonic** (a double stop); on the violin an interval is also a **hand span** | Guido; *interval* = "space between" |
| F2 | `the-intervals-in-the-major-scale` | ear | NOW | the from-tonic table (unison → octave, all **perfect and major**); **why "perfect"** (the octave/5th/4th are the low overtones and don't change with the mode); **working out the quality of *any* interval** (D→F etc. — number by letters, quality by ½-steps or by comparing to the lower note's major scale); **inversion** — rule of 9, major↔minor, augmented↔diminished, perfect stays | overtone series (→ K1); Pythagoras ratios |
| F3 | `augmented-diminished-and-the-tritone` | ear | NEXT | ±½ step = augmented / diminished; the **tritone** (3 whole tones, aug 4 / dim 5, *diabolus in musica* — a nickname, not a decree) — the most restless interval, resolves outward/inward, and it's the live wire in the dominant 7th; **consonance vs dissonance** — perfect consonances (1/5/8), the sweet imperfect ones (3rds/6ths — what melody leans on), the spicy dissonances (2nds/7ths/tritone — resolve); the 4th's ambiguity | *diabolus* (medieval, flagged); Zarlino / counterpoint |
| F4 | `hearing-the-scale-degrees` | ear | NOW | **the first true ear-gym lesson.** Turn on a **tonic drone**; play the scale, hear each note **pull against home** — ^7 grinds and wants up, ^4 sags to ^3, ^1/^3/^5 settle; then **name a random single degree**, then two, then a 4-note fragment of a known tune. Plus: **interval anchors from the course's own tunes** — Twinkle = P5 (^1→^5), *When the Saints* = M3 (^1→^3), *Amazing Grace* = P4 (^5→^1) | functional / scale-degree ear-training research (miles.be, stringkick, musical-u); Kodály |
| F5 | `tuning-by-ear` | ear | NOW | a **perfect 5th or octave against an open string** can be tuned by ear — the **beats slow and stop** when it's pure; inch the finger until it rings; the drone as a reference; thirds are harder and slightly context-dependent (→ K3). A real intonation tool, not just theory | `CONTENT-STANDARD.md` §3b (intonation is ear-first); Simon Fischer on ringing tones |

### Movement G — Chords (triads)

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| G1 | `what-a-triad-is` | ear | NEXT | three notes **stacked in thirds** — root, 3rd, 5th; the staff "snowman"; this **is** the Stage-3 `[G,DB]` chord (G-major triad); broken into one-note-at-a-time it's an **arpeggio** (→ J) | Rameau, *Traité de l'harmonie* (1722) — the triad as harmony's atom |
| G2 | `the-four-triad-qualities` | ear | NEXT | **major** (M3+m3), **minor** (m3+M3), **diminished** (m3+m3, has a tritone), **augmented** (M3+M3) — the two-thirds recipe; each one's sound; **hear all four on one root** (C, Cm, Cdim, Caug) | Rameau; Zarlino on major/minor thirds |
| G3 | `inversions-and-spelling` | ear | NEXT | root position / **1st inversion (figure "6")** / **2nd inversion ("6/4")** — same three notes, different bass, different stability; **figured bass** named (the numbers = intervals above the bass); why a composer inverts (a smooth bass line, keep a melody note on top); spell the triad on any root / on each degree of G major | figured-bass / basso continuo tradition |

### Movement H — Harmony

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| H1 | `the-chords-of-a-key` | ear | NEXT | build a triad on **each degree** using only the key's notes → **I ii iii IV V vi vii°** (same quality pattern in every major key); UPPER = major, lower = minor, **°** = diminished; the same in **E minor** (harmonic-minor 7th gives a major **V**); the **three function families** — **Tonic** (I, vi), **Predominant** (IV, ii), **Dominant** (V, vii°) — and the **T → PD → D → T** phrase arc | Rameau; Gottfried Weber (roman numerals, 1817); Riemann (functions) |
| H2 | `harmonising-a-tune-you-know` | ear | NEXT | **I (do-mi-sol), IV (fa-la-do), V (sol-ti-re)** contain all 7 degrees between them — 3 chords accompany a huge amount of music; the rough rule (bar on do/mi/sol → I; on sol/ti/re/fa → V; on fa/la → IV); chords under **Ode to Joy / Twinkle / Amazing Grace** — hear the moment the harmony *needs* to change | folk-song harmonisation; `PRD.md` §6.2 "understand what you're playing" |
| H3 | `notes-that-arent-in-the-chord` | ear | NEXT | not every melody note is a chord tone — the **passing tone** (step through), **neighbour tone** (step away and back), **suspension** (held over, resolves down), **appoggiatura** (leap in, step out — Stage 3 taught the *ornament* spelling; this is the *harmonic* idea). The note that clashes and resolves is *supposed* to | non-chord-tone theory (Open Music Theory; Milne, *Fundamentals, Function, and Form*) |
| H4 | `harmony-has-a-rhythm-too` | ear | NEXT | **harmonic rhythm** — the chords change on a pulse (usually once or twice a bar), and the rate **speeds up into a cadence**. A rhythm skill (the reader's strength) pointed at harmony (the growth axis) — ties Stage 2 to Movement I | Berklee "Telling a Story with Harmonic Rhythm"; en.wikipedia "Harmonic rhythm" |
| H5 | `the-dominant-seventh` | ear | NEXT | **V7** = a major triad + a minor 7th on **^5** (sol-ti-re-fa); it contains the **tritone** (^7 + ^4); it resolves **^7→^1** (up) and **^4→^3** (down), collapsing onto I — **the strongest "we're home" gesture in the language**; "the dominant is transportation" (a piece reaches a new key by playing its V7 first) | Rameau's *son fondamental*; standard teaching phrase |
| H6 | `the-other-seventh-chords` | ear | REFERENCE | **card**: maj7 / m7 / **dom7** / half-diminished (ø7) / fully diminished (°7) — recipe + sound; **the dominant 7 is the one that runs Classical music; the rest are a jazz / Romantic vocabulary you'll meet later** | jazz-theory standard (name-only) |

### Movement I — Cadences & phrase

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| I1 | `what-a-cadence-is` | ear | NEXT | a cadence is the chord formula that closes a phrase — **musical punctuation**; the **perfect authentic cadence** (V or V7 → I, melody on ^1) = the full stop, how most pieces end; how to spot one (end of a complete unit, a longer note or rest, the harmony arriving on I or V); one line on the **cadential 6/4** (the I⁶⁴–V–I that decorates so many) | tonal-harmony tradition; *cadere* = "to fall" |
| I2 | `the-other-three-cadences` | ear | NEXT | **plagal** (IV→I, the "Amen", hymn endings) · **half** (ends *on* V — a comma, leans forward) · **deceptive** (V→vi — the swerve); the **Picardy third** aside — a minor-key piece ending on a *major* tonic; Bach does it ~50% of the time, rare by the Classical era ("the symbol tells you *what*, the era tells you *how*") | plagal = "Amen"; Picardy third (flag the era point) |
| I3 | `cadences-in-your-own-tunes` | ear | NEXT | every phrase-end is a cadence — name them: **Ode to Joy** (V→I perfect on phrases 2 & 4; ^2 half-feel on 1 & 3 — that's the question/answer), **Minuet in G** (a **half cadence at the double bar** — Stage 3's "not home yet"), **Amazing Grace**; spot a **modulation** by finding a cadence in a *new* key | `PRD.md` §6.2; closes the Stage-3 binary-form plant |
| I4 | `motif-phrase-and-period` | ear | NEXT | **motif** (2–6 notes, the seed) → **phrase** (~4 bars, closed by a cadence, "one breath") → **period** (two phrases — **antecedent** ends weak / "question", **consequent** ends strong / "answer"); Ode to Joy's first 8 bars are a textbook period; the **melodic sequence** (a motif repeated a step or third away) | Caplin, *Classical Form*; Schoenberg, *Fundamentals of Musical Composition* |
| I5 | `phrases-breathe` | bow | NEXT | **phrase mark ≠ slur** (a long curve over bars = shape & breathe; a short curve = one bow); **lift / retake / ease** at a phrase-end — a grammatical silence; the phrase **arc** (grow to the peak, settle to the cadence); the bow-plan and the breath *serve* the phrase. A read→understand→perform bridge | `LESSONS-FROM-MOZART.md` §1; Leopold Mozart / singing-tone tradition; → Stage 5, Stage 7 |

---

## 4c — Arpeggios, the physics & the rest

### Movement J — Arpeggios

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| J1 | `what-an-arpeggio-is` | left-hand | NOW | a **broken chord** — chord tones one at a time; *arpa* = harp; it **outlines the harmony**; a scale moves by **step**, an arpeggio **skips through chord tones** — and **every melody is some mix of the two** (the two things Movements A and J teach are what a tune is made of) | *arpeggiare*; harp/lute figuration |
| J2 | `the-first-position-arpeggios` | left-hand | NOW | **G / D / A / C major + E minor** one-octave arpeggios, every note fingered; the shape **repeats an octave up** (2-octave G = the shape twice). Authored as `AnnotatedScore` lines | ABRSM / RCM Grade 1–2 arpeggio requirements |
| J3 | `broken-thirds-and-the-dominant-seventh-arpeggio` | left-hand | NEXT | the scale **in thirds** (G-B, A-C, B-D …) — the halfway house between a scale and an arpeggio; the **D⁷ arpeggio** (D–F♯–A–C, adds ^4) and its resolution to G | ABRSM "thirds"; Ševčík / Hřímalý scale-study tradition |
| J4 | `arpeggios-in-real-music` | repertoire | NOW | **Alberti bass** (low–high–middle–high) · the **Mannheim rocket** (a fast rising arpeggio that crescendos) · **the K.216 solo entrance is a G-major arpeggio** — D→B→G is ^5→^3→^1, the tonic triad broken downward: *a shape you practise*, not a wall · Canon in D. Nails the **three numberings** — finger (1–4) ≠ string (I–IV / G-D-A-E) ≠ position (I–VII) ≠ scale degree (^1–^7) | `LESSONS-FROM-MOZART.md` §2; Mannheim school; Domenico Alberti |

### Movement K — The physics

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| K1 | `the-harmonic-series` | ear | NEXT | *(rewrite)* a vibrating string sounds its whole length **plus** halves, thirds, quarters… at whole-number multiples; the intervals arrive **in order of consonance** (octave 2:1, 5th 3:2, 4th 4:3, then the 3rds); **harmonics 4:5:6 spell a major triad** — the honest answer to "why does major sound natural"; a natural harmonic isolates one member | Pythagoras / the monochord; Helmholtz, *On the Sensations of Tone* |
| K2 | `why-your-violin-rings` | ear | NOW | **sympathetic resonance** — play a note matching an open string (or a strong overtone of one) and that string vibrates along, the note *blooms*; the **ring-tone map** in first position (G string G/A/B · D string D/E/G · A string A/B/D); a **free, built-in intonation check** — if it rings, it's in tune with the instrument | Suzuki "tonalization"; Simon Fischer on resonance |
| K3 | `in-tune-is-not-one-thing` | ear | NEXT / REF | **Pythagorean** (pure 5ths — leading tones high, best for melody) / **just** (pure 3rds & 6ths from the overtone series — best for chords & drones) / **equal temperament** (12 identical semitones — the keyboard compromise, every interval but the octave slightly impure); a violinist's melodic F♯ ≠ the piano's F♯ ≠ the F♯ in a D-major chord; **this is also why key characters faded** (E2); the drone/just bridge — Indian classical tuning is just-intonation-like, tuned to Sa *(guard: no shruti counts)* | Ross Duffin, *How Equal Temperament Ruined Harmony*; drone/just bridge (guarded, `RULES.md` #8) |

### Movement L — Other scale families

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| L1 | `the-other-scales-and-the-modes` | ear | REFERENCE | **card**: chromatic · whole-tone (dreamy, no gravity) · major & minor **pentatonic** (folk, blues) · the **blues** scale · octatonic (eerie) — recognise + one anchor each. Plus **the seven modes** — the major scale started on each degree (Ionian … Locrian); same notes, different home, different character; **Dorian / Mixolydian / Lydian** are the three worth knowing (folk & film) | the PDF's §56; Glarean; Persichetti, *Twentieth-Century Harmony* |
| L2 | `a-raga-is-not-a-scale` | ear | NEXT | *(concept lesson — high value for this user; get every claim checkable)* a **thaat** is a parent scale (10 of them, used only to **classify** ragas, never performed); a **raga is not a scale** — it has its own aaroha / avaroha (which can differ and zig-zag), stressed & skipped notes, a characteristic phrase (*pakad*), ornament conventions, a mood (*rasa*), often a time of day; "the notes raga Yaman draws on line up with thaat Kalyan" is fair, "raga Yaman is Lydian" is wrong; **what the systems share** — a fixed home (Sa / tonic), tuning & hearing against a drone, every note a *distance and a tendency* from home | Bhatkhande's 10-thaat system; Venkatamakhin's 72 melakarta; `RULES.md` #8 |

### Movement M — Scale practice

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| M1 | `how-to-practise-a-scale` | left-hand / bow | NOW | **why** first — a scale is a *map of a key under your hand*; practise it and every piece in that key is half-learned; **vocabulary, not punishment**. Then the routine: **read the notes first** → slow, separate bows (listen for each ring-tone) → slurred (2, then 4, then the octave — divide the bow evenly) → **rhythms** (dotted, reverse-dotted, triplets) → metronome (for evenness, not speed) → **up and down** (the descent is where intonation slips) | Simon Fischer, *Scales*; Galamian's rhythm/acceleration method; ArtistWorks / studio consensus |
| M2 | `which-scales-to-practise-now` | ear | NOW | the **NOW / NEXT / LATER / ADVANCED** ladder (NOW: G/D/A/C major + E minor, 1 octave, + arpeggios → NEXT: G major 2 octaves in first position, F/B♭ major, E minor harmonic & melodic → LATER: full set, thirds, chromatic → ADVANCED: 3 octaves, double-stop scales); **ABRSM is a benchmark, not the curriculum**; **scales ≠ sight-reading** (don't let one substitute for the other) | ABRSM Grades Initial–3 scale requirements; the PDF's §58 |

### Movement N — Transposition

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| N1 | `transposing-a-tune` | reading | NEXT | move every note **up or down by the same interval** — the intervals and rhythm stay identical, only the pitch level changes; the tool is **movable-do** ("same syllables, new home"); **on the violin it's a hand-shift** — Twinkle from open D vs open A is the same shape a string over; why you'd do it (a singer's range, a B♭ instrument's part, a hard key made readable). Aside: the violin is a **non-transposing "C" instrument** — "my C is your B♭" | movable-do / Kodály; recaps Stage 1 `the-key-signature` |

### Movement O — Putting it together

| # | Slug | Track | Tag | Teaches | Cite |
|---|---|---|---|---|---|
| O1 | `read-the-harmony-of-a-line` | reading | NEXT | *(capstone — the musicianship-layer counterpart of Stage 3's `decode-a-dense-line`)* take an 8-bar first-position tune (the Ode to Joy period) and for **each phrase** name: the key + its relative minor · the **scale degree** of each melody note · the **chord** the phrase sits on (I? IV? V?) and how you can tell · the **cadence** at the phrase-end · the **phrase structure** (antecedent / consequent, where it breathes). Whole-tune `followPlayback` at the end | `PRD.md` §6.2; the annotated-edition tradition |
| O2 | `the-first-note-of-mozart` | repertoire | NEXT | decode the K.216 solo entrance with Stage-4 tools — **one sharp** → G major (the tune rests on G, not E) · the **stacked chord** = a G-major triad, ^5–^3–^1, rolled bottom-to-top (curved bridge) · the **whole gesture** = the G-major arpeggio you practise · the **"2"** = second finger, first position (not position II, not string 2) · the **F♯–G shake** = ^7→^1, the leading tone leaning in. **read vs perform** — you can read all of it now; playing it in tune with vibrato is Stage 6–7. Uses the same ABC as `mozart-k216-i-entrance` bar 1 | `LESSONS-FROM-MOZART.md` §2; → Mozart module (`RULES.md` R4 forward-pointer) |
| O3 | `the-musicianship-check` | reading | NEXT | *(checkpoint — not a gate, `RULES.md` #10)* a big `<Quiz>` across the whole stage (one sharp → G major / E minor · spell the tonic triad of D major · name C→A · V→I is a… · what scale is E F♯ G A B C D · which chord harmonises a phrase full of sol-ti-re · the relative minor of A major) + one cold "name the key, degrees, chord, cadence" reading example + an honest word on what "done" means here | mirrors Stage 3 `the-score-language-check` |

---

## Movement P — The tunes (repertoire · also on `/practice`)

All **first position**, all **public domain**, authored in our annotated line (`RULES.md` R1),
each the **complete** tune presented phrase-by-phrase (fully labelled) **plus** a whole-tune
unlabelled `followPlayback` playthrough (`RULES.md` R3), each with a per-phrase how-to-play
note **and** a one-line harmony gloss per phrase (the new Stage-4 ingredient), each with a
"the usual mistake" beat.

| # | Slug | Key / pos. | The one thing it's for | Source |
|---|---|---|---|---|
| P1 | `stage-4-scales-and-arpeggios` | G/D/A/C + Em, 1st | the NOW scales + arpeggios (+ D⁷, + 2-octave G) as playable `AnnotatedScore` lines with practice checklists — the stage's "scale system" deliverable (also `REPERTOIRE.md`) | authored |
| P2 | `tune-eine-kleine-nachtmusik` | **G**, 1st | **arpeggios as music** — a rising **G-major (I) arpeggio** "rocket" answered by a falling **D⁷ (V7) arpeggio**; the antecedent/consequent; the single best "hear the harmony" tune in the stage | Mozart K.525, PD |
| P3 | `tune-canon-in-d` | **D**, 1st | the **chord progression you can hear** — I–V–vi–iii–IV–I–IV–V, a 2-bar ground repeated; circle-of-fifths motion; a melody floating on changing harmony | Pachelbel, PD (author a simple first-position line over the ground) |
| P4 | `tune-scarborough-fair` | **E Dorian** (E minor, raised 6th = C♯), 1st | **modal colour** — a minor key with one note lifted; the period pair; a minor tune among the majors. Teach it in E Dorian *and* plain E natural minor and hear the C♯ change it (= the Movement L lesson) | trad. English, PD |
| P5 | `tune-fur-elise-theme` | **A minor**, 1st | minor key **+ the leading tone you can hear** — the E–D♯ oscillation (D♯ = leading tone of the dominant); question/answer period | Beethoven, PD |
| P6 | `tune-vivaldi-spring-theme` | **E major** (or transpose to **D** for the hand), 1st | a **ritornello** (a returning theme — recap Stage 3 form) + an **f/p echo** (recap Stage 3 dynamics) + arpeggio & trill figures | `docs/source/vivaldi-spring-easy.pdf` — the *theme* only; the full 1st movement stays in the Vivaldi module |
| P7 | `tune-aura-lee` | **C major**, 1st | the **C-major first-position hand** — low 2 on D and A, 3rd-finger C on the G string; a **IV-heavy** hymn harmony; gives C major (the least-drilled NOW key) a real tune | Poulton (1861), PD |

**Release mid-stage** where the notes are covered (`RULES.md` R2): the scale/arpeggio set with
Movement M · *Eine kleine* with Movement J · *Für Elise* / *Scarborough Fair* with Movement D ·
*Canon in D* with Movement H · *Aura Lee* with `the-keys-the-violin-loves` / the C-major scale.

---

## Build order & wiring

1. **4a first** (A–E), then **4b** (F–I), then **4c** (J–O), movement by movement. Tunes
   released as their movement lands.
2. Each lesson: `content/lessons/<slug>.mdx` + `content/lessons/registry.ts` entry +
   `lib/curriculum.ts` `LESSONS` entry (`published: P`). The 15 existing Stage-4 slugs are
   **re-pointed or renamed** per the table above; `major-and-minor.mdx`,
   `parallel-and-relative.mdx`, `your-scale-practice-order.mdx` are **deleted** (renamed slugs).
3. **No new components** (`RULES.md` #17). `<CircleOfFifths>`, `<NotatedExample>` (+ `labels`,
   `followPlayback`, `howToPlay`), `<Quiz>`, `<Diagram>`, `<Margin>`/`<Cite>`, the drone bar —
   all exist. Chord examples use a **combined label** (`{ name: "G + B + D", string: "…",
   finger: "…" }`) like the Stage-3 `[G,DB]` pattern. `AnnotatedScore` for scales/arpeggios/tunes
   is `<NotatedExample>` with `followPlayback` — no new component needed.
4. `docs/NOTATION-COVERAGE.md` — add the Stage-4 reading vocabulary: **scale-degree carets**
   (`^1`–`^7`), **roman numerals** (I, ii, V7, vii°), **figured-bass figures** (6, 6/4),
   **chord symbols** (Cm, C7, Cø7), the **double sharp/flat** glyphs (𝄪 𝄫 — confirm not already
   listed). Each → its lesson slug.
5. `CLAUDE.md` status + docs index; `THE-PATH.md` §6 row; `PDF-MAP.md` Part V rows → `done`;
   `CURRICULUM.md` §Stage 4 marker; `REPERTOIRE.md` scale system + the 5 new tunes.
6. `npm run build` (target: green), `npm run lint`, `npx tsc --noEmit`. Browser spot-check a
   lesson from each movement (render + play + labels aligned; `RULES.md` #1, R5) — especially
   the drone-drill lessons (F4, F5, K2) and the chord-stack examples (G, H, I1–I2).
7. Every music fact double-checked against `stage-4-research.md`'s sources before it ships
   (`RULES.md` #8). The **Indian-music claims** (A3, D2, K3, L2) get the strictest check —
   the user *can* catch a wrong one.

## The bar every lesson clears (`PRD.md` §7 / `CONTENT-STANDARD.md` §7)

- **Six beats**: idea → see it → hear it → try it → the usual mistake → where it comes from.
- **Concept/skill lesson: 2–4 play-arounds** (pattern / variation / contrast / transfer) then a
  real line or tune. REFERENCE **cards** (E1, H6, L1) are exempt from the count but still show
  the idea *in* notation, not just a table.
- **Every pitched example labels every note — name + string + finger.** Chord stacks use a
  combined label. Rhythm-only / single-pitch examples say so in the caption.
- A cited lineage aside (`<Cite>`) on every concept and tune lesson.
- **`read` / `understand` / `perform` stated wherever they differ** — Stage 4 is *understand*
  and *read*; performing chords, arpeggios in tempo, vibrato is Stage 6–7.
- **The "hear it" beat carries real weight this stage** — it's the ear thread. Where a lesson
  has an audible idea (a cadence, a chord quality, a scale degree, an interval), the reader
  must be able to *recognise it by sound*, not just name it on the page. That's the Stage-8
  ear-gym seed and `PRD.md` §6.1's load-bearing thread.
- Hands-free: readable from a music stand, one control to press.

## What must not be cut (the load-bearing set)

- The **ear thread** — `hearing-the-scale-degrees` (F4), `tuning-by-ear` (F5), `why-your-violin-
  rings` (K2). `PRD.md` §6.1.
- The **K.216 bridge** — `the-first-position-arpeggios` (J2), `arpeggios-in-real-music` (J4),
  `the-first-note-of-mozart` (O2), the numeral-tangle content. `LESSONS-FROM-MOZART.md` §2 and
  the user's explicit ask.
- The **harmony spine** — `the-chords-of-a-key` (H1), `the-dominant-seventh` (H5),
  `what-a-cadence-is` (I1).
- **`a-raga-is-not-a-scale`** (L2) — the accurate bridge to the user's own tradition.
- **`read-the-harmony-of-a-line`** (O1) — the capstone that makes every later repertoire lesson
  writable.
