import { Box, Button, Typography } from "@mui/material";
import { lighten, styled } from "@mui/system";

export const UserBoxButton = styled(Button)(
  ({ theme }) => `
          padding-left: ${theme.spacing(1)};
          padding-right: ${theme.spacing(1)};
  `
);

export const MenuUserBox = styled(Box)(
  ({ theme }) => `
          background: #e4e4e4;
          padding: ${theme.spacing(2)};
  `
);

export const UserBoxText = styled(Box)(
  ({ theme }) => `
          text-align: left;
          padding-left: ${theme.spacing(1)};
  `
);

export const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
          font-weight: 700;
          color: ${theme.palette.secondary.main};
          display: block;
  `
);

export const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
          color: ${lighten(theme.palette.secondary.main, 0.5)}
  `
);
