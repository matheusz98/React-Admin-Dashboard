import { Container, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AvatarImg from "../../assets/images/avatars/2.jpg";
import CoverImg from "../../assets/images/placeholders/covers/5.jpg";
import Footer from "../../components/Footer";
import Addresses from "./Addresses";
import Cover from "./Cover";
import Feed from "./Feed";
import MyCards from "./MyCards";
import PopularTags from "./PopularTags";
import RecentActivity from "./RecentActivity";

const Profile = () => {
  const user = {
    savedCards: 7,
    name: "Catherine Pike",
    coverImg: CoverImg,
    avatar: AvatarImg,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: "Web Developer",
    location: "Barcelona, Spain",
    followers: "465",
  };

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <Cover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
