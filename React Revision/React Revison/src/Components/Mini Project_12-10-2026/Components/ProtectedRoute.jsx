import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const loggedIn = sessionStorage.getItem("loggedIn");

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;