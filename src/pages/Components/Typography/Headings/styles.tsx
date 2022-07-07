import { Grid, GridProps, styled } from "@mui/material";

export const HeadingGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: `${theme.spacing(1)} !important`,
  },
}));
