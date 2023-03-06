import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import RouterConfig from "RouterConfig";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MovieProvider } from "context/MovieContext";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
  },
});
const App = () => {
  return (
    <div className="App">
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <MovieProvider>
            <RouterConfig />
          </MovieProvider>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
};

export default App;
