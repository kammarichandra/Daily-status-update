import React, { useState } from 'react'
import axios from 'axios';

function Axios() {

    let [user , setuser] = useState(null);

    let getuser = async ()=>{

        let response = await axios.get("https://jsonplaceholder.typicode.com/users/1");

        setuser(response.data);
    }
  return (
     <div>
      <h2>Axios Example</h2>

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

export default Axios