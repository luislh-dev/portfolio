import ClientMDXRemote from '@components/ClientMDXRemote';
import ProjectLayout from '@contents-layouts/project';
import { loadMDXContent } from '@lib/load-mdx-content';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projectsDir = path.join(process.cwd(), 'contents/projects');
  const files = await readdir(projectsDir);

  return files
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => ({
      slug: path.basename(file, '.mdx'),
    }));
}

type Params = Promise<{ slug: string }>;

export default async function ProjectPage(props: { params: Params }) {
  const params = props.params;
  const fileRelativePath = path.join(
    process.cwd(),
    'markdown/projects',
    `${(await params).slug}.mdx`
  );

  console.log('Attempting to load file:', fileRelativePath);
  console.log('Current working directory:', process.cwd());

  const { mdxSource, tableOfContents, frontmatter } = await loadMDXContent(fileRelativePath);

  return (
    <ProjectLayout frontMatter={frontmatter} tableOfContents={tableOfContents}>
      <ClientMDXRemote mdxSource={mdxSource} />
    </ProjectLayout>
  );
}
