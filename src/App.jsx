import "./App.css";
import "./assets/sass/app.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import "./components/Routing";
import Routing from "./components/Routing";
function App() {
  const theme = createTheme({
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
