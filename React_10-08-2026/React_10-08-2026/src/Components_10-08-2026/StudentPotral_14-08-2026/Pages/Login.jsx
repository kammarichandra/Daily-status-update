import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleLogin = (e) => { e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Simulate login
    localStorage.setItem("isLoggedIn", "true");

    alert("Login successful!");

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🔐 Login</h1>

      <form onSubmit={handleLogin}>
        
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <br />

          <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>

        <div style={{ marginBottom: "15px" }}>

          <label>Password</label>
          <br />

          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />

        </div>

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;