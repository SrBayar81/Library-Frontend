// src/pages/ProfilePage.js
import React from 'react';
import '../assets/styles/ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <h1>Mi Perfil</h1>
            <div className="profile-info">
                <img src="/path/to/profile-picture.jpg" alt="Profile" />
                <div>
                    <h2>Nombre del Usuario</h2>
                    <p>Email: usuario@example.com</p>
                    <p>Miembro desde: Enero 2022</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
