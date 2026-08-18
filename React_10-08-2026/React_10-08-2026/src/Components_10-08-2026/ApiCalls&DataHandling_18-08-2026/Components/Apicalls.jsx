import React, { useState } from 'react'

function Apicalls() {

    let [users , setusers] = useState([]);

    let fetchusers = async()=>{

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        setusers(data);
    };

  return (
    <div>
      <h2>API Calls</h2>

      <button onClick={fetchusers}> Get Users </button>

      {users.map((user) => (

        <p key={user.id}> {user.name} </p>

      ))}
    </div>
  )
}

export default Apicalls