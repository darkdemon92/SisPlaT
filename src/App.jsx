import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

function App() {
  const { mode } = useSelector((state) => state.theme);
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
        <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
