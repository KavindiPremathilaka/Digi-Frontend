// CategoryItems.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CategoryItems.css";

function CategoryItems({ getCategoryById, addToCart }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = getCategoryById(categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  // Function to get a random subset of items
  const getRandomItems = (items, count) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Get 5 random items or all if there are fewer than 5
  const randomItems = getRandomItems(category.items, 5);

  const handleItemClick = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
    <div className="category-items-container">
      <header className="category-items-header">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </header>
      <div className="items-grid">
        {randomItems.map((item) => (
          <div className="item-card" key={item.id} onClick={() => handleItemClick(item.id)}>
            <img src={item.image} alt={item.name} className="item-image" />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-price">Price: {item.price}</p>
            <p className="item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryItems;
