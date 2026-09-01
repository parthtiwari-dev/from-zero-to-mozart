import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  TableHTMLAttributes,
} from "react";
import { CircleOfFifths } from "@/components/CircleOfFifths";
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
  CircleOfFifths,
  NotatedExample,
  Quiz,
  TryThis,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
