import { Add, Close, Person } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../../components/Footer";
import PageTitle from "../../../components/PageTitle";
import PageTitleContent from "../../../components/PageTitleContent";

const emails = ["username@gmail.com", "user02@gmail.com"];

const SimpleDialog = (props: any) => {
  const { open, onClose, selectedValue } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem
            key={email}
            button
            onClick={() => handleListItemClick(email)}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          button
          autoFocus
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <Add />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
};

const Modals = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: any) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Helmet>
        <title>Modals - Components</title>
      </Helmet>
      <PageTitle>
        <PageTitleContent
          heading="Modals"
          subHeading="Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks."
          docs="https://material-ui.com/components/dialogs/"
        />
      </PageTitle>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Basic Dialog" />
              <Divider />
              <CardContent>
                <Typography component="div" variant="subtitle1">
                  Selected: {selectedValue}
                </Typography>
                <br />
                <Button variant="outlined" onClick={handleClickOpen}>
                  Open simple dialog
                </Button>
                <SimpleDialog
                  open={open}
                  onClose={handleClose}
                  selected={selectedValue}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Modals;
