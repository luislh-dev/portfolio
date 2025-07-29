'use client';

import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children, ...props }: Readonly<ThemeProviderProps>) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
