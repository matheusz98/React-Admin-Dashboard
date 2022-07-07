import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import * as S from "./style";
import MuiAvatarImg from "../../assets/images/logo/material-ui.svg";
import TypescriptImg from "../../assets/images/logo/typescript.svg";

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ textALign: "center" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 6, md: 10 }}
      >
        <Grid item mx="auto" md={10} lg={8}>
          <S.LabelWrapper color="success">Version 2.0.0</S.LabelWrapper>
          <S.TypographyH1 variant="h1" sx={{ mb: 2 }}>
            React Admin Dashboard
          </S.TypographyH1>
          <S.TypographyH2
            variant="h4"
            fontWeight="normal"
            color="text.secondary"
            sx={{ lineHeight: 1.5, pb: 4 }}
          >
            High performance React template built with lots of powerful
            Material-UI components across multiple product niches for fast &
            perfect apps development processes
          </S.TypographyH2>
          <Button
            to="/dashboard"
            component={RouterLink}
            size="large"
            variant="contained"
          >
            Browse Live Preview
          </Button>
          <Button
            variant="text"
            size="large"
            component="a"
            target="_blank"
            rel="noopener"
            sx={{ ml: 2 }}
          >
            Key Features
          </Button>
          <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
              <S.MuiAvatar>
                <img src={MuiAvatarImg} alt="Material-UI" />
              </S.MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Powered by MUI (Material-UI)</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  A simple and customizable component library to build faster,
                  beautiful, and accessible React apps.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <S.TsAvatar>
                <img src={TypescriptImg} alt="TypeScript" />
              </S.TsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Built with Typescript</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  Tokyo Free White features a modern technology stack and is
                  built with React + Typescript.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
