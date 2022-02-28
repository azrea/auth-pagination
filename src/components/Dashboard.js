import React, { useState, useEffect } from "react";
import { DashboardContainer } from "./StyledComponents";
import { Link, Outlet } from "react-router-dom";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const data = await response.json();
      console.log(data.rows[0].user_name);
      setName(data.rows[0].user_name);
    } catch (err) {
      console.error(err);
    }
  }

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  }

  useEffect(() => {
    getName();
  }, []);
  return (
    <DashboardContainer>
      <h1 className="welcome">DashBoard</h1>

      <button className="logoutBtn" onClick={(e) => logout(e)}>
        Log out
      </button>
    </DashboardContainer>
  );
};

export default Dashboard;
