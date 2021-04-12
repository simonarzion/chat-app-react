import React from "react";
import firebase from "firebase/app";

const Message = ({ msg }) => {
  const auth = firebase.auth();

  return (
    <div className={msg.uid === auth.currentUser.uid ? "d-flex justify-content-end align-items-center asd" : "d-flex justify-content-start align-items-center asd"}>
      <div className={msg.uid === auth.currentUser.uid ? "d-flex justify-content-start rounded my-1 p-2 align-items-center" : "d-flex justify-content-start rounded my-1 p-2 align-items-center"} style={{ maxWidth: "80%" }}>
        <div>
          <img src={msg.photoURL} style={{ width: "40px", height: "40px" }} className="rounded-circle" alt="profile img" />
        </div>
        <div className="p-2 bg-light ml-2 px-3" style={{ borderRadius: "25px" }}>
          <p className="m-0 text-dark">{msg.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
