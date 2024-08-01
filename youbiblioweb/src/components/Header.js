

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import iconoLupa from '../assets/image/iconoLupa.jpg';
import iconoPerfil from '../assets/image/iconoPerfil.jpg';
import DropdownMenu from './DropdownMenu';

function Header() {
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [userName, setUserName] = useState(''); // State para el nombre de usuario

    useEffect(() => {
        const storedUserName = localStorage.getItem('nombreUsuario'); // Obtener el nombre de usuario de localStorage
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={darkMode ? 'header dark' : 'header light'}>
            <div className="logo" onClick={() => window.location.href = '/'}>
                <span>You</span><strong>Biblio</strong>Web
            </div>
            <nav>
                <Link to="/catalog">Catalogo</Link>
                <Link to="/lists">Listas</Link>
                <input type="text" placeholder="Buscar" />
                <button className="search-button"><img src={iconoLupa} alt="Buscar" /></button>
                <button className="mode-button" onClick={toggleDarkMode}>
                    {darkMode ? '🌞' : '🌜'}
                </button>
                <div className="profile" onClick={toggleMenu}>
                    <img src={iconoPerfil} alt="Perfil" />
                    <span>{userName ? userName : 'Perfil'}</span> {/* Mostrar el nombre de usuario */}
                    <span className="arrow">{menuOpen ? '▲' : '▼'}</span>
                </div>
            </nav>
            {menuOpen && <DropdownMenu className="header-dropdown-menu" />}
        </header>
    );
}

export default Header;


