import React, { useEffect, useState } from "react";
import axios from "axios";

export const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      window.location.href = `${process.env.REACT_APP_API_URL}/auth`;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <button onClick={handleGoogleLogin}>Login com Google</button>
    </div>
  );
};
