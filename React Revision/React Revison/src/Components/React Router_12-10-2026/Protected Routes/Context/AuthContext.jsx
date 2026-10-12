import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [user, setUser] = useState(null);

  function login(email, password) {
    if ( email.trim().toLowerCase() === "admin@teamsync.com" && password === "Admin@123" ) {

      setUser({
        email: "admin@teamsync.com",
        name: "Admin User",
        role: "ADMIN"
      });

      setIsAuthenticated(true);
      return true;
    }

    return false;
  }

  function logout() {
    setIsAuthenticated(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}