

import React, { useState } from 'react';
import '../assets/styles/CatalogoPage.css';

const CatalogoPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSearch = () => {
        console.log('Realizando búsqueda:', searchQuery);
    };

    return (
        <div className="catalogo-container">
            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar en el catálogo..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className="dropdown">
                    <button className="dropdown-button" onClick={toggleDropdown}>
                        Filtros
                        <span className={dropdownOpen ? 'arrow-up' : 'arrow-down'}>
                            {dropdownOpen ? '▲' : '▼'}
                        </span>
                    </button>
                    {dropdownOpen && (
                        <div className="catalog-dropdown-menu">
                            <div className="catalog-dropdown-item">Opción 1</div>
                            <div className="catalog-dropdown-item">Opción 2</div>
                            <div className="catalog-dropdown-item">Opción 3</div>
                        </div>
                    )}
                </div>
                <button className="search-icon" onClick={handleSearch}>
                    <img src="ruta-del-icono-de-búsqueda" alt="Buscar" />
                </button>
            </div>
            {/* Resto del contenido del catálogo */}
        </div>
    );
};

export default CatalogoPage;




