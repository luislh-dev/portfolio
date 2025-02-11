import ClientMDXRemote from '@components/ClientMDXRemote';
import ProjectLayout from '@contents-layouts/project';
import { loadMDXContent } from '@lib/load-mdx-content';
import { readdir } from 'fs/promises';
import path from 'path';

export async function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), 'contents/projects');
  const files = await readdir(projectsDir);

  return files
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => ({
      slug: path.basename(file, '.mdx'),
    }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const fileRelativePath = path.join('markdown/projects', `${slug}.mdx`);
  const { mdxSource, tableOfContents, frontmatter } = await loadMDXContent(fileRelativePath);

  return (
    <ProjectLayout frontMatter={frontmatter} tableOfContents={tableOfContents}>
      <ClientMDXRemote mdxSource={mdxSource} />
    </ProjectLayout>
  );
}
