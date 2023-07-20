"use client";

import React, { FC, createContext, useContext, useState } from "react";

export const AppStateContext = createContext<any>({});

interface IProps {
  children: JSX.Element;
}
export const ContextProvider: FC<IProps> = ({ children }) => {
  const [activeMenuKey, setActiveMenuKey] = useState<string | null>(null);
  return (
    <AppStateContext.Provider value={{ activeMenuKey, setActiveMenuKey }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppContext = () => useContext(AppStateContext);