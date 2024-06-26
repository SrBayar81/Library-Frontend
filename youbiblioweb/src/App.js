import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProfilePage from './pages/ProfilePage';
import FavoritesPage from './pages/FavoritesPage';
import ReservationsPage from './pages/ReservationsPage';
import LoansPage from './pages/LoansPage';
import LoginPage from './pages/LoginPage';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            {isAuthenticated ? <Header /> : null}
            <Routes>
                <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
                <Route path="/catalog" element={isAuthenticated ? <CatalogPage /> : <Navigate to="/login" />} />
                <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
                <Route path="/favorites" element={isAuthenticated ? <FavoritesPage /> : <Navigate to="/login" />} />
                <Route path="/reservations" element={isAuthenticated ? <ReservationsPage /> : <Navigate to="/login" />} />
                <Route path="/loans" element={isAuthenticated ? <LoansPage /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                {/* Otras rutas aquí */}
            </Routes>
            {isAuthenticated ? <Footer /> : null}
        </Router>
    );
}

export default App;



