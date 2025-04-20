// Welcome.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-hero">
      <nav className="welcome-navbar">
        <div className="welcome-logo">
          <span role="img" aria-label="gift">🎁</span> DigiGiftz
        </div>
        <div className="welcome-navlinks">
          <button onClick={() => navigate("/shop")}>Shop</button>
          <button onClick={() => navigate("/categories")}>Categories</button>
          <button onClick={() => navigate("/customize")}>Customize</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
          <button className="nav-login" onClick={() => navigate("/login")}>Login</button>
        </div>
      </nav>

      <section className="welcome-main">
        <div className="welcome-textblock">
          <h1>
            <span className="gradient-text">Make Every Gift Special</span>
          </h1>
          <p>
            Discover unique digital art, beautiful flower bouquets, and custom chocolate packs. 
            Surprise your loved ones with gifts as unique as they are!
          </p>
          <div className="welcome-cta">
            <button className="cta-main" onClick={() => navigate("/shop")}>
              Start Shopping
            </button>
            <button className="cta-secondary" onClick={() => navigate("/customize")}>
              Customize a Gift
            </button>
          </div>
        </div>
        <div className="welcome-illustration">
          {/* You can replace this SVG with any illustration you like */}
          <img
            src="/images/digigiftz-logo.png"
            alt="Gift Illustration"
          />
        </div>
      </section>

      <section className="welcome-features">
        <div className="feature-card">
          <span role="img" aria-label="unique">🌟</span>
          <h3>Unique Gifts</h3>
          <p>Curated digital art and creative presents you won’t find anywhere else.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="delivery">🚚</span>
          <h3>Fast Delivery</h3>
          <p>Get your gifts delivered quickly and safely across Colombo.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="custom">🎨</span>
          <h3>Personalized Touch</h3>
          <p>Add names, messages, or photos for a truly personal surprise.</p>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
