import React from "react";
import Card from "../Shared/Card";
import GrayInput from "../Shared/Inputs";
import { LightBlueButtonBorder } from "../Shared/Buttons";
import { useState } from "react";
import { loginCredentials } from "../../graphql/mockData";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFail, setLoginFail] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit() {
    if (
      username === loginCredentials.username &&
      password === loginCredentials.password
    ) {
      props.loginSuccess();
    } else {
      setLoginFail(true);
    }
  }

  return (
    <div className="login-page">
      <Card>
        <div className="login-card">
          {loginFail ? (
            <h3 style={{ paddingBottom: "10px" }}>
              Please try again.
            </h3>
          ) : (
            <h3 style={{ paddingBottom: "10px" }}>
              Please provide credentials to view demo:
            </h3>
          )}

          <hr style={{ width: "100%", marginBottom: "20px" }} />
          <div className="login-form">
            <GrayInput
              placeholder="Username"
              type="username"
              name="username"
              onChange={handleChange}
            />
            <div style={{ marginTop: "10px" }} />
            <GrayInput
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <div style={{ marginTop: "10px" }} />
            <LightBlueButtonBorder onClick={handleSubmit}>
              Login
            </LightBlueButtonBorder>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
