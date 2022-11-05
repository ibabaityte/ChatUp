import axios from "axios";
import FormData from "form-data";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const USER_ENDPOINT = process.env.REACT_APP_USER_ENDPOINT;

const login = async (user) => {
    const {email, password} = user;
    let result;
    await axios.post(`${API_ENDPOINT}/login`, {email, password})
        .then((data) => {
            // console.log(data);
            result = {
                nameAndSurname: data.data.nameAndSurname,
                email: data.data.email,
                token: data.data.token,
                userId: data.data.userId,
                image: data.data.image,
                cloudinaryId: data.data.cloudinaryId,
                bio: data.data.bio
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

const generateFormData = (user) => {
    let formData = new FormData();
    formData.append("nameAndSurname", user.name + " " + user.surname);
    formData.append("email", user.email);
    formData.append("bio", user.bio);
    formData.append("image", user.image);
    formData.append("cloudinaryId", user.cloudinaryId);
    formData.append("userId", user.userId);
    formData.append("token", user.token);
    return formData;
}

const update = async (e, user, userUpdate) => {
    let result;
    await axios.put(`${USER_ENDPOINT}/${userUpdate.userId}`, generateFormData(userUpdate), {
        headers: {
            "Authorization": userUpdate.token,
            "Content-Type": "multipart/form-data"
        }
    }).then(data => {
        result = {
            nameAndSurname: data.data.data.nameAndSurname,
            email: data.data.data.email,
            token: user.token,
            userId: user.userId,
            image: data.data.data.image,
            cloudinaryId: data.data.data.cloudinaryId,
            bio: data.data.data.bio
        };
    }).catch(err => {
        console.log(err.response);
        result = {};
    })
    return result;
}

export {
    login,
    register,
    search,
    update
}
