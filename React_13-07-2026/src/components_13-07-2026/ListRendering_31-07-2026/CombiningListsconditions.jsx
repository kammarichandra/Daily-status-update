import React from 'react'

let users = [
  { id: 1, name: "chandra", active: true },
  { id: 2, name: "sekhar", active: false },
  { id: 3, name: "kcs", active: true }
]
function CombiningListsconditions() {
  
  return (
    <div>
      {users.map((user) => (
        user.active ? (
          <p key={user.id}> {user.name} </p>
        ) : (
          <p key={user.id}>
             {user.name} (Inactive)
          </p>
        )
      ))}
    </div>
  );


}

export default CombiningListsconditions;