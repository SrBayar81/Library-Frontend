import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/BookDetailPage.css';
import harryPotterImg from '../assets/image/popularesLibro3.jpg';

const BookDetailPage = () => {
    const { bookId } = useParams();
   
    const bookDetails = {
        title: 'Harry Potter y la piedra filosofal',
        description: 'Harry Potter es un niño huérfano criado por su tía y su tío. En su undécimo cumpleaños descubre que es hijo de dos magos y que posee también poderes mágicos. Poco después es invitado a asistir al Colegio Hogwarts de Magia y Hechicería para recibir educación mágica. A partir de ahí, su vida cambia para siempre y se ve envuelto en emocionantes aventuras en el mundo mágico.',
        imageUrl: harryPotterImg
    };

    return (
        <div className="book-detail-container">
            <img src={bookDetails.imageUrl} alt={bookDetails.title} className="book-detail-image" />
            <h1 className="book-detail-title">{bookDetails.title}</h1>
            <p className="book-detail-description">{bookDetails.description}</p>
        </div>
    );
};

export default BookDetailPage;
