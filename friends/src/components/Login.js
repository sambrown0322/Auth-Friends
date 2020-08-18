import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialLoginValues = {
  username: "",
  password: "",
};
const Login = (props) => {
  const [inputText, setInputText] = useState(initialLoginValues);

  const handleChange = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", inputText)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      });
  };
  return (
    <div>
      <h2>Login:</h2>
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={inputText.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={inputText.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
