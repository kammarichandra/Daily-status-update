import React, { useState } from 'react'

function Events() {

    let [count , setcount] = useState(0);
    let [name , setname] = useState("");

    let [username , setusername] = useState("");
    let [password , setpassword] = useState("");

    let handlesubmit = (event)=>{
        event.preventDefault();

        console.log("username : ",username);
        console.log("password : ",password);

        alert("login submitted successfully..!");
    }

  return (
    <div>
        <h1>count : {count}</h1>

        <button onClick={()=>setcount(count +1)}>inc</button>

        <button onClick={()=>setcount(count-1)}>dec</button>

        <button onClick={()=>setcount(0)}>reset</button><br /><br />

        <h2>change event</h2>

        <input type="text" onChange={(e)=>setname(e.target.value)} />
        <p>hello {name}</p>

        <h2>Login Form</h2>

        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">UserName : </label>
            <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='enter username'/>
            <br />
            <label htmlFor="">Password : </label>
            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='enter password' />
            <br />
            <button type='submit'>Login</button>
        </form> 
    </div>
  )
}

export default Events