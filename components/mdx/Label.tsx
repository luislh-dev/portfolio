import type { PropsWithChildren } from 'react';

interface LabelProps {
  indicator?: number;
}

export function Label({ indicator = 0, children }: PropsWithChildren<LabelProps>) {
  const porcentage = indicator > 100 ? 100 : indicator;

  // si porcentage es 0, stringPorcentage es ''
  const stringPorcentage = porcentage ? `${porcentage}%` : '';

  return (
    <span className="label">
      {children}
      <span className="label__indicator" style={{ width: `${stringPorcentage}` }} />
    </span>
  );
}
