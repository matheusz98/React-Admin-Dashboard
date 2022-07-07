import {
  Box,
  Container,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Logo from "../../../components/Logo";
import * as S from "./styles";
import MaintenanceImg from "../../../assets/images/status/maintenance.svg";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const MaintenancePage = () => {
  return (
    <>
      <Helmet>
        <title>Status - Maintenance</title>
      </Helmet>
      <S.MainContent>
        <Container maxWidth="md" sx={{ py: 4}}>
          <Logo />
          <Box textAlign="center">
            <Container maxWidth="xs">
              <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                The site is currently down for maintenance
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                We apologize for any inconveniences caused
              </Typography>
            </Container>
            <img src={MaintenanceImg} alt="Maintenance" height={250} />
          </Box>
          <Divider sx={{ my: 4 }} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="subtitle1" component="span">
                Phone:{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                component="span"
                color="text.primary"
              >
                + 00 1 888 555 444
              </Typography>
            </Box>
            <Box>
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
      </S.MainContent>
    </>
  );
};

export default MaintenancePage;
