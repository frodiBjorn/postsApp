import React, {useContext, useState} from 'react';
import MyButton from "../../components/UI/button/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import classes from "./Login.module.css";
import {AuthContext} from "../../context/context";

const Login = () => {
  const {setIsAuth} = useContext(AuthContext)

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true)
    localStorage.setItem('isAuth', 'true')
  }

return (
  <div className={classes.loginWrapper}>
    <h2>Login</h2>
    <form onSubmit={login}>
      <div>
        <label htmlFor="username">Имя пользователя:</label>
        <MyInput placeholder='Введите имя пользователя...' type="text" id="username"/>
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <MyInput placeholder='Введите пароль' type="password" id="password" />
      </div>
      <MyButton style='loginBtn' type="submit">Login</MyButton>
    </form>
  </div>
);
}
;

export default Login;
