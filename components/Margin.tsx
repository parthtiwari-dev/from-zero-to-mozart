import type { ReactNode } from "react";

/**
 * A note in the scholarly margin — a "watch for this", a cross-reference, a
 * figure pointer. On screens ≥ 1024px it floats into the left gutter beside the
 * prose; narrower, it falls inline as a hairline-ruled aside. Authored inline in
 * a lesson, roughly where it should sit next to the text. See docs/DESIGN_LOCK.md.
 */
export function Margin({ children }: { children: ReactNode }) {
  return <aside className="margin-note">{children}</aside>;
}

/**
 * A citation in the margin — where an idea comes from. The source name is set in
 * small caps, then the detail. Mandatory on concept and annotated-line lessons
 * (docs/CONTENT-STANDARD.md, beat 6).
 *
 *   <Cite source="Leopold Mozart, Violinschule (1756)">
 *     tells his pupils to learn the whole string before the hand moves.
 *   </Cite>
 */
export function Cite({
  source,
  children,
}: {
  source: string;
  children: ReactNode;
}) {
  return (
    <aside className="margin-note">
      <span className="src">{source}</span>
      <div className="detail">{children}</div>
    </aside>
  );
}
