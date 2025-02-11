import PageHeader from '@components/PageHeader';
import WithTableOfContents from '@layouts/WithTableOfContents';
import { PropsWithChildren } from '@node_modules/@types/react';
import { TProjectFrontMatter, TTableOfContents } from '@types';
import ProjectMeta from './ProjectMeta';

interface ProjectLayoutProps {
  frontMatter: TProjectFrontMatter;
  tableOfContents: TTableOfContents;
}

function ProjectLayout({
  children,
  frontMatter: { title, description, caption, githubUrl, npmUrl, demoUrl },
  tableOfContents,
}: PropsWithChildren<ProjectLayoutProps>) {
  return (
    <>
      <PageHeader title={title} description={description} caption={caption} />
      <ProjectMeta githubUrl={githubUrl} npmUrl={npmUrl} demoUrl={demoUrl} />
      <WithTableOfContents tableOfContents={tableOfContents}>{children}</WithTableOfContents>
    </>
  );
}

export default ProjectLayout;
