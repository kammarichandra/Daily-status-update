import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "12345"
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid Login");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login3;