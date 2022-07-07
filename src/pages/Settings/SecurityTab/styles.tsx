import { Avatar, Button, styled } from "@mui/material";

export const ButtonError = styled(Button)(
  ({ theme }) => `
       background: ${theme.colors.error.main};
       color: ${theme.palette.error.contrastText};
  
       &:hover {
          background: ${theme.colors.error.dark};
       }
      `
);

export const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.success.light};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
  `
);

export const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
  `
);
