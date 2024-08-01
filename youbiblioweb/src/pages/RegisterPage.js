import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/RegisterPage.css';

function RegisterPage() {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [rol, setRol] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (nombreUsuario && correo && contraseña && rol) {
            try {
                const response = await fetch('https://localhost:7108/api/Auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nombreUsuario, correo, contraseña, rol }) // Aquí, asegúrate de que las propiedades coincidan con lo esperado por el backend
                });

                if (response.ok) {
                    alert('Usuario creado con éxito');
                    navigate('/login');
                } else {
                    alert('Error al crear el usuario');
                }
            } catch (error) {
                console.error('Error durante el registro:', error);
                alert('Ocurrió un error. Por favor, inténtelo de nuevo.');
            }
        } else {
            alert('Por favor, complete todos los campos');
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <form onSubmit={handleRegister}>
                    <h2>Registrarse</h2>
                    <div className="register-input-group">
                        <label htmlFor="nombreUsuario">Nombre de Usuario</label>
                        <input
                            type="text"
                            id="nombreUsuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-input-group">
                        <label htmlFor="correo">Correo</label>
                        <input
                            type="email"
                            id="correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-input-group">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input
                            type="password"
                            id="contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-input-group">
                        <label htmlFor="rol">Rol</label>
                        <input
                            type="text"
                            id="rol"
                            value={rol}
                            onChange={(e) => setRol(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="register-button">Crear Usuario</button>
                    <button type="button" className="register-button" onClick={() => navigate('/usuarios')}>Ver Lista de Usuarios</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;




