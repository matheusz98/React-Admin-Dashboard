import { ExpandMoreTwoTone } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import * as S from "./styles";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<any | null>(null);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <S.ListWrapper sx={{ display: { xs: "none", md: "block" } }}>
        <List display="flex" component={Box} disablePadding>
          <ListItem
            button
            to="/components/buttons"
            component={NavLink}
            classes={{ root: "MuiListItem-indicators" }}
          >
            <ListItemText
              primary="Buttons"
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          <ListItem
            button
            to="/components/button"
            component={NavLink}
            classes={{ root: "MuiListItem-indicators" }}
          >
            <ListItemText
              primary="Forms"
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          <ListItem
            button
            ref={ref}
            onClick={handleOpenMenu}
            classes={{ root: "MuiListItem-indicators" }}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  Others
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoTone fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </List>
      </S.ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleCloseMenu} open={isOpen}>
        <MenuItem component={NavLink} to="/" sx={{ px: 3 }}>
          Overview
        </MenuItem>
        <MenuItem component={NavLink} to="/components/tabs" sx={{ px: 3 }}>
          Tabs
        </MenuItem>
        <MenuItem component={NavLink} to="/components/cards" sx={{ px: 3 }}>
          Cards
        </MenuItem>
        <MenuItem component={NavLink} to="/components/modals" sx={{ px: 3 }}>
          Modals
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
