'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import components from './mdx/custom-components';

export default function ClientMDXRemote({
  mdxSource,
}: Readonly<{ mdxSource: MDXRemoteSerializeResult }>) {
  return <MDXRemote {...mdxSource} components={components} />;
}
