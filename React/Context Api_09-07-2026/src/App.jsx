import React from "react";

import { UserProvider } from "./context/UserContext";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

import "./App.css";


function App() {

  return (

    <UserProvider>
 
      <div className="container">

        <h1>
          Context API Implementation
        </h1>


        <Header />


        <Dashboard />

      </div>

    </UserProvider>

  );

}


export default App;