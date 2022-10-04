import {useState} from "react";
import {useNavigate} from "react-router-dom";

// util imports
import {handleRegister, handleInputChange} from "../../utils/users/userHandlers";

// style imports
import {ThemeProvider} from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {input, formContainer, formTitle, confirmButton} from "../../styles/startup/StartupPageStyles"
import theme from "../../styles/Theme";
import Grid from "@mui/material/Unstable_Grid2";

const Register = () => {
    let navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid item sx={formTitle}>
                <h4>Create a new account</h4>
            </Grid>
            <Grid item sx={formContainer}>
                <form className="form">
                    <TextField
                        sx={input}
                        variant="standard"
                        type="text"
                        value={newUser.name}
                        name="name"
                        placeholder="name"
                        onChange={e => handleInputChange(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        sx={input}
                        variant="standard"
                        type="text"
                        value={newUser.surname}
                        name="surname"
                        placeholder="surname"
                        onChange={e => handleInputChange(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        sx={input}
                        variant="standard"
                        type="text"
                        value={newUser.email}
                        name="email"
                        placeholder="email"
                        onChange={e => handleInputChange(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        sx={input}
                        variant="standard"
                        type="password"
                        value={newUser.password}
                        name="password"
                        placeholder="password"
                        onChange={e => handleInputChange(e, newUser, setNewUser)}
                    />
                    <Button variant="contained" color="secondary" sx={confirmButton} type="submit" onClick={e => handleRegister(e, newUser, navigate)}>Sign Up</Button>
                </form>
            </Grid>
        </ThemeProvider>
    );
}

export default Register;
