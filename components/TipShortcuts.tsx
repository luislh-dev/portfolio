import clsx from 'clsx';
import { m } from 'framer-motion';
import { Fragment } from 'react';

import { Keyboard } from '@components/Icons';
import { Kbd } from '@components/Kbd';

const shortcuts: Array<{
  title: string;
  keys: Array<string>;
}> = [
  {
    title: 'Abrir acceso rápido',
    keys: ['Q'],
  },
  {
    title: 'Cerrar acceso rápido',
    keys: ['Q', 'Esc'],
  },
  {
    title: 'Toggle Dark Mode',
    keys: ['D'],
  },
  {
    title: 'Toggle Focus',
    keys: ['F'],
  },
];

const animation = {
  hide: { x: -24, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.12,
    },
  },
};

function TipShortcuts() {
  return (
    <m.div
      initial='hide'
      animate='show'
      transition={{ delayChildren: 0.7, staggerChildren: 0.14 }}
      className={clsx('')}
    >
      <div className={clsx('mb-4 flex items-center gap-4 text-xl font-bold')}>
        <Keyboard className={clsx('h-8 w-8')} />
        TIP: Atajos
      </div>
      <p className={clsx('mb-4 text-sm text-slate-700', 'dark:text-slate-400')}>
        Navegue por el sitio con facilidad usando atajos de teclado.
      </p>
      <div className={clsx('flex flex-col text-[13px]')}>
        {shortcuts.map(({ title, keys }) => (
          <m.div
            key={title}
            variants={animation}
            className={clsx(
              'flex items-center justify-between border-b border-slate-300 py-2',
              'dark:border-divider-dark'
            )}
          >
            <div className={clsx('text-slate-700', 'dark:text-slate-400')}>{title}</div>
            <div className={clsx('flex items-center gap-2 text-[12px]')}>
              {keys.map((key, i) => (
                <Fragment key={key}>
                  <Kbd>{key}</Kbd>
                  {i !== keys.length - 1 && <span>y/o</span>}
                </Fragment>
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </m.div>
  );
}

export default TipShortcuts;
