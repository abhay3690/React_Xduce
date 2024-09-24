// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>My E-Commerce Site</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/checkout">Checkout</Link>
            </nav>
        </header>
    );
};

export default Header;
