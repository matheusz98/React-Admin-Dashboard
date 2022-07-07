import { Container, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import PageHeader from "./PageHeader";
import RecentOrders from "./RecentOrders";

const Transactions = () => {
  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
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
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Transactions;
