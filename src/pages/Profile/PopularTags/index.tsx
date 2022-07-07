import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Typography,
  useTheme,
} from "@mui/material";
import * as S from "./styles";
import GoogleLogo from "../../../assets/images/logo/google.svg";

const PopularTags = () => {
  const theme = useTheme();

  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader title="Popular Tags" />
      <Divider />
      <S.ListWrapper disablePadding>
        <ListItem
          button
          sx={{
            color: `${theme.colors.primary.main}`,
            "&:hover": { color: `${theme.colors.primary.dark}` },
          }}
        >
          <ListItemText primary="#HTML" />
        </ListItem>
        <Divider />

        <ListItem
          button
          sx={{
            color: `${theme.colors.primary.main}`,
            "&:hover": { color: `${theme.colors.primary.dark}` },
          }}
        >
          <ListItemText primary="#software_development" />
        </ListItem>
        <Divider />

        <ListItem
          button
          sx={{
            color: `${theme.colors.primary.main}`,
            "&:hover": { color: `${theme.colors.primary.dark}` },
          }}
        >
          <ListItemText primary="#TrendingInfuencers" />
        </ListItem>
        <Divider />

        <ListItem
          button
          sx={{
            color: `${theme.colors.primary.main}`,
            "&:hover": { color: `${theme.colors.primary.dark}` },
          }}
        >
          <ListItemText primary="#investorsWatch2022" />
        </ListItem>
        <Divider />

        <ListSubheader>
          <Typography variant="h4" color="text.primary" sx={{ py: 1.5 }}>
            Groups
          </Typography>
        </ListSubheader>
        <Divider />

        <ListItem button>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.info.contrastText}`,
              }}
            >
              WD
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Web Designers Lounge"
            primaryTypographyProps={{
              variant: "h5",
              color: `${theme.colors.alpha.black[100]}`,
            }}
          />
        </ListItem>
        <Divider />

        <ListItem button>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.info.contrastText}`,
              }}
            >
              D
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Writer’s Digest Daily"
            primaryTypographyProps={{
              variant: "h5",
              color: `${theme.colors.alpha.black[100]}`,
            }}
          />
        </ListItem>
        <Divider />

        <ListItem button>
          <ListItemAvatar>
            <Avatar
              src={GoogleLogo}
              alt="Google"
              sx={{
                width: 38,
                height: 38,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Google Developers"
            primaryTypographyProps={{
              variant: "h5",
              color: `${theme.colors.alpha.black[100]}`,
            }}
          />
        </ListItem>
      </S.ListWrapper>
    </Card>
  );
};

export default PopularTags;
