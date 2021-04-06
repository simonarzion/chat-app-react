import React from "react";
const Message = ({ msg }) => {
  console.log(msg);
  return (
    <div>
      <img src={msg.photoURL} alt="" />
      <div>
        <p>{msg.displayName}</p>
        <p>{msg.text}</p>
      </div>
    </div>
  );
};

export default Message;
