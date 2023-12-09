import React from "react";
import "./LoginSignup.css";

// Assets
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import user_icon from "../Assets/person.png";

import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action==="Login"?<div></div>:
        <div className="input">
          <img src={user_icon} alt="person_icon" />
          <input type="text" placeholder="Name..." />
        </div>}

        <div className="input">
          <img src={email_icon} alt="email_icon" />
          <input type="email" placeholder="Email..." />
        </div>
        <div className="input">
          <img src={password_icon} alt="pass_icon" />
          <input type="password" placeholder="Password..." />
        </div>
      </div>

      <div className="forgot-password">
        Forgot Passsword? <span>Click Here</span>
      </div>

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign up");
          }}
        >
          Sign up
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
