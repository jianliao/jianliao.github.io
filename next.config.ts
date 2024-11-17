/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: false,
};

export default nextConfig;
