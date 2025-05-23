import type { PropsWithChildren } from 'react';

export const Kbd = ({ children }: PropsWithChildren) => {
  return (
    <kbd className='rounded-md border-b-4 border-slate-400 bg-slate-300 px-1 py-0.5 font-mono dark:border-slate-300 dark:bg-transparent'>
      {children}
    </kbd>
  );
};
