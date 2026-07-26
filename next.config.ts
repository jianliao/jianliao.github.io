import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm", "remark-math"],
    rehypePlugins: [
      "rehype-slug",
      "rehype-code-titles",
      [
        "rehype-mermaid",
        {
          strategy: "img-svg",
          dark: { theme: "dark" },
        },
      ],
      [
        "rehype-pretty-code",
        {
          theme: "solarized-light",
        },
      ],
      "rehype-katex",
      [
        "rehype-autolink-headings",
        {
          properties: {
            className: ["section-header"],
          },
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
