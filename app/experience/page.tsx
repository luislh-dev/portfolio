'use client';

import PageHeader from '@components/PageHeader';
import components from '@components/mdx/custom-components';
import WithTableOfContents from '@layouts/WithTableOfContents';
import Experience from '@markdown/experience/experience.mdx';
import type { TTableOfContentsItem } from '@types';

const tableOfContents: TTableOfContentsItem[] = [
  {
    title: 'Experiencia Profesional',
    depth: 1,
    slug: 'experiencia-profesional',
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        title='Experiencia'
        description='Mi experiencia profesional en el mundo de la programación y el diseño web.'
      />
      <WithTableOfContents tableOfContents={tableOfContents}>
        <Experience components={components} />
      </WithTableOfContents>
    </>
  );
}
