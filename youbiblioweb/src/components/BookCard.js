import React from 'react';
import '../assets/styles/BookCard.css';

function BookCard({ imgSrc, title }) {
    return (
        <div className="book-card">
            <img src={imgSrc} alt={title} />
            <span>{title}</span>
        </div>
    );
}

export default BookCard;
