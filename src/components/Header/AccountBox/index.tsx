import {
  AccountBoxTwoTone,
  AccountTreeTwoTone,
  ExpandMoreTwoTone,
  InboxTwoTone,
  LockOpenTwoTone,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Popover,
} from "@mui/material";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileImg from "../../../assets/images/avatars/1.jpg";
import * as S from "./styles";

const AccountBox = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const user = {
    name: "Catherine Pike",
    avatar: ProfileImg,
    jobtitle: "Project Manager",
  };

  return (
    <>
      <S.UserBoxButton ref={ref} onClick={handleOpenMenu} color="secondary">
        <Avatar src={user.avatar} alt={user.name} variant="rounded" />
        <Hidden mdDown>
          <S.UserBoxText>
            <S.UserBoxLabel variant="body1">{user.name}</S.UserBoxLabel>
            <S.UserBoxDescription variant="body2">
              {user.jobtitle}
            </S.UserBoxDescription>
          </S.UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoTone sx={{ ml: 1 }} />
        </Hidden>
      </S.UserBoxButton>
      <Popover
        anchorEl={ref.current}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleCloseMenu}
        open={isOpen}
      >
        <S.MenuUserBox display="flex" sx={{ minWidth: 210 }}>
          <Avatar src={user.avatar} alt={user.name} variant="rounded" />
          <S.UserBoxText>
            <S.UserBoxLabel variant="body1">{user.name}</S.UserBoxLabel>
            <S.UserBoxDescription variant="body2">
              {user.jobtitle}
            </S.UserBoxDescription>
          </S.UserBoxText>
        </S.MenuUserBox>
        <Divider sx={{ mb: 0 }} />
        <List component="nav" sx={{ p: 1 }}>
          <ListItem button to="/management/profile/details" component={NavLink}>
            <AccountBoxTwoTone fontSize="small" />
            <ListItemText primary="My Profile" />
          </ListItem>
          <ListItem button to="/messenger" component={NavLink}>
            <InboxTwoTone fontSize="small" />
            <ListItemText primary="Messenger" />
          </ListItem>
          <ListItem
            button
            to="/management/profile/settings"
            component={NavLink}
          >
            <AccountTreeTwoTone fontSize="small" />
            <ListItemText primary="Account Settings" />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button fullWidth color="primary">
            <LockOpenTwoTone sx={{ mr: 1 }} />
            Sign Out
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default AccountBox;
