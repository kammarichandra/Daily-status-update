// import React from "react";

// function UserCard({ user }) {

//   console.log("UserCard Rendered:", user.name);

//   return (
//     <div
//       style={{
//         border: "1px solid gray",
//         padding: "10px",
//         margin: "10px"
//       }}
//     >
//       <h3>{user.name}</h3>
//       <p>{user.email}</p>
//       <p>{user.phone}</p>
//     </div>
//   );
// }

// export default UserCard;
import React from "react";


let User = React.memo(({ user }) => {

  console.log("Memo UserCard Rendered:", user.name);


  return (
    <div
      style={{
        border:"1px solid gray",
        padding:"10px",
        margin:"10px"
      }}
    >

      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>

    </div>
  );

});


export default User;