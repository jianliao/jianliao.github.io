import createMDX from '@next/mdx';
import slug from 'rehype-slug';
import tableOfContents from 'remark-toc';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
    remarkPlugins: [tableOfContents],
  },
})

export default withMDX(nextConfig);
