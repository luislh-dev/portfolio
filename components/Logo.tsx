import clsx from 'clsx';

interface LogoProps {
  active?: boolean;
}

function Logo({ active = false }: Readonly<LogoProps>) {
  return (
    <div className='flex items-center gap-1.5 font-[1000] leading-none'>
      <div
        className={clsx(
          'border-box flex h-8 w-8 items-center justify-center rounded-xl border-2',
          'sm:h-6 sm:w-6 sm:rounded-lg',
          [
            active
              ? 'border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500'
              : 'border-blue-600 dark:border-blue-500',
          ]
        )}
      >
        <div
          className={clsx('h-3.5 w-0.5 rotate-12 rounded-full', 'sm:h-3 sm:w-0.5', [
            active ? 'bg-white' : 'bg-blue-600 dark:bg-blue-400',
          ])}
        />
      </div>
      <div className={clsx('-mt-1 hidden text-xl', 'sm:block')}>
        <span className='text-slate-900 dark:text-slate-200'>luislh</span>
        <span className={clsx('text-blue-600', 'dark:text-blue-500')}>dev</span>
      </div>
    </div>
  );
}

export default Logo;
