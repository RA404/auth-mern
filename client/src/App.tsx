import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "./index";
import AuthForm from "./components/AuthForm";
import { observer } from "mobx-react-lite";
import UserService from "./services/UserService";
import { IUser } from "./models/IUser";
import "./App.css";


const App: FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);
  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (store.isLoading) {
    return <div>Loading...</div>;
  }

  if (!store.isAuth) {
    return (
      <div>
        <button onClick={() => {store.openAuthForm('register', true)}}>Sign Up</button>
        <button onClick={() => {store.openAuthForm('login', true)}}>Log In</button>
        <AuthForm />
      </div>
    );
  }

  return (
    <div>
      <h2>{store.isAuth ? `Hello ${store.user.email}` : `Please authorize`}</h2>
      <h2>
        {store.user.isActivated
          ? "email confirmed"
          : "Please confirm your email"}
      </h2>
      <button onClick={() => store.logout()}>Log Out</button>
      <div>
        <button onClick={getUsers}>Get all users</button>
      </div>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
};

export default observer(App);
