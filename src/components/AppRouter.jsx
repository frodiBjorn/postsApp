import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth,isLoading} = useContext(AuthContext)
  console.log(isAuth)

  if(isLoading){
    return <Loader/>
  }
  return (
    isAuth
      ?
      <Routes>
        <Route path="/login" element={<Navigate to="/posts"/>} />
        {privateRoutes.map(route => {
          return (
            <Route
              element={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />
          );
        })}
      </Routes>
      :
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace/>} />
        {publicRoutes.map(route => {
          return (
            <Route
              element={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />
          );
        })}
      </Routes>

  );
};

export default AppRouter;
