import {useState} from "react";
import {connect} from "react-redux";

// utils
import {handleInputChange} from "../../utils/users/userHandlers.js";
import {loginAction} from "../../redux/actions";

// style imports
import {ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {input, formContainer, formTitle, confirmButton} from "../../styles/Startup/StartupPageStyles"
import theme from "../../styles/Theme";

const Login = (props) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        e.preventDefault();
        props.loginAction(user);
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid item sx={formTitle}>
                <h4>Sign In to your account</h4>
            </Grid>
            <Grid item sx={formContainer}>
                <form className="form">
                    <TextField
                        sx={input}
                        variant="standard"
                        type="text"
                        value={user.email || ""}
                        name="email"
                        placeholder="email"
                        onChange={e => handleInputChange(e, user, setUser)}
                    />

                    <br/>

                    <TextField
                        sx={input}
                        variant="standard"
                        type="password"
                        value={user.password || ""}
                        name="password"
                        placeholder="password"
                        onChange={e => handleInputChange(e, user, setUser)}
                    />

                    <Button variant="contained" color="secondary" sx={confirmButton} type="submit" onClick={e => {handleInput(e)}}>Sign In</Button>
                </form>
            </Grid>
        </ThemeProvider>
    );
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps, {loginAction})(Login);
