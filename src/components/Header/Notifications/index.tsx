import { NotificationsActiveTwoTone } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import { formatDistance, subDays } from "date-fns";
import { useRef, useState } from "react";
import * as S from "./styles";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const handleOpenNotifications = () => {
    setIsOpen(true);
  };

  const handleCloseNotifications = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Tooltip title="Notifications" arrow>
        <IconButton ref={ref} onClick={handleOpenNotifications} color="primary">
          <S.NotificationsBadge
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={1}
          >
            <NotificationsActiveTwoTone />
          </S.NotificationsBadge>
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleCloseNotifications}
        open={isOpen}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 2 }}
        >
          <Typography variant="h5">Notifications</Typography>
        </Box>
        <Divider />
        <List sx={{ p: 0 }}>
          <ListItem
            sx={{ minWidth: 350, p: 2, display: { xs: "block", sm: "flex" } }}
          >
            <Box flex="1">
              <Box display="flex" justifyContent="space-between">
                <Typography sx={{ fontWeight: "bold" }}>
                  Messaging Platform
                </Typography>
                <Typography variant="caption" sx={{ textTransform: "none" }}>
                  {formatDistance(subDays(new Date(), 3), new Date(), {
                    addSuffix: true,
                  })}
                </Typography>
              </Box>
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {" "}
                new messages in your inbox
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default Notifications;
