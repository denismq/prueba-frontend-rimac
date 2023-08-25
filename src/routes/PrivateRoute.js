import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  //debugger;
  const user = useSelector((state) => state.user);
  const { userName } = user;

  return userName ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
