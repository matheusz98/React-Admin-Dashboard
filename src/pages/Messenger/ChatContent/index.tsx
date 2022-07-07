import { Avatar, Box, Typography } from "@mui/material";
import * as S from "./styles";
import {
  format,
  formatDistance,
  subDays,
  subHours,
  subMinutes,
} from "date-fns";
import AvatarImg from "../../../assets/images/avatars/1.jpg";
import AvatarImgTwo from "../../../assets/images/avatars/2.jpg";
import { ScheduleTwoTone } from "@mui/icons-material";

const ChatContent = () => {
  const user = {
    name: "Catherine Pike",
    avatar: AvatarImg,
  };

  return (
    <Box p={3}>
      <S.DividerWrapper>
        {format(subDays(new Date(), 3), "MMM dd yyyy")}
      </S.DividerWrapper>

      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        py={3}
      >
        <Avatar
          src={AvatarImgTwo}
          alt="Second"
          variant="rounded"
          sx={{ width: 50, height: 50 }}
        />
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          ml={2}
        >
          <S.CardWrapperSecondary>
            Hi. Can you send me the missing invoices asap?
          </S.CardWrapperSecondary>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center", pt: 1 }}
          >
            <ScheduleTwoTone fontSize="small" sx={{ mr: 0.5 }} />
            {formatDistance(subHours(new Date(), 115), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-start"
        py={3}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
          flexDirection="column"
          mr={2}
        >
          <S.CardWrapperPrimary>
            Yes, I'll email them right now. I'll let you know once the remaining
            invoices are done.
          </S.CardWrapperPrimary>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center", pt: 1 }}
          >
            <ScheduleTwoTone fontSize="small" sx={{ mr: 0.5 }} />
            {formatDistance(subHours(new Date(), 125), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
        <Avatar
          src={user.avatar}
          alt={user.name}
          variant="rounded"
          sx={{ width: 50, height: 50 }}
        />
      </Box>
      <S.DividerWrapper>
        {format(subDays(new Date(), 5), "MMM dd yyyy")}
      </S.DividerWrapper>

      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-start"
        py={3}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
          flexDirection="column"
          mr={2}
        >
          <S.CardWrapperPrimary>Hey! Are you there?</S.CardWrapperPrimary>
          <S.CardWrapperPrimary sx={{ mt: 2 }}>
            Helloooooo??
          </S.CardWrapperPrimary>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center", pt: 1 }}
          >
            <ScheduleTwoTone fontSize="small" sx={{ mr: 0.5 }} />
            {formatDistance(subHours(new Date(), 60), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
        <Avatar
          src={user.avatar}
          alt={user.name}
          variant="rounded"
          sx={{ width: 50, height: 50 }}
        />
      </Box>
      <S.DividerWrapper>Today</S.DividerWrapper>

      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        py={3}
      >
        <Avatar
          src={AvatarImgTwo}
          alt="Second"
          variant="rounded"
          sx={{ wdith: 50, height: 50 }}
        />
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
          ml={2}
        >
          <S.CardWrapperSecondary>Hey there!</S.CardWrapperSecondary>
          <S.CardWrapperSecondary sx={{ mt: 1 }}>
            How are you? Is it ok if i call you?
          </S.CardWrapperSecondary>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center", pt: 1 }}
          >
            <ScheduleTwoTone fontSize="small" sx={{ mr: 0.5 }} />
            {formatDistance(subMinutes(new Date(), 6), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-start"
        py={3}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
          flexDirection="column"
          mr={2}
        >
          <S.CardWrapperPrimary>
            Hello, I just got my Amazon order shipped and I’m very happy about
            that.
          </S.CardWrapperPrimary>
          <S.CardWrapperPrimary
            sx={{
              mt: 1,
            }}
          >
            Can you confirm?
          </S.CardWrapperPrimary>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
              pt: 1,
            }}
          >
            <ScheduleTwoTone
              fontSize="small"
              sx={{
                mr: 0.5,
              }}
            />
            {formatDistance(subMinutes(new Date(), 8), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
        <Avatar
          src={user.avatar}
          alt={user.name}
          variant="rounded"
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </Box>
    </Box>
  );
};

export default ChatContent;
