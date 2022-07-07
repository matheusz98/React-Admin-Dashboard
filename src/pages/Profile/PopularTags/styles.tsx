import { List, styled } from "@mui/material";

export const ListWrapper = styled(List)(
  () => `
        .MuiListItem-root {
          border-radius: 0;
          margin: 0;
        }
  `
);
