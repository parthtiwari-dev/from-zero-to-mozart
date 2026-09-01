import type { ComponentType } from "react";

type MDXModule = { default: ComponentType };

/**
 * Explicit map of lesson slug → MDX module loader. Explicit (not a dynamic
 * template string) so Turbopack can statically resolve every lesson.
 */
export const lessonModules: Record<string, () => Promise<MDXModule>> = {
  "open-strings-on-the-staff": () => import("./open-strings-on-the-staff.mdx"),
  "which-b-is-this": () => import("./which-b-is-this.mdx"),
};
