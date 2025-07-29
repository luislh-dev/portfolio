import QuickAccess from '@components/QuickAccess';
import Shortcuts from '@components/Shortcuts';
import Footer from '@components/footer';
import Navigation from '@components/navigation';
import type { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <Navigation />
      <Shortcuts />
      <QuickAccess />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
