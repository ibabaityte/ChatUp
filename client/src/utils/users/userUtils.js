import axios from "axios";

const REGISTER_URL = process.env.REACT_APP_REGISTER;
const LOGIN_URL = process.env.REACT_APP_LOGIN;
const USER_SEARCH_URL = process.env.REACT_APP_USER_SEARCH;

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
            console.log(data);
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
            console.log(result.data.message);
        })
        .catch((err) => {
            console.log(err.response.data);
        });
}

const search = (keyword, user, setSearchedUsers) => {
    axios.get(USER_SEARCH_URL, {
            params: {keyword},
            headers: {"Authorization": user.token}
    }).then(result => {
        console.log(setSearchedUsers);
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