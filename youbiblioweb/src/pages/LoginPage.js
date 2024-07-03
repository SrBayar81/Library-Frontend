import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/LoginPage.css';


function LoginPage({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Logica de autentificacion coming soon, por ahora todos son validos
        if (username && password) {
            setIsAuthenticated(true);
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="avatar">
                    <img src="path_to_avatar_image" alt="User Avatar" />
                </div>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="options">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="/forgot-password">Forgot your password?</a>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;



