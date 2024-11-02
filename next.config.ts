import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/blog",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
