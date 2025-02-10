import PageLayout from '@contents-layouts/Page';
import ProjectsContents from '@contents/projects';

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
