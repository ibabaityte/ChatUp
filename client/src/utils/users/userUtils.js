import axios from "axios";

const REGISTER_URL = process.env.REACT_APP_REGISTER;
const LOGIN_URL =  process.env.REACT_APP_LOGIN;

const login = async (user) => {
    const {email, password} = user;
    let result;
    await axios.post(LOGIN_URL, {email, password})
        .then((data) => {
            result = {
                name: data.data.name,
                surname: data.data.name,
                email: data.data.email,
                token: data.data.token,
                userId: data.data.userId
            };
        })
        .catch((err) => {
            console.log(err);
            result = err;
        });
    return result;
}

const register = (newUser) => {
    axios.post(REGISTER_URL, newUser)
        .then((result) => {
            // console.log(result);
        })
        .catch((err) => {
            console.log(err.response.data);
        });
}

export {
    login,
    register
}