import {useState} from "react";
import {connect} from "react-redux";
import { useNavigate } from "react-router-dom";

// utils
import {handleInputChange} from "../../utils/users/userHandlers.js";
import {loginAction} from "../../redux/actions";


const Login = (props) => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e, navigate) => {
        e.preventDefault();
        props.loginAction(user, navigate);
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

                    <button onClick={(e) => handleInput(e, navigate)}>Sign In</button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps, {loginAction})(Login);
