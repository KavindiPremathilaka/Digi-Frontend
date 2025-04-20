// Categories.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Categories({ categories }) {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="categories-container">
      <header className="categories-header">
        <h1>Shop by Category</h1>
        <p>Find the perfect gift from our curated categories.</p>
      </header>
      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <h2 className="category-name">{category.name}</h2>
            <p className="category-description">{category.description}</p>
            <button
              className="shop-now-button"
              onClick={() => handleCategoryClick(category.id)}
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
