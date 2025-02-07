'use client';

import { useTheme as useNextThemes } from 'next-themes';
import { useEffect, useState } from 'react';

function useTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useNextThemes();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (mounted) {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }
  };

  return {
    theme: mounted ? resolvedTheme : undefined,
    setTheme,
    toggleTheme,
    mounted,
  };
}

export default useTheme;
