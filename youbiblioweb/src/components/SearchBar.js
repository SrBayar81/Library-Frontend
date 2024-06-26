import React, { useState } from 'react';
import '../assets/styles/SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Lógica de búsqueda
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">🔍</button>
        </form>
    );
}

export default SearchBar;

