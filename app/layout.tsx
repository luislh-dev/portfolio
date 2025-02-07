import Navigation from '@components/navigation';
import clsx from 'clsx';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import Provider from 'providers';

import QuickAccess from '@components/QuickAccess';
import Shortcuts from '@components/Shortcuts';
import '@styles/main.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>
        <Provider>
          <div id='__root' className={clsx(jetbrainsMono.variable, plusJakartaSans.variable)}>
            <Navigation />
            <Shortcuts />
            <QuickAccess />
            <main>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
