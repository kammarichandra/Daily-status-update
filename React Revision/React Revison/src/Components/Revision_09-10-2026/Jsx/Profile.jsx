import React from 'react'

function Profile() {
    let name = "chandra";
    let email = "chandra@gmail.com";
    let role = "Joiner Developer"

  return (
    <div>
        <h1>Welcom {name} !</h1>
        <p>Email : {email}</p>
        <p>Role : {role}</p>
    </div>
  )
}

export default Profile