import type { PropsWithChildren } from 'react';

function SectionContent({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className='background-grid background-grid--fade-out mt-20 border-t border-divider-light dark:border-divider-dark'>
      <div className='content-wrapper pb-20'>{children}</div>
    </div>
  );
}

export default SectionContent;
