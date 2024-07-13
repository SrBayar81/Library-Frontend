import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CatalogPage from './CatalogPage';
import Header from '../components/Header';
import { act } from 'react';

// Test 1: Verificar que se muestra la página de inicio correctamente
test('renders HomePage component', () => {
    act(() => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );
    });

// Test 2: Verificar la funcionalidad de la categoría "Populares"
test('renders populares category when clicked', () => {
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Populares 🔥/i));
    expect(screen.getByText(/Cuento de hadas/i)).toBeInTheDocument();
});

// Test 3: Verificar la funcionalidad de la categoría "Más Utilizados"
test('renders mas utilizados category when clicked', () => {
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Mas Utilizados ❤️/i));
    expect(screen.getByText(/Habitos Atomicos/i)).toBeInTheDocument();
});

// Test 4: Verificar la funcionalidad de la categoría "Educativos"
test('renders educativos category when clicked', () => {
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Educativos 🧠/i));
    expect(screen.getByText(/En la clase si se juega/i)).toBeInTheDocument();
});

// Test 5: Verificar hover en las imágenes de los libros
test('hover effect on book images', () => {
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );

    const bookImage = screen.getByAltText(/Cuento de hadas/i);
    fireEvent.mouseOver(bookImage);
   
    expect(bookImage).toHaveStyle('transform: scale(1.1)');
});

// Test 6: Verificar que al hacer clic en el botón "Catálogo" redirige a la página correspondiente
    test('hover effect on book images', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );

        const bookImage = screen.getByAltText('Book 1'); 
        fireEvent.mouseOver(bookImage);
        expect(bookImage).toHaveStyle('transform: scale(1.1)');
    });

// Test 7: Verificar que al hacer clic en el scroll del usuario en el header funciona
    test('redirects to catalog page when Catalog button is clicked', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText(/Catálogo/i));
        expect(screen.getByText(/Bienvenido al Catálogo/i)).toBeInTheDocument(); 
    });

// Test 8: Verificar que al hacer clic en el logo en el header redirige a la página de inicio
    test('clicking user scroll in header works', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );

        const userScroll = screen.getByText(/Profesora1234/i); 
        fireEvent.click(userScroll);
        
        expect(screen.getByText(/Perfil del Usuario/i)).toBeInTheDocument(); 
    });

// Test 9: Verificar que al hacer clic en el botón de "Log out" en el header cierra la sesión
    test('clicking logo in header redirects to home page', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );

        const logo = screen.getByAltText(/Logo/i); 
        fireEvent.click(logo);
       
        expect(screen.getByText(/Inicio/i)).toBeInTheDocument(); 
    });

// Test 10: Verificar que el contenido del "HomePage" cambia cuando se selecciona una categoría diferente
test('content of HomePage changes when a different category is selected', () => {
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Populares 🔥/i));
    expect(screen.getByText(/Cuento de hadas/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Mas Utilizados ❤️/i));
    expect(screen.getByText(/Habitos Atomicos/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Educativos 🧠/i));
    expect(screen.getByText(/En la clase si se juega/i)).toBeInTheDocument();
});
})