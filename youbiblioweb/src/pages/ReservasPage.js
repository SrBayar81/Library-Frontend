import React from 'react';
import '../assets/styles/ReservasPage.css';

import reservasLibro1 from '../assets/image/reservasLibros1.jpg';
import reservasLibro2 from '../assets/image/reservasLibros2.jpg';
import reservasLibro3 from '../assets/image/reservasLibros3.jpg';
import reservasLibro4 from '../assets/image/reservasLibros4.jpg';
import reservasLibro5 from '../assets/image/reservasLibros5.jpg';

const librosReservados = [
    { id: 1, imgSrc: reservasLibro1, title: 'La Quinta Ola', fechaReserva: '01/01/2024', estado: 'En cola (4)' },
    { id: 2, imgSrc: reservasLibro2, title: 'El Manuscrito de Niebla', fechaReserva: '05/02/2024', estado: 'Disponible' },
    { id: 3, imgSrc: reservasLibro3, title: 'El Hombre que el Agua se llevo', fechaReserva: '10/03/2024', estado: 'En cola (2)' },
    { id: 4, imgSrc: reservasLibro4, title: 'H de Harry', fechaReserva: '15/04/2024', estado: 'En cola (1)' },
    { id: 5, imgSrc: reservasLibro5, title: 'Still With Us', fechaReserva: '20/05/2024', estado: 'Disponible' },
];

function ReservasPage() {
    return (
        <div className="reservas-page">
            <h1>Libros Reservados</h1>
            {librosReservados.map((libro) => (
                <div key={libro.id} className="reservas-item">
                    <img src={libro.imgSrc} alt={libro.title} className="reservas-img" />
                    <div className="reservas-info">
                        <h3>{libro.title}</h3>
                        <p>Fecha de reserva: {libro.fechaReserva}</p>
                        <p>Estado: {libro.estado}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReservasPage;
