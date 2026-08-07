import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    function login() {

        navigate("/dashboard");

    }

    return (
        <>
            <h1>Login Page</h1>

            <button onClick={login}>
                Login
            </button>
        </>
    );

}