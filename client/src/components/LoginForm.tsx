import React, { FC, useContext, useState } from "react";
import { Context } from "../index";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div>
      <input
        value={email}
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => store.login(email, password)}>Log In</button>
      <button onClick={() => store.registration(email, password)}>
        Create new account
      </button>
    </div>
  );
};

export default LoginForm;
