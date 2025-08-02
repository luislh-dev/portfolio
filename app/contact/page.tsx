'use client';

import components from '@components/mdx/custom-components';
import PageHeader from '@components/PageHeader';
import WithTableOfContents from '@layouts/WithTableOfContents';
import Contact from '@markdown/contact.mdx';
import type { TTableOfContentsItem } from '@types';

const tableOfContents: TTableOfContentsItem[] = [
  {
    title: 'Contacto',
    depth: 1,
    slug: 'contacto',
  },
  {
    title: 'Redes sociales',
    depth: 1,
    slug: 'redes-sociales',
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        title="Contacto"
        description="Ponte en contacto conmigo en cualquier momento, a través de las redes sociales, correo electrónico o número de teléfono."
      />
      <WithTableOfContents tableOfContents={tableOfContents}>
        <Contact components={components} />
      </WithTableOfContents>
    </>
  );
}
