import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import * as S from "./styles";

const Headings = () => {
  return (
    <Card>
      <CardHeader title="Headings" titleTypographyProps={{ variant: "h6" }} />
      <CardContent>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>H1</Typography>
          </Grid>
          <S.HeadingGrid item xs={12} sm={10}>
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
              Heading 1
            </Typography>
            <Typography variant="body2">
              font-size: 96px / line-height: 112px / font-weight: 500
            </Typography>
          </S.HeadingGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>H2</Typography>
          </Grid>
          <S.HeadingGrid item xs={12} sm={10}>
            <Typography variant="h2" sx={{ marginBottom: 2 }}>
              Heading 2
            </Typography>
            <Typography variant="body2">
              font-size: 60px / line-height: 72px / font-weight: 500
            </Typography>
          </S.HeadingGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>H3</Typography>
          </Grid>
          <S.HeadingGrid item xs={12} sm={10}>
            <Typography variant="h3" sx={{ marginBottom: 2 }}>
              Heading 3
            </Typography>
            <Typography variant="body2">
              font-size: 48px / line-height: 56px / font-weight: 500
            </Typography>
          </S.HeadingGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>H4</Typography>
          </Grid>
          <S.HeadingGrid item xs={12} sm={10}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              Heading 4
            </Typography>
            <Typography variant="body2">
              font-size: 32px / line-height: 40px / font-weight: 500
            </Typography>
          </S.HeadingGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>H5</Typography>
          </Grid>
          <S.HeadingGrid item xs={12} sm={10}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Heading 5
            </Typography>
            <Typography variant="body2">
              font-size: 24px / line-height: 32px / font-weight: 500
            </Typography>
          </S.HeadingGrid>

          <Grid
            item
            xs={12}
            sm={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>H6</Typography>
          </Grid>
          <S.HeadingGrid item xs={12} sm={10}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Heading 6
            </Typography>
            <Typography variant="body2">
              font-size: 20px / line-height: 32px / font-weight: 500
            </Typography>
          </S.HeadingGrid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Headings;
