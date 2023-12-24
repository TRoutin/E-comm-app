// src/components/Filter.js

import React, { useState, useEffect } from 'react';

const Filter = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from backend API
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories'); // Replace with your actual API endpoint
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="filter">
      <label>Filter by Category:</label>
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
