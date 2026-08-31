# from-zero-to-mozart

An interactive violin-learning website — from *Ode to Joy* to **Mozart Violin Concerto No. 3 in
G major, K.216**. A rebuild of a 193-page PDF course as something calm, readable, and usable
while you actually have the instrument in your hands.

**Start here:** [`CLAUDE.md`](./CLAUDE.md) — project guide.
**Then:** [`docs/`](./docs) — plan, curriculum map, repertoire spine, research, decisions, open
questions.

## Dev

```bash
npm run dev     # http://localhost:3000
npm run build   # static build
npm run lint
```

Next.js 16 · TypeScript · Tailwind v4 · deployed on Vercel (static). Notation via `abcjs` /
`VexFlow` (added during the build phase).

## Status

Phase 0 — scaffolded, docs written. Next: design lock + one lesson end-to-end as the feel
prototype, then Stages 0–5 (PDF Parts I–VI).
