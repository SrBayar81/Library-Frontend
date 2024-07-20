

import React from 'react';
import '../assets/styles/DropdownMenu.css';
import iconodebarra1 from '../assets/image/iconodebarra1.jpg';
import iconodebarra2 from '../assets/image/iconodebarra2.jpg';
import iconodebarra3 from '../assets/image/iconodebarra3.jpg';
import iconodebarra4 from '../assets/image/iconodebarra4.jpg';
import iconodebarra5 from '../assets/image/iconodebarra5.jpg';
import { Link } from "react-router-dom";

function DropdownMenu({ className }) {

    return (
        <div className={`dropdown-menu ${className}`}>

            
            <div className="dropdown-item">
                <Link to={"/ProfilePage"} >
           
                <img src={iconodebarra1} alt="Mi Perfil" />
                    <span>MI PERFIL</span>
                   </Link> 
            </div>
            <div className="dropdown-item">
                   
                <Link to={"/FavoritesPage"} >
                
                <img src={iconodebarra2} alt="Favoritos" />
                    <span>FAVORITOS</span>
                </Link>
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

