import React from "react";
import firebase from "firebase/app";

const Logout = ({ logout }) => {
  const auth = firebase.auth();

  return (
    auth.currentUser && (
      <div className="text-right my-2">
        <button onClick={logout} className="btn btn-outline-light btn-lg">
          Log Out
        </button>
      </div>
    )
  );
};

export default Logout;
