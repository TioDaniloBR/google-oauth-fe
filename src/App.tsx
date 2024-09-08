// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { isTokenValid, clearToken } from "./utils/auth";
import { AppRoutes } from "./routes/AppRoutes";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenValid()) {
      clearToken();
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};

const RootApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
