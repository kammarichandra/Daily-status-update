import { useNavigate } from "react-router";

function Login() {

  let navigate = useNavigate();

  let handleLogin = () => {

    localStorage.setItem("isAuthenticated","true" );

    navigate("/dashboard");

  };

  return (
    <div>

      <h1>Login</h1>

      <button onClick={handleLogin}> Login </button>

    </div>
  );
}

export default Login;