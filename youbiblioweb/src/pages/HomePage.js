import React, { useState } from 'react';
import '../assets/styles/HomePage.css';
import CategoryButton from '../components/CategoryButton';
import BookCard from '../components/BookCard';


import popularesLibro1 from '../assets/image/popularesLibro1.jpg';
import popularesLibro2 from '../assets/image/popularesLibro2.jpg';
import popularesLibro3 from '../assets/image/popularesLibro3.jpg';
import popularesLibro4 from '../assets/image/popularesLibro4.jpg';
import popularesLibro5 from '../assets/image/popularesLibro5.jpg';
import masutilizadosLibro1 from '../assets/image/masutilizadosLibro1.jpg';
import masutilizadosLibro2 from '../assets/image/masutilizadosLibro2.jpg';
import masutilizadosLibro3 from '../assets/image/masutilizadosLibro3.jpg';
import masutilizadosLibro4 from '../assets/image/masutilizadosLibro4.jpg';
import masutilizadosLibro5 from '../assets/image/masutilizadosLibro5.jpg';
import educativosLibro1 from '../assets/image/educativosLibro1.jpg';
import educativosLibro2 from '../assets/image/educativosLibro2.jpg';
import educativosLibro3 from '../assets/image/educativosLibro3.jpg';
import educativosLibro4 from '../assets/image/educativosLibro4.jpg';
import educativosLibro5 from '../assets/image/educativosLibro5.jpg';

const books = {
    populares: [
        { id: 1, imgSrc: popularesLibro1, title: 'Cuento de hadas' },
        { id: 2, imgSrc: popularesLibro2, title: 'El Principito' },
        { id: 3, imgSrc: popularesLibro3, title: 'Alicia' },
        { id: 4, imgSrc: popularesLibro4, title: 'Don Quijote' },
        { id: 5, imgSrc: popularesLibro5, title: 'Carcoma' },
    ],
    masutilizados: [
        { id: 6, imgSrc: masutilizadosLibro1, title: 'Habitos Atomicos' },
        { id: 7, imgSrc: masutilizadosLibro2, title: 'La Chica de Nieve' },
        { id: 8, imgSrc: masutilizadosLibro3, title: '20 Mil leguas' },
        { id: 9, imgSrc: masutilizadosLibro4, title: 'Marginado' },
        { id: 10, imgSrc: masutilizadosLibro5, title: 'Adios a la Inflamacion' },
        
    ],
    educativos: [
        { id: 11, imgSrc: educativosLibro1, title: 'En la clase si se juega' },
        { id: 12, imgSrc: educativosLibro2, title: 'El Arte de Dar Clases' },
        { id: 13, imgSrc: educativosLibro3, title: 'Los Niños Filosofos' },
        { id: 14, imgSrc: educativosLibro4, title: 'El Banquete Pedagogo' },
        { id: 15, imgSrc: educativosLibro5, title: 'Capufas' },
        
    ]
};

function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState('populares');

    return (
        <div className="home-page">
            <div className="category-buttons">
                <CategoryButton
                    label="Populares 🔥​"
                    isSelected={selectedCategory === 'populares'}
                    onClick={() => setSelectedCategory('populares')}
                />
                <CategoryButton
                    label="Mas Utilizados ❤️​"
                    isSelected={selectedCategory === 'masutilizados'}
                    onClick={() => setSelectedCategory('masutilizados')}
                />
                <CategoryButton
                    label="Educativos 🧠​"
                    isSelected={selectedCategory === 'educativos'}
                    onClick={() => setSelectedCategory('educativos')}
                />
            </div>
            <div className="books">
                {books[selectedCategory].map(book => (
                    <BookCard key={book.id} imgSrc={book.imgSrc} title={book.title} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
