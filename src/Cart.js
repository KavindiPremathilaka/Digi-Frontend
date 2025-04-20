import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckoutClick = () => {
    navigate("/login");
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h1>Shopping Cart</h1>
      </header>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-info">
                  <h2 className="item-name">{item.name}</h2>
                  <p className="item-price">
                    {item.price} x {item.quantity} =
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: {calculateTotal()}</p>
            <button className="checkout-button" onClick={handleCheckoutClick}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
