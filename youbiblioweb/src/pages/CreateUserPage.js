// src/pages/CreateUserPage.js
import React, { useState } from 'react';
import '../assets/styles/CreateUserPage.css';

function CreateUserPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleCreateUser = (e) => {
        e.preventDefault();
        if (username && password) {
            setMessage('El Usuario se ha creado correctamente');
            setUsername('');
            setPassword('');
        } else {
            setMessage('Por favor, complete todos los campos');
        }
    };

    return (
        <div className="create-user-container">
            <form onSubmit={handleCreateUser} className="create-user-form">
                <h2>Crear Usuario</h2>
                <div className="input-group">
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
}

export default CreateUserPage;
