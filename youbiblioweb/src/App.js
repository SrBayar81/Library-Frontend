import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UsuariosPage from './pages/UsuariosPage';
import ProtectedRoute from './components/ProtectedRoute';
import ReservasPage from './pages/ReservasPage';
import PrestamosPage from './pages/PrestamosPage';
import './assets/styles/index.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setUserEmail={setUserEmail} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/usuarios" element={<UsuariosPage />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout userEmail={userEmail}>
                                <HomePage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/catalog"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout userEmail={userEmail}>
                                <CatalogPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/reservas"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout userEmail={userEmail}>
                                <ReservasPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/prestamos"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout userEmail={userEmail}>
                                <PrestamosPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

const Layout = ({ children, userEmail }) => {
    return (
        <>
            <Header userEmail={userEmail} />
            {children}
        </>
    );
};

export default App;

