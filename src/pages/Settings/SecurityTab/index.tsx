import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";
import * as S from "./styles";
import GoogleLogo from "../../../assets/images/logo/google.svg";
import { DeleteTwoTone, DoneTwoTone } from "@mui/icons-material";
import { logsItems } from "../../../data/logData";
import { format } from "date-fns";

const SecurityTab = () => {
  const [page, setPage] = useState<number>(2);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const theme = useTheme();

  const handleChangePage = (
    e: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">Social Accounts</Typography>
          <Typography variant="subtitle2">
            Manage connected social accounts options
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemAvatar sx={{ pr: 2 }}>
                <S.AvatarWrapper src={GoogleLogo} alt="Google" />
              </ListItemAvatar>
              <ListItemText
                primary="Google"
                secondary="A Google account hasn’t been yet added to your account"
                primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: "subtitle2",
                  lineHeight: 1,
                }}
              />
              <Button variant="contained" color="secondary" size="large">
                Connect
              </Button>
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemAvatar sx={{ pr: 2 }}>
                <S.AvatarSuccess>
                  <DoneTwoTone />
                </S.AvatarSuccess>
              </ListItemAvatar>
              <ListItemText
                primary="Facebook"
                secondary="Your Facebook account has been successfully connected"
                primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: "subtitle2",
                  lineHeight: 1,
                }}
              />
              <S.ButtonError variant="contained" size="large">
                Revoke access
              </S.ButtonError>
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemAvatar sx={{ pr: 2 }}>
                <S.AvatarSuccess>
                  <DoneTwoTone />
                </S.AvatarSuccess>
              </ListItemAvatar>
              <ListItemText
                primary="Twitter"
                secondary="Your Twitter account was last syncronized 6 days ago"
                primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: "subtitle2",
                  lineHeight: 1,
                }}
              />
              <S.ButtonError variant="contained" size="large">
                Revoke access
              </S.ButtonError>
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">Security</Typography>
          <Typography variant="subtitle2">
            Change your security preferences bellow
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Change Password"
                secondary="You can change your password here"
                primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: "subtitle2",
                  lineHeight: 1,
                }}
              />
              <Button size="large" variant="outlined">
                Change password
              </Button>
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Two-Factor Authentication"
                secondary="Enable PIN verification for all sign in attempts"
                primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: "subtitle2",
                  lineHeight: 1,
                }}
              />
              <Switch color="primary" />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Access Logs"
            subheader="Recent sign in activity logs"
          />
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Browser</TableCell>
                  <TableCell>IP Address</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Date/Time</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {logsItems.map((log) => (
                  <TableRow key={log.id} hover>
                    <TableCell>{log.browser}</TableCell>
                    <TableCell>{log.ipaddress}</TableCell>
                    <TableCell>{log.location}</TableCell>
                    <TableCell>
                      {format(log.date, "dd MMMM, yyyy - h:mm:ss a")}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Delete" placement="top" arrow>
                        <IconButton
                          size="small"
                          color="inherit"
                          sx={{
                            "&:hover": {
                              background: theme.colors.error.lighter,
                            },
                            color: theme.palette.error.main,
                          }}
                        >
                          <DeleteTwoTone fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box p={2}>
            <TablePagination
              count={100}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              component="div"
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SecurityTab;
