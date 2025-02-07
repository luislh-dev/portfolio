'use client';

import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

function HeaderImage() {
  const controlsHeaderImage = useAnimationControls();

  useEffect(() => {
    controlsHeaderImage.start({
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transition: { duration: 1.5, ease: 'easeInOut' },
    });
  }, [controlsHeaderImage]);

  return (
    <div className='relative h-[590px] w-[603px]'>
      <div className='absolute bottom-0 right-0 rotate-[14deg] overflow-hidden'>
        <m.div
          animate={controlsHeaderImage}
          initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
        >
          <Image
            alt='Luis Lopez foto'
            src='/images/me.webp'
            width={500}
            height={538}
            className='hidden dark:brightness-[.82] lg:block'
            quality={100}
            priority
          />
        </m.div>
      </div>
    </div>
  );
}

export default HeaderImage;
