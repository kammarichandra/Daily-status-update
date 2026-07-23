import React from "react";

let withAuth = (Component) => {
  return function AuthComponent(props) {
    
    // Simulated logged-in user
    let user = {
      name: "Chandra",
      isLoggedIn: true,
      role: "customer",
    };

    if (!user.isLoggedIn) {
      return (
        <div>
          <h2>🔒 Access Denied</h2>
          <p>Please login to access your bank account.</p>
        </div>
      );
    }

    return <Component {...props} user={user} />;
  };
};

export default withAuth;