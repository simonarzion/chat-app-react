import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import Messages from "./Messages";

const ChatRoom = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const unsuscribe = db
      .collection("messages")
      .orderBy("createdAt")
      .limit(20)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMessages(data);
      });

    return unsuscribe;
  }, [db]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h4>Chat</h4>
      <Messages
        messages={messages}
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text={text}
      />
    </>
  );
};

export default ChatRoom;
