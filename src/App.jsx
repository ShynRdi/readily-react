import { ThemeProvider, createTheme } from "@mui/material";
import "./components/Routing";
import Routing from "./components/Routing";
import store from "./redux/store";
import { Provider } from "react-redux";
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
      <Provider store={store}>
        <Routing />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
