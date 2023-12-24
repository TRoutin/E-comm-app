// src/components/Homepage.js

import React, { useState, useEffect } from 'react';
import ProductList from './ProductList.js';
import Filter from './Filter.js';

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [selectedCategory]); // Refetch products when the category changes

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/products?category=${selectedCategory}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/cart');
      const data = await response.json();
      setCartItems(data.cartItems);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      const response = await fetch('http://localhost:3001/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });
      const data = await response.json();
      setCartItems([...cartItems, data.cartItem]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="homepage">
      <Filter onSelectCategory={setSelectedCategory} />
      <ProductList products={products} addToCart={addToCart} />
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.product.name} - Quantity: {cartItem.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Homepage;
