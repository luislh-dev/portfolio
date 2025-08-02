import Error404Contents from '@contents/404';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Page Not Found', robots: 'noindex' };

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Error404Contents />
    </div>
  );
}
