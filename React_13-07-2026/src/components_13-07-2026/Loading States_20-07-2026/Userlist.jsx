import React from 'react'

function Userlist() {
  return (
    <div>
      <h2>User List</h2>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default Userlist;