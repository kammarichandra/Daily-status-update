import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  }

  return (
    <main>
      <h1>EMS Login</h1>
      <button onClick={handleLogin}>Login</button>
    </main>
  );
}

export default Login;
