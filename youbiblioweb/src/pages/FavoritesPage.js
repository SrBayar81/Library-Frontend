// src/pages/FavoritesPage.js
import React from 'react';
import '../assets/styles/FavoritesPage.css';

const FavoritesPage = () => {
    return (
        <div className="favorites-page">
            <h1>Favoritos</h1>
            <div className="favorites-grid">
                <div className="book-card">
                    <img src="/path/to/book1.jpg" alt="Book 1" />
                    <p>El Hobbit</p>
                </div>
                <div className="book-card">
                    <img src="/path/to/book2.jpg" alt="Book 2" />
                    <p>La guerra del fin del mundo</p>
                </div>
                <div className="book-card">
                    <img src="/path/to/book3.jpg" alt="Book 3" />
                    <p>Harry Potter y la piedra filosofal</p>
                </div>
                <div className="book-card">
                    <img src="/path/to/book4.jpg" alt="Book 4" />
                    <p>Las mil y una noches</p>
                </div>
                <div className="book-card">
                    <img src="/path/to/book5.jpg" alt="Book 5" />
                    <p>Hamlet</p>
                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;