import { useState } from "react";
import {
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Switch,
} from "@mui/material";
import * as S from "./styles";
import {
  EmailTwoTone,
  LockTwoTone,
  PhoneLockedTwoTone,
} from "@mui/icons-material";
import Text from "../Text";

const AccountSecurity = () => {
  const [checked, setChecked] = useState(["phone_verification"]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Card>
      <CardHeader title="Account Security" />
      <Divider />
      <List disablePadding>
        <ListItem sx={{ py: 2 }}>
          <ListItemAvatar>
            <S.AvatarWrapperError>
              <LockTwoTone />
            </S.AvatarWrapperError>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">2FA Authentication</Text>}
            primaryTypographyProps={{
              variant: "body1",
              fontWeight: "bold",
              color: "textPrimary",
              gutterBottom: true,
              noWrap: true,
            }}
            secondary={<Text color="error">Disabled</Text>}
            secondaryTypographyProps={{ variant: "body2", noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle("2fa")}
            checked={checked.indexOf("2fa") !== -1}
          />
        </ListItem>
        <Divider />
        <ListItem sx={{ py: 2 }}>
          <ListItemAvatar>
            <S.AvatarWrapperSuccess>
              <PhoneLockedTwoTone />
            </S.AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">Phone Verification</Text>}
            primaryTypographyProps={{
              variant: "body1",
              fontWeight: "bold",
              color: "textPrimary",
              gutterBottom: true,
              noWrap: true,
            }}
            secondary={<Text color="success">Active</Text>}
            secondaryTypographyProps={{ variant: "body2", noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle("phone_verification")}
            checked={checked.indexOf("phone_verification") !== -1}
          />
        </ListItem>
        <Divider />
        <ListItem sx={{ py: 2 }}>
          <ListItemAvatar>
            <S.AvatarWrapperWarning>
              <EmailTwoTone />
            </S.AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">Recovery Email</Text>}
            primaryTypographyProps={{
              variant: "body1",
              fontWeight: "bold",
              color: "textPrimary",
              gutterBottom: true,
              noWrap: true,
            }}
            secondary={<Text color="warning">Not completed</Text>}
            secondaryTypographyProps={{ variant: "body2", noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle("recovery_email")}
            checked={checked.indexOf("recovery_email") !== -1}
          />
        </ListItem>
      </List>
    </Card>
  );
};

export default AccountSecurity;
