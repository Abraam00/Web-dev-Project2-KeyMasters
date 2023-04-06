import "./bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    const token = response.data.token;
    setToken(token);
  };

  return (
    <div className="loginFormGroup">
      <div className="adminTopBanner">
        <h1>Admin Page</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            id="inputDefault"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
