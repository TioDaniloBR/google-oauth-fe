import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);

      navigate("/home");
    }
  }, [navigate]);

  return <div></div>;
};
