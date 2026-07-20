import React from "react";
import Admin from "./Admin";
import Guest from "./Guest";
import Login from "./Login";
import User from "./User";

function Home() {
  const isLoggedIn = true; 
  const role = "guest";   

  if (!isLoggedIn) {
    return <Login />;
  }

  switch (role) {
    case "admin":
      return <Admin />;

    case "user":
      return <User />;

    case "guest":
      return <Guest />;

    default:
      return <h2>Invalid Role</h2>;
  }
}

export default Home;