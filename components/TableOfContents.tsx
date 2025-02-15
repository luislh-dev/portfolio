'use client';

import clsx from 'clsx';
import { m } from 'framer-motion';

import useOnScroll from '@hooks/useOnScroll';
import useScrollSpy from '@hooks/useScrollSpy';
import type { TTableOfContentsItem } from '@types';

interface TableOfContentsLinkProps extends TTableOfContentsItem {
  active?: boolean;
}

function TableOfContentsLink({ title, depth, slug, active = false }: TableOfContentsLinkProps) {
  return (
    <a
      className={clsx('toc-link', {
        'toc-link--depth-2': depth === 2,
        'toc-link--active': active,
      })}
      href={`#${slug}`}
    >
      {title}
    </a>
  );
}

interface TableOfContensProps {
  items?: Array<TTableOfContentsItem>;
}

function TableOfContents({ items = [] }: TableOfContensProps) {
  const isScrolled = useOnScroll(200);
  const { currentVisibles } = useScrollSpy();

  const handleScrollToTopClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <nav
      aria-label='Page table of contents'
      className={clsx(
        'rounded-xl border border-divider-light bg-white',
        'dark:border-divider-dark dark:bg-[#161e31]'
      )}
    >
      <div
        className={clsx(
          'flex items-center justify-between gap-2 border-b border-divider-light px-5 py-3 text-sm font-bold',
          'dark:border-divider-dark'
        )}
      >
        <h2 className={clsx('text-slate-700', 'dark:text-slate-300')} id='table-of-contents'>
          <span className={clsx('lg:hidden', 'xl:inline')}>Tabla de </span>
          Contenido
        </h2>
        <m.div
          initial={{ x: 16, opacity: 0 }}
          animate={isScrolled ? { x: 0, opacity: 1 } : { x: 16, opacity: 0 }}
        >
          <button
            className={clsx(
              'flex h-6 cursor-pointer items-center rounded-full border border-divider-light px-2 text-xs font-normal text-blue-700',
              'dark:border-divider-dark dark:text-blue-400'
            )}
            tabIndex={isScrolled ? 0 : -1}
            onClick={handleScrollToTopClick}
            type='button'
          >
            Ir arriba
          </button>
        </m.div>
      </div>
      <div className={clsx('relative p-3 py-4')}>
        <ol className={clsx('toc flex flex-col gap-2')}>
          {items.map(({ title, depth, slug }) => {
            const isActive = currentVisibles?.[slug];

            return (
              <li key={slug}>
                <TableOfContentsLink title={title} depth={depth} slug={slug} active={isActive} />
                {isActive && <div className={clsx('toc-visible')} />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default TableOfContents;
