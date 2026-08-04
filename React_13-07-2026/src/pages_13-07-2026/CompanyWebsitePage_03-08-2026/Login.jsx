import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  function handleLogin() {

    alert("Login Successful");

    navigate("/dashboard");

  }

  return (

    <div>

      <h1>Client Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  );

}

export default Login;