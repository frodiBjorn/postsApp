import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }
  return (
    <div className='navbar'>
      <MyButton style={'logoutBtn'} onClick={logout}>Выйти</MyButton>
      <div className="navbar__list">
        <NavLink to="/about">О сайте</NavLink>
        <NavLink to="/posts">Посты</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
