'use client';

import { createContext, useMemo, useState } from 'react';

export interface GlobalContext {
  isQuickAccessOpen: boolean;
  setIsQuickAccessOpen: (value: boolean) => void;
}

const DEFAULT_VALUE: GlobalContext = {
  isQuickAccessOpen: false,
  setIsQuickAccessOpen: () => {},
};

export const GlobalStateContext = createContext<GlobalContext>(DEFAULT_VALUE);

function GlobalStateProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isQuickAccessOpen, setIsQuickAccessOpen] = useState<boolean>(
    DEFAULT_VALUE.isQuickAccessOpen
  );

  const value = useMemo(() => ({ isQuickAccessOpen, setIsQuickAccessOpen }), [isQuickAccessOpen]);

  return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
}

export default GlobalStateProvider;
