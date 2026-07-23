import React from "react";

const withAuthorization = (Component, allowedRole) => {
  return function AuthorizationComponent(props) {
    const { user } = props;

    // Safety check
    if (!user) {
      return <h2>User information not available.</h2>;
    }

    if (user.role !== allowedRole) {
      return (
        <div>
          <h2> Unauthorized</h2>
          <p>You don't have permission to access this page.</p>
        </div>
      );
    }

    return <Component {...props} />;
  };
};

export default withAuthorization;