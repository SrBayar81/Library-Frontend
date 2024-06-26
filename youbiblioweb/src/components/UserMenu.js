import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/UserMenu.css';

function UserMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="user-menu">
            <button onClick={() => setMenuOpen(!menuOpen)}>Usuario</button>
            {menuOpen && (
                <ul className="menu">
                    <li><Link to="/profile">Mi Perfil</Link></li>
                    <li><Link to="/favorites">Favoritos</Link></li>
                    <li><Link to="/reservations">Reservas</Link></li>
                    <li><Link to="/loans">Préstamos</Link></li>
                    <li><button onClick={() => {/* lógica para cerrar sesión */ }}>Cerrar Sesión</button></li>
                </ul>
            )}
        </div>
    );
}

export default UserMenu;


