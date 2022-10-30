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

const UserProfileEdit = (props) => {

    const {
        userInfo,
        setEditInfo
    } = props;

    return (
        <Box sx={userModalContainer}>
            <h2 style={formHeading}>Edit user information</h2>
            <form style={form}>
                <p>Profile pic:</p>
                <TextField
                    // className={classes.input}
                    type="file"
                    name="image"
                    accept="image/*"
                    // onChange={e => handleProduct(e, "image", selectedProduct, setSelectedProduct)}
                />

                <br/>
                <TextField
                    // className={classes.input}
                    type="text"
                    value={userInfo.nameAndSurname}
                    name="name"
                    label="Name"
                    // onChange={e => handleProduct(e, "title", selectedProduct, setSelectedProduct)}
                />

                <br/>

                <TextField
                    // className={classes.input}
                    type="text"
                    value={userInfo.nameAndSurname}
                    name="surname"
                    label="Surname"
                    // onChange={e => handleProduct(e, "description", selectedProduct, setSelectedProduct)}
                />

                <br/>

                <TextField
                    // className={classes.input}
                    type="text"
                    value={userInfo.email}
                    inputProps={{min: 0}}
                    name="email"
                    label="Email"
                    // onChange={e => handleProduct(e, "price", selectedProduct, setSelectedProduct)}
                />

                <br/>

                <TextField
                    // className={classes.input}
                    // type="text"
                    // value={userInfo.bio}
                    value=""
                    name="bio"
                    label="Bio"
                    multiline
                    rows={4}
                    // onChange={e => handleProduct(e, "category", selectedProduct, setSelectedProduct)}
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

export default UserProfileEdit;
