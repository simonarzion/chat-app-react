import React from "react";

const Messages = ({ messages, user, handleSubmit, handleChange, text }) => {
  console.log(user);
  return (
    <div className="chat">
      {messages.map((message) => {
        console.log(message);
        return (
          <div key={message.id} className="message">
            <img src={user.photoURL} alt="" />
            <div className="message-text">
              <p>{user.displayName}</p>
              <p key={message.id}>{message.text}</p>
            </div>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default Messages;
