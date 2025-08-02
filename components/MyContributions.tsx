'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { MyContribution, MyContributionResponse } from '@/types/contributions';
import { Item } from './Item';
import Items from './Items';
import { Link } from './mdx/custom-components/Link';
import { Skeleton } from './wireframes/Skeleton';

interface ContributionsProps {
  contributions: MyContribution[];
}

function Contributions({ contributions }: Readonly<ContributionsProps>) {
  return (
    <>
      {contributions.map((contribution) => (
        <Items date={contribution.lastContribution} key={contribution.id}>
          <Item>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-4">
                <a
                  href={contribution.repository.owner.profileUrl}
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={contribution.repository.owner.avatarUrl}
                    alt={contribution.repository.owner.login}
                    width={40}
                    height={40}
                  />
                </a>
                <div>
                  <div className="font-bold text-2xl text-primary-500 underline">
                    <a href={contribution.repository.url} target="_blank" rel="noreferrer nofollow">
                      {contribution.repository.name}
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-lg text-slate-500">{contribution.description}</div>
              <div className="mt-2">
                <Link href={contribution.htmlUrl}>Ver PR</Link>
              </div>
            </div>
          </Item>
        </Items>
      ))}
    </>
  );
}

function ContributionsSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map(() => (
        <Items date="" isLoading={true} key={crypto.randomUUID()}>
          <Item>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-4">
                <Skeleton shape="circle" h={40} isLoading />
                <div className="flex-1">
                  <Skeleton w={200} h={24} className="mb-2" isLoading />
                </div>
              </div>
              <Skeleton w={300} h={20} className="mb-2" isLoading />
              <Skeleton w={80} h={16} isLoading />
            </div>
          </Item>
        </Items>
      ))}
    </>
  );
}

interface ContributionsStatsProps {
  total: number;
  uniqueRepository: number;
  isLoading?: boolean;
}

function ContributionsStats({
  total,
  uniqueRepository,
  isLoading = false,
}: Readonly<ContributionsStatsProps>) {
  return (
    <div className={clsx('-mt-48 hidden', 'lg:block')}>
      <div className={clsx('sticky top-24 z-10 w-64', 'xl:w-[272px]', 'fm:relative fm:top-0')}>
        <div
          className={clsx(
            'rounded-xl border border-divider-light bg-white p-6',
            'dark:border-divider-dark dark:bg-[#161e31] dark:shsfadow-2xl'
          )}
        >
          <div className="mb-4 pb-3 border-b border-divider-light dark:border-divider-dark">
            <div className="font-bold text-lg text-slate-800 dark:text-slate-200">
              Mis contribuciones
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-row justify-between items-center py-2">
              <div className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Total contribuciones
              </div>
              {isLoading ? (
                <Skeleton w={40} h={20} isLoading className="my-1" />
              ) : (
                <div className="font-bold text-lg text-blue-600 dark:text-blue-400">{total}</div>
              )}
            </div>
            <div className="flex flex-row justify-between items-center py-2">
              <div className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Repositorios únicos
              </div>
              {isLoading ? (
                <Skeleton w={40} h={20} isLoading className="my-1" />
              ) : (
                <div className="font-bold text-lg text-green-600 dark:text-green-400">
                  {uniqueRepository}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyContributions() {
  const [contributions, setContributions] = useState<MyContributionResponse>({
    total: 0,
    uniqueRepository: 0,
    contributions: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('/api/my-contributions')
      .then((res) => res.json())
      .then((data) => {
        setContributions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener mis contribuciones', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <div className="flex flex-row gap-4">
        <div className="flex-1">
          {loading ? (
            <ContributionsSkeleton />
          ) : (
            <Contributions contributions={contributions.contributions} />
          )}
        </div>
        <ContributionsStats
          total={contributions.total}
          uniqueRepository={contributions.uniqueRepository}
          isLoading={loading}
        />
      </div>
    </div>
  );
}
