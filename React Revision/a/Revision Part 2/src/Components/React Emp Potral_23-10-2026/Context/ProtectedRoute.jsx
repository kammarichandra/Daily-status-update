import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("login") === "true";

  return isLoggedIn
    ? <Outlet />
    : <Navigate to="/portal/login" replace />;
}

export default ProtectedRoute