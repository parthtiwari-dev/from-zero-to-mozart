import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { mozartLessons } from "@/lib/curriculum";

export const metadata: Metadata = { title: "Mozart K.216" };

const MOVEMENTS = ["I", "II", "III"] as const;
const MOVEMENT_NAME: Record<string, string> = {
  I: "I. Allegro",
  II: "II. Adagio",
  III: "III. Rondeau",
};

export default function MozartPage() {
  const lessons = mozartLessons();
  const about = lessons.filter((l) => l.mozart?.kind === "about");
  const solo = lessons.filter((l) => l.mozart?.kind === "solo");

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[51rem] px-6 pt-10 pb-16">
        <h1 className="font-serif text-[1.75rem] font-medium tracking-[-0.011em]">
          Violin Concerto No. 3, K.216
        </h1>
        <p className="mt-3 max-w-[36rem] text-ink-muted">
          The finish line, rebuilt page by page as our own annotated line — the
          solo part first, in playing order, then the orchestra. Every note
          named, with its string and finger, a how-to-play note per bar, and
          one-press playback. Built section by section; a work in progress.
        </p>

        {about.length > 0 && (
          <ul className="mt-10 space-y-1.5">
            {about.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/learn/${l.slug}`}
                  className="font-serif text-[1.05rem] text-ink underline decoration-hairline underline-offset-4 hover:text-accent"
                >
                  {l.title.replace(/^Mozart:\s*/, "")}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <h2 className="mt-12 label">The solo part</h2>
        <div className="mt-4 space-y-8">
          {MOVEMENTS.map((mv) => {
            const rows = solo.filter((l) => l.mozart?.movement === mv);
            if (rows.length === 0) return null;
            return (
              <div key={mv}>
                <h3 className="font-serif text-[1.15rem] font-semibold">
                  {MOVEMENT_NAME[mv]}
                </h3>
                <ul className="mt-2 divide-y divide-hairline/60">
                  {rows.map((l) => (
                    <li key={l.slug} className="py-3">
                      {l.published ? (
                        <Link
                          href={`/learn/${l.slug}`}
                          className="text-ink underline decoration-hairline underline-offset-4 hover:text-accent"
                        >
                          {l.title.replace(/^K\.216 · [IV]+ — /, "")}
                        </Link>
                      ) : (
                        <span className="text-ink-faint">
                          {l.title.replace(/^K\.216 · [IV]+ — /, "")}
                        </span>
                      )}
                      {l.mozart?.section && (
                        <p className="mt-0.5 label text-ink-faint">
                          {l.mozart.section}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-12 label text-ink-faint">
          The orchestra part — the tutti sections you rest through — comes after
          the solo part is complete.
        </p>
      </main>
    </>
  );
}
