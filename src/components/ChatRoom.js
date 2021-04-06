import React, { useState } from "react";
import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";

const ChatRoom = () => {
  const [text, setText] = useState("");

  const firestore = firebase.firestore();
  const auth = firebase.auth();

  const { uid, photoURL, displayName } = auth.currentUser;

  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(20);
  const [messages] = useCollectionData(query, { idField: "id" });

  const submitHandler = (e) => {
    e.preventDefault();

    messageRef.add({
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setText("");
  };

  return (
    <div>
      {messages &&
        messages.map((msg) => {
          return <Message key={msg.id} msg={msg} />;
        })}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ChatRoom;
