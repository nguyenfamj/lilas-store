import { ReactNode, createContext } from 'react';

interface GlobalStateType {}

export const GlobalContext = createContext<GlobalStateType | null>({});

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {};

export default GlobalContextProvider;
