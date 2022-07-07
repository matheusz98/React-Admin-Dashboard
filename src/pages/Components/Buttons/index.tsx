import { ArrowDownward, Delete } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Footer from "../../../components/Footer";
import PageTitle from "../../../components/PageTitle";
import PageTitleContent from "../../../components/PageTitleContent";

const Buttons = () => {
  return (
    <>
      <Helmet>
        <title>Buttons - Components</title>
      </Helmet>
      <PageTitle>
        <PageTitleContent
          heading="Buttons"
          subHeading="Buttons allow users to take actions, and make choices, with a single tap."
          docs="https://material-ui.com/components/buttons/"
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
              <CardHeader title="Contained Buttons" />
              <Divider />
              <CardContent>
                <div>
                  {" "}
                  <Button variant="contained" sx={{ margin: 1 }}>
                    Default
                  </Button>
                  <Button variant="contained" sx={{ margin: 1 }}>
                    Primary
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ margin: 1 }}
                  >
                    Secondary
                  </Button>
                  <Button variant="contained" disabled sx={{ margin: 1 }}>
                    Disabled
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                    sx={{ margin: 1 }}
                  >
                    Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Text Buttons" />
              <Divider />
              <CardContent>
                <div>
                  <Button sx={{ margin: 1 }}>Default</Button>
                  <Button color="primary" sx={{ margin: 1 }}>
                    Primary
                  </Button>
                  <Button color="secondary" sx={{ margin: 1 }}>
                    Secondary
                  </Button>
                  <Button disabled sx={{ margin: 1 }}>
                    Disabled
                  </Button>
                  <Button
                    href="#text-buttons"
                    color="primary"
                    sx={{ margin: 1 }}
                  >
                    Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Outlined Buttons" />
              <Divider />
              <CardContent>
                <div>
                  <Button variant="outlined" sx={{ margin: 1 }}>
                    Default
                  </Button>
                  <Button variant="outlined" color="primary" sx={{ margin: 1 }}>
                    Primary
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ margin: 1 }}
                  >
                    Secondary
                  </Button>
                  <Button variant="outlined" disabled sx={{ margin: 1 }}>
                    Disabled
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="#outlined-buttons"
                    sx={{ margin: 1 }}
                  >
                    Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Sizes" />
              <Divider />
              <CardContent>
                <div>
                  <Button size="small" sx={{ margin: 1 }}>
                    Small
                  </Button>
                  <Button size="medium" sx={{ margin: 1 }}>
                    Medium
                  </Button>
                  <Button size="large" sx={{ margin: 1 }}>
                    Large
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    sx={{ margin: 1 }}
                  >
                    Small
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    color="primary"
                    sx={{ margin: 1 }}
                  >
                    Medium
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    sx={{ margin: 1 }}
                  >
                    Large
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    sx={{ margin: 1 }}
                  >
                    Small
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    sx={{ margin: 1 }}
                  >
                    Medium
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    sx={{ margin: 1 }}
                  >
                    Large
                  </Button>
                </div>
                <div>
                  <IconButton
                    size="small"
                    aria-label="delete"
                    sx={{ margin: 1 }}
                  >
                    <ArrowDownward fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" sx={{ margin: 1 }}>
                    <Delete fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete" sx={{ margin: 1 }}>
                    <Delete />
                  </IconButton>
                  <IconButton aria-label="delete" sx={{ margin: 1 }}>
                    <Delete fontSize="large" />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Buttons;
