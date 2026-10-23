import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!username.trim() || !password) {
      setError("Enter both a username and password.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  }

  return (
    <main>
      <h2>EMS Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="login1-username">Username</label>
          <input
            id="login1-username"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              setError("");
            }}
            autoComplete="username"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="login1-password">Password</label>
          <input
            id="login1-password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            autoComplete="current-password"
            required
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login1;