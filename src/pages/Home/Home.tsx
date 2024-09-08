import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const HomePage = () => {
  const [userProfile, setUserProfile] = useState<any>();
  async function fetchUserProfile() {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setUserProfile(res.data);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 40,
        alignItems: "center",
      }}
    >
      <div>
        <p>Dashboard: Autenticação bem-sucedida!</p>
      </div>
      <div>
        <button onClick={fetchUserProfile}>Profile</button>
      </div>
      <div style={{ display: userProfile ? "flex" : "none" }}>
        User Profile
        <div>
          <p>Nome: {userProfile?.firstName}</p>
          <p>Email: {userProfile?.email}</p>
          <img src={userProfile?.picture}></img>
        </div>
      </div>
    </div>
  );
};
