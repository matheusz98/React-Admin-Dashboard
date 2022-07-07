import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Footer from "../../../components/Footer";
import PageTitle from "../../../components/PageTitle";
import PageTitleContent from "../../../components/PageTitleContent";

const Accordions = () => {
  return (
    <>
      <Helmet>
        <title>Accordions - Components</title>
      </Helmet>
      <PageTitle>
        <PageTitleContent
          heading="Accordions"
          subHeading="Accordions contain creation flows and allow lightweight editing of an element."
          docs="https://material-ui.com/components/accordion/"
        />
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
            <Card>
              <CardHeader title="Basic Example" />
              <Divider />
              <CardContent>
                <Accordion>
                  <AccordionSummary
                    id="panel1a-header"
                    aria-controls="panel1a-content"
                    expandIcon={<ExpandMore />}
                  >
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                  <AccordionSummary
                    id="panel3a-header"
                    aria-controls="panel3a-content"
                    expandIcon={<ExpandMore />}
                  >
                    <Typography>Disabled Accordion</Typography>
                  </AccordionSummary>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Accordions;
