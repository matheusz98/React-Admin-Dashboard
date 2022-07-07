import { createContext, ReactNode, useState } from "react";

type SidebarProps = {
  sidebarToggle?: any;
  toggleSidebar?: () => void;
  closeSidebar?: () => void;
  children?: ReactNode;
};

export const SidebarContext = createContext<SidebarProps>({} as SidebarProps);

export const SidebarProvider = ({ children }: SidebarProps) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
