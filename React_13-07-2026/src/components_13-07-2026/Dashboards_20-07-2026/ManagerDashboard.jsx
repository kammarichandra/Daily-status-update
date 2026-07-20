import React from "react";


function ManagerDashboard({user}){

  return(

    <div className="container">

      <h2>Manager Dashboard</h2>

      <h3>
        Welcome {user.name}
      </h3>

      <p>
        You can manage teams and projects.
      </p>

    </div>

  );

}


export default ManagerDashboard;