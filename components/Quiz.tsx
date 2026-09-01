"use client";

import { useState, type ReactNode } from "react";

export interface QuizItem {
  q: ReactNode;
  a: ReactNode;
}

/**
 * A recognition quiz: a question, you answer it in your head (or on the violin),
 * then tap to check. Nothing is scored — it's the teacher pointing at a symbol
 * and asking "what's that?"
 */
export function Quiz({ items, title }: { items: QuizItem[]; title?: string }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const allOpen = open.size === items.length;

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="not-prose my-8 rounded-[14px] border border-hairline bg-well px-6 py-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
      <div className="flex items-baseline justify-between gap-4">
        <p className="label">{title ?? "Check yourself"}</p>
        <button
          type="button"
          onClick={() =>
            setOpen(allOpen ? new Set() : new Set(items.map((_, i) => i)))
          }
          className="font-sans text-[0.8125rem] text-ink-muted underline decoration-hairline underline-offset-4 hover:text-ink"
        >
          {allOpen ? "hide all" : "show all answers"}
        </button>
      </div>

      <ol className="mt-4 space-y-3">
        {items.map((item, i) => {
          const isOpen = open.has(i);
          return (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 w-4 shrink-0 font-mono text-[0.8125rem] text-ink-faint">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="text-left font-sans text-[0.95rem] leading-relaxed text-ink"
                >
                  {item.q}
                </button>
                {isOpen ? (
                  <p className="mt-1 font-serif text-[0.95rem] leading-relaxed text-accent">
                    {item.a}
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="mt-1 block label hover:text-ink"
                  >
                    check
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
