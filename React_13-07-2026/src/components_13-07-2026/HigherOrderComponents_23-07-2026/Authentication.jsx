import React from "react";

let withAuth = (Component) => {

  return function Authentication(props) {

    // Example authentication check
    let user = {
      name: "chnadra",
      isLoggedIn: true
    };


    if (!user.isLoggedIn) {

      return (
        <h2>
          Please Login To Continue
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


export default withAuth;