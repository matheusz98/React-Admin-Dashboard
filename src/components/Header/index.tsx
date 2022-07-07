import { CloseTwoTone, MenuTwoTone } from "@mui/icons-material";
import {
  alpha,
  Box,
  Divider,
  IconButton,
  lighten,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import AccountBox from "./AccountBox";
import HeaderMenu from "./HeaderMenu";
import HeaderWidgets from "./HeaderWidgets";
import * as S from "./styles";

const Header = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <S.HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === "dark"
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        divider={<Divider flexItem orientation="vertical" />}
        spacing={2}
      >
        <HeaderMenu />
      </Stack>
      <Box display="flex" alignItems="center">
        <HeaderWidgets />
        <AccountBox />
        <Box
          component="span"
          sx={{ ml: 2, display: { lg: "none", xs: "inline-block" } }}
        >
          <Tooltip title="Toggle Menu" arrow>
            <IconButton onClick={toggleSidebar} color="primary">
              {!sidebarToggle ? (
                <MenuTwoTone fontSize="small" />
              ) : (
                <CloseTwoTone fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </S.HeaderWrapper>
  );
};

export default Header;
