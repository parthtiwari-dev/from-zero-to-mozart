import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { LESSONS, STAGES, TRACK_LABEL } from "@/lib/curriculum";

export const metadata: Metadata = { title: "Contents" };

export default function ContentsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[42rem] px-6 pt-10 pb-16">
        <h1 className="font-serif text-[1.75rem] font-medium tracking-[-0.011em]">
          Contents
        </h1>
        <p className="mt-3 max-w-[34rem] text-ink-muted">
          The whole path. Stages fill in as they&rsquo;re written — you can start
          learning from each one the day it&rsquo;s up.
        </p>

        <ol className="mt-10 space-y-8">
          {STAGES.map((stage) => {
            const lessons = LESSONS.filter((l) => l.stage === stage.n);
            return (
              <li key={stage.n}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">{stage.n}</span>
                  <h2 className="font-serif text-[1.1875rem] font-semibold">
                    {stage.name}
                  </h2>
                </div>

                {lessons.length > 0 ? (
                  <ul className="mt-3 space-y-2 pl-7">
                    {lessons.map((l) => (
                      <li key={l.slug}>
                        {l.published ? (
                          <Link
                            href={`/learn/${l.slug}`}
                            className="text-ink-muted underline decoration-hairline underline-offset-4 hover:text-ink"
                          >
                            {l.title}
                          </Link>
                        ) : (
                          <span className="text-ink-faint">
                            {l.title}{" "}
                            <span className="label ml-1 align-[0.1em]">soon</span>
                          </span>
                        )}
                        <span className="label ml-2 align-[0.1em]">
                          {TRACK_LABEL[l.track]}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 pl-7 text-[0.9375rem] text-ink-faint">
                    Not written yet.
                  </p>
                )}

                {stage.gate && (
                  <p className="mt-4 flex items-center gap-3 pl-7 label text-accent">
                    <span className="h-px w-8 bg-accent/30" />
                    {stage.gate} reached
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </main>
    </>
  );
}
