import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    navigate("/");
    return null;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      name: email.split("@")[0],
      email,
      phone: "9999999999"
    });
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;