import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import CSS from "csstype";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  const formContainer: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "350px",
    margin: "100px auto",
    boxSizing: "border-box",
    background: "white",
    borderRadius: "10px",
    padding: "25px 0",
  };

  const formHeader: CSS.Properties = {
    boxSizing: "border-box",
    width: "350px",
    margin: "5px 5px 15px 5px",
    textAlign: "center",
  };

  const formInput: CSS.Properties = {
    boxSizing: "border-box",
    width: "330px",
    margin: "10px",
    padding: "5px",
    height: "40px"
  };

  const formButton: CSS.Properties = {
    boxSizing: "border-box",
    margin: "5px",
    border: "0",
    borderRadius: "10px",
    height: "44px",
    color: "#fff",
    fontSize: "15px",
    lineHeight: "20px",
    backgroundColor: "#2F71E5",
    width: "168px",
    padding: 0,
    boxShadow: "0px 5px 15px rgba(14, 26, 57, 0.2)",
    cursor: "pointer",
  };

  const formOverlay: CSS.Properties = {
    top: 0,
    position: "fixed",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={formOverlay}>
      <div style={formContainer}>
        <h2 style={formHeader}>Log-in form</h2>
        <input
          style={formInput}
          value={email}
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={formInput}
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={formButton} onClick={() => store.login(email, password)}>
          Log In
        </button>
        <button
          style={formButton}
          onClick={() => store.registration(email, password)}
        >
          Create new account
        </button>
      </div>
    </div>
  );
};

export default observer(LoginForm);
