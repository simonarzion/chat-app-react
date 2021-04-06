import React from "react";

const Signin = ({ login }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <h1 className="text-light mb-5">Logeate perrito asi hablamos</h1>
      <button onClick={login} className="btn btn-outline-light btn-lg">
        Sign In
      </button>
    </div>
  );
};

export default Signin;
