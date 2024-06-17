import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateFormData = () => {
    let newErrors = {};

    //Validation userName
    if (!formData.userName) {
      newErrors.userName = "User name is required!";
    } else if (formData.userName.length < 3) {
      newErrors.userName = "User name must be 3 or more characters long!";
    }

    //Validation Password
    if (!formData.password) {
      newErrors.password = "Password is required!";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password length must be 6 or more characters long";
    }

    setErrors(newErrors);
    //console.log(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let isValid = validateFormData();

    if (isValid) {
      navigate("/home");
      console.log("Form submitted successfully");
    } else {
      console.log("Form validation failed!");
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <label>Login</label>
      <input
        type="text"
        name="userName"
        value={formData.userName}
        onChange={onChangeHandler}
      />
      {errors.userName && <p>{errors.userName}</p>}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChangeHandler}
      />
      {errors.password && <p>{errors.password}</p>}
      <button className="btn">Login</button>
    </form>
  );
};

export default Login;
