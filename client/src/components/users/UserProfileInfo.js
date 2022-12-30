import {connect} from "react-redux";

// util imports
import {mapUserToProps} from "../../redux/reduxUtils";

// style imports
import {
    avatar,
    avatarContainer,
    bio,
    bioContainer,
    buttonContainer,
    cancelButton,
    email,
    emailContainer,
    nameAndSurname,
    nameAndSurnameContainer,
    updateButton,
    userModalContainer
} from "../../styles/user/userModalStyles";
import Grid from "@mui/material/Grid";
import {Avatar} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// component imports
import StatusMsg from "../StatusMsg";

const UserProfileInfo = (props) => {

    const {
        userInfo,
        setEditInfo,
        setModalOpen,
        user
    } = props;

    return (
        <Box sx={userModalContainer}>
            <Grid container>
                <Grid item sx={avatarContainer}>
                    <StatusMsg/>
                    <Avatar
                        sx={avatar}
                        src={userInfo.image}
                    />
                    <div style={nameAndSurnameContainer}>
                        <h2 style={nameAndSurname}>{userInfo.nameAndSurname}</h2>
                    </div>
                </Grid>
                <Grid item sx={bioContainer}>
                    <div style={emailContainer}>
                        <div><b>EMAIL</b></div>
                        <div style={email}>{userInfo.email}</div>
                    </div>
                    <div>
                        <div><b>BIO</b></div>
                        <div style={bio}>{userInfo.bio}</div>
                    </div>
                </Grid>
                {
                    userInfo._id === user._id ?
                        <Grid item sx={buttonContainer}>
                            <Button variant="contained" sx={updateButton} onClick={() => setEditInfo(true)}>Update</Button>
                            <Button variant="contained" sx={cancelButton} onClick={() => setModalOpen(false)}>Cancel</Button>
                        </Grid>
                        :
                        null
                }
            </Grid>
        </Box>
    );
}

export default connect(mapUserToProps)(UserProfileInfo);
