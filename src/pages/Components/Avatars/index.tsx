import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../../components/PageTitle";
import PageTitleContent from "../../../components/PageTitleContent";
import AvatarImg from "../../../assets/images/avatars/1.jpg";
import AvatarImgTwo from "../../../assets/images/avatars/2.jpg";
import AvatarImgThree from "../../../assets/images/avatars/3.jpg";
import AvatarImgFour from "../../../assets/images/avatars/4.jpg";
import AvatarImgFive from "../../../assets/images/avatars/5.jpg";
import { deepOrange, deepPurple, green, pink } from "@mui/material/colors";
import { Assignment, Folder, Pageview } from "@mui/icons-material";
import Footer from "../../../components/Footer";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Avatars = () => {
  return (
    <>
      <Helmet>
        <title>Avatar - Components</title>
      </Helmet>
      <PageTitle>
        <PageTitleContent
          heading="Avatars"
          subHeading="Avatars are found throughout material design with uses in everything from tables to dialog menus."
          docs="https://material-ui.com/components/avatars/"
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
              <CardHeader title="Images" />
              <Divider />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar src={AvatarImg} alt="First" />
                  <Avatar src={AvatarImgTwo} alt="Second" />
                  <Avatar src={AvatarImgThree} alt="Third" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Letters" />
              <Divider />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar>H</Avatar>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                </Stack>
                <Divider sx={{ my: 5 }} />
                <Stack direction="row" spacing={2}>
                  <Avatar {...stringAvatar("Kent Dodds")} />
                  <Avatar {...stringAvatar("Jed Watson")} />
                  <Avatar {...stringAvatar("Tim Neutkens")} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Sizes" />
              <Divider />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatars/4.jpg"
                    sx={{ width: 24, height: 24 }}
                  />
                  <Avatar alt="Remy Sharp" src="/static/images/avatars/5.jpg" />
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatars/3.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Icons" />
              <Divider />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar>
                    <Folder />
                  </Avatar>
                  <Avatar sx={{ bgcolor: pink[500] }}>
                    <Pageview />
                  </Avatar>
                  <Avatar sx={{ bgcolor: green[500] }}>
                    <Assignment />
                  </Avatar>
                </Stack>
                <Divider sx={{ my: 5 }} />
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                    N
                  </Avatar>
                  <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <Assignment />
                  </Avatar>
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

export default Avatars;
