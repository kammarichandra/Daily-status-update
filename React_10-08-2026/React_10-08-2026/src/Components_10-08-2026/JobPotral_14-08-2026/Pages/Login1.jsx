import React, { useState } from "react";

import { useNavigate, useLocation} from "react-router-dom";

function Login1() {

  let navigate = useNavigate();

  let location = useLocation();

  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");

  let handleSubmit = (e) => {

    e.preventDefault();

    if (!email || !password) {

      alert( "Please enter email and password" );

      return;
    }

    localStorage.setItem( "isLoggedIn", "true" );

    let from = location.state?.from || "/jobs";

    navigate(from);
  };

  return (
    <div className="container">

      <h1> 🔐 Login </h1>

      <form onSubmit={handleSubmit} >

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)  } />

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) } />

        <button type="submit"> Login </button>

      </form>

    </div>
  );
}

export default Login1;