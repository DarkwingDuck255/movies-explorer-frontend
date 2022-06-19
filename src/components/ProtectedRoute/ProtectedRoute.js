import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, children}) => {
  if (loggedIn !== true) {
    return <Navigate to="/" />;
  }

  return children;
  
};

export default ProtectedRoute;
