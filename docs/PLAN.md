# Violin: 0 → Mozart K.216 — a teacher in a website

## Context

The user is an adult beginner (tabla / North-Indian-classical background; rhythm strong, Western
pitch/harmony/reading weak and a growth goal — [[user-music-background]]). They generated a
193-page violin reading course with ChatGPT (`violin_reading_book_expanded_year1_edition (1).pdf`,
in the working dir). The curriculum design is good; the ReportLab build is not — ~70% whitespace
per page, unreliable music notation, padding, glyph glitches ([[violin-reading-book-project]]).

**Goal:** rebuild it as a violin-learning website — Vercel-hostable — that takes them from
*Ode to Joy* to **Mozart Violin Concerto No. 3 in G major, K.216**, and to real intermediate
fluency (sight-read and play in positions 1-5) on the way. Everything in the PDF is preserved
and deepened; much is added. Long-term aim: read Mozart → play Mozart → make their own
interpretive choices.

The original PDF stays untouched; it becomes the "nothing lost" checklist.

### What the user has explicitly asked for (steering — overrides generic instincts)

- **Do not over-engineer. Simplest possible UI.**
- **Version 1 = the research + a faithful, beautiful conversion of the PDF into a usable
  website.** Not a platform. Not 11 interactive widgets.
- It should **feel** the most amazing *from the user's side* — calm, trustworthy, focused — not
  be technically impressive.
- **Low-interaction by design.** Both the user's hands are on the violin while learning. A page
  must be *readable and listenable* with almost no clicking. Nothing gates progress behind
  input. Audio plays a whole example on one press.
- It must **feel like a real classical teacher** — learn the way a Conservatoire / Suzuki
  student, or Hilary Hahn, or Mozart himself, would have learned.
- **Foundation → intermediate → the giants** (Paganini, Vivaldi, Bach, Mozart…). Build the
  foundation and a real intermediate stage *before* the giants. **Curation is the hard part and
  the point.**

---

## The pedagogical spine (how the giants actually learned)

The site's authority comes from teaching in a real lineage, not from features:

- **Leopold Mozart — *Versuch einer gründlichen Violinschule* (1756)** — literally how Mozart
  was taught. Its philosophy is our north star: *solid technique + musicianship over virtuosity*;
  *"beat the rhythm carefully, keeping the quarter-notes in mind, before taking the violin in
  hand"* (rhythm-first — which also plays to the user's strength and the konnakol idea); three
  chapters on 18th-century ornamentation; positions to 7th, double stops, shifts; drawn from the
  Italian school (Tartini).
- **The French school** — Baillot / Rode / Kreutzer (the *Méthode du Conservatoire*, and the
  étude bibles still used today).
- **Auer** (*Violin Playing as I Teach It*, 1921), **Flesch** (*The Art of Violin Playing*),
  **Galamian** (*Principles of Violin Playing & Teaching*) — the modern technical canon;
  Galamian's tone-production and bow model, Flesch's scale system.
- **Suzuki** — sequence and "mother-tongue" listening; **Hilary Hahn** — Suzuki start →
  Klara Berkovich (two lessons/week, Wohlfahrt, phrasing from day one) → Curtis/Brodsky
  (Kreutzer, Ševčík, Gaviniès, Rode, Paganini). Hahn's "100 days of practice" ethic.
- Modern reference: **Simon Fischer** (*Basics*, *Practice*, *The Violin Lesson*), Violinspiration,
  ABRSM / RCM graded syllabi.

Every concept is framed the way a studio teacher frames it, and where useful is traced to its
source ("Leopold Mozart tells his students…", "Galamian's picture of tone is…").

### Where K.216 sits

Roughly a 7-9 year path, condensed by adult focus: absolute beginner → ~ABRSM Grade 8 / RCM
Level 8-10 / Eastman Level V / Suzuki Books 1-7 + a student-concerto ladder → **then** K.216.
K.216 is technically upper-intermediate/early-advanced but musically diploma-level. The site
teaches to "you can **read** the whole score and **play** it slowly and honestly" — "read" and
"perform" are tracked as separate milestones everywhere.

Research consulted: Eastman Community Music School curriculum (Levels I-VI); Violinspiration
(Suzuki overview, étude list, bowing techniques, note reading); ABRSM & RCM syllabus structure;
Hilary Hahn interviews; Leopold Mozart Violinschule (Wikipedia / IMSLP / Britannica); violin-
pedagogy comparison literature (Auer/Flesch/Galamian); violinist.com étude-order threads;
Trinity/ABRSM music-theory scope.

---

## PART A — Curriculum content map

Ten stages. Each carries five parallel tracks — **Reading / Left hand / Right hand (bow) /
Ear-musicianship / practised repertoire** — with technique tagged **NOW / NEXT / LATER /
REFERENCE**. Two hard gates: **Foundation complete** (end of Stage 5) and **Intermediate
complete** (end of Stage 8) — the giants come after. Reference libraries sit outside the sequence.

### Stage 0 — Orientation & setup (before a note)
Parts of the violin & bow (full vocabulary). Sizing, shoulder/chin-rest fit, rosin, case, care,
humidity, strings. Posture (standing/sitting, alignment, breathing). Violin hold (collarbone/jaw,
no left-hand support). Left-hand frame (thumb, knuckle line, no squeeze). Bow hold
(Franco-Belgian default; Russian/German noted). Tuning: pegs vs fine tuners, A440, tuning in
5ths, using a tuner; open strings G-D-A-E. Bow geography: frog/tip/middle/halves, down-bow ⊓ /
up-bow V, contact point / sounding point (Galamian's lanes), the straight-bow "highway". First
sound: open-string bowing, weight vs pressure, string-crossing arm planes. Practice hygiene,
warmup, tension checks, injury prevention, how long / how often. The 5 tracks; NOW/NEXT/LATER/
REFERENCE; "read vs perform".

### Stage 1 — First position on the map + the staff  *(absorbs PDF Parts I, II)*
Staff, treble/G clef, lines & spaces, open-string landmarks, ledger lines (G-string below the
staff). Pitch = vertical position; duration = note shape. Musical alphabet cycling A-G; octaves.
**"Which B? which C?"** register problem; C4/C5 as *later* labels. Finger numbers 0-4 = fingers
not pitches, always paired with a string. Low/high fingers (semitone geometry, no frets):
low1/1, low2/high2, 3/high3. Every first-position note **string by string (G, D, A, E)**:
natural-note ladders + full chromatic placement tables. Same written pitch, more than one
fingering; **open-string same-pitch checks (G-str 4 = open D; D-str 4 = open A; A-str 4 = open
E)** — verified. Accidentals ♯ ♭ ♮ (meaning + which finger moves). Key signature (the ♯ after
the clef); accidentals within a bar + bar-line reset; order of sharps/flats. Intonation intro:
ear + ringing-tone resonance + external check; no vibrato while learning location. **Movable-Sa
↔ fixed-letter bridge (new for this user):** tonic/Sa as movable function vs G-A-B as fixed
names; movable-do solfège as the bridge. Reading scaffold Stage A→B→C; worksheets + answer
pages; drills (open strings, per string, mixed, all landmarks) each try-page + answer-page.

### Stage 2 — Rhythm: when & how long  *(absorbs PDF Part III)*
Leopold-Mozart-style: **rhythm before the instrument.** Pulse/beat/tempo. Note anatomy (head,
stem, flag, beam). Values whole→32nd; dotted & double-dotted; **duration-dot vs staccato-dot**.
Rests of every value; keeping pulse through silence. Beams vs flags; **beamed notes vs double
stops** (Vivaldi confusion: sequential vs simultaneous); tremolo as a third case. **Ties vs
slurs** (slur = one bow on violin). Time signatures 4/4, 3/4, 2/4, 2/2 ₵, 3/8, 6/8, 9/8, 12/8;
simple vs compound; C and ₵. Counting: 1-&, 1-e-&-a — **plus konnakol / tabla-bol counting as a
first-class option** (leans on the user's strength). Subdivision, syncopation, anacrusis,
triplets & tuplets, hemiola, swing vs straight. Bar lines, endings, repeats, D.C./D.S./Coda/Fine,
multi-bar rests. Rhythm worksheets (quarter+eighth, eighth+sixteenth, dotted, mixed) try +
answer.

### Stage 3 — Everything else on the page: score symbols  *(absorbs PDF Part IV)*
Tempo words (It./Ger./Fr.) + modifiers + rit./accel./rubato/a tempo + metronome marks.
Dynamics pppp-ffff, hairpins vs words, sf/sfz/fp, subito, morendo, niente. Articulation:
staccato, staccatissimo, tenuto, accent >, marcato ^, fermata, breath mark, caesura. Bow marks
⊓ V, retake. String words: arco, pizz., col legno, con/senza sordino, sul G/D/A/E, sul
ponticello, sul tasto. Repeats & navigation in full (1st/2nd endings, D.C. al Fine, D.S. al
Coda, segno, coda, rehearsal marks). **Ornaments** with **Baroque vs Classical realisation**:
trill (± accidental, from above/below), mordent (upper/lower), turn (+ inverted/delayed), grace
notes (acciaccatura vs appoggiatura), tremolo — grounded in Leopold Mozart's three ornament
chapters. Double stops / chords notation; rolled chords; divisi. Harmonics notation (° /
diamond); LH pizz +. Editorial vs composer markings; roman-numeral positions ≠ finger numbers.
Glissando/portamento; 8va/8vb/loco; clef changes. Score-language quiz + answers (from PDF,
expanded, real glyphs).

### Stage 4 — Scales, keys, major & minor: musicianship I  *(absorbs PDF Part V)*
What a scale is; tonic/tonal centre; scale-degree names. Whole/half steps; major formula
W-W-H-W-W-W-H. Why G major has one sharp (derived). **Circle of fifths.** Minor: natural /
harmonic / melodic; parallel vs relative; relative-minor rule. The 12 major keys — practical
spellings; natural-minor reference set; enharmonics. **Intervals** (number + quality, inversion,
consonance) — with the ear-training hook. **Triads** (M/m/dim/aug), inversions, diatonic triads
I-vii°, primary chords I-IV-V, dominant 7th. **Cadences** (perfect, plagal, half, deceptive);
phrase/period, antecedent/consequent. Arpeggios; broken thirds. Other scale families (reference):
chromatic, whole-tone, pentatonic, blues, modes, octatonic. Scale practice order (NOW G/D/A/C
1-oct → NEXT E-minor, 2-oct G, F, B♭ → LATER full set, 3-oct, thirds, chromatic, double-stops).
Harmonic series, overtones, sympathetic resonance, just vs equal temperament, ringing tones for
intonation. Transposition basics. Scale-reading pages (G/D/A/C) with beginner-fingering answers.

### Stage 5 — The bow: core strokes & tone  →  **FOUNDATION GATE**  *(absorbs PDF Part VI bow content)*
Bow physics: speed × weight × contact-point (+ hair amount, angle, straightness); the
trade-offs (Galamian model). Tone: son filé (frog→tip), whole-bow control, bow distribution,
resonance point. String crossings: arm planes, wrist/finger smoothing, bariolage. **Core NOW:**
détaché (+ grand/accented/lancé/porté), legato/slur, martelé. **NEXT:** staccato (on-string &
one-bow up/down-bow staccato), portato/louré, collé, brush, hooked bowing, retakes. **NEXT/
LATER:** spiccato, sautillé, the spiccato↔sautillé continuum. **LATER (reference-first):**
ricochet/jeté, flying staccato/spiccato, fouetté, viotti stroke, chopping. **Colour:** tremolo,
sul ponticello, sul tasto, col legno, au talon. **Bow-stroke atlas** — one *real* card per
stroke (name, stage, notation, sound, how to practise, what NOT to confuse it with, video). No
copy-pasted paragraphs (the PDF's worst padding).

### Stage 6 — Left hand beyond first position
Full first-position map revisited; 4th-finger security; extensions/contractions. What a
**position** is (whole-hand location ≠ finger). **Shifting** mechanics: release thumb, arm
leads, guide/ghost notes, same-finger vs new-finger shifts, shift on old vs new bow, Classical
vs Romantic portamento, silent shifts. Positions one at a time: **3rd** (usual first shift),
**2nd**, **4th** (K.216 relevance), 5th, 6th, 7th; half position; position tables per string.
**Double stops** progression: open+open → open+stopped → stopped+stopped; 3rds, 6ths, octaves,
fingered octaves, 10ths (ref). **Chords** (3-/4-note, breaking/rolling, curved-bridge
constraint). **Trills** (relaxed lift/drop, base pitch, Baroque vs Classical starts, chains).
Ornament execution physically. **Harmonics** natural (nodes) & artificial (touch-fourth).
Left-hand pizzicato, glissando, finger substitution.

### Stage 7 — Vibrato & expression
What vibrato is (oscillation *below* pitch back to centre; width vs speed; expression, not a
fix). **Readiness gate** (in tune, relaxed, first position stable). Types: arm, wrist, finger —
anatomy of each; this course teaches arm **and** wrist, no dogma. Prep exercises (silent
rocking, polishing, metronome pulses 1→2→3→4/beat, all fingers, all strings, the knock).
**6-week micro-plan** (from PDF) + honest "months, not weeks". Integration: start/stop
deliberately, vibrato on long notes in a simple melody, varying width/speed. Expression:
**phrasing** (shape, direction, breath, arrival/departure notes), dynamics as line,
agogics/rubato, tone colour, character words, listening & imitation.

### Stage 8 — Sight-reading & ear training  →  **INTERMEDIATE GATE**  *(absorbs PDF Part VII)*
**20-second pre-read** routine. **Four-layer rescue** (pitch / rhythm / left hand silently /
air-bow, then combine). Progressive scaffold removal A→E formalised. Interval & pattern reading
over note-by-note. Landmark reading; reading ahead; "keep going, recover on the downbeat".
Rhythm-first sight-reading. Graded sight-reading cards (20+ levels), each try + answer + pass
condition. **Ear-training gym (the user's weak axis — big investment):** pitch matching & drone
work, relative pitch, interval recognition (song anchors), **functional / movable-do
scale-degree ear training** (bridges from Sa), chord-quality & cadence recognition, short
melodic & rhythmic dictation, "which note did the violin play", tuning your note against open
strings & drones. Transcription mini-projects.

### Stage 9 — Repertoire journey: Ode to Joy → K.216  *(absorbs PDF Parts VIII, IX; see Part B)*
Tiered song/piece bank (100+ songs, 20+ famous works, étude ladder, scale system). Culminates
in the **Mozart K.216 deep-study module**.

### Mozart K.216 deep-study module  *(absorbs & expands PDF Parts VIII + IX)*
The work: G major, 1775, Salzburg ("Strassburg"); movements Allegro / Adagio / Rondeau: Allegro;
form of each; orchestration; **cadenza traditions** (Joachim, Auer…). Editions & why they
differ. **Full first-page decode:** every mark categorised (pitch / rhythm / bow-articulation /
dynamic / navigation / editorial). First-system annotated decoder with a *real* legend.
Milestones: (1) category-only pass, (2) pitch landmarks + apply F♯, (3) rhythm-only clap, (4)
technique-triage table (read now? perform now?). Passage studies: opening solo, scalar runs,
the **fourth-position passage**, lyrical second theme, ornaments/trills, development, double
stops, recap, into the cadenza. Movement practice plan (slow, chunked, rhythms, tempo ladder).
**Listening study:** Hahn, Grumiaux, Oistrakh, Perlman, Szeryng, Mutter — comparative choices;
"your own interpretation" vs recomposition. Stylistic context: Classical-era bowing, messa di
voce, vibrato as ornament vs continuous, gut vs steel, Mozart's own playing & letters.

### Cross-cutting reference libraries (always open)
Searchable **glossary** · visual **symbol dictionary** (point → name + meaning + example) ·
**fingerboard** & first-position / all-positions charts · **scale & arpeggio reference** (all
keys/forms, fingerings + audio) · **interval & chord reference** (audio) · **circle of fifths** ·
**bow-stroke atlas** · **technique index** · **repertoire database** (filter by level / key /
position / skill / era / length / "was in the PDF") · **étude index** · **composer & performer
mini-encyclopedia** + pedagogy lineages · **practice science** (deliberate practice, chunking,
slow practice, interleaving, rhythms method, mental practice, the 20%-miss rule, "100 days of
practice", plateaus) · **setup & health** (holds, rest fitting, warmups, stretches, injury &
hearing protection, care, sizing) · **tools** (tuner / metronome / drone / ear-gym) · "when
you're confused, jump here" index · **sources & further study**.

---

## PART B — Repertoire spine

- **Tier 0 (open strings + first fingers):** Hot Cross Buns, Mary Had a Little Lamb, Twinkle,
  Lightly Row, Song of the Wind, Go Tell Aunt Rhody, French Folk Song, O Come Little Children,
  May Song, Long Long Ago, **Ode to Joy**, When the Saints, Jingle Bells, Au Clair de la Lune.
- **Tier 1 (full first position, G/D/A/C):** Suzuki 1 (Allegro, Perpetual Motion, Andantino,
  Etude, Minuets 1-3, Happy Farmer, Gossec Gavotte), Judas Maccabaeus chorus, Musette, Hunter's
  Chorus, Brahms Waltz, Handel Bourrée, Beethoven Minuet in G; folk/fiddle (Amazing Grace,
  Danny Boy, Ash Grove, Scarborough Fair, Greensleeves, Ashokan Farewell); Canon in D
  (simplified), Für Elise theme; film in first position (Star Wars, Hedwig's Theme, My Heart
  Will Go On, Married Life, Over the Rainbow); pop **targets** → licensed arrangements. **The
  "100+ songs" bank lives here — graded & tagged by key/position/skill.**
- **Tier 2 (3rd position, vibrato starting):** Suzuki 2-3 (Paganini theme, Gavottes, Boccherini
  Minuet, Dvořák Humoresque, Bach Gavotte in g), Vivaldi a-minor (1st mvt), Rieding Op.35 /
  Op.21, Küchler Concertino Op.11/Op.15.
- **Tier 3 (positions 1-3 fluent; student concertos + Baroque sonatas):** Seitz Concertos 2 & 5,
  Accolay No.1 a-minor, Vivaldi g-minor, Bach Double (1st vln), Fiocco Allegro, Handel Sonatas
  (D/A/F), Corelli La Folia, Monti Csárdás, de Bériot Scène de Ballet.
- **Tier 4 (positions 1-5, 3-oct scales, Classical style):** Bach a-minor Concerto BWV 1041,
  Haydn G-major Concerto, Viotti No.23, Kabalevsky Concerto, Bach E-major Concerto, Vivaldi
  "Spring", Kreisler Sicilienne & Rigaudon.
- **Tier 5 — destination:** **Mozart Violin Concerto No. 3 in G, K.216** (deep module).
- **"20+ famous things" thread** across tiers (listen → what makes it work → real level →
  can-you-read-it milestone): Ode to Joy, Canon in D, Spring, Winter Largo, Eine kleine
  Nachtmusik, Air on the G String, Meditation from Thaïs, Salut d'Amour, Csárdás, Hungarian
  Dance No.5, Humoresque, The Swan, Schindler's List, Gabriel's Oboe, Bach Double, Paganini
  Caprice 24 theme, Bruch opening.
- **Étude ladder (parallel from Stage 2):** String-Builder/Sassmannshaus → Wohlfahrt Op.45 Bk 1
  (+Op.54) → Sitt Op.32 / Dancla Op.84 → Kayser Op.20 → Trott double-stops → Ševčík Op.1/Op.2/
  Op.8/Op.9 + Schradieck → Mazas Op.36 Bk 1 → Dont Op.37 → Kreutzer 42. Each mapped to the
  skill it isolates.
- **Scale system (parallel):** graded requirements (ABRSM/RCM style) → Hřímalý → Flesch/Galamian;
  1-oct → 2-oct → 3-oct; separate & slurred; arpeggios; chromatic; broken 3rds; double-stop
  scales.

---

## PART C — The website (deliberately small)

**A page is a lesson from a teacher you read once and listen to, then put your hands back on
the violin.** Not an app. Not a dashboard.

### Design principles (in priority order)

1. **Hands-off during practice.** Core loop is *read → press play once → practise with the
   instrument*. **One idea per screen, short enough that you never scroll mid-practice.** One
   big primary control per page ("play this example", spacebar). No drag, no multi-step widgets,
   nothing that needs a mouse while the violin is in your hands. No auto-scroll, no read-aloud,
   no TTS — the user explicitly does not want a "voice thing".
2. **Nothing gates progress.** No "answer to continue", no streak guilt, no locked lessons.
   Worksheets are *offered*; answers are one tap away. The user decides pace.
3. **Calm and generous, sized for a music stand** — big readable type, but not the PDF's empty
   70%. Each screen is one complete thought. "Short" means *one idea*, not *thin* — a lesson
   must still teach that idea completely (the six beats, `CONTENT-STANDARD.md`). Annotated-line
   lessons are the deliberate exception: they're read at a desk, not mid-practice, so they may
   run long and scroll.
4. **The teacher's voice = plain, natural, casual writing.** The way a good teacher actually
   talks to you in a lesson — direct, warm, specific, honest about what's hard, no textbook
   stiffness, no filler. Recurring cues: *what to do now*, *what a real teacher would watch
   for*, *where this comes from* (Leopold Mozart, Galamian, Suzuki…). Written prose only.
5. **Notation and the fingerboard are the only "graphics".** Correct by construction. Everything
   else is type and space.
6. **Feels expensive, does little.** Premium-calm design (Linear / Vercel / Apple family);
   restrained palette; notation ink as the accent; light + dark. Motion only where it aids
   comprehension (Apple-design springs, `prefers-reduced-motion` honoured).

### Stack

Next.js (App Router) + TypeScript + Tailwind on **Vercel**. Content as **MDX** + a typed
`curriculum.ts` manifest (Stages → Units → Lessons; each lesson `type`, `tags`, `prerequisites`).
**Fully static (SSG). No database, no accounts in v1.** Progress (done / needs-review) in
`localStorage` only, and it is a convenience, never a gate.

### Notation & audio (the two things that must be excellent)

- **abcjs** — examples authored in ABC text; **one-press playback** of the whole line, adjustable
  tempo, optional note-highlight. Correct by construction — fixes the PDF's #1 defect.
- **VexFlow** — the handful of bespoke diagrams (fingerboard map, low/high finger geometry,
  beams-vs-stack, ledger lines).
- **Web Audio** — a simple, always-available **tuner · drone · metronome** bar (collapsible;
  the only persistent UI). Soundfont violin timbre (`soundfont-player`) so examples sound like a
  violin, not a beep.
- **OpenSheetMusicDisplay + MusicXML** — deferred to Phase 3+, only for full repertoire scores.

### Interactive elements (few, all optional, none required)

- `NotatedExample` — staff + one play button + tempo + a real name/string/finger label stack
  under each note (matches the source book; `reveal="shown"|"hidden"` for teaching vs.
  worksheet). *Built.*
- `AnnotatedScore` (Phase 1.5) — one real line of music, every note tap-linked to a commentary
  entry beneath it, one-press playback with a moving cursor, optional step-through "walk" mode.
  The "explain every note like a concert sheet" component. See `docs/CONTENT-STANDARD.md` §5.
- `Quiz` — recognition questions with per-item / all-at-once reveal. *Built.*
- `Fingerboard` — static diagram by default; *optionally* tap a note to see where it sits.
- `Worksheet / Answer` — folded into `NotatedExample`'s `reveal="hidden"`.
- `EarGym`, `RhythmTrainer`, faceted `RepertoireBrowser` — **Phase 3+**, and always a side-trip.

---

## PART D — Content sourcing & copyright

Original exercises authored in ABC / MusicXML. Public-domain scores from **IMSLP**. Suzuki
*sequence referenced, never reproduced*. Modern pop/film listed as **targets** → link to
licensed arrangements (the PDF's stance). MuseScore.com for design reference and for locating
public-domain arrangements (check each score's licence before embedding). Every factual claim
cited; **every fingering/pitch carried from the PDF re-verified** ([[violin-accuracy-rigor]]).

---

## PART E — Build phasing

- **Phase 0 (now):** finish the research gaps (Part F); finalise `curriculum.ts`; scaffold the
  Next.js repo; lock the design language once (taste-skill `high-end-visual-design` +
  local `apple-design` + `design-pass` → `DESIGN_LOCK.md`); build **one lesson end-to-end**
  (notation + one-press audio + casual teacher prose + short hands-free page) as the feel
  prototype, plus the `NotatedExample` component and the tuner/drone/metronome bar.
- **Phase 1 — the PDF, made real (v1, the deliverable the user asked for):** every section of
  the 193-page PDF converted into clean, plainly-written, correctly-notated web lessons —
  **Stages 0-5** (Setup → First position/staff → Rhythm → Score symbols → Musicianship I → The
  bow), covering **PDF Parts I-VI**. One-press audio on every musical example. Deployed to
  Vercel. — **Status: all 90 Stage 0–5 lessons drafted and live.** They are an accurate
  skeleton but under-taught — see Phase 1.5.
- **Phase 1.5 — the content-quality campaign (current, blocking):** the drafted lessons are an
  accurate skeleton but under-taught, and most notated examples don't label every note's
  string + finger. **No new stages or features until every built lesson meets `RULES.md`
  1–7.** Per `docs/CONTENT-STANDARD.md` §6: research-first, then rewrite **stage by stage,
  0 → 5**, to the six beats, with every pitched example fully labelled and every concept
  lesson carrying 2–4 examples + a real tune/pattern to play. Then `AnnotatedScore`
  (note-by-note walkthrough) + the first annotated lines. — *Design direction chosen and
  built: Direction A ("The Critical Edition"), see `DESIGN_LOCK.md` / `DESIGN_REVIEW.md`. The
  design side of this phase is essentially done; what remains is content.*
- **Phase 2:** Stages 6-8 (positions/left hand, vibrato/expression, sight-reading + ear-gym) +
  reference libraries v1 + the Vivaldi "Spring" module (PDF Part VIII).
- **Phase 3:** Stage 9 repertoire journey — the 100+ song bank, étude & scale ladders, the
  famous-pieces thread, and the **Mozart K.216 deep module** (PDF Part IX). Optional
  accounts + cloud progress if wanted by then.
- **Phase 4:** polish (design-pass), full content QA against sources, accessibility, performance,
  offline/PWA, print stylesheet.

---

## PART F — Research still to do (Phase 0)

- Exact ABRSM + RCM scale/arpeggio requirements grade by grade.
- Full graded song list with keys & positions (target 120+): fiddle, world, film, PD classical,
  holiday.
- Positions 2-7 note tables per string; re-verify every fingering carried from the PDF.
- Leopold Mozart Violinschule + Baroque/Classical ornament realisation specifics (read the
  primary source via IMSLP).
- Confirm public-domain status of each score before embedding; check MuseScore licence terms.
- Whether the user still has the Vivaldi *Spring* screenshot and the Mozart K.216 PDF.

---

## Verification

- Every notated example: render + play + assert the ABC matches the stated pitch/finger
  (scripted check where possible).
- Cross-check curriculum claims against ≥ 2 sources; theory facts against a syllabus.
- The **hands-free test**: a lesson screen is short enough to read in place, and the only thing
  you ever press is one "play the example" control.
- Lighthouse (perf / a11y), keyboard nav, `prefers-reduced-motion`, light/dark, music-stand
  legibility.
- Vercel deploy previews per phase; user tests on device, violin in hand.
- Map every section of the original PDF → its lesson(s); the PDF is the "nothing lost" checklist.

---

## Decisions locked (2026-09-01)

- **Next.js on Vercel**, fully static, no accounts / no database for v1.
- **v1 scope = PDF Parts I-VI as Stages 0-5.**
- **No voice / narration / TTS / auto-scroll.** Plain, natural, casual written prose only.
- Design language locked once via `taste-skill` (`high-end-visual-design`) + local `apple-design`
  + `design-pass`.
- Phase 0 builds one lesson end-to-end as the feel prototype before mass production.

## Still needed from the user (not blocking Phase 0)

- Do they still have the **Vivaldi *Spring* screenshot** and the **Mozart K.216 PDF** used in
  the original? Needed to anchor Stages 8-9 / the Vivaldi + Mozart modules (Phase 2-3, not v1).
