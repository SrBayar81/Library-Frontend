import React from 'react';
import '../assets/styles/DarkModeToggle.css';

function DarkModeToggle({ darkMode, setDarkMode }) {
    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌞' : '🌜'}
        </button>
    );
}

export default DarkModeToggle;


