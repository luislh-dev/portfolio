'use client';
import { MDXRemote } from 'next-mdx-remote';
import components from './mdx/custom-components';

export default function ClientMDXRemote({ mdxSource }: { mdxSource: any }) {
  return <MDXRemote {...mdxSource} components={components} />;
}
