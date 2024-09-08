// src/routes/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid } from "../utils/auth";

interface PrivateRouteProps {
  component: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component }) => {
  return isTokenValid() ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
