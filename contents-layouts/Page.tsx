import PageHeader from '@components/PageHeader';
import { PropsWithChildren, ReactNode } from '@node_modules/@types/react';
import { TPageFrontMatter } from '@types';

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
