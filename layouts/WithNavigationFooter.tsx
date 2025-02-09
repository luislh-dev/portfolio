import Footer from '@components/footer';
import Navigation from '@components/navigation';
import QuickAccess from '@components/QuickAccess';
import Shortcuts from '@components/Shortcuts';
import { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: PropsWithChildren) {
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
