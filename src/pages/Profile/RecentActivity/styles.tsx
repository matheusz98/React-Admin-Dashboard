import { Avatar, styled } from "@mui/material";

export const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.primary.lighter};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
  `
);
