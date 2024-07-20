
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import LoginPage from './pages/LoginPage';
import PrestamosPage from './pages/PrestamosPage';
import CreateUserPage from './pages/CreateUserPage'; // Importar la nueva página
import ProtectedRoute from './components/ProtectedRoute';
import './assets/styles/index.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout>
                                <HomePage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/catalog"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout>
                                <CatalogPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/loans"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout>
                                <PrestamosPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout>
                                <CreateUserPage /> {/* Ruta para la creación de usuarios */}
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default App;







