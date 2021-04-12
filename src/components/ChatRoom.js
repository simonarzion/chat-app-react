import React, { useState } from "react";
import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { useRef } from "react";
import Logout from "./Logout";

const ChatRoom = ({ logout }) => {
  const [text, setText] = useState("");

  const firestore = firebase.firestore();
  const auth = firebase.auth();

  const { uid, photoURL, displayName } = auth.currentUser;

  const dummy = useRef();
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(100);
  const [messages] = useCollectionData(query, { idField: "id" });

  const submitHandler = async e => {
    e.preventDefault();

    await messageRef.add({
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setText("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat-container ">
      <Logout logout={logout} />

      <div className="chat bg-dark rounded">
        {messages &&
          messages.map(msg => {
            return <Message key={msg.id} msg={msg} />;
          })}
        <span ref={dummy}></span>
      </div>

      <form onSubmit={submitHandler} className="text-center form">
        <input type="text" className="p-8" value={text} onChange={e => setText(e.target.value)} />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ChatRoom;
