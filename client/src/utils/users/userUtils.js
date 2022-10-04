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
                nameAndSurname: data.data.nameAndSurname,
                email: data.data.email,
                token: data.data.token,
                userId: data.data.userId
            };
        })
        .catch((err) => {
            console.log(err);
            result = {};
        });
    return result;
}

const register = (newUser, navigate) => {
    axios.post(REGISTER_URL, newUser)
        .then((result) => {
            console.log(result.data.message);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response);
        });
}

const search = (keyword, user, setSearchedUsers, setAnchorEl) => {
    axios.get(USER_SEARCH_URL, {
        params: {keyword},
        headers: {"Authorization": user.token}
    }).then(result => {
        setSearchedUsers(result.data);
        setAnchorEl(document.getElementsByClassName("search")[0]);
    }).catch(err => {
        console.log(err);
    })
}

export {
    login,
    register,
    search
}
