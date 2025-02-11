import PageHeader from '@components/PageHeader';
import type { TPageFrontMatter } from '@types';
import type { PropsWithChildren, ReactNode } from 'react';

interface PageProps {
  frontMatter: TPageFrontMatter;
  headerImage?: ReactNode;
}

function PageLayout({
  frontMatter: { title, description, caption },
  children,
  headerImage,
}: PropsWithChildren<PageProps>) {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        caption={caption}
        headerImage={headerImage}
      />
      <div className='scroll-mt-[86px]' id='main-contents'>
        {children}
      </div>
    </>
  );
}

export default PageLayout;
