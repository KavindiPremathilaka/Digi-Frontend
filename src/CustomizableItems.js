import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CustomizableItems.css";

function CustomizableItems({ addToCart }) {
  const { giftType } = useParams();
  const navigate = useNavigate();

  const items = {
    "flower-bouquet": [
      { id: 6, name: "Roses", image: "/images/roses-bouquet.jpg", price: 2500 },
      { id: 7, name: "Lilies", image: "/images/lilles-bouquet.jpg", price: 3350 },
      { id: 8, name: "Tulips", image: "/images/tulips.jpg", price: 3000 },
      { id: 9, name: "Sunflowers", image: "/images/sunflower.jpg", price: 6500 },
      { id: 10, name: "Orchids", image: "/images/orchid.jpg", price: 5200 },
    ],
    "chocolate-pack": [
      { id: 11, name: "Dark Chocolate", image: "/images/dark-choco.jpg", price: 2200 },
      { id: 12, name: "Milk Chocolate", image: "/images/milk-choco.jpg", price: 2700 },
      { id: 13, name: "White Chocolate", image: "/images/white-choco.jpg", price: 3200 },
      { id: 14, name: "Hazelnut Chocolate", image: "/images/Hazelnut-choco.jpg", price: 3700 },
      { id: 15, name: "Caramel Chocolate", image: "/images/caramel-choco.jpg", price: 4200 },
    ],
  };

  const itemList = items[giftType] || [];
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, event) => {
    setQuantities({
      ...quantities,
      [itemId]: parseInt(event.target.value),
    });
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    addToCart({ ...item, quantity });
    navigate("/cart");
  };

  return (
    <div className="customizable-items-container">
      <h2>Customize {giftType}</h2>
      <div className="items-grid">
        {itemList.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <div className="quantity-selector">
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${item.id}`}
                min="1"
                defaultValue="1"
                onChange={(event) => handleQuantityChange(item.id, event)}
              />
            </div>
            <button
              className="shop-now-button"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomizableItems;
