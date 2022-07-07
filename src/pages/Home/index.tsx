import { Box, Card, Container, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero";
import Logo from "../../components/Logo";

const HomepageContainer = styled(Box)(
  () => `
        flex: 1;
        overflow-x: hidden;
        overflow: auto;
        align-items: center;
    `
);

const Home = () => {
  return (
    <HomepageContainer>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" py={5}>
          <Logo />
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
    </HomepageContainer>
  );
};

export default Home;
