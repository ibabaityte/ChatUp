const userModalContainer = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    minHeight: "60%",
    backgroundColor: 'rgba(232, 232, 232)',
    p: 4,
    fontFamily: "Roboto, sans-serif"
};

const avatarContainer = {
    height: "20%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

const avatar = {
    cursor: "pointer",
    height: 100,
    width: 100,
    border: "2px solid grey"
}

const nameAndSurnameContainer = {
    overflow: "auto",
    maxWidth: "100%"
}

const nameAndSurname = {
    letterSpacing: "2px",
    marginTop: "20px",
}

const bioContainer = {
    height: "80%",
    p: 4,
    margin: "auto",
    textAlign: "center"
}

const emailContainer = {
    marginBottom: "40px"
}

const email = {
    fontSize: "20px",
}

const bio = {
    fontSize: "20px",
}

const buttonContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
}

const updateButton = {
    backgroundColor: "rgba(25, 118, 210, 0.5)",
    '&:hover': {
        backgroundColor: "rgba(25, 118, 210, 0.8)",
    }
}
const cancelButton = {
    backgroundColor: "rgba(227, 41, 41, 0.5)",
    '&:hover': {
        backgroundColor: "rgba(227, 41, 41, 0.8)"
    }
}

export {
    userModalContainer,
    avatarContainer,
    avatar,
    nameAndSurnameContainer,
    nameAndSurname,
    bioContainer,
    emailContainer,
    email,
    bio,
    buttonContainer,
    updateButton,
    cancelButton
}
