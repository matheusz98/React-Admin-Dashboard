import { Box } from "@mui/material";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <Box sx={{ height: "100%", flex: 1 }}>{children || <Outlet />}</Box>;
};

export default MainLayout;
