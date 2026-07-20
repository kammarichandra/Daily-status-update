import React, { useState } from "react";


function Login({setUser}) {

  let [username,setUsername] = useState("");
  let [role,setRole] = useState("user");


  let handleLogin=(e)=>{

    e.preventDefault();


    setUser({
      name: username,
      role: role
    });

  };


  return (

    <div className="container">

      <h2>Login</h2>


      <form onSubmit={handleLogin}>


        <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} required />

        <br/><br/>


        <select value={role} onChange={(e)=>setRole(e.target.value)} >

          <option value="admin"> Admin </option>

          <option value="user"> User</option>

          <option value="manager"> Manager </option>

        </select>

        <br/><br/>


        <button type="submit"> Login </button>

      </form>


    </div>

  );
}


export default Login;