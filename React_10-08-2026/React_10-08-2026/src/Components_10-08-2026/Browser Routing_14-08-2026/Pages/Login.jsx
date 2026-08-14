import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  let handleLogin = () => {
    
    // Store login status
    localStorage.setItem("isLoggedIn", "true");

    // Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <h1>Login Page</h1>

      <p>
        Click the button below to login.
      </p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;