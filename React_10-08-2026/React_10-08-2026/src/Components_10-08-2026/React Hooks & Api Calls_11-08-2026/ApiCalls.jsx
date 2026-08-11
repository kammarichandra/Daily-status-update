import React, { useEffect, useState } from 'react'

function ApiCalls() {

    let [users , setusers] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setusers(data))
        
    },[])

  return (
    <div>
        <h2>users</h2>
        {users.map((user)=>(
            <p key = {user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default ApiCalls