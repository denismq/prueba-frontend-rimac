import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  //debugger;
  let user = useSelector((state) => state.user.userDocument);
  //const { userDocument } = user;
  //let documentNumber = useSelector((state) => state.signIn.signIn.token);

  //return user ? <Navigate to='/' /> : children;

  return user ? <Outlet /> : <Navigate to='/' />;
  /*if (!user) {
    return <Navigate to='/' replace />;
  }
  return children;*/
};

export default PrivateRoute;

/*
The New Way To Create Protected Routes With React Router V6
https://www.youtube.com/watch?v=2k8NleFjG7I
*/

