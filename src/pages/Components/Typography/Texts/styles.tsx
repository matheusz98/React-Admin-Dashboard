import { Grid, GridProps, styled } from "@mui/material";

export const TextsGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: `${theme.spacing(1)} !important`,
  },
}));
