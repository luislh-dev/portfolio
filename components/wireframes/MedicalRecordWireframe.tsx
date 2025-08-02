import { Card } from '@components/Card';
import { Skeleton } from './Skeleton';

function MedicalRecordWireframe() {
  return (
    <div
      role="presentation"
      className="grid h-full w-full grid-cols-8 grid-rows-7 gap-4 bg-white p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-400"
    >
      <div className="col-span-8 flex w-full items-center justify-between border-b border-divider-light pb-2 dark:border-divider-dark">
        <div className="font-bold">Historial Plus</div>
        <div className="flex gap-2">
          <div>
            <Skeleton shape="circle" />
          </div>
          <div>
            <Skeleton w={40} />
          </div>
        </div>
      </div>
      <div className="col-span-2 col-start-7 row-span-2 row-start-2 h-full">
        <Card className="flex flex-col gap-2">
          <div className="flex items-center gap-2 border-b border-divider-light pb-2 dark:border-divider-dark">
            <Skeleton h={12} w={24} shape="circle" />
            <Skeleton h={12} w={30} />
          </div>
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index.toString()} className="flex flex-col gap-0.5">
                <Skeleton h={6} w={20} />
                <Skeleton h={6} className="w-10" />
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="col-span-2 col-start-1 row-span-6 row-start-2 flex flex-col gap-2 border-r border-divider-light pr-2 dark:border-divider-dark">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index.toString()}>
            <Skeleton className="w-14" />
          </div>
        ))}
      </div>
      <div className="col-span-4 col-start-3 row-span-6 row-start-2">
        <Card className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 border-b border-divider-light pb-2 dark:border-divider-dark">
            <Skeleton h={12} className="w-12" />
            <Skeleton h={10} className="w-6" />
          </div>
          <div className="flex w-full gap-2">
            <Skeleton h={8} className="w-10" />
            <Skeleton h={8} className="w-10" />
          </div>
          <div className="flex w-full flex-col gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index.toString()}
                className="flex w-full justify-between gap-2 border-b border-divider-light pb-2 dark:border-divider-dark"
              >
                <div className="flex w-1/2 flex-col gap-0.5">
                  <Skeleton h={6} className="w-12" />
                  <Skeleton h={6} className="w-8" />
                  <Skeleton h={6} className="w-10" />
                </div>
                <div className="flex w-1/2 flex-col gap-0.5">
                  <Skeleton h={8} />
                  <Skeleton h={8} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default MedicalRecordWireframe;
