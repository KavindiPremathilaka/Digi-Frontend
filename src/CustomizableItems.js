// CustomizableItems.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CustomizableItems.css";

function CustomizableItems() {
  const { giftType } = useParams();
  const navigate = useNavigate();

  const items = {
    "flower-bouquet": [
      { id: 6, name: "Roses", image: "/images/roses-bouquet.jpg", price: 20 },
      { id: 7, name: "Lilies", image: "/images/lilles-bouquet.jpg", price: 25 },
      { id: 8, name: "Tulips", image: "/images/tulips.jpg", price: 30 },
      { id: 9, name: "Sunflowers", image: "/images/sunflower.jpg", price: 35 },
      { id: 10, name: "Orchids", image: "/images/orchid.jpg", price: 40 },
    ],
    "chocolate-pack": [
      { id: 11, name: "Dark Chocolate", image: "/images/dark-choco.jpg", price: 22 },
      { id: 12, name: "Milk Chocolate", image: "/images/milk-choco.jpg", price: 27 },
      { id: 13, name: "White Chocolate", image: "/images/white-choco.jpg", price: 32 },
      { id: 14, name: "Hazelnut Chocolate", image: "/images/Hazelnut-choco.jpg", price: 37 },
      { id: 15, name: "Caramel Chocolate", image: "/images/caramel-choco.jpg", price: 42 },
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
    const cartItem = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: quantity,
    };
    // Store cartItem in local storage
    let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cartItems.push(cartItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
            <button className="shop-now-button" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomizableItems;
