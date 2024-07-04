import React from 'react';
import '../assets/styles/DropdownMenu.css';
import iconodebarra1 from '../assets/image/iconodebarra1.jpg';
import iconodebarra2 from '../assets/image/iconodebarra2.jpg';
import iconodebarra3 from '../assets/image/iconodebarra3.jpg';
import iconodebarra4 from '../assets/image/iconodebarra4.jpg';
import iconodebarra5 from '../assets/image/iconodebarra5.jpg';

function DropdownMenu() {
    return (
        <div className="dropdown-menu">
            <div className="dropdown-item">
                <img src={iconodebarra1} alt="Mi Perfil" />
                <span>MI PERFIL</span>
            </div>
            <div className="dropdown-item">
                <img src={iconodebarra2} alt="Favoritos" />
                <span>FAVORITOS</span>
            </div>
            <div className="dropdown-item">
                <img src={iconodebarra3} alt="Reservas" />
                <span>RESERVAS</span>
            </div>
            <div className="dropdown-item">
                <img src={iconodebarra4} alt="Prestamos" />
                <span>PRESTAMOS</span>
            </div>
            <div className="dropdown-item">
                <img src={iconodebarra5} alt="Cerrar Sesion" />
                <span>CERRAR SESION</span>
            </div>
        </div>
    );
}

export default DropdownMenu;
