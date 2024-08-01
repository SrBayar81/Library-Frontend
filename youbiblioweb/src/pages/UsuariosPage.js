import React, { useEffect, useState } from 'react';
import '../assets/styles/UsuariosPage.css';

function UsuariosPage() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://localhost:7108/api/auth/usuarios');
            const data = await response.json();
            setUsuarios(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div className="usuarios-container">
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <p>Nombre de Usuario: {usuario.nombreUsuario}</p>
                        <p>Correo: {usuario.correo}</p>
                        <p>Rol: {usuario.rol}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsuariosPage;
