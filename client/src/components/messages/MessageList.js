import React, {useEffect} from "react";

const MessageList = (props) => {

    const {
        messages,
        setMessages,
        socket
    } = props;

    useEffect(() => {
        socket.on("mostRecentMessages", messages => setMessages(messages));
    }, []);

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

export default MessageList;