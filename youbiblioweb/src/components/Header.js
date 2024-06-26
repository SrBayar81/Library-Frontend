import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import SearchBar from './SearchBar';
import DarkModeToggle from './DarkModeToggle';
import '../assets/styles/Header.css';

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <header className={darkMode ? 'dark-mode' : ''}>
            <div className="logo">
                <Link to="/">YouBiblioWeb</Link>
            </div>
            <nav className="nav">
                <Link to="/catalog">Catálogo</Link>
                <Link to="/lists">Listas</Link>
            </nav>
            <SearchBar />
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <UserMenu />
        </header>
    );
}

export default Header;


