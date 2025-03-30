import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Spinner from './Spinner';

const PrivateRoute = ({ children }) => {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />; // Or show a spinner while checking session
  }

  return session ? <>{children}</> : <Navigate to="/signin" />;
};

export default PrivateRoute;
