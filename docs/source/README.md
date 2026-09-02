# Source material

Reference inputs for the rebuild. Not shipped as-is — they're what the lessons are built from
and checked against.

| File | What it is | Used by |
|---|---|---|
| `original-violin-book.pdf` | The 193-page "Violin Reading Book – Expanded Year-One Edition" the user generated with ChatGPT. The thing being rebuilt. Curriculum good, production poor. | everything — see `../PDF-MAP.md` |
| `original-violin-book.txt` | `pdftotext -layout` extract of the above. Note: music glyphs (♯ ♭, clefs) come through as `�` in the extract but **render fine in the actual PDF** — verify against the PDF, not the text, for notation. | content drafting |
| `vivaldi-spring-easy.pdf` | "Vivaldi – Spring (Easy Version with tabs)" — a beginner arrangement of the *Spring* (Four Seasons) opening. The real line the user got stuck on in the original chat. | Stage 8 + the **Vivaldi module** (Phase 2) |
| `When The Saints Go Marching In.pdf` | A first-position violin arrangement of the spiritual — D major, 4/4, finger numbers on the staff, chord letters. User-supplied for Stage 2. Transcribe into our annotated line (never shown as-is); verify note-by-note against ≥2 references. | **Stage 2** tune I12 + the pickup lesson (E6) |
| `violin-concerto-no3-in-g-major-k216-i-allegro-...-wo-cadenza.mxl` | MuseScore study arrangement of K.216 mvt I (abridged — solo line close, tuttis compressed). `.gitignore`d. `music21`-readable. | Mozart module (Phase 3) — see `../stage-plans/mozart-k216.md` |
| `mozart-k216-violin-part.pdf` | The solo violin part of Mozart Violin Concerto No. 3 in G, K.216. The destination score. Identify the edition before using its fingerings/bowings. | the **Mozart K.216 module** (Phase 3) |
| `mozart-k216-full-score.pdf` | Full orchestral score of K.216 — for context, form analysis, and the "Tutti vs Solo" reading. | Mozart module (Phase 3) |

Copyright: `original-violin-book` is the user's own. The Mozart and Vivaldi works are
public domain; specific modern editions/arrangements may carry editorial rights — we use them
as reference and teach from public-domain notation, per `../DECISIONS.md`.
