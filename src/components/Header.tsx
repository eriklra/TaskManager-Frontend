



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';

export const Header: React.FC = () => {
    const { isLoggedIn, userEmail, logout } = useAuth();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="logo"> TM | Task Manager </div>
            <button id="navbar-menu-toggle" onClick={toggleMenu}>
                ☰ {/* Icono de menú hamburguesa */}
            </button>
            <nav className={isMenuOpen ? 'open' : ''}>
                <ul>
                    {isLoggedIn ? (
                        <>
                            <li id='navbar-user'>{userEmail}</li>
                            <li><Link to="/tasks">View Tasks</Link></li>
                            <li><button id="navbar-logout" onClick={logout}>Log Out</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};
