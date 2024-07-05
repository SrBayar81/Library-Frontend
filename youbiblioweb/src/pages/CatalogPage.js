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
                    <div className="advanced-search-item">
                        <div className="advanced-search-title" onClick={() => toggleAdvancedSearch('Filtros')}>
                            Filtros
                            <span className={advancedSearchOpen.Filtros ? 'arrow-down' : 'arrow-right'}>
                                {advancedSearchOpen.Filtros ? '▼' : '▶'}
                            </span>
                        </div>
                        {advancedSearchOpen.Filtros && (
                            <div className="advanced-search-options">
                                <label>
                                    <input type="checkbox" />
                                    Novela
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    Obra Literaria
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    Comic
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="advanced-search-item">
                        <div className="advanced-search-title" onClick={() => toggleAdvancedSearch('Generos')}>
                            Generos
                            <span className={advancedSearchOpen.Generos ? 'arrow-down' : 'arrow-right'}>
                                {advancedSearchOpen.Generos ? '▼' : '▶'}
                            </span>
                        </div>
                        {advancedSearchOpen.Generos && (
                            <div className="advanced-search-options">
                                <label>
                                    <input type="checkbox" />
                                    Accion
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    Drama
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    Romance
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    Misterio
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="advanced-search-item">
                        <div className="advanced-search-title" onClick={() => toggleAdvancedSearch('Tipo')}>
                            Tipo
                            <span className={advancedSearchOpen.Tipo ? 'arrow-down' : 'arrow-right'}>
                                {advancedSearchOpen.Tipo ? '▼' : '▶'}
                            </span>
                        </div>
                        {advancedSearchOpen.Tipo && (
                            <div className="advanced-search-options">
                                <label>
                                    <input type="checkbox" />
                                    Infantil
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    +18
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    Adolescentes
                                </label>
                            </div>
                        )}
                    </div>
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
                    <div className="book-title">La Sombra del Viento</div>
                </div>
            </div>
        </div>
    );
};

export default CatalogoPage;





