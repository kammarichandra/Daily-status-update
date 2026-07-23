import React from "react";


let withAuthorization = (Component, allowedRole) => {


  return function AuthorizationComponent(props) {


    let user = {

      name: "Admin User",

      role: "admin"

    };


    if(user.role !== allowedRole){

      return (

        <h2>
          Access Denied
        </h2>

      );

    }


    return (

      <Component 
        {...props}
        user={user}
      />

    );


  };


};


export default withAuthorization;