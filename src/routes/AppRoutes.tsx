import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import { HomePage } from "../pages/Home";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute component={<HomePage />} />} />
      <Route path="/home" element={<PrivateRoute component={<HomePage />} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
