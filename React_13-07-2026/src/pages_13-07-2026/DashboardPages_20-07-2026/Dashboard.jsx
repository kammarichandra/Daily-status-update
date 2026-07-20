import React, { useState } from "react";
import Login from "../../components_13-07-2026/Dashboards_20-07-2026/Login";
import AdminDashboard from "../../components_13-07-2026/Dashboards_20-07-2026/AdminDashboard";
import UserDashboard from "../../components_13-07-2026/Dashboards_20-07-2026/UserDashboard";
import ManagerDashboard from "../../components_13-07-2026/Dashboards_20-07-2026/ManagerDashboard";

function App() {

  let [user, setUser] = useState(null);


  return (
    <div>

      {!user && (
        <Login setUser={setUser}/>
      )}


      {user && user.role === "admin" && (
        <AdminDashboard user={user}/>
      )}


      {user && user.role === "user" && (
        <UserDashboard user={user}/>
      )}


      {user && user.role === "manager" && (
        <ManagerDashboard user={user}/>
      )}

    </div>
  );
}

export default App;