import type { NextConfig } from 'next';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX(nextConfig);
