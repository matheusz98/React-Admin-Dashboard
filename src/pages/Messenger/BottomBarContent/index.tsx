import {
  Avatar,
  Box,
  Button,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import * as S from "./styles";
import AvatarImg from "../../../assets/images/avatars/1.jpg";
import { AttachFileTwoTone, SendTwoTone } from "@mui/icons-material";

const BottomBarContent = () => {
  const theme = useTheme();

  const user = {
    name: "Catherine Pike",
    avatar: AvatarImg,
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: theme.colors.alpha.white[50],
        p: 2,
      }}
    >
      <Box display="flex" alignItems="center" flexGrow={1}>
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
        />
        <S.MessageInputWrapper
          fullWidth
          autoFocus
          placeholder="Write your message here..."
        />
      </Box>
      <Box>
        <Tooltip title="Choose an emoji" placement="top" arrow>
          <IconButton
            color="primary"
            sx={{ fontSize: theme.typography.pxToRem(16) }}
          >
            😀
          </IconButton>
        </Tooltip>
        <S.Input type="file" accept="image/*" id="messenger-upload-file" />
        <Tooltip title="Attach a file" placement="top" arrow>
          <label htmlFor="messenger-upload-file">
            <IconButton component="span" color="primary" sx={{ mx: 1 }}>
              <AttachFileTwoTone fontSize="small" />
            </IconButton>
          </label>
        </Tooltip>
        <Button variant="contained" startIcon={<SendTwoTone />}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default BottomBarContent;
