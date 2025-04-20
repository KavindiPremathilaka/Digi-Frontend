import React from "react";
import { useNavigate } from "react-router-dom";
import "./Customize.css";

function Customize() {
  const navigate = useNavigate();

  const handleCustomizeClick = (giftType) => {
    navigate(`/customize/${giftType}`);
  };

  return (
    <div className="customize-container">
      <header className="customize-header">
        <h1>Customize Your Gift</h1>
        <p>Create a unique and personalized gift for your loved ones.</p>
      </header>

      <div className="customize-options">
        <div className="option-card">
          <h2>Digital Art</h2>
          <p>Upload your own image or choose from our gallery.</p>
          <button
            className="customize-button"
            onClick={() => handleCustomizeClick("digital-art")}
          >
            Customize Art
          </button>
        </div>

        <div className="option-card">
          <h2>Flower Bouquet</h2>
          <p>Select your favorite flowers and create a beautiful bouquet.</p>
          <button
            className="customize-button"
            onClick={() => handleCustomizeClick("flower-bouquet")}
          >
            Customize Bouquet
          </button>
        </div>

        <div className="option-card">
          <h2>Chocolate Pack</h2>
          <p>Choose your favorite chocolates and add a personal message.</p>
          <button
            className="customize-button"
            onClick={() => handleCustomizeClick("chocolate-pack")}
          >
            Customize Chocolate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customize;
