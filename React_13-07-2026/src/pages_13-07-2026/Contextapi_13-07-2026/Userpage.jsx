import React from "react";
import User from "../../components_13-07-2026/contextapi_13-07-2026/User";
import UserProvider from "../../components_13-07-2026/contextapi_13-07-2026/Userprovider";

const UserPage = () => {
  return (
    <UserProvider>
      <div>
        <h1>User Context API Example</h1>
        <User />
      </div>
    </UserProvider>
  );
};

export default UserPage;