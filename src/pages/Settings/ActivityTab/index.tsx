import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import * as S from "./styles";
import AvatarImg from "../../../assets/images/avatars/5.jpg";
import CoverImg from "../../../assets/images/placeholders/covers/6.jpg";
import {
  CommentTwoTone,
  MoreHorizTwoTone,
  ShareTwoTone,
  ThumbUpAltTwoTone,
} from "@mui/icons-material";
import Text from "../../../components/Text";

const ActivityTab = () => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={AvatarImg} alt="Avatar" />}
        action={
          <IconButton color="primary">
            <MoreHorizTwoTone fontSize="medium" />
          </IconButton>
        }
        title="Allison Lipshutz"
        subheader={
          <>
            Managing Partner,{" "}
            <Link href="#" underline="hover">
              #software
            </Link>
            ,{" "}
            <Link href="#" underline="hover">
              #managers
            </Link>
            , Google Inc.
          </>
        }
        titleTypographyProps={{ variant: "h4" }}
        subheaderTypographyProps={{ variant: "subtitle2" }}
      />
      <Box px={3} pb={2}>
        <Typography variant="h4" fontWeight="normal">
          Welcome to organizing your remote office for maximum productivity.
        </Typography>
      </Box>
      <CardMedia image={CoverImg} title="Card Cover" sx={{ minHeight: 280 }} />
      <Box p={3}>
        <Typography variant="h2" sx={{ pb: 1 }}>
          Organizing Your Remote Office for Maximum Productivity
        </Typography>
        <Typography variant="subtitle2">
          <Link href="#" underline="hover">
            example.com
          </Link>{" "}
          • 4 mins read
        </Typography>
      </Box>
      <Divider />
      <S.CardActionsWrapper
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button variant="contained" startIcon={<ThumbUpAltTwoTone />}>
            Like
          </Button>
          <Button
            variant="outlined"
            sx={{ mx: 2 }}
            startIcon={<CommentTwoTone />}
          >
            Comment
          </Button>
          <Button variant="outlined" startIcon={<ShareTwoTone />}>
            Share
          </Button>
        </Box>
        <Box sx={{ mt: { xs: 2, md: 0 } }}>
          <Typography variant="subtitle2" component="span">
            <Text color="black">
              <b>485</b>
            </Text>{" "}
            reactions •{" "}
            <Text color="black">
              <b>63</b>
            </Text>{" "}
            comments
          </Typography>
        </Box>
      </S.CardActionsWrapper>
    </Card>
  );
};

export default ActivityTab;
