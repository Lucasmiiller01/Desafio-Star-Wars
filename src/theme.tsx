import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#d3d3d3"
      //secondary: "#00000"
    },
    primary: {
      main: "#FFF"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#d3d3d3"
    }
  }
});

export default theme;
