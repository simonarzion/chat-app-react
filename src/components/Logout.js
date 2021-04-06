import React from "react";

const Logout = ({ signIn }) => {
  return (
    <div>
      <h3>Welcome to the app</h3>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Logout;
