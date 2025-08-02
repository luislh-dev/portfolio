import ProjectsContents from '@contents/projects';
import PageLayout from '@contents-layouts/Page';

export default function Page() {
  return (
    <PageLayout
      frontMatter={{
        title: 'Proyectos',
        description: 'Algunos de los proyectos en los que he trabajado.',
      }}
    >
      <ProjectsContents />
    </PageLayout>
  );
}
