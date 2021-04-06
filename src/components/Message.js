import React from "react";
import firebase from "firebase/app";
import { Image } from "react-bootstrap";

const Message = ({ msg }) => {
  const auth = firebase.auth();

  return (
    <div
      className={
        msg.uid === auth.currentUser.uid
          ? "d-flex justify-content-end align-items-center "
          : "d-flex justify-content-start align-items-center"
      }
    >
      <div
        className={
          msg.uid === auth.currentUser.uid
            ? "d-flex justify-content-start rounded my-1 p-2 align-items-center bg-secondary"
            : "d-flex justify-content-start rounded my-1 p-2 align-items-center bg-info"
        }
        style={{ width: "300px" }}
      >
        <div>
          <Image
            src={msg.photoURL}
            roundedCircle
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div className="p-2">
          <span>{msg.displayName}</span>
          <p className="m-0">{msg.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
