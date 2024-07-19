import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/LoginPage.css';
import loginPerfil from '../assets/image/loginPerfil.jpg';
import loginUser from '../assets/image/loginUser.jpg';
import loginPassword from '../assets/image/loginPassword.jpg';
import background from '../assets/image/background.jpg'; 

function LoginPage({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            setIsAuthenticated(true);
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container" style={{ backgroundImage: `url(${background})` }}> 
            <div className="login-box">
                <div className="avatar">
                    <div className="avatar-bg">
                        <img src={loginPerfil} alt="User Avatar" />
                    </div>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <img src={loginUser} alt="Username Icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <img src={loginPassword} alt="Password Icon" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                    </div>
                    <div className="options">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forgot your password?</a>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
