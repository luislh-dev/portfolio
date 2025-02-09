import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import Provider from 'providers';

import { GA_ID } from '@config/Google';
import { SITE_DESCRIPTION, SITE_TITLE } from '@config/Site';
import { getBaseUrl } from '@helpers/url';
import WithNavigationFooter from '@layouts/WithNavigationFooter';
import '@styles/main.css';
import { Metadata } from 'next';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_TITLE,
    locale: 'es',
    title: SITE_TITLE,
    images: [
      {
        url: `${getBaseUrl()}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>
        <Provider>
          <div id='__root' className={clsx(jetbrainsMono.variable, plusJakartaSans.variable)}>
            <WithNavigationFooter>{children}</WithNavigationFooter>
          </div>
        </Provider>
        <GoogleAnalytics gaId={GA_ID} />
        <Analytics />
      </body>
    </html>
  );
}
