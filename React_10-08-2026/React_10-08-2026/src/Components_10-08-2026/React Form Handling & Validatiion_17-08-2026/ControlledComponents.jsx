import React, { useRef, useState } from 'react'

function ControlledComponents() {

    let [username , setusername] = useState("");
    let [password , setpassword] = useState("");

    let emailref = useRef();


    let handlesubmit = (e)=>{
        e.preventDefault();

        console.log("controlled username : " , username);
        console.log("uncontrolled email :",emailref.current.value);

    }

  return (
    <form>
        <h2>Controlled vs uncontrolled </h2>

        <input type="text" placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)}/> <br /> <br />

        <input type="text" placeholder='email' ref={emailref} /> <br /><br />

        <button type='submit'>submit </button>
    </form>
  )
}

export default ControlledComponents