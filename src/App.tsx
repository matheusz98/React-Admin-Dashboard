import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router";
import routes from "./router/router";
import AppRoutes from "./router/router";
import theme from "./styles/themes";

function App() {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
