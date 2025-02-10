import type { PropsWithChildren, ReactNode } from 'react';
import { Skeleton } from './Skeleton';

interface BrowserTabProps {
  icon: ReactNode;
  title: string;
  isActive: boolean;
  onClick?: () => void;
}

function BrowserTab({ icon, title, isActive, onClick = () => {} }: BrowserTabProps) {
  return (
    <div
      className={`flex h-6 items-center truncate rounded-lg ${
        isActive
          ? 'bg-slate-200 text-slate-600 dark:bg-slate-100/20 dark:text-slate-300'
          : 'bg-slate-200/50 text-slate-500 dark:bg-slate-100/5'
      }`}
      style={{ width: 200 }}
    >
      <button type='button' onClick={onClick} className='flex w-full gap-2 px-2 text-xs'>
        {icon}
        <div className='flex-1 truncate'>{title}</div>
      </button>
    </div>
  );
}

interface AppWindowProps {
  type?: 'browser' | 'app';
  browserTabs?: Array<BrowserTabProps>;
}

function AppWindow({
  children = null,
  type = 'app',
  browserTabs = [],
}: PropsWithChildren<AppWindowProps>) {
  const isWithBrowserTabs = type === 'browser' && browserTabs;

  return (
    <div
      role='presentation'
      className='flex h-full w-full select-none flex-col overflow-hidden rounded-xl border border-divider-light bg-white dark:border-divider-dark dark:bg-[#0c1222]'
    >
      <div
        className={`relative box-border border-b border-divider-light dark:border-divider-dark ${
          isWithBrowserTabs ? 'h-20' : 'h-10'
        }`}
      >
        <div className='absolute left-4 top-0 flex h-10 items-center gap-1.5'>
          <div className='h-3 w-3 rounded-full bg-red-300 dark:bg-slate-500' />
          <div className='h-3 w-3 rounded-full bg-amber-300 dark:bg-slate-500' />
          <div className='h-3 w-3 rounded-full bg-green-300 dark:bg-slate-500' />
        </div>
        {type === 'browser' && (
          <>
            <div className='flex h-10 items-center justify-center'>
              <Skeleton size='md' w={160} />
            </div>
            {isWithBrowserTabs && (
              <div className='mt-2 flex gap-2 px-3'>
                {browserTabs.map(({ icon, title, isActive, onClick }) => (
                  <BrowserTab
                    key={title}
                    icon={icon}
                    title={title}
                    isActive={isActive}
                    onClick={onClick}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className='flex-1 overflow-hidden'>{children}</div>
    </div>
  );
}

export default AppWindow;
