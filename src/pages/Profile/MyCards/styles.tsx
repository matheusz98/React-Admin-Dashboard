import { Avatar, Card, IconButton, lighten, styled } from "@mui/material";

export const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
          background: ${theme.colors.alpha.black[5]};
          color: ${theme.colors.primary.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
  `
);

export const CardLogo = styled("img")(
  ({ theme }) => `
        border: 1px solid ${theme.colors.alpha.black[30]};
        border-radius: ${theme.general.borderRadius};
        padding: ${theme.spacing(1)};
        margin-right: ${theme.spacing(2)};
        background: ${theme.colors.alpha.white[100]};
  `
);

export const CardAddAction = styled(Card)(
  ({ theme }) => `
          border: ${theme.colors.primary.main} dashed 1px;
          height: 100%;
          color: ${theme.colors.primary.main};
          box-shadow: none;
          
          .MuiCardActionArea-root {
            height: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          
          .MuiTouchRipple-root {
            opacity: .2;
          }
          
          &:hover {
            border-color: ${theme.colors.alpha.black[100]};
          }
  `
);

export const IconButtonError = styled(IconButton)(
  ({ theme }) => `
       background: ${theme.colors.error.lighter};
       color: ${theme.colors.error.main};
       padding: ${theme.spacing(0.5)};
  
       &:hover {
        background: ${lighten(theme.colors.error.lighter, 0.4)};
       }
  `
);

export const CardCc = styled(Card)(
  ({ theme }) => `
       border: 1px solid ${theme.colors.alpha.black[30]};
       background: ${theme.colors.alpha.black[5]};
       box-shadow: none;
  `
);
