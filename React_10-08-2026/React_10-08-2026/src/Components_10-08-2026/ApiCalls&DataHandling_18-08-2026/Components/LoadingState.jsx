import axios from 'axios';
import React, { useState } from 'react'

function LoadingState() {

    let [users , setusers] = useState([]);
    let [loading ,setloading] = useState(false);
    let [error , seterror] = useState("");

    let getusers = async ()=>{
        
        try {
            setloading(true);
            seterror("");

            let response = await axios.get("https://jsonplaceholder.typicode.com/users");

            setusers(response.data);

        } catch (error) {
            seterror("failed to fetch the users ");

        } finally{
            setloading(false)
        }
    };
  return (
    <div>

      <h2>Loading State</h2>

      <button onClick={getusers}> Get Users </button>

      {loading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      }

    </div>
  )
}

export default LoadingState