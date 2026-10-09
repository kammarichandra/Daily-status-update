import React from 'react'

function Employee({name , email , role ,status}) {

  return (
    <div>
        
        <h2>Employee Profile</h2>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Role: {role}</p>
        <p>Status : {status}</p>

    </div>
  )
}

export default Employee