import React, { FC, useContext, useEffect } from "react";
import { Context } from "./index";
import LoginForm from "./components/LoginForm";
import { observer } from "mobx-react-lite";

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [store]);

  if (store.isLoading) {
    return <div>Loading...</div>
  }

  if (!store.isAuth) {
    return (
      <LoginForm />
    )
  }

  return (
    <div>
      <h1>{store.isAuth ? `Hello ${store.user.email}` : `Please authorize`}</h1>
      <button onClick={() => store.logout()}>Log Out</button>
    </div>
  );
};

export default observer(App);
