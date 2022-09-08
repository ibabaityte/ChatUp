import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

// util imports
import {handleRegister, handleInputChange} from "../../utils/users/userHandlers";

const Register = () => {
    let navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    });

    return (
        <div>
            <div>
                <h2>Create a new account</h2>
            </div>
            <div>
                <form onSubmit={e => handleRegister(e, newUser, navigate)}>
                    <input
                        type="text"
                        value={newUser.name}
                        name="name"
                        placeholder="name"
                        onChange={e => handleInputChange(e, newUser, setNewUser)}
                    />

                    <br/>

                    <input
                        type="text"
                        value={newUser.surname}
                        name="surname"
                        placeholder="surname"
                        onChange={e => handleInputChange(e, newUser, setNewUser)}
                    />

                    <br/>

                    <input
                        type="text"
                        value={newUser.email}
                        name="email"
                        placeholder="email"
                        onChange={e => handleInputChange(e, newUser, setNewUser)}
                    />

                    <br/>

                    <input
                        type="password"
                        value={newUser.password}
                        name="password"
                        placeholder="password"
                        onChange={e => handleInputChange(e, newUser, setNewUser)}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Register;