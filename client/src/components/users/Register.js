import React, {useState} from "react";

// util imports
import {handleRegister, handleInputChange} from "../../utils/users/userHandlers";

const Register = () => {

    const [newUser, setNewUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    });

    return (
        <div>
            <div>
                <h2>Sign Up to your account</h2>
            </div>
            <div>
                <form onSubmit={e => handleRegister(e, newUser, setNewUser)}>
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