import { AddTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import * as S from "./styles";
import BTCImg from "../../assets/images/placeholders/logo/bitcoin.png";
import RippleImg from "../../assets/images/placeholders/logo/ripple.png";
import CardanoImg from "../../assets/images/placeholders/logo/cardano.png";

const Wallets = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pb: 3 }}
      >
        <Typography variant="h3">Wallets</Typography>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddTwoTone fontSize="small" />}
        >
          Add new wallet
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3} item>
          <Card sx={{ px: 1 }}>
            <CardContent>
              <S.AvatarWrapper>
                <img src={BTCImg} alt="Bitcoin" />
              </S.AvatarWrapper>
              <Typography variant="h5" noWrap>
                Bitcoin
              </Typography>
              <Typography variant="subtitle1" noWrap>
                BTC
              </Typography>
              <Box sx={{ pt: 3 }}>
                <Typography variant="h3" gutterBottom noWrap>
                  $3,586.22
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  1.25843 BTC
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Card sx={{ px: 1 }}>
            <CardContent>
              <S.AvatarWrapper>
                <img src={RippleImg} alt="Ripple" />
              </S.AvatarWrapper>
              <Typography variant="h5" noWrap>
                Riple
              </Typography>
              <Typography variant="subtitle1" noWrap>
                XRP
              </Typography>
              <Box sx={{ pt: 3 }}>
                <Typography variant="subtitle2" noWrap gutterBottom>
                  $586.83
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  5,783 XRP
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Card sx={{ px: 1 }}>
            <CardContent>
              <S.AvatarWrapper>
                <img src={CardanoImg} alt="Cardano" />
              </S.AvatarWrapper>
              <Typography variant="h5" noWrap>
                Cardano
              </Typography>
              <Typography variant="subtitle1" noWrap>
                ADA
              </Typography>
              <Box
                sx={{
                  pt: 3,
                }}
              >
                <Typography variant="h3" gutterBottom noWrap>
                  $54,985.00
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  34,985 ADA
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Tooltip arrow title="Click to add a new wallet">
            <S.CardAddAction>
              <CardActionArea sx={{ px: 1 }}>
                <CardContent>
                  <S.AvatarAddWrapper>
                    <AddTwoTone fontSize="large" />
                  </S.AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </S.CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default Wallets;
