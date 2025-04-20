// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Shop from "./Shop";
import Categories from "./Categories";
import Customize from "./Customize";
import Contact from "./Contact";
import ItemDetails from "./ItemDetails";
import CategoryItems from "./CategoryItems";
import Cart from "./Cart";
import RegistrationForm from "./RegistrationForm"; // Import RegistrationForm
import CustomizableItems from "./CustomizableItems"; // Import CustomizableItems
import CustomizeDigitalArt from "./CustomizeDigitalArt";
import ForgotPasswordForm from "./ForgotPasswordForm";  // Import ForgotPasswordForm
import "./App.css";

function App() {
  const categories = [
    {
      id: 1,
      name: "Digital Arts",
      image: "/images/digital-art.jpg",
      description: "Explore our unique collection of digital art.",
      items: [
        {
          id: 101,
          name: "Abstract Art",
          price: 3500,
          image: "/images/abstract-art.jpg",
          description: "A beautiful abstract digital art piece.",
        },
        {
          id: 102,
          name: "Modern Art",
          price: 7500,
          image: "/images/modern-art.jpg",
          description: "Contemporary digital art piece.",
        },
      ],
    },
    {
      id: 2,
      name: "Flower Bouquets",
      image: "/images/flower-bouquet.jpg",
      description: "Beautiful flower arrangements for any occasion.",
      items: [
        {
          id: 201,
          name: "Roses Bouquet",
          price: 2500,
          image: "/images/roses-bouquet.jpg",
          description: "A classic bouquet of red roses.",
        },
        {
          id: 202,
          name: "Lilies Bouquet",
          price: 3350,
          image: "/images/lilles-bouquet.jpg",
          description: "Elegant bouquet of white lilies.",
        },
      ],
    },
    {
      id: 3,
      name: "Customized Chocolate Packs",
      image: "/images/chocolate-packs.jpg",
      description: "Create your personalized chocolate gifts.",
      items: [
        {
          id: 301,
          name: "Deluxe Chocolate Pack",
          price: 4500,
          image: "/images/deluxe-chocolate.jpg",
          description: "A luxurious pack of assorted chocolates.",
        },
        {
          id: 302,
          name: "Dark Chocolate Pack",
          price: 3750,
          image: "/images/dark-chocolate.jpg",
          description: "A rich and intense dark chocolate selection.",
        },
      ],
    },
    {
      id: 4,
      name: "Gifts under 5000/=",
      image: "/images/gift-pack.jpg",
      description: "Find great gifts that fit your budget.",
      items: [
        {
          id: 401,
          name: "Small Gift Set",
          price: "3000/=",
          image: "/images/small-giftset.jpg",
          description: "A curated gift set for any occasion.",
        },
        {
          id: 402,
          name: "Budget Bouquet",
          price: "3500/=",
          image: "/images/budget-bouquet.jpg",
          description: "A beautiful bouquet that fits your budget.",
        },
      ],
    },
  ];
  const [cartItems, setCartItems] = useState([]);

  const getItemById = (itemId) => {
    for (const category of categories) {
      const item = category.items.find((item) => item.id === itemId);
      if (item) {
        return item;
      }
    }
    return null;
  };

  const getCategoryById = (categoryId) => {
    return categories.find(category => category.id === parseInt(categoryId));
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} /> {/* Add registration route */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories categories={categories} />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/category/:categoryId"
          element={<CategoryItems getCategoryById={getCategoryById} addToCart={addToCart} />}
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetails getItemById={getItemById} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart} />}
        />
           <Route
              path="/customize/:giftType"
              element={<CustomizableItems />}
          />
           <Route
              path="/customize/digital-art"
              element={<CustomizeDigitalArt />}
           />
           <Route path="/forgot-password" element={<ForgotPasswordForm />} /> {/* Add forgot password route */}
      </Routes>
    </Router>
  );
}

export default App;
