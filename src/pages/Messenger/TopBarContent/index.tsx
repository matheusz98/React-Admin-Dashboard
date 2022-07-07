import {
  Accordion,
  AccordionDetails,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import * as S from "./styles";
import AvatarImg from "../../../assets/images/avatars/1.jpg";
import { formatDistance, subMinutes } from "date-fns";
import {
  BlockTwoTone,
  CallTwoTone,
  CancelTwoTone,
  ColorLensTwoTone,
  DescriptionTwoTone,
  EmojiEmotionsTwoTone,
  ExpandMore,
  InfoTwoTone,
  NotificationsOffTwoTone,
  SearchTwoTone,
  VideoCameraFrontTwoTone,
  WarningTwoTone,
} from "@mui/icons-material";

const TopBarContent = () => {
  const [openMobile, setOpenMobile] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<string | false>("section1");
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setOpenMobile(!openMobile);
  };

  const handleChange =
    (section: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? section : false);
    };

  return (
    <>
      <S.RootWrapper>
        <Box display="flex" alignItems="center">
          <Avatar
            src={AvatarImg}
            alt="First"
            variant="rounded"
            sx={{ width: 48, height: 48 }}
          />
          <Box ml={1}>
            <Typography variant="h4">Zain Baptista</Typography>
            <Typography variant="subtitle1">
              {formatDistance(subMinutes(new Date(), 8), new Date(), {
                addSuffix: true,
              })}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Tooltip title="Start a voice call" placement="bottom">
            <IconButton color="primary">
              <CallTwoTone />
            </IconButton>
          </Tooltip>
          <Tooltip title="Start a video call" placement="bottom">
            <IconButton color="primary">
              <VideoCameraFrontTwoTone />
            </IconButton>
          </Tooltip>
          <Tooltip title="Conversation information" placement="bottom">
            <IconButton onClick={handleDrawerToggle} color="primary">
              <InfoTwoTone />
            </IconButton>
          </Tooltip>
        </Box>
      </S.RootWrapper>

      <Drawer
        anchor={theme.direction === "rtl" ? "left" : "right"}
        open={openMobile}
        onClose={handleDrawerToggle}
        variant="temporary"
        elevation={9}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Box p={2} sx={{ minWidth: 360 }}>
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              src={AvatarImg}
              alt="First"
              variant="rounded"
              sx={{
                width: theme.spacing(12),
                height: theme.spacing(12),
                my: 2,
                mx: "auto",
              }}
            />
            <Typography variant="h4">Zain Baptista</Typography>
            <Typography variant="subtitle2">
              Active{" "}
              {formatDistance(subMinutes(new Date(), 7), new Date(), {
                addSuffix: true,
              })}
            </Typography>
          </Box>
          <Divider sx={{ my: 3 }} />

          <Accordion
            onChange={handleChange("section1")}
            expanded={expanded === "section1"}
          >
            <S.AccordionSummaryWrapper expandIcon={<ExpandMore />}>
              <Typography variant="h5">Customize Chat</Typography>
            </S.AccordionSummaryWrapper>
            <AccordionDetails sx={{ p: 0 }}>
              <List component="nav">
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <SearchTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="Search in conversation"
                    primaryTypographyProps={{ variant: "h5" }}
                  />
                </ListItem>
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <ColorLensTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="Change theme styling"
                    primaryTypographyProps={{ variant: "h5" }}
                  />
                </ListItem>
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <EmojiEmotionsTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="Choose Default Emoji"
                    primaryTypographyProps={{ variant: "h5" }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            onChange={handleChange("section2")}
            expanded={expanded === "section2"}
          >
            <S.AccordionSummaryWrapper expandIcon={<ExpandMore />}>
              <Typography variant="h5">Privacy & Support</Typography>
            </S.AccordionSummaryWrapper>
            <AccordionDetails sx={{ p: 0 }}>
              <List component="nav">
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <NotificationsOffTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="Turn off notifications"
                    primaryTypographyProps={{ variant: "h5" }}
                  />
                </ListItem>
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <CancelTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="Ignore all messages"
                    primaryTypographyProps={{ variant: "h5" }}
                  />
                </ListItem>
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <BlockTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="Block user"
                    primaryTypographyProps={{ variant: "h5" }}
                  />
                </ListItem>
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <WarningTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="Something's Wrong"
                    secondary="Report the conversation and provide feedback"
                    primaryTypographyProps={{ variant: "h5" }}
                    secondaryTypographyProps={{ variant: "subtitle1" }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            onChange={handleChange("section3")}
            expanded={expanded === "section3"}
          >
            <S.AccordionSummaryWrapper expandIcon={<ExpandMore />}>
              <Typography variant="h5">Shared Files</Typography>
            </S.AccordionSummaryWrapper>
            <AccordionDetails sx={{ p: 0 }}>
              <List component="nav">
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <DescriptionTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="HolidayPictures.zip"
                    secondary="You opened in the past year"
                    primaryTypographyProps={{ variant: "h5" }}
                    secondaryTypographyProps={{ variant: "subtitle1" }}
                  />
                </ListItem>
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <DescriptionTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="2021Screenshot.jpg"
                    secondary="You edited this file yesterday"
                    primaryTypographyProps={{ variant: "h5" }}
                    secondaryTypographyProps={{ variant: "subtitle1" }}
                  />
                </ListItem>
                <ListItem button>
                  <S.ListItemIconWrapper>
                    <DescriptionTwoTone />
                  </S.ListItemIconWrapper>
                  <ListItemText
                    primary="PresentationDeck.pdf"
                    secondary="Never opened"
                    primaryTypographyProps={{ variant: "h5" }}
                    secondaryTypographyProps={{ variant: "subtitle1" }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
    </>
  );
};

export default TopBarContent;
