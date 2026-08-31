import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project is the workspace root. Without this, Turbopack walks up and
  // finds a stray package-lock.json in C:\Users\workf and warns.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
