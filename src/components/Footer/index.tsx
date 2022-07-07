import { Box, Link, Typography } from "@mui/material";
import * as S from "./styles";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <S.FooterWrapper className="footer-wrapper">
      <Box
        display={{ xs: "block", md: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        pb={4}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; {date} - React Admin Dashboard
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ pt: { xs: 2, md: 0 } }}>
          Crafted by{" "}
          <Link
            href="https://github.com/matheusz98"
            target="_blank"
            rel="noopener noref"
          >
            matheusz98
          </Link>
        </Typography>
      </Box>
    </S.FooterWrapper>
  );
};

export default Footer;
