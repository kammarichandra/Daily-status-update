import React from "react";


function Profile({user}){

  return(

    <div style={{textAlign:"center"}}>

      <h2>Profile Page</h2>

      <h3>
        Welcome {user.name}!
      </h3>

      <p>
        Email: {user.email}
      </p>


    </div>

  );

}


export default Profile;