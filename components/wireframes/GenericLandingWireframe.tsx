import { Skeleton } from './Skeleton';

interface GenericLandingWireframeProps {
  name?: string;
}

function GenericLandingWireframe({ name }: Readonly<GenericLandingWireframeProps>) {
  return (
    <div
      role="presentation"
      className="flex h-full w-full flex-col gap-8 bg-white p-8 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-400"
    >
      {/* Header Section */}
      <div className="flex w-full items-center justify-between border-b border-divider-light pb-4 dark:border-divider-dark">
        <div className="font-bold">{name ?? 'Logo'}</div>
        <div className="flex gap-4">
          <Skeleton w={80} h={10} />
          <Skeleton w={80} h={10} />
          <Skeleton w={80} h={10} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex w-full flex-col items-center gap-4 py-12">
        <Skeleton w={200} h={20} />
        <Skeleton w={300} h={10} />
        <Skeleton w={150} h={40} />
      </div>
    </div>
  );
}

export default GenericLandingWireframe;
