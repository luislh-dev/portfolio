import ClientMDXRemote from '@components/ClientMDXRemote';
import ProjectLayout from '@contents-layouts/project';
import { loadMDXContent } from '@lib/load-mdx-content';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

export async function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), 'contents/projects');
  const files = await readdir(projectsDir);

  return files
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => ({
      slug: path.basename(file, '.mdx'),
    }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const fileRelativePath = path.join('markdown/projects', `${params.slug}.mdx`);
  const { mdxSource, tableOfContents, frontmatter } = await loadMDXContent(fileRelativePath);

  return (
    <ProjectLayout frontMatter={frontmatter} tableOfContents={tableOfContents}>
      <ClientMDXRemote mdxSource={mdxSource} />
    </ProjectLayout>
  );
}
