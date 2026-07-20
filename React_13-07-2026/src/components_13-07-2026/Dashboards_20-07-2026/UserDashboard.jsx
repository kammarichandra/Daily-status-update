import React from "react";


function UserDashboard({user}){

  return(

    <div className="container">

      <h2>User Dashboard</h2>

      <h3>
        Welcome {user.name}
      </h3>

      <p>
        You can view your profile and activities.
      </p>

    </div>

  );

}


export default UserDashboard;