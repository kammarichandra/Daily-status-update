import { useNavigate } from "react-router-dom";

function Login3() {

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    navigate("/dashboard");
  }

  return (

    <div className="login-container">

      <form className="login-form" onSubmit={handleLogin} >

        <h1>Login</h1>

        <input type="email" placeholder="Email" required />

        <input type="password" placeholder="Password" required/>

        <button type="submit"> Login </button>

      </form>
      
    </div>

  );
}

export default Login3;