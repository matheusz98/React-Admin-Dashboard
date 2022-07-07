import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import * as S from "./styles";

const Texts = () => {
  return (
    <Card>
      <CardHeader title="Texts" titleTypographyProps={{ variant: "h6" }} />
      <CardContent>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>subtitle1</Typography>
          </Grid>
          <S.TextsGrid item xs={12} sm={10}>
            <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 16px / line-height: 28px / font-weight: 400
            </Typography>
          </S.TextsGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>subtitle2</Typography>
          </Grid>
          <S.TextsGrid item xs={12} sm={10}>
            <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 14px / line-height: 21px / font-weight: 500
            </Typography>
          </S.TextsGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>body1</Typography>
          </Grid>
          <S.TextsGrid item xs={12} sm={10}>
            <Typography sx={{ marginBottom: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 14px / line-height: 21px / font-weight: 500
            </Typography>
          </S.TextsGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>body1</Typography>
          </Grid>
          <S.TextsGrid item xs={12} sm={10}>
            <Typography sx={{ marginBottom: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 16px / line-height: 24px / font-weight: 400
            </Typography>
          </S.TextsGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>body2</Typography>
          </Grid>
          <S.TextsGrid item xs={12} sm={10}>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 14px / line-height: 21px / font-weight: 400
            </Typography>
          </S.TextsGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>button</Typography>
          </Grid>
          <S.TextsGrid item xs={12} sm={10}>
            <Typography variant="button" sx={{ marginBottom: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 14px / line-height: 17px / font-weight: 500 /
              text-transform: uppercase
            </Typography>
          </S.TextsGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>caption</Typography>
          </Grid>
          <S.TextsGrid item xs={12} sm={10}>
            <Typography variant="caption" sx={{ marginBottom: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 12px / line-height: 15px / font-weight: 400
            </Typography>
          </S.TextsGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>overline</Typography>
          </Grid>
          <S.TextsGrid item xs={12} sm={10}>
            <Typography variant="overline" sx={{ marginBottom: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 12px / line-height: 15px / font-weight: 400 /
              text-transform: uppercase
            </Typography>
          </S.TextsGrid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Texts;
