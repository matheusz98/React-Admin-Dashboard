import { Button, List, ListItem, ListSubheader } from "@mui/material";
import { useContext } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { NavLink as RouterLink } from "react-router-dom";
import * as S from "./styles";
import {
  AccountCircleTwoTone,
  BallotTwoTone,
  BeachAccessTwoTone,
  BrightnessLowTwoTone,
  CameraFrontTwoTone,
  CheckBoxTwoTone,
  ChromeReaderModeTwoTone,
  DesignServicesTwoTone,
  DisplaySettingsTwoTone,
  EmojiEventsTwoTone,
  FilterVintageTwoTone,
  HowToVoteTwoTone,
  LocalPharmacyTwoTone,
  MmsTwoTone,
  RedeemTwoTone,
  SettingsTwoTone,
  TableChartTwoTone,
  TextFormatTwoTone,
  TrafficTwoTone,
  WorkspacePremiumTwoTone,
} from "@mui/icons-material";

const SidebarMenu = () => {
  const { closeSidebar } = useContext(SidebarContext);

  return (
    <>
      <S.MenuWrapper>
        <List component="div">
          <S.SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  to="/"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<DesignServicesTwoTone />}
                >
                  Overview
                </Button>
              </ListItem>
            </List>
          </S.SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Dashboard
            </ListSubheader>
          }
        >
          <S.SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  to="/"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<BrightnessLowTwoTone />}
                >
                  Cryptocurrency
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/messenger"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<MmsTwoTone />}
                >
                  Messenger
                </Button>
              </ListItem>
            </List>
          </S.SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Management
            </ListSubheader>
          }
        >
          <S.SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  to="/management/transactions"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<TableChartTwoTone />}
                >
                  Transactions List
                </Button>
              </ListItem>
            </List>
          </S.SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Accounts
            </ListSubheader>
          }
        >
          <S.SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  to="/management/profile/details"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<AccountCircleTwoTone />}
                >
                  User Profile
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/management/profile/settings"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<DisplaySettingsTwoTone />}
                >
                  Account Settings
                </Button>
              </ListItem>
            </List>
          </S.SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Components
            </ListSubheader>
          }
        >
          <S.SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  to="/components/typography"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<TextFormatTwoTone />}
                >
                  Typography
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/components/buttons"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<BallotTwoTone />}
                >
                  Buttons
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/components/modals"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<BeachAccessTwoTone />}
                >
                  Modals
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/components/accordions"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<EmojiEventsTwoTone />}
                >
                  Accordions
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/components/tabs"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<FilterVintageTwoTone />}
                >
                  Tabs
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/components/badges"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<HowToVoteTwoTone />}
                >
                  Badges
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/components/tooltips"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<LocalPharmacyTwoTone />}
                >
                  Tooltips
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/components/avatars"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<RedeemTwoTone />}
                >
                  Avatars
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/components/cards"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<SettingsTwoTone />}
                >
                  Cards
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/components/forms"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<TrafficTwoTone />}
                >
                  Forms
                </Button>
              </ListItem>
            </List>
          </S.SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Extra Pages
            </ListSubheader>
          }
        >
          <S.SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  to="/status/404"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<CheckBoxTwoTone />}
                >
                  Error 404
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/status/500"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<CameraFrontTwoTone />}
                >
                  Error 500
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/status/coming-soon"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<ChromeReaderModeTwoTone />}
                >
                  Coming Soon
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  to="/status/maintenance"
                  component={RouterLink}
                  onClick={closeSidebar}
                  disableRipple
                  startIcon={<WorkspacePremiumTwoTone />}
                >
                  Maintenance
                </Button>
              </ListItem>
            </List>
          </S.SubMenuWrapper>
        </List>
      </S.MenuWrapper>
    </>
  );
};

export default SidebarMenu;
