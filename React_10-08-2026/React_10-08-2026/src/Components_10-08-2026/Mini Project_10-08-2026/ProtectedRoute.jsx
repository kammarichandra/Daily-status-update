import { Navigate, Outlet} from "react-router";

function ProtectedRoute() {

  let isAuthenticated = localStorage.getItem( "isAuthenticated" ) === "true";

  if (!isAuthenticated) {

    return (
      <Navigate to="/login" replace/>
    );

  }

  return <Outlet />;
}

export default ProtectedRoute;