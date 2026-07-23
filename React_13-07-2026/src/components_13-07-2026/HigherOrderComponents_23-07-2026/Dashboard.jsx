import React from "react";


function Dashboard({user}){


  return (

    <div>

      <h1>
        Dashboard
      </h1>

      <h3>
        Welcome {user.name}
      </h3>

    </div>

  );

}


export default Dashboard;