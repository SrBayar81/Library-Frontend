import React from 'react';
import '../assets/styles/PrestamosPage.css';

import prestamosLibro1 from '../assets/image/prestamosLibros1.jpg';
import prestamosLibro2 from '../assets/image/prestamosLibros2.jpg';
import prestamosLibro3 from '../assets/image/prestamosLibros3.jpg';
import prestamosLibro4 from '../assets/image/prestamosLibros4.jpg';
import prestamosLibro5 from '../assets/image/prestamosLibros5.jpg';
import prestamosLibro6 from '../assets/image/prestamosLibros6.jpg';
import prestamosLibro7 from '../assets/image/prestamosLibros7.jpg';
import prestamosLibro8 from '../assets/image/prestamosLibros8.jpg';
import prestamosLibro9 from '../assets/image/prestamosLibros9.jpg';
import prestamosLibro10 from '../assets/image/prestamosLibros10.jpg';

const librosPrestados = [
    { id: 1, imgSrc: prestamosLibro1, title: 'Harry Potter', fechaPrestamo: '01/01/2024', fechaEntrega: '01/02/2024' },
    { id: 2, imgSrc: prestamosLibro2, title: 'La Hipotesis del amor', fechaPrestamo: '05/01/2024', fechaEntrega: '05/02/2024' },
    { id: 3, imgSrc: prestamosLibro3, title: 'Carcoma', fechaPrestamo: '10/01/2024', fechaEntrega: '10/02/2024' },
    { id: 4, imgSrc: prestamosLibro4, title: 'Don quijote', fechaPrestamo: '15/01/2024', fechaEntrega: '15/02/2024' },
    { id: 5, imgSrc: prestamosLibro5, title: 'Un cuento Perfecto', fechaPrestamo: '20/01/2024', fechaEntrega: '20/02/2024' },
    { id: 6, imgSrc: prestamosLibro6, title: 'Sapo y Sepo', fechaPrestamo: '25/01/2024', fechaEntrega: '25/02/2024' },
    { id: 7, imgSrc: prestamosLibro7, title: 'Las mil y una noches', fechaPrestamo: '30/01/2024', fechaEntrega: '01/03/2024' },
    { id: 8, imgSrc: prestamosLibro8, title: 'El chico de la flecha', fechaPrestamo: '01/02/2024', fechaEntrega: '01/03/2024' },
    { id: 9, imgSrc: prestamosLibro9, title: 'Las lagrimas de naraguya', fechaPrestamo: '05/02/2024', fechaEntrega: '05/03/2024' },
    { id: 10, imgSrc: prestamosLibro10, title: 'El ciclo eterno del emperador', fechaPrestamo: '10/02/2024', fechaEntrega: '10/03/2024' },
];

function PrestamosPage() {
    const handleReturn = (title) => {
        alert(`El libro "${title}" ha sido devuelto`);
    };

    return (
        <div className="prestamos-page">
            <h1>Historial de Prestamos</h1>
            {librosPrestados.map((libro) => (
                <div key={libro.id} className="prestamos-item">
                    <div className="prestamos-info">
                        <h3>{libro.title}</h3>
                        <p>Fecha de prestamo: {libro.fechaPrestamo}</p>
                        <p>Fecha de entrega: {libro.fechaEntrega}</p>
                        <button
                            className="devolver-button"
                            onClick={() => handleReturn(libro.title)}
                        >
                            Devolver
                        </button>
                    </div>
                    <div className="prestamos-img">
                        <img src={libro.imgSrc} alt={libro.title} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PrestamosPage;

