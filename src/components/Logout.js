import React from "react";
import firebase from "firebase/app";

const Logout = ({ logout }) => {
  const auth = firebase.auth();

  return (
    auth.currentUser && (
      <div className="text-right logout mr-3">
        <button onClick={logout} className="btn btn-outline-dark">
          Log Out
        </button>
      </div>
    )
  );
};

export default Logout;
