import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { pieceLessons, stageByNumber } from "@/lib/curriculum";

export const metadata: Metadata = { title: "Practice" };

export default function PracticePage() {
  const pieces = pieceLessons();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[51rem] px-6 pt-10 pb-16">
        <h1 className="font-serif text-[1.75rem] font-medium tracking-[-0.011em]">
          The tunes
        </h1>
        <p className="mt-3 max-w-[36rem] text-ink-muted">
          Every melody in the course, in order. Each one is our own annotated
          line — every note named, with its string and finger, a note on how to
          play it, and one-press playback. This is the &ldquo;just let me
          play&rdquo; door;{" "}
          <Link
            href="/learn"
            className="underline decoration-hairline underline-offset-4 hover:text-ink"
          >
            Contents
          </Link>{" "}
          is the &ldquo;teach me why&rdquo; one.
        </p>

        {pieces.length === 0 ? (
          <p className="mt-12 label">The first tunes are being written.</p>
        ) : (
          <ul className="mt-12 divide-y divide-hairline/60">
            {pieces.map((l) => {
              const stage = stageByNumber(l.stage);
              return (
                <li key={l.slug} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    {l.published ? (
                      <Link
                        href={`/learn/${l.slug}`}
                        className="font-serif text-[1.05rem] text-ink underline decoration-hairline underline-offset-4 hover:text-accent"
                      >
                        {l.title}
                      </Link>
                    ) : (
                      <span className="font-serif text-[1.05rem] text-ink-faint">
                        {l.title}
                      </span>
                    )}
                    <span className="shrink-0 label text-ink-faint">
                      {l.published ? `Stage ${l.stage}` : "coming soon"}
                    </span>
                  </div>
                  <p className="mt-1 text-[0.9375rem] text-ink-muted">
                    {[l.piece?.key, l.piece?.position, l.piece?.skill]
                      .filter(Boolean)
                      .join(" · ")}
                    {l.piece?.inPdf && (
                      <span className="text-ink-faint"> · in the PDF</span>
                    )}
                  </p>
                  {!l.published && stage && (
                    <p className="mt-0.5 label text-ink-faint">
                      Stage {l.stage} · {stage.name}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </>
  );
}
