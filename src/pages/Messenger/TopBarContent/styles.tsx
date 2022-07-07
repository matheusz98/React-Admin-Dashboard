import { AccordionSummary, Box, ListItemIcon, styled } from "@mui/material";

export const RootWrapper = styled(Box)(
  ({ theme }) => `
          @media (min-width: ${theme.breakpoints.values.md}px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
  `
);

export const ListItemIconWrapper = styled(ListItemIcon)(
  ({ theme }) => `
          min-width: 36px;
          color: ${theme.colors.primary.light};
  `
);

export const AccordionSummaryWrapper = styled(AccordionSummary)(
  ({ theme }) => `
          &.Mui-expanded {
            min-height: 48px;
          }
  
          .MuiAccordionSummary-content.Mui-expanded {
            margin: 12px 0;
          }
  
          .MuiSvgIcon-root {
            transition: ${theme.transitions.create(["color"])};
          }
  
          &.MuiButtonBase-root {
  
            margin-bottom: ${theme.spacing(0.5)};
  
            &:last-child {
              margin-bottom: 0;
            }
  
            &.Mui-expanded,
            &:hover {
              background: ${theme.colors.alpha.black[10]};
  
              .MuiSvgIcon-root {
                color: ${theme.colors.primary.main};
              }
            }
          }
  `
);
