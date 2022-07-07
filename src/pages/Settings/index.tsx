import { ChangeEvent, useState } from "react";
import { Container, Grid, Tab, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";
import * as S from "./styles";
import PageHeader from "./PageHeader";
import ActivityTab from "./ActivityTab";
import EditProfileTab from "./EditProfileTab";
import NotificationsTab from "./NotificationsTab";
import SecurityTab from "./SecurityTab";
import Footer from "../../components/Footer";

const Settings = () => {
  const [currentTab, setCurrentTab] = useState<string>("activity");

  const tabs = [
    { value: "activity", label: "Activity" },
    { value: "edit_profile", label: "Edit Profile" },
    { value: "notifications", label: "Notifications" },
    { value: "security", label: "Passwords/Security" },
  ];
  const changeTabs = (e: ChangeEvent<{}>, value: string) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Helmet>
        <title>User Settings - Applications</title>
      </Helmet>
      <PageTitle>
        <PageHeader />
      </PageTitle>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <S.TabsWrapper
              value={currentTab}
              onChange={changeTabs}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </S.TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === "activity" && <ActivityTab />}
            {currentTab === "edit_profile" && <EditProfileTab />}
            {currentTab === "notifications" && <NotificationsTab />}
            {currentTab === "security" && <SecurityTab />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Settings;
