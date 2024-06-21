import React from 'react';
import './DarkModeToggle.css'; 

function DarkModeToggle({ darkMode, setDarkMode }) {
    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌞' : '🌜'}
        </button>
    );
}

export default DarkModeToggle;

