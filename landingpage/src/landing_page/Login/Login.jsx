import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const doLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter your details");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="logpage">
      <div className="logg">
        <h1>Hello! We are glad that you choose Star Travels</h1> <br />
        <form>
          E-mail :{" "}
          <input
            type="text"
            placeholder="Enter your E-mail Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br /> <br />
          Password :{" "}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <br />
          <button onClick={()=>doLogin}>Log in</button>
        </form>
      </div>
    </div>
  );
}

export default login;
