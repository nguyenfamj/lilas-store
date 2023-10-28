'use client';
import type { ReactElement, ReactNode } from 'react';
import { createContext, useState } from 'react';

interface GlobalStateType {
  ui: {
    sidebarActivated: boolean;
    searchBarActivated: boolean;
    itemsInCart: number;
  };
}

interface GlobalContextType {
  state: GlobalStateType;
  setSidebarActivated: (newState: boolean) => void;
  setSearchBarActivated: (newState: boolean) => void;
  setItemsInCart: (newState: number) => void;
}

export const GlobalContext = createContext<GlobalContextType>({
  state: {
    ui: { sidebarActivated: false, searchBarActivated: false, itemsInCart: 0 },
  },
  setSidebarActivated: () => {},
  setSearchBarActivated: () => {},
  setItemsInCart: () => {},
});

function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [globalState, setGlobalState] = useState<GlobalStateType>({
    ui: { sidebarActivated: false, searchBarActivated: false, itemsInCart: 0 },
  });

  const setSidebarActivated = (newState: boolean) => {
    setGlobalState({
      ...globalState,
      ui: {
        ...globalState.ui,
        sidebarActivated: newState,
        searchBarActivated: newState
          ? false
          : globalState.ui.searchBarActivated,
      },
    });
  };
  const setItemsInCart = (newState: number) => {
    setGlobalState({
      ...globalState.ui,
      ui: { ...globalState.ui, itemsInCart: newState },
    });
  };
  const setSearchBarActivated = (newState: boolean) => {
    setGlobalState({
      ...globalState,
      ui: { ...globalState.ui, searchBarActivated: newState },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        state: globalState,
        setSidebarActivated,
        setItemsInCart,
        setSearchBarActivated,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
