import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/LoginPage.css';
import loginPerfil from '../assets/image/loginPerfil.jpg';
import loginUser from '../assets/image/loginUser.jpg';
import loginPassword from '../assets/image/loginPassword.jpg';
import background from '../assets/image/background.jpg';
 
function LoginPage({ setIsAuthenticated }) {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
 
    const handleLogin = async (e) => {
        e.preventDefault();
        if (correo && contraseña) {
            try {
                const response = await fetch('https://localhost:7108/api/Auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ correo, contraseña })
                });
 
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('correo', correo);
                    setIsAuthenticated(true);
                    navigate('/');
                } else {
                    alert('Credenciales inválidas');
                }
            } catch (error) {
                console.error('Error durante el inicio de sesión:', error);
                alert('Ocurrió un error. Por favor, inténtelo de nuevo.');
            }
        } else {
            alert('Por favor, ingrese tanto el correo como la contraseña');
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
                            placeholder="Correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <img src={loginPassword} alt="Password Icon" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                    </div>
                    <div className="options">
                        <label>
                            <input type="checkbox" />
                            Recuérdame
                        </label>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
                <button onClick={() => navigate('/register')}>Registrarse</button>
            </div>
        </div>
    );
}
 
export default LoginPage;
 