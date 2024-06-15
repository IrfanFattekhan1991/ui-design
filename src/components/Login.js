import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const validate = () => {
    if (!userName || !password) {
      setError("User Name and Password required!");
      return;
    }
    if (userName.length < 3 || password.length < 6) {
      setError(
        "User name must be 3 characters long & password must be 6 characters long!"
      );
      return;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userName, password);
    validate();
    setUserName("");
    setPassword("");
  };

  if (!error) {
    window.location = "/Home";
  }
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <h1>Login</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>{error}</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>{error}</label>
      <button className="btn">Login</button>
    </form>
  );
};

export default Login;
