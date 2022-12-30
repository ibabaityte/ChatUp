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

const mapStatusMsgToProps = (state) => {
    return {
        msg: state.msg
    }
}

export {
    mapStateToProps,
    mapUserToProps,
    mapChatToProps,
    mapStatusMsgToProps
}
