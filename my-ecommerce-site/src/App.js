// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
