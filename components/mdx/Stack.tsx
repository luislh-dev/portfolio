import { PropsWithChildren } from '@node_modules/@types/react';

interface StackProps {
  spacing: number;
  direction?: 'horizontal' | 'vertical';
}

export function Stack({
  spacing,
  direction = 'vertical',
  children,
}: PropsWithChildren<StackProps>) {
  const flexDirection = direction === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <div
      className={`flex ${flexDirection} flex-wrap`}
      style={{
        gap: spacing,
      }}
    >
      {children}
    </div>
  );
}
