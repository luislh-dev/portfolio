import Link from 'next/link';

import { ChevronRight } from '@components/Icons';

import type { ReactNode } from 'react';

interface SectionTitleProps {
  as?: 'h2' | 'h3';
  title: string;
  caption: string;
  description: string | ReactNode;
  button?: {
    title: string;
    href: string;
  } | null;
}

function SectionTitle({
  as = 'h2',
  title,
  caption,
  description,
  button = null,
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div className='content-wrapper'>
      <Heading className='mb-2 block font-black text-blue-600 dark:text-blue-400 lg:mb-4'>
        {caption}
      </Heading>
      <p className='mb-4 text-3xl font-black text-slate-700 dark:text-slate-200 lg:text-4xl'>
        {title}
      </p>
      <p className='max-w-lg text-slate-600 dark:text-slate-400'>{description}</p>
      {button && (
        <div className='mt-4 md:mt-6'>
          <Link href={button.href} className='button button--soft'>
            {button.title}
            <ChevronRight className='mt-0.5 h-3 w-3' />
          </Link>
        </div>
      )}
    </div>
  );
}

export default SectionTitle;
