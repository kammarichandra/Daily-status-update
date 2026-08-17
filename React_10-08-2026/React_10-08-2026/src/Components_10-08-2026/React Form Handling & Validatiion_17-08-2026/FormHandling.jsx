import React, { useState } from 'react'

function FormHandling() {

    let [fromdata , setformdata] = useState({email : "" , password : "",});

    let handlechange = (e)=>{
        let {name , value} = e.target;

        setformdata({
            ...fromdata,
            [name] : value,
        });
    };

    let handlesubmit = (e)=>{
        e.preventDefault();
        console.log(fromdata);
    };

  return (

    <form onSubmit={handlesubmit}>

      <h2>Login Form</h2>

      <input type="email" name="email" placeholder="Email" value={fromdata.email} onChange={handlechange} />

      <br />
      <br />

      <input type="password" name="password" placeholder="Password" value={fromdata.password} onChange={handlechange} />

      <br />
      <br />

      <button type="submit">Login</button>

    </form>
    
  )
}

export default FormHandling