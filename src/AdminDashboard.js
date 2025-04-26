// AdminDashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: null
  });

  const fetchOrders = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/orders/all", {
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to fetch all orders:", err));
  };

  const fetchFeedbacks = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/feedback", {
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error("Failed to fetch feedbacks:", err));
  };

  useEffect(() => {
    fetchOrders();
    fetchFeedbacks();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": token,
        },
      });

      if (res.ok) {
        alert("Order deleted successfully");
        fetchOrders();
      } else {
        const data = await res.json();
        alert(data.msg || "Failed to delete order");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Server error while deleting order");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleProductUpload = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('category', formData.category);
    form.append('price', formData.price);
    form.append('image', formData.image);

    try {
      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'x-auth-token': token
        },
        body: form
      });
      const data = await res.json();
      if (res.ok) {
        alert("Product uploaded successfully");
        setFormData({ title: '', description: '', category: '', price: '', image: null });
      } else {
        alert(data.msg || "Failed to upload product");
      }
    } catch (err) {
      console.error("Product upload error:", err);
      alert("Server error while uploading product");
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <button
        onClick={handleLogout}
        style={{ marginBottom: '20px', color: 'white', backgroundColor: 'red', borderRadius: '5px', padding: '10px 20px' }}>
        Logout
      </button>

      <section className="dashboard-section">
        <h2>Orders Overview</h2>
        {orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          orders.map((order) => (
            <div className="order-card" key={order._id}>
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>User:</strong> {order.user?.email || 'Unknown'}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total:</strong> Rs. {order.totalPrice}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.product?.title || 'Deleted product'} - Qty: {item.quantity}
                  </li>
                ))}
              </ul>
              <button className="delete-order-btn" onClick={() => handleDeleteOrder(order._id)}>
                Delete Order
              </button>
            </div>
          ))
        )}
      </section>

      <section className="dashboard-section">
        <h2>Feedback</h2>
        {feedbacks.length === 0 ? (
          <p>No feedback submitted yet.</p>
        ) : (
          <div>
            {feedbacks.map((fb) => (
              <div className="feedback-card" key={fb._id}>
                <p><strong>User:</strong> {fb.user?.email || 'Unknown'}</p>
                <p><strong>Message:</strong> {fb.message}</p>
                <p><em>{new Date(fb.createdAt).toLocaleString()}</em></p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="dashboard-section">
        <h2>Add New Product</h2>
        <form className="product-form" onSubmit={handleProductUpload}>
          <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
          <input type="text" placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
          <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required>
            <option value="">Select Category</option>
            <option value="DIGITAL ARTS">Digital Arts</option>
            <option value="FLOWER BOUQUETS">Flower Bouquets</option>
            <option value="CUSTOMIZED CHOCOLATE PACKED">Customized Chocolate Packed</option>
            <option value="GIFTS UNDER 5000/=">Gifts under 5000/=</option>
          </select>
          <input type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
          <input type="file" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} required />
          <button type="submit">Upload Product</button>
        </form>
      </section>

    </div>
  );
}

export default AdminDashboard;