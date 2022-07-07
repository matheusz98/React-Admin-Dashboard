import { Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Footer from "../../../components/Footer";
import PageTitle from "../../../components/PageTitle";
import PageTitleContent from "../../../components/PageTitleContent";
import Headings from "./Headings";
import Texts from "./Texts";

const Typography = () => {
  return (
    <>
      <Helmet>
        <title>Typography - Components</title>
      </Helmet>
      <PageTitle>
        <PageTitleContent
          heading="Typography"
          subHeading="Use typography to present your design and content as clearly and efficiently as possible."
          docs="https://mui.com/material-ui/react-typography/#main-content"
        />
      </PageTitle>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Headings />
        </Grid>
        <Grid item xs={12}>
          <Texts />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Typography;
