import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  // reactStrictMode: false,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
