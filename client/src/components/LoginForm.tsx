import React, { FC, useState } from "react";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
      <button>Log In</button>
      <button>Create new account</button>
    </div>
  );
};

export default LoginForm;
