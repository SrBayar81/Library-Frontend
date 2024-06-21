import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
            <Switch>
                <Route path="/" exact>
                    {isAuthenticated ? <HomePage /> : <Redirect to="/login" />}
                </Route>
                <Route path="/catalog">
                    {isAuthenticated ? <CatalogPage /> : <Redirect to="/login" />}
                </Route>
                <Route path="/profile">
                    {isAuthenticated ? <ProfilePage /> : <Redirect to="/login" />}
                </Route>
                <Route path="/favorites">
                    {isAuthenticated ? <FavoritesPage /> : <Redirect to="/login" />}
                </Route>
                <Route path="/reservations">
                    {isAuthenticated ? <ReservationsPage /> : <Redirect to="/login" />}
                </Route>
                <Route path="/loans">
                    {isAuthenticated ? <LoansPage /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                {/* Otras rutas aquí */}
            </Switch>
            {isAuthenticated ? <Footer /> : null}
        </Router>
    );
}

export default App;


