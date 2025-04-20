import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

function Shop() {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Digital Art - Abstract",
            price: 4750,
            image: "/images/abstract-art.jpg",
            description: "A beautiful abstract digital art piece.",
        },
        {
            id: 2,
            name: "Flower Bouquet - Roses",
            price: 2500,
            image: "/images/roses-bouquet.jpg",
            description: "A stunning bouquet of fresh roses.",
        },
    ];

    const handleAddToCart = () => {
        // Navigate to the categories page
        navigate("/categories");
    };

    const shopDetails = {
        name: "DigiGiftz Store",
        address: "123 Main Street, Colombo",
        phone: "+94 11 123 4567",
        email: "info@digigiftz.com",
    };

    return (
        <div className="shop-container">
            <header className="shop-header">
                <h1>Welcome to Our Shop</h1>
                <p>Discover unique gifts for every occasion.</p>
            </header>

            <div className="shop-details">
                <h2>{shopDetails.name}</h2>
                <p>Address: {shopDetails.address}</p>
                <p>Phone: {shopDetails.phone}</p>
                <p>Email: {shopDetails.email}</p>
            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                        />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">{product.price}</p>
                        <p className="product-description">{product.description}</p>
                        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;
