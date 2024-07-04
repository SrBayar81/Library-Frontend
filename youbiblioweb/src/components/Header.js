﻿import React, { useState } from 'react';
import '../assets/styles/Header.css';
import iconoLupa from '../assets/image/iconoLupa.jpg';
import iconoPerfil from '../assets/image/iconoPerfil.jpg';
import DropdownMenu from './DropdownMenu';

function Header() {
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

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
                <a href="/catalog">Catalogo</a>
                <a href="/lists">Listas</a>
                <input type="text" placeholder="Buscar" />
                <button className="search-button"><img src={iconoLupa} alt="Buscar" /></button>
                <button className="mode-button" onClick={toggleDarkMode}>
                    {darkMode ? '🌞' : '🌜'}
                </button>
                <div className="profile" onClick={toggleMenu}>
                    <img src={iconoPerfil} alt="Perfil" />
                    <span>Profesora1234</span>
                    <span className="arrow">{menuOpen ? '▲' : '▼'}</span>
                </div>
            </nav>
            {menuOpen && <DropdownMenu />}
        </header>
    );
}

export default Header;



