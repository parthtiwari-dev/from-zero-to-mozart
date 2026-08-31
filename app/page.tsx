const STAGES: { n: string; name: string; blurb: string }[] = [
  {
    n: "0",
    name: "Setup",
    blurb: "The instrument, posture, the hold, tuning, your first open string.",
  },
  {
    n: "1",
    name: "First position & the staff",
    blurb: "Every note on every string, and how to read it off the page.",
  },
  {
    n: "2",
    name: "Rhythm",
    blurb: "When and how long — the pulse before the instrument.",
  },
  {
    n: "3",
    name: "Score symbols",
    blurb:
      "Everything else on the page: dynamics, articulation, ornaments, repeats.",
  },
  {
    n: "4",
    name: "Scales & musicianship",
    blurb:
      "Keys, major and minor, intervals, why any of it is shaped this way.",
  },
  {
    n: "5",
    name: "The bow",
    blurb: "Tone, and the core strokes — détaché, legato, martelé, and outward.",
  },
];

const STAGES_LATER: { n: string; name: string; blurb: string }[] = [
  {
    n: "6",
    name: "Beyond first position",
    blurb: "Shifting, positions two to seven, double stops.",
  },
  {
    n: "7",
    name: "Vibrato & expression",
    blurb: "When you're ready — and phrasing, the thing it all serves.",
  },
  {
    n: "8",
    name: "Sight-reading & ear training",
    blurb: "Reading fluently, and building the ear from the ground up.",
  },
  {
    n: "9",
    name: "The repertoire journey",
    blurb: "A hundred tunes, then the giants, then Mozart's Third.",
  },
];

function Rule() {
  return <hr className="my-14 border-0 border-t border-hairline" />;
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20 sm:py-28">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
        A violin course &nbsp;·&nbsp; phase 0
      </p>

      <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
        From zero to Mozart.
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-muted">
        Learning to read and play the violin, properly — from{" "}
        <em className="not-italic text-foreground">Ode to Joy</em> to the first
        page of{" "}
        <em className="not-italic text-foreground">
          Mozart&rsquo;s Violin Concerto No.&nbsp;3
        </em>
        . A 193-page PDF course, rebuilt as something calm and readable that you
        can actually use with the instrument in your hands.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
        <span className="text-foreground">Ode to Joy</span>
        <span aria-hidden>→</span>
        <span>a hundred tunes</span>
        <span aria-hidden>→</span>
        <span>the student concertos</span>
        <span aria-hidden>→</span>
        <span className="text-accent">Mozart K.216</span>
      </div>

      <Rule />

      <section>
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
          The path
        </h2>

        <ol className="mt-6 space-y-5">
          {STAGES.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="mt-0.5 w-4 shrink-0 font-mono text-sm text-accent">
                {s.n}
              </span>
              <span>
                <span className="font-medium">{s.name}</span>
                <span className="block text-sm leading-relaxed text-muted">
                  {s.blurb}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <p className="my-6 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
          <span className="h-px flex-1 bg-accent/30" />
          Foundation
          <span className="h-px flex-1 bg-accent/30" />
        </p>

        <ol className="space-y-5">
          {STAGES_LATER.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="mt-0.5 w-4 shrink-0 font-mono text-sm text-muted">
                {s.n}
              </span>
              <span>
                <span className="font-medium">{s.name}</span>
                <span className="block text-sm leading-relaxed text-muted">
                  {s.blurb}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm text-muted">
          Then the deep study: Mozart&rsquo;s Violin Concerto No.&nbsp;3 in G
          major, K.216 &mdash; read the whole score before you can play the whole
          score.
        </p>
      </section>

      <Rule />

      <section>
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
          How it works
        </h2>
        <ul className="mt-6 space-y-4 text-[0.95rem] leading-relaxed">
          <li>
            <span className="font-medium">One idea per screen.</span>{" "}
            <span className="text-muted">
              Short enough to read from a music stand without scrolling.
            </span>
          </li>
          <li>
            <span className="font-medium">Your hands stay on the violin.</span>{" "}
            <span className="text-muted">
              The only thing you press mid-practice is one &ldquo;play the
              example&rdquo; button.
            </span>
          </li>
          <li>
            <span className="font-medium">Nothing gates you.</span>{" "}
            <span className="text-muted">
              No streaks, no locked lessons, no quiz to pass. You set the pace.
            </span>
          </li>
          <li>
            <span className="font-medium">Taught in a real lineage.</span>{" "}
            <span className="text-muted">
              Leopold Mozart&rsquo;s{" "}
              <em className="not-italic">Violinschule</em>, the French school,
              Auer, Flesch, Galamian, Suzuki &mdash; the way the players you
              admire actually learned.
            </span>
          </li>
        </ul>
      </section>

      <Rule />

      <footer className="font-mono text-xs leading-relaxed text-muted">
        <p>Phase&nbsp;0 &mdash; scaffolded. The lessons come next.</p>
        <p className="mt-1">
          <a
            href="https://github.com/parthtiwari-dev/from-zero-to-mozart"
            className="underline decoration-hairline underline-offset-4 hover:text-foreground"
          >
            github.com/parthtiwari-dev/from-zero-to-mozart
          </a>
        </p>
      </footer>
    </main>
  );
}
