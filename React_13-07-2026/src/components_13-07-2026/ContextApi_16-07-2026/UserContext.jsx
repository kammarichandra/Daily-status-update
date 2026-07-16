import { createContext, useState } from "react";

export let UserContext = createContext();

export function UserProvider({ children }) {
  let [user, setUser] = useState({
    name: "chandra",
    age: 22,
  });

  function changeName() {
    setUser((prevUser) => ({
      ...prevUser,
      name: "kcs",
    }));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        changeName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}