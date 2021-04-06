import React from "react";
import ChatRoom from "./ChatRoom";

const Logged = ({ logOut, user, db }) => {
  return (
    <div>
      <h3>Welcome to the chat</h3>
      <button onClick={logOut}>Log Out</button>
      <ChatRoom user={user} db={db} />
    </div>
  );
};

export default Logged;
