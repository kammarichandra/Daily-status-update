import React, { useState } from "react";
import { UserContext } from "./UserContext";

let UserProvider = ({ children }) => {
  let [user, setUser] = useState({
    name: "chandra",
    age: 24,
    role: "ase",
    city: "Bangalore",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;