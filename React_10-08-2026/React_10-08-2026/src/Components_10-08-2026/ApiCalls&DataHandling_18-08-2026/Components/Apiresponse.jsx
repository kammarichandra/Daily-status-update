import axios from 'axios';
import React, { useState } from 'react'

function Apiresponse() {

    let [users , setusers] = useState([]);

    let getusers = async ()=>{

        let response = await axios.get( "https://jsonplaceholder.typicode.com/users");

        let data = response.data;

        setusers(data);
    };


  return (

    <div>
      <h2>API Response Handling</h2>

      <button onClick={getusers}> Get Users </button>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>

  )
}

export default Apiresponse