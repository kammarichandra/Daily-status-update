import React, { createContext, useState } from "react";


// Create Context
export let UserContext = createContext();


// Create Provider
export function UserProvider({ children }) {

  let [user, setUser] = useState({
    name: "chandra",
    role: "Developer",
    loggedIn: false
  });


  let loginUser = () => {

    setUser({
      ...user,
      loggedIn: true
    });

  };


  let logoutUser = () => {

    setUser({
      ...user,
      loggedIn: false
    });

  };


  let changeName = () => {

    setUser({
      ...user,
      name: "sekhar"
    });

  };


  return (

    <UserContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        changeName
      }}
    >

      {children}

    </UserContext.Provider>

  );

}