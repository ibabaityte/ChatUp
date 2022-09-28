import {Link} from "react-router-dom";

// style imports
import {ThemeProvider} from "@mui/material/styles";
import {link} from "../../styles/CommonStyles";
import Button from "@mui/material/Button";
import {button, buttonContainer} from "../../styles/Startup/StartupPageStyles";
import theme from "../../styles/Theme";

const ButtonContainer = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={buttonContainer}>
                <Link to="/" style={link}><Button sx={button} variant="contained" color="secondary">Log In</Button></Link>
                <Link to="/register" style={link}><Button sx={button} variant="contained">Sign Up</Button></Link>
            </div>
        </ThemeProvider>
    );
}

export default ButtonContainer;