import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import {
  courseProgress,
  lessonsInStage,
  STAGES,
  TRACK_LABEL,
  type Tag,
} from "@/lib/curriculum";

export const metadata: Metadata = { title: "Contents" };

const TAG_STYLE: Record<Tag, string> = {
  NOW: "text-accent",
  NEXT: "text-ink-faint",
  LATER: "text-ink-faint",
  REFERENCE: "text-ink-faint",
};

export default function ContentsPage() {
  const { published, total } = courseProgress();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[44rem] px-6 pt-10 pb-16">
        <h1 className="font-serif text-[1.75rem] font-medium tracking-[-0.011em]">
          The whole path
        </h1>
        <p className="mt-3 max-w-[34rem] text-ink-muted">
          Ten stages, from the first open string to reading Mozart. You can start
          learning from each stage the day it&rsquo;s up.{" "}
          <span className="font-mono text-[0.8125rem] text-ink-faint">
            {published} of {total} lessons live
          </span>
          .
        </p>

        <ol className="mt-12 space-y-10">
          {STAGES.map((stage) => {
            const lessons = lessonsInStage(stage.n);
            const live = lessons.filter((l) => l.published);
            return (
              <li key={stage.n}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">{stage.n}</span>
                  <h2 className="font-serif text-[1.25rem] font-semibold">
                    {stage.name}
                  </h2>
                  {live.length === 0 && (
                    <span className="label">being written</span>
                  )}
                </div>
                <p className="mt-1 pl-7 text-[0.9375rem] text-ink-muted">
                  {stage.blurb}
                </p>

                <ul className="mt-4 space-y-1.5 pl-7">
                  {lessons.map((l) => (
                    <li
                      key={l.slug}
                      className="flex items-baseline justify-between gap-4"
                    >
                      {l.published ? (
                        <Link
                          href={`/learn/${l.slug}`}
                          className="text-ink-muted underline decoration-hairline underline-offset-4 hover:text-ink"
                        >
                          {l.title}
                        </Link>
                      ) : (
                        <span className="text-ink-faint">{l.title}</span>
                      )}
                      <span className="shrink-0 label">
                        <span className={TAG_STYLE[l.tag]}>{l.tag}</span>
                        <span className="mx-1.5 text-hairline">·</span>
                        {TRACK_LABEL[l.track]}
                      </span>
                    </li>
                  ))}
                </ul>

                {stage.gate && (
                  <p className="mt-5 flex items-center gap-3 pl-7 label text-accent">
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
