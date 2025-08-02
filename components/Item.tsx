'use client';

import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export function Item({ children = null }: Readonly<PropsWithChildren>) {
  return (
    <article className={clsx('', 'md:pb-16')}>
      <div
        className={clsx(
          'pointer-events-none sticky top-[86px] -ml-8 pb-12',
          'md:-ml-12 lg:-ml-24',
          'fm:relative fm:top-0'
        )}
      >
        <div
          className={clsx(
            'absolute -ml-0.5 mt-2.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-white z-[1]',
            'md:-ml-3 md:mt-2 md:h-5 md:w-5',
            'dark:border-slate-300 dark:bg-slate-900'
          )}
        />
        <div
          className={clsx(
            'absolute z-[-0.9] -ml-2 mt-4 w-8 border border-slate-700',
            'md:-ml-4 md:w-10 lg:w-12',
            'dark:border-slate-300'
          )}
        />
      </div>
      <div className={clsx('-mt-12')}>{children}</div>
    </article>
  );
}

export default Item;
