import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import { act } from 'react';

//Test 1
test('renders LoginPage component', () => {
    act(() => {
        render(
            <MemoryRouter>
                <LoginPage setIsAuthenticated={jest.fn()} />
            </MemoryRouter>
        );
    });

//Test 2
test('redirects to home page on successful login', () => {
    const setIsAuthenticated = jest.fn();

    render(
        <MemoryRouter initialEntries={['/login']}>
            <Routes>
                <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByText(/log in/i));

    expect(setIsAuthenticated).toHaveBeenCalledWith(true);
    // Verificar el contenido correcto en HomePage
    expect(screen.getByText(/Populares 🔥/i)).toBeInTheDocument();
});

//Test 3
test('shows password when eye icon is clicked', () => {
    render(
        <MemoryRouter>
            <LoginPage setIsAuthenticated={jest.fn()} />
        </MemoryRouter>
    );

    const passwordInput = screen.getByPlaceholderText(/password/i);
    const toggleButton = screen.getByText(/👁️/i);

    // Password should initially be hidden
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Click eye icon to show password
    fireEvent.click(toggleButton);

    // Password should be visible
    expect(passwordInput).toHaveAttribute('type', 'text');
});

//Test 4
test('can type in username and password fields', () => {
    render(
        <MemoryRouter>
            <LoginPage setIsAuthenticated={jest.fn()} />
        </MemoryRouter>
    );

    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpassword');
});

})
