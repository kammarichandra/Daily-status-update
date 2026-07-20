import React from 'react'

function SwitchCase({role}) {
 
    switch (role) {
    case "admin":
      return <h2>Welcome, Admin!</h2>;

    case "user":
      return <h2>Welcome, User!</h2>;

    case "guest":
      return <h2>Welcome, Guest!</h2>;

    default:
      return <h2>Unknown Role</h2>;
  }
}

export default SwitchCase;