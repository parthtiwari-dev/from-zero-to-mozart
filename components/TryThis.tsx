import type { ReactNode } from "react";

/** A short "now do this on the violin" prompt. Not a task to complete — just direction. */
export function TryThis({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-8 border-l border-accent/40 pl-4 font-sans text-[0.9375rem] leading-relaxed text-ink">
      <p className="mb-1 label text-accent">Try</p>
      {children}
    </div>
  );
}
