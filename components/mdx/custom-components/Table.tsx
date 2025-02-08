import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type TableProps = DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>;

export function Table({ children }: TableProps) {
  return (
    <div className='mdx-table my-6 w-full overflow-x-auto'>
      <table className='w-full border-collapse border border-slate-200 dark:border-slate-700'>
        {children}
      </table>
    </div>
  );
}
