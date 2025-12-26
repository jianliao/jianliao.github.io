import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeMermaid from "rehype-mermaid";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [
        rehypeMermaid,
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
      rehypeKatex,
      [
        rehypeAutolinkHeadings,
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
