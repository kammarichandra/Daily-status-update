import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e)=> {

    e.preventDefault();

    if (username === "admin" && password === "123") {

      localStorage.setItem("login", "true");
      navigate("/portal/dashboard");

    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button>Login</button>

      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login2;