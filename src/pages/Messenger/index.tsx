import { MenuTwoTone } from "@mui/icons-material";
import { Box, Divider, useTheme } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Scrollbar from "../../components/Scrollbar";
import BottomBarContent from "./BottomBarContent";
import ChatContent from "./ChatContent";
import SidebarContent from "./SidebarContent";
import * as S from "./styles";
import TopBarContent from "./TopBarContent";

const Messenger = () => {
  const theme = useTheme();
  const [openMobile, setOpenMobile] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setOpenMobile(!openMobile);
  };

  return (
    <>
      <Helmet>
        <title>Messenger - Applications</title>
      </Helmet>
      <S.RootWrapper className="Mui-FixedWrapper">
        <S.DrawerWrapperMobile
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={openMobile}
          onClose={handleDrawerToggle}
          variant="temporary"
          sx={{ display: { lg: "none", xs: "inline-block" } }}
        >
          <Scrollbar>
            <SidebarContent />
          </Scrollbar>
        </S.DrawerWrapperMobile>
        <S.Sidebar sx={{ display: { xs: "none", lg: "inline-block" } }}>
          <Scrollbar>
            <SidebarContent />
          </Scrollbar>
        </S.Sidebar>
        <S.ChatWindow>
          <S.ChatTopBar sx={{ display: { xs: "flex", lg: "inline-block" } }}>
            <S.IconButtonToggle
              onClick={handleDrawerToggle}
              size="small"
              color="primary"
              sx={{ display: { lg: "none", xs: "flex" }, mr: 2 }}
            >
              <MenuTwoTone />
            </S.IconButtonToggle>
            <TopBarContent />
          </S.ChatTopBar>
          <Box flex={1}>
            <Scrollbar>
              <ChatContent />
            </Scrollbar>
          </Box>
          <Divider />
          <BottomBarContent />
        </S.ChatWindow>
      </S.RootWrapper>
    </>
  );
};

export default Messenger;
