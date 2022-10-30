import {Routes, Route, Link} from 'react-router-dom';

// style imports
import {ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import {startupBg, gridItem, logoContainer, inputContainer, logo, button} from "../../styles/startup/StartupPageStyles";
import theme from "../../styles/Theme";
import "../../styles/startup/StartupPageStyles.css";

// component imports
import Login from "../users/Login";
import Register from "../users/Register";
import LogoAndSlogan from "./LogoAndSlogan";
import ButtonContainer from "./ButtonContainer";
import {link} from "../../styles/CommonStyles";
import Button from "@mui/material/Button";

const StartupPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container sx={startupBg}>
                <Grid item sx={gridItem}>
                    <Grid item sx={logoContainer}>
                        <div className="logoContainer">
                            <Link to="/" style={{...link, ...logo}}>
                                <h1 className="logo">ChatUp</h1>
                            </Link>
                            <h3 className="slogan">ChatUp brings freedom and connection, while helping people communicate.</h3>
                            <ButtonContainer />
                        </div>
                    </Grid>
                    <Grid item sx={inputContainer}>
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                        </Routes>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default StartupPage;
