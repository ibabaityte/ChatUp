import axios from "axios";
import FormData from "form-data";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const USER_ENDPOINT = process.env.REACT_APP_USER_ENDPOINT;

const login = async (user, errorMsgAction) => {
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
                image: data.data.image,
                cloudinaryId: data.data.cloudinaryId,
                bio: data.data.bio
            };
        })
        .catch((err) => {
            console.log(err);
            errorMsgAction({
                code: err.response.status,
                msg: err.response.data.message
            });
            result = {};
        });
    return result;
}

const register = (newUser, navigate, errorMsgAction, successMsgAction) => {
    axios.post(`${API_ENDPOINT}/register`, newUser)
        .then((result) => {
            console.log(result);
            successMsgAction({
                msg: result.data.message,
                code: result.status
            })
            navigate("/");
        })
        .catch((err) => {
            errorMsgAction({
                msg: err.response.data.message,
                code: err.response.status
            });
            console.log(err.response);
        });
}

const search = (e, keyword, setKeyword, user, setSearchedUsers, setAnchorEl, errorMsgAction) => {
    e.preventDefault();
    setAnchorEl(document.getElementsByClassName("search")[0]);
    axios.get(`${USER_ENDPOINT}/search`, {
        params: {keyword},
        headers: {"Authorization": user.token}
    }).then(result => {
        setSearchedUsers(result.data);
        setKeyword("");
        errorMsgAction({});
    }).catch(err => {
        errorMsgAction({
            code: err.response.status,
            msg: err.response.data.message
        });
        console.log(err.response);
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

const update = async (e, user, userUpdate, setEditInfo, errorMsgAction, successMsgAction) => {
    let updatedUser;
    await axios.put(`${USER_ENDPOINT}/${userUpdate.userId}`, generateFormData(userUpdate), {
        headers: {
            "Authorization": userUpdate.token,
            "Content-Type": "multipart/form-data"
        }
    }).then(result => {
        updatedUser = {
            nameAndSurname: result.data.data.nameAndSurname,
            email: result.data.data.email,
            token: user.token,
            userId: user.userId,
            image: result.data.data.image,
            cloudinaryId: result.data.data.cloudinaryId,
            bio: result.data.data.bio
        };

        // close the update form
        setEditInfo(false);
        // set the success message
        successMsgAction({
            msg: result.data.message,
            code: result.status
        })
    }).catch(err => {
        console.log(err.response);
        errorMsgAction({
            msg: err.response.data.message,
            code: err.response.status
        });
        updatedUser = user;
    })
    return updatedUser;
}

export {
    login,
    register,
    search,
    update
}
