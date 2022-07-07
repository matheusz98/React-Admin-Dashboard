import { Box } from "@mui/material";
import Search from "../../Search";
import Notifications from "../Notifications";

const HeaderWidgets = () => {
  return (
    <Box sx={{ mr: 1 }}>
      <Search />
      <Box component="span" sx={{ mx: 0.5 }}>
        <Notifications />
      </Box>
    </Box>
  );
};

export default HeaderWidgets;
