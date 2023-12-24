// src/components/ProductsList.js (or any relevant component)

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await axios.get('http://localhost:3001/api/products');

        // Update the state with the fetched products
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Call the function to fetch products when the component mounts
    fetchProducts();
  }, []); // The empty dependency array ensures this effect runs once on mount

  return (
    <div className="products-list">
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
