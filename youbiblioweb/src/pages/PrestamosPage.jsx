import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/PrestamosPage.css';

const PrestamosPage = () => {
    const [prestamos, setPrestamos] = useState([]);

    useEffect(() => {
        // Fetching data from the backend
        axios.get('/api/prestamos')
            .then(response => {
                setPrestamos(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the prestamos!', error);
            });
    }, []);

    return (
        <div className="prestamos-container">
            <h1>Préstamos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Libro</th>
                        <th>Usuario</th>
                        <th>Fecha de Préstamo</th>
                        <th>Fecha de Devolución</th>
                    </tr>
                </thead>
                <tbody>
                    {prestamos.map(prestamo => (
                        <tr key={prestamo.id}>
                            <td>{prestamo.id}</td>
                            <td>{prestamo.libro.titulo}</td>
                            <td>{prestamo.usuario.nombre}</td>
                            <td>{new Date(prestamo.fechaPrestamo).toLocaleDateString()}</td>
                            <td>{new Date(prestamo.fechaDevolucion).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PrestamosPage;