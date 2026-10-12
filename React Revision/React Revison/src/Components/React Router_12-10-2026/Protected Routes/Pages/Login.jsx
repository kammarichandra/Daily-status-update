import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const success = login(email, password);

    if (success) {
      const from = location.state?.from;

      // Return to the original requested page
      const destination = from
        ? `${from.pathname}${from.search || ""}${from.hash || ""}`
        : "/dashboard";

      navigate(destination, { replace: true });
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Welcome to TeamSync</h1>
        <p>Sign in to your employee dashboard.</p>

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {error && <p className="login-error">{error}</p>}

        <button type="submit">Login</button>

        <small> Demo: admin@teamsync.com / Admin@123 </small>

      </form>
    </div>
  );
}

export default Login;