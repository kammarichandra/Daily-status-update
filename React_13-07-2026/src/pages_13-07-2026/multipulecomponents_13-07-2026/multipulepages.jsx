import React from "react";
import UserProvider from "../../components_13-07-2026/contextapi_13-07-2026/Userprovider";
import Navbar from "../../components_13-07-2026/contextapi_13-07-2026/Navbar";
import Profile from "../../components_13-07-2026/contextapi_13-07-2026/Profile";
import Dashboard from "../../components_13-07-2026/contextapi_13-07-2026/Dashboard";

let App = () => {

  return (

    <UserProvider>

      <div>

        <Navbar />
        <Profile />
        <Dashboard />

        
      </div>
    </UserProvider>
  );

};


export default App;