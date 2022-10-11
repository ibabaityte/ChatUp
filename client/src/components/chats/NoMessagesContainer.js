import {noMessagesText, noMessagesContainer} from "../../styles/chat/ChatStyles";

const NoMessagesContainer = () => {
    return (
        <div style={noMessagesContainer}>
            <p style={noMessagesText}>There are no messages yet... :(</p>
        </div>
    );
}

export default NoMessagesContainer;
