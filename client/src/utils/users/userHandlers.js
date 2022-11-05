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

const handleEdit = (e, name, setUserUpdate, userUpdate) => {
    e.preventDefault();
    const value = name === "image" ? e.target.files[0] : e.currentTarget.value;
    setUserUpdate({
            ...userUpdate,
            [name]: value
        }
    );
}

export {
    handleInputChange,
    handleRegister,
    handleEdit
};
