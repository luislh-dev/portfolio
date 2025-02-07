'use client';

import { JSX, useEffect } from 'react';

import useFocusMode from '@hooks/useFocusMode';

interface FocusModeProviderProps {
  children: JSX.Element;
}

function FocusModeProvider({ children }: FocusModeProviderProps) {
  const { focusMode } = useFocusMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (focusMode) {
        document.documentElement.classList.add('fm');
      } else {
        document.documentElement.classList.remove('fm');
      }
    }
  }, [focusMode]);

  return children;
}

export default FocusModeProvider;
