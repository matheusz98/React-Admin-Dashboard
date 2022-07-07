import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import AvatarImg from "../../assets/images/avatars/1.jpg";

const PageHeader = () => {
  const user = {
    name: "Catherine Pike",
    avatar: AvatarImg,
  };

  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          src={user.avatar}
          alt={user.name}
          variant="rounded"
          sx={{ mr: 2, width: theme.spacing(8), height: theme.spacing(8) }}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {user.name}!
        </Typography>
        <Typography variant="subtitle2">
          Today is a good day to start trading crypto assets!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
