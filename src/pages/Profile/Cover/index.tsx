import {
  ArrowBackTwoTone,
  ArrowForwardTwoTone,
  MoreHorizTwoTone,
  UploadTwoTone,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import * as S from "./styles";

interface CoverProps {
  user: any;
}

const Cover = ({ user }: CoverProps) => {
  return (
    <>
      <Box display="flex" mb={3}>
        <Tooltip placement="top" title="Go back" arrow>
          <IconButton color="primary" sx={{ p: 2, mr: 2 }}>
            <ArrowBackTwoTone />
          </IconButton>
        </Tooltip>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            Profile for {user.name}
          </Typography>
          <Typography variant="subtitle2">
            This is a profile page. Easy to modify, always blazing fast
          </Typography>
        </Box>
      </Box>
      <S.CardCover>
        <CardMedia image={user.coverImg} />
        <S.CardCoverAction>
          <S.Input type="file" accept="image/*" id="change-cover" multiple />
          <label htmlFor="change-cover">
            <Button
              variant="contained"
              component="span"
              startIcon={<UploadTwoTone />}
            >
              Change cover
            </Button>
          </label>
        </S.CardCoverAction>
      </S.CardCover>
      <S.AvatarWrapper>
        <Avatar src={user.avatar} alt={user.name} variant="rounded" />
        <S.ButtonUploadWrapper>
          <S.Input
            type="file"
            accept="image/*"
            name="icon-button-file"
            id="icon-button-file"
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span" color="primary">
              <UploadTwoTone />
            </IconButton>
          </label>
        </S.ButtonUploadWrapper>
      </S.AvatarWrapper>
      <Box py={2} pl={2} mb={3}>
        <Typography variant="h4" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="subtitle2">{user.description}</Typography>
        <Typography variant="subtitle2" color="text.primary" sx={{ py: 2 }}>
          {user.jobtitle} | {user.location} | {user.followers} followers
        </Typography>
        <Box
          display={{ xs: "block", md: "flex" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Button variant="contained" size="small">
              Follow
            </Button>
            <Button variant="outlined" size="small" sx={{ mx: 1 }}>
              View website
            </Button>
            <IconButton color="primary" sx={{ p: 0.5 }}>
              <MoreHorizTwoTone />
            </IconButton>
          </Box>
          <Button
            variant="text"
            size="small"
            endIcon={<ArrowForwardTwoTone />}
            sx={{ mt: { xs: 2, md: 0 } }}
          >
            See all {user.name} connections
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cover;
