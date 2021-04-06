import React from "react";
import firebase from "firebase/app";

const Logout = ({ logout }) => {
  const auth = firebase.auth();

  return auth.currentUser && <button onClick={logout}>Log Out</button>;
};

export default Logout;
