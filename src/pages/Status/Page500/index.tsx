import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import * as S from "./styles";
import ErrorImg from "../../../assets/images/status/500.svg";
import { LoadingButton } from "@mui/lab";
import { RefreshTwoTone } from "@mui/icons-material";

const Page500 = () => {
  const [pending, setPending] = useState<boolean>(false);

  const handleClick = () => {
    setPending(!pending);
  };

  return (
    <>
      <Helmet>
        <title>Status - 500</title>
      </Helmet>
      <S.MainContent>
        <Grid
          container
          alignItems="stretch"
          spacing={0}
          sx={{ height: "100%" }}
        >
          <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={6}
          >
            <Container maxWidth="sm">
              <Box textAlign="center">
                <img src={ErrorImg} alt="500" height={260} />
                <Typography variant="h2" sx={{ my: 2 }}>
                  There was an error, please try again later
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 4 }}
                >
                  The server encountered an internal error and was not able to
                  complete your request
                </Typography>
                <LoadingButton
                  onClick={handleClick}
                  loading={pending}
                  variant="outlined"
                  color="primary"
                  startIcon={<RefreshTwoTone />}
                >
                  Refresh view
                </LoadingButton>
                <Button variant="contained" href="/" sx={{ ml: 1 }}>
                  Go back
                </Button>
              </Box>
            </Container>
          </Grid>
          <Hidden mdDown>
            <S.GridWrapper
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={6}
            >
              <Container maxWidth="sm">
                <Box textAlign="center">
                  <S.TypographyPrimary variant="h1" sx={{ my: 2 }}>
                    React Admin Dashboard
                  </S.TypographyPrimary>
                  <S.TypographySecondary
                    variant="h4"
                    fontWeight="normal"
                    sx={{ mb: 4 }}
                  >
                    High performance React template built with lots of powerful
                    Material-UI components across multiple product niches for
                    fast &amp; perfect apps development processes.
                  </S.TypographySecondary>
                  <Button variant="contained" size="large" href="/">
                    Overview
                  </Button>
                </Box>
              </Container>
            </S.GridWrapper>
          </Hidden>
        </Grid>
      </S.MainContent>
    </>
  );
};

export default Page500;
