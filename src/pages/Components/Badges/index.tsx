import { Add, Mail, Remove } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
} from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../../components/Footer";
import PageTitle from "../../../components/PageTitle";
import PageTitleContent from "../../../components/PageTitleContent";

const shapeStyles = { bgcolor: "primary.main", width: 40, height: 40 };

const shapeCircleStyles = { borderRadius: "50%" };

const rectangle = <Box component="span" sx={shapeStyles} />;

const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const Badges = () => {
  const [count, setCount] = useState<number>(2);
  const [invisible, setInvisible] = useState<boolean>(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <>
      <Helmet>
        <title>Badges - Components</title>
      </Helmet>
      <PageTitle>
        <PageTitleContent
          heading="Badges"
          subHeading="Badge generates a small badge to the top-right of its child(ren)."
          docs="https://material-ui.com/components/badges/"
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
              <CardHeader title="Shapes" />
              <Divider />
              <CardContent>
                <Stack direction="row" spacing={3}>
                  <Badge badgeContent=" " color="secondary">
                    {rectangle}
                  </Badge>
                  <Badge badgeContent=" " variant="dot" color="secondary">
                    {rectangle}
                  </Badge>
                  <Badge badgeContent=" " overlap="circular" color="secondary">
                    {circle}
                  </Badge>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Badges Visibility" />
              <Divider />
              <CardContent>
                <Box
                  sx={{
                    color: "action.active",
                    display: "flex",
                    flexDirection: "column",
                    "& > *": {
                      marginBottom: 2,
                    },
                    "& .MuiBadge-root": {
                      marginRight: 4,
                    },
                  }}
                >
                  <div>
                    <Badge badgeContent={count} color="secondary">
                      <Mail />
                    </Badge>
                    <ButtonGroup>
                      <Button
                        onClick={() => {
                          setCount(Math.max(count - 1, 0));
                        }}
                        aria-label="reduce"
                      >
                        <Remove fontSize="small" />
                      </Button>
                      <Button
                        onClick={() => {
                          setCount(count + 1);
                        }}
                        aria-label="increase"
                      >
                        <Add fontSize="small" />
                      </Button>
                    </ButtonGroup>
                  </div>
                  <div>
                    <Badge
                      variant="dot"
                      invisible={invisible}
                      color="secondary"
                    >
                      <Mail />
                    </Badge>
                    <FormControlLabel
                      label="Show Badge"
                      control={
                        <Switch
                          checked={!invisible}
                          onChange={handleBadgeVisibility}
                        />
                      }
                      sx={{ color: "text.primary" }}
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Colors" />
              <Divider />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Badge badgeContent={4} color="secondary">
                    <Mail color="action" />
                  </Badge>
                  <Badge badgeContent={4} color="success">
                    <Mail color="action" />
                  </Badge>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Badges;
