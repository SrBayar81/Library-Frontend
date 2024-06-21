import React from 'react';
import './BookCategories.css'; 

function BookCategories() {
    return (
        <div className="book-categories">
            <button>Populares</button>
            <button>Más Utilizados</button>
            <button>Educativos</button>
        </div>
    );
}

export default BookCategories;

