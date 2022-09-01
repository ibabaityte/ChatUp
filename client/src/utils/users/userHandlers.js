import {register} from "./userUtils.js";

const handleInputChange = (e, state, setState) => {
    e.preventDefault();
    setState({
            ...state,
            [e.currentTarget.name]: e.target.value
        }
    );
}

const handleRegister = (e, newUser, setNewUser) => {
    e.preventDefault();
    register(newUser, setNewUser);
}

export {
    handleInputChange,
    handleRegister
};