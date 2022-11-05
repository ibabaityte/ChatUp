import {useState} from "react";
import {connect} from "react-redux";

// style imports
import {userModalContainer} from "../../styles/user/userModalStyles";
import {
    form,
    formHeading,
    buttonContainer,
    updateButton,
    cancelButton
} from "../../styles/user/userEditInfoStyles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// util imports
import {handleEdit} from "../../utils/users/userHandlers";
import {update} from "../../utils/users/userUtils";
import {updateProfileAction} from "../../redux/actions";
import {mapUserToProps} from "../../redux/reduxUtils";

const UserProfileEdit = (props) => {

    const {
        user,
        setEditInfo,
        updateProfileAction
    } = props;

    const [userUpdate, setUserUpdate] = useState({
        name: user.nameAndSurname.split(" ")[0],
        surname: user.nameAndSurname.split(" ")[1],
        email: user.email,
        bio: user.bio,
        image: user.image,
        cloudinaryId: user.cloudinaryId,
        userId: user.userId,
        token: user.token
    });

    console.log(userUpdate);

    return (
        <Box sx={userModalContainer}>
            <h2 style={formHeading}>Edit user information</h2>
            <form style={form} onSubmit={(e) => updateProfileAction(e, user, userUpdate)}>
                <p>Profile pic:</p>
                <TextField
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={e => handleEdit(e, "image", setUserUpdate, userUpdate)}
                />

                <br/>

                <TextField
                    type="text"
                    value={userUpdate.name}
                    name="name"
                    label="Name"
                    onChange={e => handleEdit(e, "name", setUserUpdate, userUpdate)}
                />

                <br/>

                <TextField
                    type="text"
                    value={userUpdate.surname}
                    name="surname"
                    label="Surname"
                    onChange={e => handleEdit(e, "surname", setUserUpdate, userUpdate)}
                />

                <br/>

                <TextField
                    type="text"
                    value={userUpdate.email}
                    inputProps={{min: 0}}
                    name="email"
                    label="Email"
                    onChange={e => handleEdit(e, "email", setUserUpdate, userUpdate)}
                />

                <br/>

                <TextField
                    type="text"
                    value={userUpdate.bio}
                    name="bio"
                    label="bio"
                    multiline
                    rows={4}
                    onChange={e => handleEdit(e, "bio", setUserUpdate, userUpdate)}
                />

                <div style={buttonContainer}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={updateButton}
                    >Update</Button>

                    <Button
                        variant="contained"
                        sx={cancelButton}
                        onClick={() => setEditInfo(false)}
                    >Cancel</Button>
                </div>
            </form>
        </Box>
    );
}

export default connect(mapUserToProps, {updateProfileAction})(UserProfileEdit);
