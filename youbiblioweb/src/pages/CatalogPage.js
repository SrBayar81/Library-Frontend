import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/CatalogoPage.css';
import categoriaLupa from '../assets/image/categoriaLupa.jpg';

const CatalogoPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Titulo');
    const [advancedSearchOpen, setAdvancedSearchOpen] = useState({
        Filtros: false,
        Generos: false,
        Tipo: false
    });
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async (query = '') => {
        try {
            const response = await axios.get(`/api/libros${query}`);
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

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
        let query = `/buscar?${selectedFilter.toLowerCase()}=${searchQuery}`;
        fetchBooks(query);
    };

    const handleCreateBook = async (newBook) => {
        try {
            await axios.post('/api/libros', newBook);
            fetchBooks();
        } catch (error) {
            console.error("Error creating book:", error);
        }
    };

    const handleUpdateBook = async (id, updatedBook) => {
        try {
            await axios.put(`/api/libros/${id}`, updatedBook);
            fetchBooks();
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    const handleDeleteBook = async (id) => {
        try {
            await axios.delete(`/api/libros/${id}`);
            fetchBooks();
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    const toggleAdmin = () => {
        setIsAdmin(!isAdmin);
    };

    return (
        <div className="catalogo-container">
            <button className="admin-button" onClick={toggleAdmin}>
                Admin
            </button>
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
                            <div className="catalog-dropdown-item" onClick={() => handleFilterSelect('Genero')}>Genero</div>
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
                {books.map(book => (
                    <div key={book.id} className="book-item">
                        <div className="book-title">{book.titulo}</div>
                        <div className="book-author">{book.autor}</div>
                        <div className="book-genre">{book.genero}</div>
                        {isAdmin && (
                            <div className="admin-actions">
                                <button className="update-button" onClick={() => handleUpdateBook(book.id, book)}>Modificar</button>
                                <button className="delete-button" onClick={() => handleDeleteBook(book.id)}>Eliminar</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {isAdmin && (
                <div className="admin-create">
                    <h3>Crear Nuevo Libro</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const newBook = {
                            titulo: e.target.titulo.value,
                            autor: e.target.autor.value,
                            genero: e.target.genero.value,
                            año: parseInt(e.target.año.value),
                            descripcion: e.target.descripcion.value,
                            paginas: parseInt(e.target.paginas.value),
                            estaDisponible: e.target.estaDisponible.checked,
                            ubicacion: e.target.ubicacion.value
                        };
                        handleCreateBook(newBook);
                        e.target.reset();
                    }}>
                        <input name="titulo" placeholder="Titulo" required />
                        <input name="autor" placeholder="Autor" required />
                        <select name="genero" required>
                            <option value="Accion">Accion</option>
                            <option value="Drama">Drama</option>
                            <option value="Romance">Romance</option>
                            <option value="Misterio">Misterio</option>
                        </select>
                        <input name="año" type="number" placeholder="Año" required />
                        <input name="descripcion" placeholder="Descripción" required />
                        <input name="paginas" type="number" placeholder="Páginas" required />
                        <label>
                            Disponible
                            <input name="estaDisponible" type="checkbox" />
                        </label>
                        <input name="ubicacion" placeholder="Ubicación" required />
                        <button type="submit">Crear</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CatalogoPage;

