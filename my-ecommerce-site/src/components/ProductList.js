// src/components/ProductList.js
import React, { useContext } from 'react';
import products from '../data';
import { CartContext } from '../CartContext';
import Product from './Product';
import './ProductList.css';

const ProductList = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
