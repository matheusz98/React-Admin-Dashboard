import {
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import * as S from "./styles";
import BTCImg from "../../../assets/images/placeholders/logo/bitcoin.png";
import EthereumImg from "../../../assets/images/placeholders/logo/ethereum.png";
import CardanoImg from "../../../assets/images/placeholders/logo/cardano.png";
import Label from "../../Label";
import Text from "../../Text";
import {
  TrendingDownTwoTone,
  TrendingFlatTwoTone,
  TrendingUpTwoTone,
} from "@mui/icons-material";

const WatchListRow = () => {
  const theme = useTheme();

  const Box1Options: ApexOptions = {
    chart: {
      animations: {
        enabled: false,
      },
      background: "transparent",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      zoom: {
        enabled: false,
      },
    },
    labels: [
      "Monday",
      "Tueday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    stroke: {
      curve: "smooth",
      colors: [theme.colors.primary.main],
      width: 2,
    },
    yaxis: {
      show: false,
    },
    colors: [theme.colors.primary.main],
    grid: {
      padding: {
        top: 10,
        right: 5,
        bottom: 10,
        left: 5,
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      fixed: {
        enabled: true,
      },
      x: {
        show: true,
      },
      y: {
        title: {
          formatter: function () {
            return "Price: $";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };

  const Box1Data = [
    {
      name: "Bitcoin",
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16],
    },
  ];

  const Box2Data = [
    {
      name: "Ethereum",
      data: [1.854, 1.873, 1.992, 2.009, 1.909, 1.942, 1.884],
    },
  ];

  const Box3Data = [
    {
      name: "Cardano",
      data: [13, 16, 14, 18, 8, 11, 20],
    },
  ];

  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0}
      >
        <Box sx={{ width: "100%", p: 3 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box display="flex" alignItems="center">
              <S.AvatarWrapper>
                <img src={BTCImg} alt="Bitcoin" />
              </S.AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Bitcoin
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  BTC
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">24h</Label>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                }}
              >
                $56,475.99
              </Typography>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
            <TrendingUpTwoTone
              sx={{
                color: `${theme.colors.success.main}`,
              }}
            />
          </Box>
          <Box pt={2}>
            <Chart
              options={Box1Options}
              series={Box1Data}
              type="line"
              height={100}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            p: 3,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box display="flex" alignItems="center">
              <S.AvatarWrapper>
                <img src={EthereumImg} alt="ETH" />
              </S.AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Ethereum
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  ETH
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">24h</Label>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                }}
              >
                $1,968.00
              </Typography>
              <Text color="error">
                <b>-3.24%</b>
              </Text>
            </Box>
            <TrendingDownTwoTone
              sx={{
                color: `${theme.colors.error.main}`,
              }}
            />
          </Box>
          <Box pt={2}>
            <Chart
              options={Box1Options}
              series={Box2Data}
              type="line"
              height={100}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            p: 3,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box display="flex" alignItems="center">
              <S.AvatarWrapper>
                <img src={CardanoImg} alt="ADA" />
              </S.AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Cardano
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  ADA
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">24h</Label>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                }}
              >
                $23.00
              </Typography>
              <Text color="error">
                <b>-0.33%</b>
              </Text>
            </Box>
            <TrendingFlatTwoTone
              sx={{
                color: `${theme.colors.warning.main}`,
              }}
            />
          </Box>
          <Box pt={2}>
            <Chart
              options={Box1Options}
              series={Box3Data}
              type="line"
              height={100}
            />
          </Box>
        </Box>
      </Stack>
      <Divider />
      <CardActions
        sx={{ display: "flex", justifyContent: "center", p: 3 }}
        disableSpacing
      >
        <Button variant="outlined">View more assets</Button>
      </CardActions>
    </Card>
  );
};

export default WatchListRow;
