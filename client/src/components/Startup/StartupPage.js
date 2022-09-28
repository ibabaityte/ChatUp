import {Routes, Route} from 'react-router-dom';

// style imports
import {ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import {startupBg, gridItem, logoContainer, inputContainer} from "../../styles/Startup/StartupPageStyles";
import theme from "../../styles/Theme";
import "../../styles/Startup/StartupPageStyles.css";

// component imports
import Login from "../users/Login";
import Register from "../users/Register";
import LogoAndSlogan from "./LogoAndSlogan";
import ButtonContainer from "./ButtonContainer";

const StartupPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} sx={startupBg}>
                <Grid item sx={gridItem}>
                    <Grid item sx={logoContainer}>
                        <LogoAndSlogan />
                        <ButtonContainer />
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