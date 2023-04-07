import React, { FC, useContext, useState, ReactNode } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { flexRowContainer, formButton, formContainer, formHeader, formInput, formLink, formOverlay } from "./AuthStyles";

interface ModalType {
  children?: ReactNode;
}

const AuthForm: FC<ModalType> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <React.Fragment>
      {store.authModalOpened && (
        <div style={formOverlay} onClick={() => {store.openAuthForm('register', false)}}>
          <div style={formContainer} onClick={(e) => e.stopPropagation()}>
            <h2 style={formHeader}>
              {store.authType === 'register' ? "Sign Up Form" : "Log in Form"}
            </h2>
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

            {store.authType === 'register' ? (
              <>
                <button
                  style={formButton}
                  onClick={() => store.registration(email, password)}
                >
                  Create new account
                </button>
                <div style={flexRowContainer}>
                  <p>Already have an account?</p>
                  <button style={formLink} onClick={() => {store.openAuthForm('login', true)}}>
                    Log in
                  </button>
                </div>
              </>
            ) : (
              <>
                <button style={formLink}>Forgot password?</button>
                <button
                  style={formButton}
                  onClick={() => store.login(email, password)}
                >
                  Log In
                </button>
                <div style={flexRowContainer}>
                  <p>Don't have an accaunt?</p>
                  <button style={formLink} onClick={() => {store.openAuthForm('register', true)}}>
                    Sign Up
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default observer(AuthForm);
