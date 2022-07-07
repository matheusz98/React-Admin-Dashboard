import {
  Box,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Logo from "../../../components/Logo";
import * as S from "./styles";
import ComingSoonImg from "../../../assets/images/status/coming-soon.svg";
import { Facebook, Instagram, MailTwoTone, Twitter } from "@mui/icons-material";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2023`) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: any = [];

  Object.keys(timeLeft).forEach((interval: any) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Box textAlign="center" px={3}>
        <S.TypographyH1 variant="h1">{timeLeft[interval]}</S.TypographyH1>
        <S.TypographyH3 variant="h3">{interval}</S.TypographyH3>
      </Box>
    );
  });

  return (
    <>
      <Helmet>
        <title>Status - Coming Soon</title>
      </Helmet>
      <S.MainContent>
        <Container maxWidth="md" sx={{ py: 5 }}>
          <Logo />
          <Box textAlign="center" mb={3}>
            <Container maxWidth="xs">
              <Typography variant="h1" sx={{ mt: 4, mb: 2 }}>
                Coming Soon
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                We're working on implementing the last features before our
                launch!
              </Typography>
            </Container>
            <img src={ComingSoonImg} alt="Coming Soon" height={200} />
          </Box>

          <Box display="flex" justifyContent="center">
            {timerComponents.length ? timerComponents : <>Time's up</>}
          </Box>

          <Container maxWidth="sm">
            <Box sx={{ textAlign: "center", p: 4 }}>
              <FormControl variant="outlined" fullWidth>
                <S.OutlinedInputWrapper
                  type="text"
                  placeholder="Enter your email address here..."
                  endAdornment={
                    <InputAdornment position="end">
                      <S.ButtonNotify variant="contained" size="small">
                        Notify Me
                      </S.ButtonNotify>
                    </InputAdornment>
                  }
                  startAdornment={
                    <InputAdornment position="start">
                      <MailTwoTone />
                    </InputAdornment>
                  }
                />
                <FormHelperText>
                  We'll email you once our website is launched!
                </FormHelperText>
              </FormControl>
              <Divider sx={{ my: 4 }} />
              <Box sx={{ textAlign: "center" }}>
                <Tooltip title="Facebook" placement="top" arrow>
                  <IconButton color="primary">
                    <Facebook />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Twitter" placement="top" arrow>
                  <IconButton color="primary">
                    <Twitter />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Instagram" placement="top" arrow>
                  <IconButton color="primary">
                    <Instagram />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Container>
        </Container>
      </S.MainContent>
    </>
  );
};

export default ComingSoon;
