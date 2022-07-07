import { styled } from "@mui/material";

export const EmptyResultsWrapper = styled("img")(
  ({ theme }) => `
        max-width: 100%;
        width: ${theme.spacing(66)};
        height: ${theme.spacing(34)};
  `
);
