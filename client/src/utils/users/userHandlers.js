import {register} from "./userUtils.js";

const handleInputChange = (e, state, setState) => {
    e.preventDefault();
    setState({
            ...state,
            [e.currentTarget.name]: e.target.value
        }
    );
}

const handleRegister = (e, newUser, navigate) => {
    e.preventDefault();
    register(newUser, navigate);
}

export {
    handleInputChange,
    handleRegister
};