import { TrendingUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import * as S from "./styles";
import BTCImg from "../../assets/images/placeholders/logo/bitcoin.png";
import RippleIMG from "../../assets/images/placeholders/logo/ripple.png";
import CardanoImg from "../../assets/images/placeholders/logo/cardano.png";
import EthereumImg from "../../assets/images/placeholders/logo/ethereum.png";
import Text from "../Text";

const AccountBalance = () => {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    colors: ["#ff9900", "#1c81c2", "#333", "#5c6ac0"],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]],
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.black[70],
          opacity: 0.5,
        },
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5,
      },
    },
    fill: {
      opacity: 1,
    },
    labels: ["Bitcoin", "Ripple", "Cardano", "Ethereum"],
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100],
      },
      show: false,
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
  };

  const chartSeries = [10, 20, 25, 45];

  return (
    <Card>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography variant="h4" sx={{ pb: 3 }}>
              Account Balance
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                $54,584.23
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                1.0045983485234 BTC
              </Typography>
              <Box display="flex" alignItems="center" sx={{ py: 4 }}>
                <S.AvatarSuccess variant="rounded" sx={{ mr: 2 }}>
                  <TrendingUp fontSize="large" />
                </S.AvatarSuccess>
                <Box>
                  <Typography variant="h4">+ $3,594.00</Typography>
                  <Typography variant="subtitle2" noWrap>
                    this month
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid item sm>
                <Button fullWidth variant="outlined">
                  Send
                </Button>
              </Grid>
              <Grid item sm>
                <Button fullWidth variant="contained">
                  Receive
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
          sx={{ position: "relative" }}
        >
          <Box
            component="span"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            <Divider orientation="vertical" absolute />
          </Box>
          <Box flex={1} py={4} pr={4}>
            <Grid container spacing={0}>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
                xs={12}
                sm={5}
              >
                <Chart
                  height={250}
                  options={chartOptions}
                  series={chartSeries}
                  type="donut"
                />
              </Grid>
              <Grid item display="flex" alignItems="center" xs={12} sm={7}>
                <List disablePadding sx={{ width: "100%" }}>
                  <ListItem disableGutters>
                    <S.ListItemAvatarWrapper>
                      <img src={BTCImg} alt="BTC" />
                    </S.ListItemAvatarWrapper>
                    <ListItemText
                      primary="BTC"
                      primaryTypographyProps={{ variant: "h5", noWrap: true }}
                      secondary="Bitcoin"
                      secondaryTypographyProps={{
                        variant: "subtitle2",
                        noWrap: true,
                      }}
                    />
                    <Box>
                      <Typography variant="h4" align="right" noWrap>
                        20%
                      </Typography>
                      <Text color="success">+2.54%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <S.ListItemAvatarWrapper>
                      <img src={RippleIMG} alt="XRP" />
                    </S.ListItemAvatarWrapper>
                    <ListItemText
                      primary="XRP"
                      primaryTypographyProps={{ variant: "h5", noWrap: true }}
                      secondary="Ripple"
                      secondaryTypographyProps={{
                        variant: "subtitle2",
                        noWrap: true,
                      }}
                    />
                    <Box>
                      <Typography variant="h4" align="right" noWrap>
                        10%
                      </Typography>
                      <Text color="error">-1.22%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <S.ListItemAvatarWrapper>
                      <img src={CardanoImg} alt="ADA" />
                    </S.ListItemAvatarWrapper>
                    <ListItemText
                      primary="ADA"
                      primaryTypographyProps={{ variant: "h5", noWrap: true }}
                      secondary="Cardano"
                      secondaryTypographyProps={{
                        variant: "subtitle2",
                        noWrap: true,
                      }}
                    />
                    <Box>
                      <Typography variant="h4" align="right" noWrap>
                        40%
                      </Typography>
                      <Text color="success">+10.50%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <S.ListItemAvatarWrapper>
                      <img src={EthereumImg} alt="ETH" />
                    </S.ListItemAvatarWrapper>
                    <ListItemText
                      primary="ETH"
                      primaryTypographyProps={{ variant: "h5", noWrap: true }}
                      secondary="Ethereum"
                      secondaryTypographyProps={{
                        variant: "subtitle2",
                        noWrap: true,
                      }}
                    />
                    <Box>
                      <Typography variant="h4" align="right" noWrap>
                        30%
                      </Typography>
                      <Text color="error">-12.38%</Text>
                    </Box>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AccountBalance;
