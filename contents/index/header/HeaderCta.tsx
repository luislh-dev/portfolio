'use client';

import { DocumentIcon } from '@components/Icons';
import { m, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface HeaderCtaProps {
  isFree?: boolean;
  isFreeAnimationDuration?: number;
}

function ButtonContactMe() {
  return (
    <Link href='/contact' className='button button--solid md:button--big min-w-[128px]'>
      Contáctame 📩
    </Link>
  );
}

function ButtonResume() {
  return (
    <a
      target='_blank'
      rel='noreferrer nofollow'
      href='https://cv.luislh.dev/'
      className='button button--ghost md:button--big px-2 md:px-2'
    >
      <DocumentIcon className='h-5 w-5' />
      CV
    </a>
  );
}

function AvailableForHire() {
  return (
    <div className='button button--ghost md:button--big pointer-events-none gap-2.5 px-2.5 text-blue-500 dark:text-blue-400 md:px-2.5'>
      <span className='relative flex h-2 w-2'>
        <span className='absolute -left-1 -top-1 inline-flex h-4 w-4 animate-ping rounded-full bg-blue-600 opacity-75 dark:bg-blue-300' />
        <span className='relative inline-flex h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400' />
      </span>
      DISPONIBLE PARA TRABAJAR
    </div>
  );
}

function HeaderCta({ isFree = true, isFreeAnimationDuration = 4 }: HeaderCtaProps) {
  const shouldReduceMotion = useReducedMotion();

  let isFreeVariants = {
    hide: {
      x: 0,
      opacity: 1,
    },
    show: {
      x: -48,
      opacity: 0,
    },
  };

  if (shouldReduceMotion) {
    isFreeVariants = {
      hide: {
        x: 0,
        opacity: 1,
      },
      show: {
        x: 0,
        opacity: 0,
      },
    };
  }

  return (
    <m.div className='flex gap-2' initial='hide' animate='show'>
      <m.div className='relative z-20' variants={animation} transition={{ delay: 0.4 }}>
        <ButtonContactMe />
      </m.div>
      {isFree ? (
        <m.div variants={animation} transition={{ delay: 2.8 }} className='relative z-10'>
          <m.div
            variants={isFreeVariants}
            transition={{ delay: isFreeAnimationDuration + 1.5, duration: 0.4 }}
          >
            <AvailableForHire />
          </m.div>
          <m.div
            className='absolute left-0 top-0'
            initial={{ x: -48, opacity: 0, pointerEvents: 'none' }}
            animate={{ x: 0, opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: isFreeAnimationDuration + 1.6, duration: 0.4 }}
          >
            <ButtonResume />
          </m.div>
        </m.div>
      ) : (
        <m.div variants={animation} transition={{ delay: 0.5 }}>
          <ButtonResume />
        </m.div>
      )}
    </m.div>
  );
}

export default HeaderCta;
