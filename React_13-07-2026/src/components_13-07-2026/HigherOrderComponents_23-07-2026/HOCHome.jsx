import React from "react";

import Dashboard from "./Dashboard";
import Users from "./Users";
import AdminPanel from "./AdminPanel";

import withAuth from "./Authentication";
import withAuthorization from "./Authorization";
import withLoading from "./Loading";



// Authentication HOC
const ProtectedDashboard = withAuth(Dashboard);


// Loading HOC
const UsersWithLoading = withLoading(Users);


// Authorization HOC
const AdminOnlyPanel = withAuthorization( AdminPanel, "admin");



function App(){


  return (

    <div>

      <ProtectedDashboard />

      <hr />

      <UsersWithLoading loading={false}/>

      <hr />

      <AdminOnlyPanel />

    </div>

  );


}


export default App;