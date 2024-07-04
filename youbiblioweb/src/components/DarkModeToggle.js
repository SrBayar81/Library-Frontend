import React from 'react';
import '../assets/styles/DarkModeToggle.css';

function DarkModeToggle({ darkMode, setDarkMode }) {
    return (
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌞' : '🌜'}
        </button>
    );
}

export default DarkModeToggle;



