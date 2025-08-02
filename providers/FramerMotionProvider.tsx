import { domAnimation, LazyMotion, MotionConfig as MotionProvider } from 'framer-motion';
import type { JSX } from 'react';

interface FramerMotionProviderProps {
  children: JSX.Element;
}

function FramerMotionProvider({ children }: Readonly<FramerMotionProviderProps>) {
  return (
    <MotionProvider reducedMotion="user">
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </MotionProvider>
  );
}

export default FramerMotionProvider;
