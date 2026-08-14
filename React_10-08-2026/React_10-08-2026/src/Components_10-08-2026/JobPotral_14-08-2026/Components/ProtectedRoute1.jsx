import React from "react";

import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute1({ children}) {

  let location = useLocation();

  let isLoggedIn = localStorage.getItem( "isLoggedIn" );

  if (!isLoggedIn) {

    return (
      <Navigate to="/login" state={{
          from: location.pathname
        }}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute1;