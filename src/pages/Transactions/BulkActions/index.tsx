import { useRef, useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import * as S from "./styles";
import { DeleteTwoTone, MoreVertTwoTone } from "@mui/icons-material";

const BulkActions = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Typography variant="h5" color="text.secondary">
            Bulk actions:
          </Typography>
          <S.ButtonError
            variant="contained"
            startIcon={<DeleteTwoTone />}
            sx={{ ml: 1 }}
          >
            Delete
          </S.ButtonError>
        </Box>
        <IconButton
          ref={moreRef}
          onClick={handleOpenMenu}
          color="primary"
          sx={{ ml: 2, p: 1 }}
        >
          <MoreVertTwoTone />
        </IconButton>
      </Box>

      <Menu
        anchorEl={moreRef.current}
        open={openMenu}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
        transformOrigin={{ vertical: "center", horizontal: "center" }}
        keepMounted
      >
        <List component="nav" sx={{ p: 1 }}>
          <ListItem button>
            <ListItemText primary="Bulk delete selected" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Bulk edit selected" />
          </ListItem>
        </List>
      </Menu>
    </>
  );
};

export default BulkActions;
