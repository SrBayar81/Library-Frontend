import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import './assets/styles/index.css';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';

// Componente Layout
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

// Componente App
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
                    path="/favorites"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout>
                                <FavoritesPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Layout>
                                <ProfilePage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;