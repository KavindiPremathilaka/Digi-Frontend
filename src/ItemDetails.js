// ItemDetails.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemDetails.css";

function ItemDetails({ getItemById, addToCart }) {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const item = getItemById(parseInt(itemId));

   const [quantity, setQuantity] = useState(1);

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleAddToCart = () => {
     const cartItem = {
       ...item,
       quantity: quantity,
     };
    addToCart(cartItem);
    navigate("/cart");
  };

   const handleQuantityChange = (e) => {
     setQuantity(parseInt(e.target.value));
   };

  return (
    <div className="item-details-container">
      <header className="item-details-header">
        <h1>{item.name}</h1>
      </header>
      <div className="item-details-content">
        <img src={item.image} alt={item.name} className="item-image" />
        <div className="item-info">
          <p className="item-price">Price: {item.price}</p>
          <p className="item-description">{item.description}</p>
          <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                defaultValue="1"
                onChange={handleQuantityChange}
              />
            </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
