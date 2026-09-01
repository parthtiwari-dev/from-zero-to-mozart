import Link from "next/link";
import { courseProgress, publishedLessons, STAGES } from "@/lib/curriculum";

function Rule() {
  return <hr className="my-14 border-0 border-t border-hairline" />;
}

export default function Home() {
  const first = publishedLessons()[0];
  const { published } = courseProgress();
  return (
    <main className="mx-auto w-full max-w-[42rem] px-6 py-20 sm:py-28">
      <p className="label">A violin course</p>

      <h1 className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.02em]">
        From zero to Mozart.
      </h1>

      <p className="mt-6 max-w-[34rem] text-ink-muted">
        Learning to read and play the violin, properly — from{" "}
        <span className="text-ink">Ode to Joy</span> to the first page of{" "}
        <span className="text-ink">Mozart&rsquo;s Violin Concerto No.&nbsp;3</span>.
        A 193-page PDF course, rebuilt as something calm and readable that you can
        actually use with the instrument in your hands.
      </p>

      <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link
          href={`/learn/${first.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-sans text-[0.9375rem] font-medium text-accent-contrast transition-transform duration-100 ease-[var(--ease)] active:scale-[0.98]"
        >
          Start from the beginning
          <span aria-hidden>→</span>
        </Link>
        <Link href="/learn" className="label hover:text-ink">
          see the whole path
        </Link>
      </p>

      <Rule />

      <section>
        <h2 className="label">The path</h2>
        <ol className="mt-6 space-y-5">
          {STAGES.map((s) => (
            <li key={s.n}>
              <div className="flex gap-4">
                <span
                  className={`mt-1 w-4 shrink-0 font-mono text-sm ${
                    s.n <= 5 ? "text-accent" : "text-ink-faint"
                  }`}
                >
                  {s.n}
                </span>
                <span>
                  <span className="font-medium">{s.name}</span>
                  <span className="block text-[0.95rem] leading-relaxed text-ink-muted">
                    {s.blurb}
                  </span>
                </span>
              </div>
              {s.gate && (
                <p className="mt-5 flex items-center gap-3 label text-accent">
                  <span className="h-px flex-1 bg-accent/25" />
                  {s.gate}
                  <span className="h-px flex-1 bg-accent/25" />
                </p>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[0.95rem] text-ink-muted">
          Then the deep study: Mozart&rsquo;s Violin Concerto No.&nbsp;3 in G major,
          K.216 — read the whole score before you can play the whole score.
        </p>
      </section>

      <Rule />

      <section>
        <h2 className="label">How it works</h2>
        <ul className="mt-6 space-y-4">
          <li>
            <span className="font-medium">One idea per screen.</span>{" "}
            <span className="text-ink-muted">
              Short enough to read from a music stand without scrolling.
            </span>
          </li>
          <li>
            <span className="font-medium">Your hands stay on the violin.</span>{" "}
            <span className="text-ink-muted">
              The only thing you press mid-practice is one play button.
            </span>
          </li>
          <li>
            <span className="font-medium">Nothing gates you.</span>{" "}
            <span className="text-ink-muted">
              No streaks, no locked lessons, no quiz to pass. You set the pace.
            </span>
          </li>
          <li>
            <span className="font-medium">Taught in a real lineage.</span>{" "}
            <span className="text-ink-muted">
              Leopold Mozart&rsquo;s <em>Violinschule</em>, the French school,
              Auer, Flesch, Galamian, Suzuki — the way the players you admire
              actually learned.
            </span>
          </li>
        </ul>
      </section>

      <Rule />

      <footer className="font-mono text-xs leading-relaxed text-ink-faint">
        <p>
          {published} lessons live — the whole foundation, Stages&nbsp;0&ndash;5.
          Stages&nbsp;6&ndash;9 and the Mozart study are being written.
        </p>
        <p className="mt-1">
          <a
            href="https://github.com/parthtiwari-dev/from-zero-to-mozart"
            className="underline decoration-hairline underline-offset-4 hover:text-ink"
          >
            github.com/parthtiwari-dev/from-zero-to-mozart
          </a>
        </p>
      </footer>
    </main>
  );
}
