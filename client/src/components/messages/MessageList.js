import React, {useEffect} from "react";
import {connect} from "react-redux";
import {socket} from "../../utils/socket/socketUtils";

const MessageList = (props) => {

    const {
        messages,
        setMessages
    } = props;

    useEffect(() => {
        socket.on("mostRecentMessages", messages => setMessages(messages));
    }, [setMessages]);

    return (
      <div>
          <h3>message list</h3>
          {
              messages.length < 1 ?
                  <div>No messages</div>
                  :
                  messages.map((message, key) => {
                      return (
                          <div key={key}>
                              <div><b>{message.author.nameAndSurname}</b></div>
                              <div>{message.content}</div>
                          </div>
                      )
                  })
          }
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        socket: state.socket
    }
}

export default connect(mapStateToProps)(MessageList);