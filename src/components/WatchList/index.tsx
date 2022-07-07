import { TableRowsTwoTone, ViewWeekTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import * as S from "./styles";
import WatchListColumn from "./WatchListColumn";
import WatchListRow from "./WatchListRow";
import Illustration from "../../assets/images/placeholders/illustrations/1.svg";

const WatchList = () => {
  const [tabs, setTabs] = useState<string | null>("watch_list_columns");

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setTabs(newValue);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pb: 3 }}
      >
        <Typography variant="h3">Watch List</Typography>
        <ToggleButtonGroup
          value={tabs}
          onChange={handleViewOrientation}
          exclusive
        >
          <ToggleButton value="watch_list_columns" disableRipple>
            <ViewWeekTwoTone />
          </ToggleButton>
          <ToggleButton value="watch_list_rows" disableRipple>
            <TableRowsTwoTone />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {tabs === "watch_list_columns" && <WatchListColumn />}
      {tabs === "watch_list_rows" && <WatchListRow />}

      {!tabs && (
        <Card sx={{ p: 3, textAlign: "center" }}>
          <S.EmptyResultsWrapper src={Illustration} alt="Illustration" />

          <Typography
            variant="h2"
            fontWeight="normal"
            align="center"
            color="text.secondary"
            gutterBottom
            sx={{ mt: 3 }}
          >
            Click on something, anything!
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 4 }}>
            Maybe, a button?
          </Button>
        </Card>
      )}
    </>
  );
};

export default WatchList;
