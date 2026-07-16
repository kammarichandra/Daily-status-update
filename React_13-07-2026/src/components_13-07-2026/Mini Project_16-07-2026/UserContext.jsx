import { createContext } from "react";

export let UserContext = createContext();

export function UserProvider({ children }) {

  let user = {
    name: "chandra",
    email: "chandra@gmail.com"
  };

  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );
}