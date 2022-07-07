import { Container, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AccountBalance from "../../components/AccountBalance";
import AccountSecurity from "../../components/AccountSecurity";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import PageTitle from "../../components/PageTitle";
import Wallets from "../../components/Wallets";
import WatchList from "../../components/WatchList";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <PageTitle>
        <PageHeader />
      </PageTitle>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
