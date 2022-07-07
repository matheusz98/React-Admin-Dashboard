import {
  AlarmTwoTone,
  CheckTwoTone,
  SearchTwoTone,
  SettingsTwoTone,
} from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  List,
  ListItemAvatar,
  ListItemText,
  Switch,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { formatDistance, subHours, subMinutes } from "date-fns";
import { ChangeEvent, useState } from "react";
import AvatarImg from "../../../assets/images/avatars/1.jpg";
import AvatarImgTwo from "../../../assets/images/avatars/2.jpg";
import AvatarImgThree from "../../../assets/images/avatars/3.jpg";
import AvatarImgFour from "../../../assets/images/avatars/4.jpg";
import AvatarImgFive from "../../../assets/images/avatars/5.jpg";
import Label from "../../../components/Label";
import { Link as RouterLink } from "react-router-dom";
import * as S from "./styles";

const SidebarContent = () => {
  const [drawerVisibility, setDrawerVisibility] = useState({ invisible: true });
  const [currentTab, setCurrentTab] = useState<string>("all");

  const user = {
    name: "Catherine Pike",
    avatar: AvatarImg,
    jobtitle: "Software Developer",
  };

  const tabs = [
    { value: "all", label: "All" },
    { value: "unread", label: "Unread" },
    { value: "archived", label: "Archived" },
  ];

  const handleVisibilityChange = (event: any) => {
    setDrawerVisibility({
      ...drawerVisibility,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeTab = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <S.RootWrapper>
      <Box display="flex" alignItems="flex-start">
        <Avatar src={user.avatar} alt={user.name} />
        <Box sx={{ flex: 1, ml: 1.5 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box>
              <Typography variant="h5" noWrap>
                {user.name}
              </Typography>
              <Typography variant="subtitle1" noWrap>
                {user.jobtitle}
              </Typography>
            </Box>
            <IconButton size="small" color="primary" sx={{ p: 1 }}>
              <SettingsTwoTone fontSize="small" />
            </IconButton>
          </Box>

          <FormControlLabel
            label="Invisible"
            control={
              <Switch
                onChange={handleVisibilityChange}
                checked={drawerVisibility.invisible}
              />
            }
            name="invisible"
            color="primary"
          />
        </Box>
      </Box>

      <TextField
        fullWidth
        size="small"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchTwoTone />
            </InputAdornment>
          ),
        }}
        sx={{ mt: 2, mb: 1 }}
      />

      <Typography sx={{ mb: 1, mt: 2 }}>Chats</Typography>

      <S.TabsContainerWrapper>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </S.TabsContainerWrapper>

      <Box mt={2}>
        {currentTab === "all" && (
          <List component="div" disablePadding>
            <S.ListItemWrapper selected>
              <ListItemAvatar>
                <Avatar src={AvatarImg} alt="First" />
              </ListItemAvatar>
              <ListItemText
                primary="Zain Baptista"
                secondary="Hey there, how are you today? Is it ok if I call you?"
                primaryTypographyProps={{
                  variant: "h5",
                  color: "textPrimary",
                  noWrap: true,
                }}
                secondaryTypographyProps={{
                  color: "textSecondary",
                  noWrap: true,
                }}
                sx={{ mr: 1 }}
              />
              <Label color="primary">
                <b>2</b>
              </Label>
            </S.ListItemWrapper>

            <S.ListItemWrapper>
              <ListItemAvatar>
                <Avatar src={AvatarImgTwo} alt="Second" />
              </ListItemAvatar>
              <ListItemText
                primary="Kierra Herwitz"
                secondary="Hi! Did you manage to send me those documents"
                primaryTypographyProps={{
                  variant: "h5",
                  color: "textPrimary",
                  noWrap: true,
                }}
                secondaryTypographyProps={{
                  color: "textSecondary",
                  noWrap: true,
                }}
                sx={{ mr: 1 }}
              />
            </S.ListItemWrapper>

            <S.ListItemWrapper>
              <ListItemAvatar>
                <Avatar src={AvatarImgThree} alt="Third" />
              </ListItemAvatar>
              <ListItemText
                primary="Craig Vaccaro"
                secondary="Ola, I still haven't received the program schedule"
                primaryTypographyProps={{
                  variant: "h5",
                  color: "textPrimary",
                  noWrap: true,
                }}
                secondaryTypographyProps={{
                  color: "textSecondary",
                  noWrap: true,
                }}
                sx={{ mr: 1 }}
              />
            </S.ListItemWrapper>

            <S.ListItemWrapper>
              <ListItemAvatar>
                <Avatar src={AvatarImgFour} alt="Fourth" />
              </ListItemAvatar>
              <ListItemText
                primary="Adison Press"
                secondary="I recently did some buying on Amazon and now I'm stuck"
                primaryTypographyProps={{
                  variant: "h5",
                  color: "textPrimary",
                  noWrap: true,
                }}
                secondaryTypographyProps={{
                  color: "textSecondary",
                  noWrap: true,
                }}
                sx={{ mr: 1 }}
              />
              <Label color="primary">
                <b>8</b>
              </Label>
            </S.ListItemWrapper>
          </List>
        )}

        {currentTab === "unread" && (
          <List component="div" disablePadding>
            <S.ListItemWrapper>
              <ListItemAvatar>
                <Avatar src={AvatarImg} alt="First" />
              </ListItemAvatar>
              <ListItemText
                primary="Zain Baptista"
                secondary="Hey there, how are you today? Is it ok if I call you?"
                primaryTypographyProps={{
                  variant: "h5",
                  color: "textPrimary",
                  noWrap: true,
                }}
                secondaryTypographyProps={{
                  color: "textSecondary",
                  noWrap: true,
                }}
                sx={{ mr: 1 }}
              />
              <Label color="primary">
                <b>2</b>
              </Label>
            </S.ListItemWrapper>

            <S.ListItemWrapper>
              <ListItemAvatar>
                <Avatar src={AvatarImgFour} alt="Fourth" />
              </ListItemAvatar>
              <ListItemText
                primary="Adison Press"
                secondary="I recently did some buying on Amazon and now I'm stuck"
                primaryTypographyProps={{
                  variant: "h5",
                  color: "textPrimary",
                  noWrap: true,
                }}
                secondaryTypographyProps={{
                  color: "textSecondary",
                  noWrap: true,
                }}
                sx={{ mr: 1 }}
              />
              <Label color="primary">
                <b>8</b>
              </Label>
            </S.ListItemWrapper>
          </List>
        )}

        {currentTab === "archived" && (
          <Box pb={3}>
            <Divider sx={{ mb: 3 }} />
            <S.AvatarSuccess>
              <CheckTwoTone />
            </S.AvatarSuccess>
            <Typography variant="subtitle2" sx={{ mt: 2, textAlign: "center" }}>
              Hurray! There are no archived chats!
            </Typography>
            <Divider sx={{ mt: 3 }} />
          </Box>
        )}
      </Box>

      <Box display="flex" alignItems="center" mt={4} pb={1}>
        <Typography variant="h3" sx={{ mr: 1 }}>
          Meetings
        </Typography>
        <Label color="success">
          <b>2</b>
        </Label>
      </Box>
      <S.MeetingBox>
        <Typography variant="h4">Daily Design Meeting</Typography>
        <Box display="flex" alignItems="flex-start" py={3}>
          <AlarmTwoTone />
          <Box pl={1}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{ lineHeight: 1 }}
            >
              10:00 - 11:30
            </Typography>
            <Typography variant="subtitle1">
              {formatDistance(subMinutes(new Date(), 12), new Date(), {
                addSuffix: true,
              })}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <AvatarGroup>
            <Tooltip title="View profile for Remy Sharp" arrow>
              <Avatar
                src={AvatarImg}
                alt="First"
                to="#"
                component={RouterLink}
                sx={{ width: 28, height: 28 }}
              />
            </Tooltip>

            <Tooltip title="View profile for Travis Howard" arrow>
              <Avatar
                src={AvatarImgTwo}
                alt="Second"
                to="#"
                component={RouterLink}
                sx={{ width: 28, height: 28 }}
              />
            </Tooltip>

            <Tooltip title="View profile for Craig Vaccaro" arrow>
              <Avatar
                src={AvatarImgThree}
                alt="Third"
                to="#"
                component={RouterLink}
                sx={{ width: 28, height: 28 }}
              />
            </Tooltip>
          </AvatarGroup>

          <Button variant="contained" size="small">
            Attend
          </Button>
        </Box>
      </S.MeetingBox>

      <S.MeetingBox>
        <Typography variant="h4">Investors Council Meeting</Typography>

        <Box display="flex" alignItems="flex-start" py={3}>
          <AlarmTwoTone />
          <Box pl={1}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{ lineHeight: 1 }}
            >
              14:30 - 16:15
            </Typography>
            <Typography variant="subtitle1">
              {formatDistance(subHours(new Date(), 4), new Date(), {
                addSuffix: true,
              })}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <AvatarGroup>
            <Tooltip title="View profile for Travis Howard" arrow>
              <Avatar
                src={AvatarImgFour}
                alt="Fourth"
                to="#"
                component={RouterLink}
                sx={{ width: 28, height: 28 }}
              />
            </Tooltip>

            <Tooltip title="View profile for Craig Vaccaro" arrow>
              <Avatar
                src={AvatarImgFive}
                alt="Fith"
                to="#"
                component={RouterLink}
                sx={{ width: 28, height: 28 }}
              />
            </Tooltip>
          </AvatarGroup>

          <Button variant="contained" size="small">
            Attend
          </Button>
        </Box>
      </S.MeetingBox>
    </S.RootWrapper>
  );
};

export default SidebarContent;
