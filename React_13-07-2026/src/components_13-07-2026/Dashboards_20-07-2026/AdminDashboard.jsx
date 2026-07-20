import React from "react";


function AdminDashboard({user}){

  return(

    <div className="container">

      <h2>Admin Dashboard</h2>

      <h3>
        Welcome {user.name}
      </h3>

      <p>
        You can manage users and system settings.
      </p>

    </div>

  );

}

export default AdminDashboard;