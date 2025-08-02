'use client';

import MyContributions from '@components/MyContributions';
import PageLayout from '@contents-layouts/Page';

export default function Page() {
  return (
    <PageLayout
      frontMatter={{
        title: 'Contribuciones',
        description:
          'Mis contribuciones a proyectos de código abierto y mis participaciones en comunidades de desarrollo de software.',
      }}
    >
      <MyContributions />
    </PageLayout>
  );
}
