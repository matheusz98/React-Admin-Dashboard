import { VolumeDown, VolumeUp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../../components/Footer";
import PageTitle from "../../../components/PageTitle";
import PageTitleContent from "../../../components/PageTitleContent";

const label = {
  inputProps: {
    "aria-label": "Switch demo",
  },
};

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const Forms = () => {
  const [currency, setCurrency] = useState<string>("EUR");
  const [value, setValue] = useState<number>(30);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrency(e.target.value);
  };

  const handleChange2 = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  
  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <PageTitle>
        <PageTitleContent
          heading="Forms"
          subHeading="Components that are used to build interactive placeholders used for data collection from users."
          docs="https://material-ui.com/components/text-fields/"
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
              <CardHeader title="Input Fields" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  autoComplete="off"
                  noValidate
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                >
                  <div>
                    <TextField
                      required
                      defaultValue="Hello World!"
                      label="Required"
                      id="outlined-required"
                    />
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Disabled"
                      defaultValue="Hello World!"
                    />
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                    <TextField
                      id="outlined-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World!"
                      InputProps={{ readOnly: true }}
                    />
                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                      id="outlined-search"
                      label="Search field"
                      type="search"
                    />
                    <TextField
                      id="outlined-helperText"
                      label="Helper text"
                      defaultValue="Default Value"
                      helperText="Some important text"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="filled-required"
                      label="Required"
                      defaultValue="Hello World"
                      variant="filled"
                    />
                    <TextField
                      disabled
                      id="filled-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      variant="filled"
                    />
                    <TextField
                      id="filled-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="filled"
                    />
                    <TextField
                      id="filled-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                    <TextField
                      id="filled-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                    />
                    <TextField
                      id="filled-search"
                      label="Search field"
                      type="search"
                      variant="filled"
                    />
                    <TextField
                      id="filled-helperText"
                      label="Helper text"
                      defaultValue="Default Value"
                      helperText="Some important text"
                      variant="filled"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="Required"
                      defaultValue="Hello World"
                      variant="standard"
                    />
                    <TextField
                      disabled
                      id="standard-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      variant="standard"
                    />
                    <TextField
                      id="standard-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="standard"
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="standard-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="standard-search"
                      label="Search field"
                      type="search"
                      variant="standard"
                    />
                    <TextField
                      id="standard-helperText"
                      label="Helper text"
                      defaultValue="Default Value"
                      helperText="Some important text"
                      variant="standard"
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Select Inputs" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                >
                  <div>
                    <TextField
                      select
                      label="Select"
                      value={currency}
                      onChange={handleChange}
                      id="outlined-select-currency"
                      helperText="Please select your currency"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="filled-select-currency-native"
                      select
                      label="Native select"
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select your currency"
                      variant="filled"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="standard-select-currency"
                      select
                      label="Select"
                      value={currency}
                      onChange={handleChange}
                      helperText="Please select your currency"
                      variant="standard"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="standard-select-currency-native"
                      select
                      label="Native select"
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select your currency"
                      variant="standard"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Switches" />
              <Divider />
              <CardContent>
                <Switch {...label} defaultChecked />
                <Switch {...label} />
                <Switch {...label} defaultChecked disabled />
                <Switch {...label} disabled />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Checkboxes &amp; Radios" />
              <Divider />
              <CardContent>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": { color: pink[600] },
                  }}
                />
                <Divider sx={{ my: 5 }} />
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      label="Female"
                      control={<Radio />}
                    />
                    <FormControlLabel
                      value="male"
                      label="Male"
                      control={<Radio />}
                    />
                    <FormControlLabel
                      value="other"
                      label="Other"
                      control={<Radio />}
                    />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      label="Disabled"
                      control={<Radio />}
                    />
                  </RadioGroup>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Sliders" />
              <Divider />
              <CardContent>
                <Box sx={{ width: 200 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 1 }}
                  >
                    <VolumeDown />
                    <Slider
                      value={value}
                      onChange={handleChange2}
                      aria-label="Volume"
                    />
                    <VolumeUp />
                  </Stack>
                  <Slider
                    disabled
                    defaultValue={30}
                    aria-label="Disabled slider "
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Forms;
