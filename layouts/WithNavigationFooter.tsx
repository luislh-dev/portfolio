import Navigation from '@components/navigation';
import { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}

export default WithNavigationFooter;
