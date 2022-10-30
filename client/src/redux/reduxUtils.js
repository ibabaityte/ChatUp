const mapStateToProps = (state) => {
    return {
        user: state.user,
        chat: state.chat
    }
}

const mapUserToProps = (state) => {
    return {
        user: state.user
    }
}

const mapChatToProps = (state) => {
    return {
        chat: state.chat
    }
}

export {
    mapStateToProps,
    mapUserToProps,
    mapChatToProps
}
