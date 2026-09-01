import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { NotatedExample } from "@/components/NotatedExample";
import { Quiz } from "@/components/Quiz";
import { TryThis } from "@/components/TryThis";

const components: MDXComponents = {
  a: ({ href = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/");
    if (isInternal) return <Link href={href} {...props} />;
    return <a href={href} target="_blank" rel="noreferrer" {...props} />;
  },
  // components lessons can drop straight into their prose
  NotatedExample,
  Quiz,
  TryThis,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
