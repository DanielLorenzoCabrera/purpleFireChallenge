"use client";
import { useState, useEffect, createContext, useContext } from "react";

interface AppWrapperProps {
  children: JSX.Element | React.ReactNode;
}

interface AppContextState {
  isSmallScreen: boolean;
}

export const AppContext = createContext<AppContextState>({
  isSmallScreen: false,
});

export const useAppContext = () => useContext(AppContext);

const AppWrapper = ({ children }: AppWrapperProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const setScreenSize = (screenSize: number) =>
    setIsSmallScreen(screenSize <= 1200);

  useEffect(() => {
    setScreenSize(window.outerWidth);

    window.addEventListener("resize", (ev: Event) => {
      const target: any = ev.target;
      setScreenSize(target.outerWidth);
    });
  }, []);

  return (
    <AppContext.Provider value={{ isSmallScreen }}>
      <main className={`${isSmallScreen ? "mobile" : ""}`}>{children}</main>;
    </AppContext.Provider>
  );
};

export default AppWrapper;
