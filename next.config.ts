import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // This project is the workspace root. Without this, Turbopack walks up and
  // finds a stray package-lock.json in C:\Users\workf and warns.
  turbopack: {
    root: __dirname,
  },
};

const withMDX = createMDX({
  options: {
    // string form (not an imported function) so Turbopack can use it —
    // gives lesson tables (| Note | Finger | Where |) GFM support.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
