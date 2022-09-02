import React from "react";

const MessageList = (props) => {
    const {messages} = props;

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
                              <div><b>{message.author.name}</b></div>
                              <div>{message.content}</div>
                          </div>
                      )
                  })
          }
      </div>
    );
}

export default MessageList;