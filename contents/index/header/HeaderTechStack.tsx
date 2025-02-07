'use client';

import {
  Cloudflare,
  Java,
  React,
  Spring,
  TailwindCSS,
  TypeScript,
  VisualStudioCode,
} from '@components/Icons';
import { m } from 'framer-motion';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div>
      <m.p
        className='mb-2.5 text-sm text-slate-600 dark:text-slate-400'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Mis tecnologías/herramientas favoritas actuales:
      </m.p>
      <m.ul
        className='flex items-center gap-3.5 text-slate-500 dark:text-slate-500'
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        {' '}
        <m.li variants={animation}>
          <div className='transition duration-200 hover:text-[#3178C6]'>
            <TypeScript className='h-6 w-6' />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className='transition duration-200 hover:text-[#61DAFB]'>
            <React className='h-6 w-6' />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className='transition duration-200 hover:text-[#06B6D4]'>
            <TailwindCSS className='h-6 w-6' />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className='h-3 w-[1px] bg-slate-300 dark:bg-slate-700' />
        </m.li>
        <m.li variants={animation}>
          <div className='transition duration-200 hover:text-[#0055FF]'>
            <Java className='h-6 w-6' />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className='transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]'>
            <Spring className='h-6 w-6' />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className='h-3 w-[1px] bg-slate-300 dark:bg-slate-700' />
        </m.li>
        <m.li variants={animation}>
          <div className='transition duration-200 hover:text-[#007ACC]'>
            <VisualStudioCode className='h-6 w-6' />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className='transition duration-200 hover:text-[#007ACC]'>
            <Cloudflare className='h-6 w-6' />
          </div>
        </m.li>
      </m.ul>
    </div>
  );
}

export default HeaderTechStack;
