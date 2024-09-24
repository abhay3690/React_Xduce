// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>${item.price.toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
