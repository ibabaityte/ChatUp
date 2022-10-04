import {useState} from "react";
import {connect} from "react-redux";

// util imports
import {sendMessage} from "../../utils/message/utils";

const MessageInput = (props) => {

    const {
        chat,
        user
    } = props;

    const [message, setMessage] = useState("");

    return (
        <div>
            <h3>Send a message</h3>
            <form>
                <input type="text" value={message} onChange={e => {setMessage(e.target.value)}}/>
                <button onClick={(e) => {sendMessage(e, setMessage, message, chat, user.userId)}}>submit</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        chat: state.chat
    }
}

export default connect(mapStateToProps)(MessageInput);
