'use client';

import { Skeleton } from '@components/wireframes/Skeleton';
import type { Contributor } from '@types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ContribuitorProps {
  owner: string;
  repo: string;
}

export default function Contributors({ owner, repo }: ContribuitorProps) {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!owner || !repo) return;

    setLoading(true);

    fetch(`/api/contributors?owner=${owner}&repo=${repo}`)
      .then((res) => res.json())
      .then((data) => {
        setContributors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener contribuidores', error);
        setLoading(false);
      });
  }, [owner, repo]);

  return (
    <div className='flex gap-4'>
      {loading ? (
        // Skeleton loading state
        Array.from({ length: 2 }).map((_, index) => (
          <Skeleton key={index.toString()} shape='circle' w={48} h={48} isLoading={loading} />
        ))
      ) : contributors.length > 0 ? (
        contributors.map((contributor) => (
          <div key={contributor.id} className=''>
            <a href={contributor.html_url} target='_blank' rel='noopener noreferrer'>
              <Image
                src={contributor.avatar_url}
                alt={contributor.login}
                className='rounded-full'
                width={48}
                height={48}
              />
            </a>
          </div>
        ))
      ) : (
        <p className='text-gray-500'>No hay contribuidores disponibles.</p>
      )}
    </div>
  );
}
