import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    let [email, setEmail] = useState('');

    let handleLogin = (e) => {
        e.preventDefault();

        if (email.trim()) {
            navigate('/employees', { replace: true });
        }
    };

    return (
        <div className="page">
            <h1>Login</h1>

            <form className="form-box" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;