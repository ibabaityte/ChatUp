import {createTheme} from "@mui/material/styles";

const Colors = {
    primary: "rgba(25,118,210,0.5)",
    secondary: "rgba(25,118,210, 0.5)",
    success: "rgba(51, 145, 32)",
    danger: "rgba(171, 26, 26)",
    warning: "rgba(207, 169, 45)",
    info: "rgba(86, 135, 122)",
    dark: "rgba(43, 43, 43)",
    light: "rgba(232, 232, 232)",
    white: "rgba(255, 255, 255)",
    black: "rgba(0, 0, 0)"
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    }
});

export default theme;