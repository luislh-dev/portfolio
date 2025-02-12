import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx('rounded-lg bg-white p-4 shadow-lg dark:bg-black', className)}>
      {children}
    </div>
  );
}
