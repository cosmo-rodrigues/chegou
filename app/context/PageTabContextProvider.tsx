'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  PropsWithChildren,
  FC,
} from 'react';

interface ContextProps {
  tabValue: number | undefined;
  setTabValue: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
  tabValue: 0,
  setTabValue: (): number => 0,
});

export const PageTabContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <GlobalContext.Provider value={{ tabValue, setTabValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const usePageTabContext = () => useContext(GlobalContext);
