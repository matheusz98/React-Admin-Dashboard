import {
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

const NotificationsTab = () => {
  const [notification, setNotification] = useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
    checkedD: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNotification({ ...notification, [e.target.name]: e.target.checked });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">Account</Typography>
          <Typography variant="subtitle2">
            Choose what notifications you want to receive
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Widthdraw Activity"
                secondary="Receive an email when a widthdrawal is made"
                primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: "subtitle2",
                  lineHeight: 1,
                }}
              />
              <Switch
                checked={notification.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            </ListItem>
            <Divider component="li" />

            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Weekly Report"
                secondary="Receive account status weekly report in your inbox"
                primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: "subtitle2",
                  lineHeight: 1,
                }}
              />
              <Switch
                checked={notification.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">Orders</Typography>
          <Typography variant="subtitle2">
            Receive email notifications related to your orders activity
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Failed Payment"
                secondary="Get a message when a payment fails"
                primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: "subtitle2",
                  lineHeight: 1,
                }}
              />
              <Switch
                checked={notification.checkedC}
                onChange={handleChange}
                name="checkedC"
                color="primary"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Order Status Update"
                secondary="Whenever an order is updated, get a notification on your phone"
                primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: "subtitle2",
                  lineHeight: 1,
                }}
              />
              <Switch
                checked={notification.checkedD}
                onChange={handleChange}
                name="checkedD"
                color="primary"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NotificationsTab;
