'use client';

import { PropsWithChildren, ReactElement } from 'react';
import { formatDateISO, formatDateLong } from '@utils/formatDate';
import { Skeleton } from './wireframes/Skeleton';
import clsx from 'clsx';
import { Item } from './Item';

interface ItemsProps {
  date: string;
  isLoading?: boolean;
  children?: ReactElement<typeof Item> | ReactElement<typeof Item>[];
}

function Items({ date, isLoading = false, children }: PropsWithChildren<ItemsProps>) {
  return (
    <div className={clsx('flex flex-row gap-6', 'md:gap-12 lg:gap-24')}>
      <div className={clsx('hidden', 'md:block md:pb-24 md:w-32 lg:w-40')}>
        <div
          className={clsx(
            'mt-4 pt-[5.5px] md:sticky md:top-[86px]',
            'fm:relative fm:top-0'
          )}
        >
          <div
            className={clsx(
              'font-mono font-bold text-slate-700',
              'md:text-right',
              'dark:text-slate-300'
            )}
          >
            {isLoading ? (
              <>
                <Skeleton w={80} h={16} className='md:block lg:hidden' isLoading />
                <Skeleton w={120} h={16} className='md:hidden lg:block' isLoading />
              </>
            ) : (
              <>
                <time className='md:block lg:hidden' dateTime={date}>
                  {formatDateISO(date)}
                </time>
                <time className='md:hidden lg:block' dateTime={date}>
                  {formatDateLong(date)}
                </time>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'border-divider-light items-stretch border',
          'dark:border-divider-dark'
        )}
      />
      <div
        className={clsx(
          'flex min-w-0 flex-1 flex-col gap-16 py-8',
          'md:gap-0 md:py-4'
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Items;
export { Items };
export type { ItemsProps };