// Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-logo" onClick={() => navigate("/")}>🎁 DigiGifts</h2>
      </div>
      <div className="navbar-right">
        <button onClick={() => navigate("/cart")} className="navbar-button">
          🛒 Cart
        </button>
        <button onClick={() => navigate("/myorders")} className="navbar-button">
          📦 My Orders
        </button>
        <button onClick={() => navigate("/feedback")} className="navbar-button">
          💬 Feedback
        </button>
        <button onClick={() => navigate("/profile")} className="navbar-button">
          👤 Profile
        </button>
      </div>
    </nav>
  );
}

export default Navbar;