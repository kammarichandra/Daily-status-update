import React from "react";


function AdminPanel({user}){


  return (

    <div>

      <h1>
        Admin Panel
      </h1>

      <p>
        Hello {user.name}
      </p>

    </div>

  );

}


export default AdminPanel;