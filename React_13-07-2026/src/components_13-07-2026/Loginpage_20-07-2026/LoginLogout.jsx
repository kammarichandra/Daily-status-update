import React, { useState } from "react";


function LoginForm({setPage,setUser}) {

  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");


  let handleLogin=(e)=>{

    e.preventDefault();


    if(username && password){

      setUser({
        name: username,
        email:"user@gmail.com"
      });


      setPage("profile");

    }

  };


  return (

    <div className ="container">

      <h2>Login Form</h2>


      <form onSubmit={handleLogin}>


        <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} required />

        <br/><br/>

        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />

        <br/><br/>

        <button type="submit"> Login </button>

      </form>


    </div>

  );
}


export default LoginForm;