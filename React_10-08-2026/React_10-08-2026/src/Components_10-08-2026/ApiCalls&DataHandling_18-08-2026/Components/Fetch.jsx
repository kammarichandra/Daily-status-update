import React, { useState } from 'react'

function Fetch() {

    let [user , setuser] = useState(null);

    let getuser = async()=>{

        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        let data = await response.json();

        setuser(data);

    }
  return (
    <div>
      <h2>Fetch Example</h2>

      <button onClick={getuser}> Get User </button>

      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  )
}

export default Fetch