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
                    <Avatar
                        sx={avatar}
                        src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
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
                        <div style={bio}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa nisl, faucibus porttitor risus quis, rhoncus feugiat tellus. Maecenas facilisis lobortis laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa nisl, faucibus porttitor risus quis, rhoncus feugiat tellus.</div>
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
