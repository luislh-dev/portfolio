import { Skeleton } from './Skeleton';

interface GitHubWireframeProps {
  author?: string;
  license?: string;
  repository: string;
  description: string;
}

function GitHubWireframe({
  author,
  license,
  repository,
  description,
}: Readonly<GitHubWireframeProps>) {
  return (
    <div className="h-full w-full bg-white p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-400">
      <div className="flex items-center gap-1">
        <div className="mr-1">
          <Skeleton />
        </div>
        {author ? (
          <div className="-mt-0.5 text-blue-700 dark:text-blue-500">{author}</div>
        ) : (
          <Skeleton w={64} />
        )}
        <div className="-mt-0.5">/</div>
        <div className="-mt-0.5 font-bold text-blue-700 dark:font-semibold dark:text-blue-500">
          {repository}
        </div>
        <div className="ml-1 rounded-full border border-divider-light px-2 py-0.5 text-xs dark:border-divider-dark">
          public
        </div>
      </div>
      <div className="mt-2">
        <p>{description}</p>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Skeleton />
          {license ? (
            <div>
              <p>{license} license</p>
            </div>
          ) : (
            <Skeleton w={64} />
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Skeleton />
            <Skeleton w={48} />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton />
            <Skeleton w={56} />
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <div className="flex h-8 flex-1 items-center justify-center rounded-lg border border-divider-light dark:border-divider-dark">
          <div className="flex items-center gap-1">
            <Skeleton />
            <Skeleton w={48} />
          </div>
        </div>
        <div className="flex h-8 flex-1 items-center justify-center rounded-lg border border-divider-light dark:border-divider-dark">
          <div className="flex items-center gap-1">
            <Skeleton />
            <Skeleton w={64} />
          </div>
        </div>
      </div>
      <div className="mt-4 flex border-b border-divider-light dark:border-divider-dark">
        <div className="-mb-[2px] flex h-12">
          <div className="flex items-center gap-1 border-b-[3px] border-amber-400 px-6 dark:border-amber-900">
            <Skeleton />
            <Skeleton w={32} />
          </div>
        </div>
        <div className="-mb-[2px] flex h-12">
          <div className="flex items-center gap-1 border-b-[3px] border-transparent px-6">
            <Skeleton />
            <Skeleton w={40} />
          </div>
        </div>
        <div className="-mb-[2px] flex h-12">
          <div className="flex items-center gap-1 border-b-[3px] border-transparent px-6">
            <Skeleton />
            <Skeleton w={80} />
          </div>
        </div>
        <div className="-mb-[2px] flex h-12">
          <div className="flex items-center gap-1 border-b-[3px] border-transparent px-6">
            <Skeleton />
            <Skeleton w={48} />
          </div>
        </div>
        <div className="-mb-[2px] flex h-12">
          <div className="flex items-center gap-1 border-b-[3px] border-transparent px-6">
            <Skeleton />
            <Skeleton w={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubWireframe;
