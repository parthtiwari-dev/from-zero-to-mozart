import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  TableHTMLAttributes,
} from "react";
import { CircleOfFifths } from "@/components/CircleOfFifths";
import {
  BowDiagram,
  BowHoldDiagram,
  BowLanesDiagram,
  RhythmTree,
  ViolinDiagram,
} from "@/components/Diagram";
import { Cite, Margin } from "@/components/Margin";
import { NotatedExample } from "@/components/NotatedExample";
import { Quiz } from "@/components/Quiz";
import { TryThis } from "@/components/TryThis";

const components: MDXComponents = {
  a: ({ href = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/");
    if (isInternal) return <Link href={href} {...props} />;
    return <a href={href} target="_blank" rel="noreferrer" {...props} />;
  },
  // GFM tables can run wider than the reading column on small screens —
  // let them scroll instead of breaking the page layout.
  table: (props: TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
  // components lessons can drop straight into their prose
  BowDiagram,
  BowHoldDiagram,
  BowLanesDiagram,
  CircleOfFifths,
  Cite,
  Margin,
  NotatedExample,
  Quiz,
  RhythmTree,
  TryThis,
  ViolinDiagram,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
