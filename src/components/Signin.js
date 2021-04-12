import React from "react";

const Signin = ({ login }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column login">
      <h1 className="text-dark mb-5">Welcome to the Chat App</h1>
      <button onClick={login} className="btn btn-outline-dark btn-lg">
        Sign In
      </button>
    </div>
  );
};

export default Signin;
