'use client';

import { HeroUIProvider } from '@heroui/system';
import type { PropsWithChildren } from 'react';
import FocusModeProvider from './FocusModeProvider';
import FramerMotionProvider from './FramerMotionProvider';
import GlobalStateProvider from './GlobalStateProvider';
import { ThemeProvider } from './ThemeProvider';

function Provider({ children }: PropsWithChildren) {
  return (
    <FramerMotionProvider>
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
        <HeroUIProvider>
          <FocusModeProvider>
            <GlobalStateProvider>{children}</GlobalStateProvider>
          </FocusModeProvider>
        </HeroUIProvider>
      </ThemeProvider>
    </FramerMotionProvider>
  );
}

export default Provider;
