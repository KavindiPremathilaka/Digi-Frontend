import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomizeDigitalArt.css";

function CustomizeDigitalArt({ addToCart }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const itemPrice = 4500;  // Price for the digital art

  const digitalArtOptions = [
    { id: 1, name: "Abstract Art", image: "/images/abstract-art.jpg" },
    { id: 2, name: "Modern Art", image: "/images/modern-art.jpg" },
    { id: 3, name: "Pop Art", image: "/images/pop-art.jpg" },
    { id: 4, name: "Street Art", image: "/images/street-art.jpg" },
    { id: 5, name: "Pixel Art", image: "/images/pixel-art.jpg" },
  ];

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSelectArt = (image) => {
    setSelectedImage(image);
  };

  const handleCreateDigitalArt = () => {
    if (selectedImage) {
      setShowQuantity(true);
    } else {
      alert("Please select or upload an image first.");
    }
  };

  const handleAddToCart = () => {
    // Simulate digital art as a product
    const cartItem = {
      id: Date.now(),  // Unique ID for the cart item
      name: "Custom Digital Art",
      image: selectedImage,  //  image
      price: itemPrice,  // item price
      quantity: quantity,  // quantity
    };
    addToCart(cartItem);
    navigate("/cart");
  };

  return (
    <div className="customize-digital-art-container">
      <h2>Customize Your Digital Art</h2>
      <div className="upload-section">
        <input type="file" id="imageUpload" onChange={handleImageUpload} />
        <label htmlFor="imageUpload" className="upload-button">
          Upload Your Photo
        </label>
      </div>
      {selectedImage && (
        <div className="image-preview">
          <img src={selectedImage} alt="Uploaded Preview" />
        </div>
      )}
      <div className="digital-art-options">
        {digitalArtOptions.map((art) => (
          <div
            key={art.id}
            className="art-option"
            onClick={() => handleSelectArt(art.image)}
          >
            <img src={art.image} alt={art.name} />
            <p>{art.name}</p>
          </div>
        ))}
      </div>
      {!showQuantity ? (
        <button
          className="create-digital-art-button"
          onClick={handleCreateDigitalArt}
          disabled={!selectedImage}
        >
          Create Digital Art
        </button>
      ) : (
        <div className="add-to-cart-section">
          <p>Price: Rs. {itemPrice}</p> {/* Display the price */}
          <label>
            Quantity:
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{ width: "60px" }}
            />
          </label>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomizeDigitalArt;
