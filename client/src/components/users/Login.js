import React, {useState} from "react";
import {connect} from "react-redux";

// utils
import {handleInputChange} from "../../utils/users/userHandlers.js";
import {loginAction} from "../../redux/actions";

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
        <div>
            <div>
                <h2>Sign In to your account</h2>
            </div>
            <div>
                <form>
                    <input
                        type="text"
                        value={user.email || ""}
                        name="email"
                        placeholder="email"
                        onChange={e => handleInputChange(e, user, setUser)}
                    />

                    <br/>

                    <input
                        type="password"
                        value={user.password || ""}
                        name="password"
                        placeholder="password"
                        onChange={e => handleInputChange(e, user, setUser)}
                    />

                    <button onClick={(e) => handleInput(e)}>Sign In</button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps, {loginAction})(Login);
