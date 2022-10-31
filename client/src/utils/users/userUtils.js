import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const USER_ENDPOINT = process.env.REACT_APP_USER_ENDPOINT;

const login = async (user) => {
    const {email, password} = user;
    let result;
    await axios.post(`${API_ENDPOINT}/login`, {email, password})
        .then((data) => {
            console.log(data);
            result = {
                nameAndSurname: data.data.nameAndSurname,
                email: data.data.email,
                token: data.data.token,
                userId: data.data.userId,
                image: data.data.image
            };
        })
        .catch((err) => {
            console.log(err);
            result = {};
        });
    return result;
}

const register = (newUser, navigate) => {
    axios.post(`${API_ENDPOINT}/register`, newUser)
        .then((result) => {
            console.log(result.data.message);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response);
        });
}

const search = (e, keyword, setKeyword, user, setSearchedUsers, setAnchorEl) => {
    e.preventDefault();
    axios.get(`${USER_ENDPOINT}/search`, {
        params: {keyword},
        headers: {"Authorization": user.token}
    }).then(result => {
        setSearchedUsers(result.data);
        setAnchorEl(document.getElementsByClassName("search")[0]);
        setKeyword("");
    }).catch(err => {
        console.log(err);
    })
}

export {
    login,
    register,
    search
}
