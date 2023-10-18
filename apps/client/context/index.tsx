'use client';
import type { ReactElement, ReactNode } from 'react';
import { createContext, useState } from 'react';

interface GlobalStateType {}

export const GlobalContext = createContext<GlobalStateType | null>(null);

function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [globalState, setGlobalState] = useState<GlobalStateType | null>(null);

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
