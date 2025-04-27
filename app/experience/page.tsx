'use client';

import { TimeLine } from '@components/timeline/TimeLine';
import PageLayout from '@contents-layouts/Page';

export default function Page() {
  return (
    <PageLayout
      frontMatter={{
        title: 'Experiencia',
        description:
          'Mi trayectoria profesional en desarrollo de software, con enfoque en soluciones backend y aplicaciones móviles para el sector financiero y empresarial.',
      }}
    >
      <TimeLine />
    </PageLayout>
  );
}
