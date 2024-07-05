import React, { useState } from 'react';
import '../assets/styles/CatalogoPage.css';
import categoriaLupa from '../assets/image/categoriaLupa.jpg';
import categoriaBook1 from '../assets/image/categoriaBook1.jpg';
import categoriaBook2 from '../assets/image/categoriaBook2.jpg';
import categoriaBook3 from '../assets/image/categoriaBook3.jpg';
import categoriaBook4 from '../assets/image/categoriaBook4.jpg';
import categoriaBook5 from '../assets/image/categoriaBook5.jpg';
import categoriaBook6 from '../assets/image/categoriaBook6.jpg';

const CatalogoPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Titulo');
    const [advancedSearchOpen, setAdvancedSearchOpen] = useState({
        Filtros: false,
        Generos: false,
        Tipo: false
    });

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
        setDropdownOpen(false);
    };

    const toggleAdvancedSearch = (section) => {
        setAdvancedSearchOpen({
            ...advancedSearchOpen,
            [section]: !advancedSearchOpen[section]
        });
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
                        {selectedFilter}
                        <span className={dropdownOpen ? 'arrow-up' : 'arrow-down'}>
                            {dropdownOpen ? '▲' : '▼'}
                        </span>
                    </button>
                    {dropdownOpen && (
                        <div className="catalog-dropdown-menu">
                            <div className="catalog-dropdown-item" onClick={() => handleFilterSelect('Titulo')}>Titulo</div>
                            <div className="catalog-dropdown-item" onClick={() => handleFilterSelect('Autor')}>Autor</div>
                            <div className="catalog-dropdown-item" onClick={() => handleFilterSelect('Compañia')}>Compañia</div>
                        </div>
                    )}
                </div>
                <button className="search-icon" onClick={handleSearch}>
                    <img src={categoriaLupa} alt="Buscar" />
                </button>
            </div>
            <div className="advanced-search">
                <div className="advanced-search-header">
                    Busqueda Avanzada
                </div>
                <div className="advanced-search-content">
                    {['Filtros', 'Generos', 'Tipo'].map((section) => (
                        <div key={section} className="advanced-search-item">
                            <div className="advanced-search-title" onClick={() => toggleAdvancedSearch(section)}>
                                {section}
                                <span className={advancedSearchOpen[section] ? 'arrow-down' : 'arrow-right'}>
                                    {advancedSearchOpen[section] ? '▼' : '▶'}
                                </span>
                            </div>
                            {advancedSearchOpen[section] && (
                                <div className="advanced-search-options">
                                    <label>
                                        <input type="checkbox" />
                                        Opción 1
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Opción 2
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Opción 3
                                    </label>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="book-list">
                <div className="book-item">
                    <img src={categoriaBook1} alt="Book 1" />
                    <div className="book-title">El Hobbit</div>
                </div>
                <div className="book-item">
                    <img src={categoriaBook2} alt="Book 2" />
                    <div className="book-title">El Arte de la Guerra</div>
                </div>
                <div className="book-item">
                    <img src={categoriaBook3} alt="Book 3" />
                    <div className="book-title">Me Alegro que mi Madre haya Muerto</div>
                </div>
                <div className="book-item">
                    <img src={categoriaBook4} alt="Book 4" />
                    <div className="book-title">Los Juegos Del Hambre</div>
                </div>
                <div className="book-item">
                    <img src={categoriaBook5} alt="Book 5" />
                    <div className="book-title">Cuentos Macabros</div>
                </div>
                <div className="book-item">
                    <img src={categoriaBook6} alt="Book 6" />
                    <div className="book-title">La Sombre del Viento</div>
                </div>
            </div>
        </div>
    );
};

export default CatalogoPage;







