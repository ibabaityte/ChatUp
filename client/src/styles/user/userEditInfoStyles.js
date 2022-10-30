const form = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
}

const formHeading = {
    textAlign: "center",
    marginBottom: "30px"
}

const buttonContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "15px"
}

const updateButton = {
    backgroundColor: "rgba(35, 163, 10, 0.5)",
    '&:hover': {
        backgroundColor: "rgba(35, 163, 10, 0.8)",
    }
}

const cancelButton = {
    backgroundColor: "rgba(227, 41, 41, 0.5)",
    '&:hover': {
        backgroundColor: "rgba(227, 41, 41, 0.8)"
    }
}

export {
    form,
    formHeading,
    buttonContainer,
    updateButton,
    cancelButton
}
