'use client';

import clsx from 'clsx';
import { m } from 'framer-motion';

import type { ReactNode } from 'react';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface PageHeaderProps {
  title: string;
  description: string;
  caption?: string;
  headerImage?: ReactNode;
}

function PageHeader({ title, description, caption = '', headerImage = null }: PageHeaderProps) {
  return (
    <header
      id='page-header'
      className='background-grid background-grid--fade-out z-10 mb-10 border-b border-divider-light pb-10 pt-32 dark:border-divider-dark md:mb-0 md:border-none md:pb-20 md:pt-40'
    >
      {headerImage && (
        <div className='content-wrapper absolute inset-0 overflow-hidden'>
          <div className='background-image background-image--fade-out pointer-events-none absolute inset-0 hidden select-none lg:block'>
            <div className={clsx('content-wrapper relative h-full')}>
              <div className={clsx('absolute -top-24 bottom-0 right-0')}>{headerImage}</div>
            </div>
          </div>
        </div>
      )}
      <div className={clsx('content-wrapper')}>
        {caption && (
          <m.div initial={animation.hide} animate={animation.show} transition={{ delay: 0 }}>
            <span
              className={clsx(
                'mb-1 block text-lg font-extrabold capitalize leading-none text-blue-600',
                'md:mb-0 md:text-2xl',
                'dark:text-blue-400'
              )}
            >
              {caption}
            </span>
          </m.div>
        )}
        <m.div initial={animation.hide} animate={animation.show} transition={{ delay: 0.1 }}>
          <h1
            className={clsx(
              'text-[2.5rem] font-extrabold leading-tight text-slate-700',
              'md:text-7xl md:leading-snug',
              'dark:text-slate-300'
            )}
          >
            {title}
          </h1>
        </m.div>
        <m.div initial={animation.hide} animate={animation.show} transition={{ delay: 0.2 }}>
          <p
            className={clsx(
              'mt-4 text-lg text-slate-600',
              'md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px]',
              'dark:text-slate-400'
            )}
          >
            {description}
          </p>
        </m.div>
      </div>
    </header>
  );
}

export default PageHeader;
