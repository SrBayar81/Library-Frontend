import React, { useState, useEffect } from 'react';
import '../assets/styles/CatalogoPage.css';

const CatalogoPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [adminMode, setAdminMode] = useState(false);
    const [newBook, setNewBook] = useState({ titulo: '', autor: '', genero: 'Romance', año: '', descripcion: '', paginas: '', estaDisponible: true, ubicacion: '' });
    const [editMode, setEditMode] = useState(false);
    const [editingBookId, setEditingBookId] = useState(null);

    const apiUrl = 'https://localhost:7108/api/libros';

    useEffect(() => {
        fetchBooks();
    }, []);1 

    const fetchBooks = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editMode) {
            await updateBook(editingBookId, newBook);
        } else {
            await createBook(newBook);
        }
        setNewBook({ titulo: '', autor: '', genero: 'Romance', año: '', descripcion: '', paginas: '', estaDisponible: true, ubicacion: '' });
        setEditMode(false);
        setEditingBookId(null);
        fetchBooks();
    };

    const createBook = async (book) => {
        try {
            await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });
            fetchBooks(); // Revisen esto, sirve para llamar a fetchBooks para actualizar la lista 
        } catch (error) {
            console.error('Error creating book:', error);
        }
    };

    const updateBook = async (id, book) => {
        try {
            await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });
            fetchBooks(); // Y este es para llamar a fetchBooks para actualizar la lista después de actualizar un libro
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    const deleteBook = async (id) => {
        try {
            await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            });
            fetchBooks();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleEdit = (book) => {
        setNewBook(book);
        setEditMode(true);
        setEditingBookId(book.id);
    };

    const toggleAdminMode = () => {
        setAdminMode(!adminMode);
    };

    return (
        <div className="catalogo-page">
            <h1>Catálogo de Libros</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <button className="search-button">Buscar</button>
            </div>
            <button className="admin-button" onClick={toggleAdminMode}>
                Admin
            </button>
            {adminMode && (
                <form onSubmit={handleSubmit} className="admin-create">
                    <input
                        type="text"
                        name="titulo"
                        placeholder="Título"
                        value={newBook.titulo}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="autor"
                        placeholder="Autor"
                        value={newBook.autor}
                        onChange={handleInputChange}
                        required
                    />
                    <select
                        name="genero"
                        value={newBook.genero}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="Romance">Romance</option>
                        <option value="Comedia">Comedia</option>
                        <option value="Drama">Drama</option>
                        <option value="Misterio">Misterio</option>
                        <option value="Accion">Acción</option>
                        <option value="Horror">Horror</option>
                    </select>
                    <input
                        type="number"
                        name="año"
                        placeholder="Año"
                        value={newBook.año}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="descripcion"
                        placeholder="Descripción"
                        value={newBook.descripcion}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    <input
                        type="number"
                        name="paginas"
                        placeholder="Páginas"
                        value={newBook.paginas}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="ubicacion"
                        placeholder="Ubicación"
                        value={newBook.ubicacion}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className="submit-button">{editMode ? 'Actualizar' : 'Agregar'} Libro</button>
                </form>
            )}
            <div className="advanced-search">
                <h2 className="advanced-search-header">Búsqueda avanzada</h2>  
                <div className="filter-section">
                    <h3 className="advanced-search-title">Filtros</h3>
                    <div className="advanced-search-options">
                        <label>
                            <input type="checkbox" value="Adulto" />
                            Adulto
                        </label>
                        <label>
                            <input type="checkbox" value="Adolecentes" />
                            Adolecentes
                        </label>
                        <label>
                            <input type="checkbox" value="Niños" />
                            Niños
                        </label>
                    </div>
                </div>
                <div className="genre-section">
                    <h3 className="advanced-search-title">Géneros</h3>
                    <div className="advanced-search-options">
                        <label>
                            <input type="checkbox" value="Romance" />
                            Romance
                        </label>
                        <label>
                            <input type="checkbox" value="Comedia" />
                            Comedia
                        </label>
                        <label>
                            <input type="checkbox" value="Drama" />
                            Drama
                        </label>
                        <label>
                            <input type="checkbox" value="Misterio" />
                            Misterio
                        </label>
                        <label>
                            <input type="checkbox" value="Accion" />
                            Acción
                        </label>
                        <label>
                            <input type="checkbox" value="Horror" />
                            Horror
                        </label>
                    </div>
                </div>
                <div className="type-section">
                    <h3 className="advanced-search-title">Tipo</h3>
                    <div className="advanced-search-options">
                        <label>
                            <input type="checkbox" value="Libro" />
                            Libro
                        </label>
                        <label>
                            <input type="checkbox" value="Novela" />
                            Novela
                        </label>
                        <label>
                            <input type="checkbox" value="Manga" />
                            Manga
                        </label>
                    </div>
                </div>
                <button className="apply-filters-button">Aplicar filtros</button>
            </div>
            <div className="book-list">
                <ul>
                    {books.map((book) => (
                        <li key={book.id} className="book-item">
                            <h2 className="book-title">{book.titulo}</h2>
                            {adminMode && (
                                <div className="admin-actions">
                                    <button className="update-button" onClick={() => handleEdit(book)}>Editar</button>
                                    <button className="delete-button" onClick={() => deleteBook(book.id)}>Eliminar</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CatalogoPage;





