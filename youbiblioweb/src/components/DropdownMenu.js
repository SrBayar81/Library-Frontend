import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/DropdownMenu.css';
import iconodebarra1 from '../assets/image/iconodebarra1.jpg';
import iconodebarra2 from '../assets/image/iconodebarra2.jpg';
import iconodebarra3 from '../assets/image/iconodebarra3.jpg';
import iconodebarra4 from '../assets/image/iconodebarra4.jpg';
import iconodebarra5 from '../assets/image/iconodebarra5.jpg';

function DropdownMenu({ className }) {
    const navigate = useNavigate();

    return (
        <div className={`dropdown-menu ${className}`}>
            <div className="dropdown-item">
                <img src={iconodebarra1} alt="Mi Perfil" />
                <span>MI PERFIL</span>
            </div>
            <div className="dropdown-item">
                <img src={iconodebarra2} alt="Favoritos" />
                <span>FAVORITOS</span>
            </div>
            <Link to="/reservas" className="dropdown-item">
                <img src={iconodebarra3} alt="Reservas" />
                <span>RESERVAS</span>
            </Link>
            <Link to="/prestamos" className="dropdown-item">
                <img src={iconodebarra4} alt="Prestamos" />
                <span>PRESTAMOS</span>
            </Link>
            <div className="dropdown-item">
                <img src={iconodebarra5} alt="Cerrar Sesion" />
                <span className="" onClick={() => navigate('/Login')}>
                    CERRAR SESION
                </span>
            </div>
        </div>
    );
}

export default DropdownMenu;
