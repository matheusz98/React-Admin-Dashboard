import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  Tooltip,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import * as S from "./styles";
import VisaImg from "../../../assets/images/placeholders/logo/visa.png";
import { AddTwoTone, DeleteTwoTone } from "@mui/icons-material";

const MyCards = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const data = { savedCards: 7 };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Card>
      <CardHeader subheader={data.savedCards + " saved cards"} title="Cards" />
      <Divider />
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <S.CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center">
                <S.CardLogo src={VisaImg} alt="Visa" />
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                    •••• 6879
                  </Typography>
                  <Typography variant="subtitle2">
                    Expires:{" "}
                    <Typography component="span" color="text.primary">
                      12/24
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                pt={3}
              >
                <FormControlLabel
                  value="a"
                  label="Primary"
                  control={
                    <Radio
                      value="a"
                      name="primary-card"
                      color="primary"
                      checked={selectedValue === "a"}
                      onChange={handleChange}
                    />
                  }
                />
                <Tooltip title="Remove this card" arrow>
                  <S.IconButtonError>
                    <DeleteTwoTone fontSize="small" />
                  </S.IconButtonError>
                </Tooltip>
              </Box>
            </S.CardCc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <S.CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center">
                <S.CardLogo src={VisaImg} alt="Visa" />
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                    •••• 4634
                  </Typography>
                  <Typography variant="subtitle2">
                    Expires:{" "}
                    <Typography component="span" color="text.primary">
                      6/22
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                pt={3}
              >
                <FormControlLabel
                  value="b"
                  label="Primary"
                  control={
                    <Radio
                      value="a"
                      name="primary-card"
                      color="primary"
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                    />
                  }
                />
                <Tooltip title="Remove this card" arrow>
                  <S.IconButtonError>
                    <DeleteTwoTone fontSize="small" />
                  </S.IconButtonError>
                </Tooltip>
              </Box>
            </S.CardCc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tooltip title="Click to add a new card" arrow>
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
      </Box>
    </Card>
  );
};

export default MyCards;
