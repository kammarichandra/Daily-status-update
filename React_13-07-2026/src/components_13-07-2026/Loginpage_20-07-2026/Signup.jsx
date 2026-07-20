import React, { useState } from "react";

function Signup({ setPage }) {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  let handleSignup = (e) => {
    e.preventDefault();

    alert("Account Created Successfully!");

    setPage("login");
  };


  return (
    <div className="container">

      <h2>Signup Page</h2>

      <form onSubmit={handleSignup}>

        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} required />

        <br/><br/>

        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

        <br/><br/>

        <button type="submit"> Signup</button>

      </form>

      <p>
        Already have an account?

        <button onClick={()=>setPage("login")}> Login </button>

      </p>

    </div>
  );
}

export default Signup;