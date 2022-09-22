import axios from "axios";

const REGISTER_URL = process.env.REACT_APP_REGISTER;
const LOGIN_URL = process.env.REACT_APP_LOGIN;
const USER_SEARCH_URL = process.env.REACT_APP_USER_SEARCH;

const login = async (user, navigate) => {
    const {email, password} = user;
    let result;
    await axios.post(LOGIN_URL, {email, password})
        .then((data) => {
            result = {
                nameAndSurname: data.data.nameAndSurname,
                email: data.data.email,
                token: data.data.token,
                userId: data.data.userId
            };
            navigate("/messenger");
        })
        .catch((err) => {
            console.log(err);
            result = err;
        });
    return result;
}

const register = (newUser, navigate) => {
    axios.post(REGISTER_URL, newUser)
        .then((result) => {
            console.log(result.data.message);
            navigate("/messenger");
        })
        .catch((err) => {
            console.log(err.response);
        });
}

const search = (keyword, user, setSearchedUsers) => {
    axios.get(USER_SEARCH_URL, {
            params: {keyword},
            headers: {"Authorization": user.token}
    }).then(result => {
        setSearchedUsers(result.data);
    }).catch(err => {
        console.log(err);
    })
}

export {
    login,
    register,
    search
}