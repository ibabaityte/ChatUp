import {keyframes} from '@mui/system';

const GradientBg = keyframes`
  0% {
    background-position: 50% 0;
  }
  50% {
    background-position: 30% 100%;
  }
  100% {
    background-position: 50% 0;
  }`;

const startupBg = {
    width: "100vw",
    height: "100vh"
}

const gridItem = {
    width: {
        xs: "100%",
        sm: "70%"
    },
    height: "100%",
    margin: "auto auto"
}

const button = {
    margin: "10px"
}

const buttonContainer = {
    width: {
        sx: "50%",
        md: "30%"
    },
    height: "50%",
    margin: "0 auto"
}

const confirmButton = {
    marginTop: "30px",
    width: {
        xs: "60%",
        sm: "70%",
        md: "50%",
        lg: "40%"
    }
}

const logoContainer = {
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center"
}

const input = {
    width: {
        xs: "60%",
        sm: "70%",
        md: "50%",
        lg: "40%"
    },
    input: {
        color: "black"
    }
}

const formTitle = {
    height: "10%",
    textAlign: "center",
    fontFamily: "Crimson Text, serif",
    letterSpacing: "2px",
    color: "rgba(54, 54, 54, 0.7)"
}

const logo = {
    justifyContent: "center",
    display: "block",
    width: "fit-content",
    margin: "auto"
}

const formContainer = {
    height: "90%",
    display: "flex",
    justifyContent: "center"
}

const inputContainer = {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center"
}

export {
    startupBg,
    gridItem,
    button,
    buttonContainer,
    confirmButton,
    logoContainer,
    input,
    logo,
    formTitle,
    formContainer,
    inputContainer
};
