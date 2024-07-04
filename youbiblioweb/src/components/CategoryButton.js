import React from 'react';
import '../assets/styles/CategoryButton.css';

function CategoryButton({ label, isSelected, onClick }) {
    return (
        <button
            className={`category-button ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default CategoryButton;
