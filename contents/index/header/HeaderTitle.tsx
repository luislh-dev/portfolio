'use client';

import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTitle() {
  const controls = useAnimationControls();

  return (
    <div>
      <m.div
        className='mb-1 flex items-center gap-1 text-2xl text-slate-600 dark:text-slate-400 md:mb-0 md:gap-2 md:text-4xl'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        hola!
        <m.div
          initial={{
            opacity: 0,
            y: 16,
            rotate: 30,
            transformOrigin: 'right center',
          }}
          animate={controls}
          transition={{
            type: 'spring',
            delay: 0.35,
            bounce: 0.7,
            duration: 0.7,
          }}
        >
          <Image
            className='w-7 md:w-10'
            alt='Love-you Gesture'
            src='/emojis/waving-hand.png'
            width={48}
            height={48}
            onLoad={() => {
              controls.start({
                opacity: 1,
                y: 0,
                rotate: 0,
              });
            }}
            priority
          />
        </m.div>
      </m.div>
      <span className='text-slate-700 dark:text-slate-300'>
        <m.span
          className='mb-4 block text-[2.5rem] font-[1000] leading-none md:mb-6 md:text-7xl'
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          Soy <strong className='text-blue-600 dark:text-blue-500'>Luis</strong> Lopez,{' '}
        </m.span>
        <m.h1
          className='block text-base text-slate-600 dark:text-slate-400 md:text-xl'
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <span>un</span>{' '}
          <strong className='font-bold lowercase text-slate-700 dark:text-slate-300'>
            Desarrollador Full-Stack
          </strong>{' '}
          apasionado por crear soluciones{' '}
          <span className='block'>eficientes e innovadoras, siempre dispuesto a enfrentar</span>
          <span className='block'> nuevos desafíos y superar mis límites.</span>
        </m.h1>
      </span>
    </div>
  );
}

export default HeaderTitle;
