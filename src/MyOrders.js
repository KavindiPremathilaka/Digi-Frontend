// MyOrders.js
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/orders/my", {
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to fetch orders:", err));
  }, []);

  const generateReceipt = (order) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Order Receipt", 14, 20);
    doc.setFontSize(12);
    doc.text(`Order ID: ${order._id}`, 14, 30);
    doc.text(`Status: ${order.status}`, 14, 38);
    doc.text(`Date: ${new Date(order.createdAt).toLocaleString()}`, 14, 46);
    doc.text(`Total: Rs. ${order.totalPrice}`, 14, 54);

    const itemRows = order.items.map((item) => [
      item.product?.title || "Deleted Product",
      item.quantity,
      item.product?.price || "-",
      item.product ? item.product.price * item.quantity : "-",
    ]);

    doc.autoTable({
      head: [["Product", "Quantity", "Unit Price", "Subtotal"]],
      body: itemRows,
      startY: 60
    });

    doc.save(`Order_${order._id}.pdf`);
  };

  return (
    <div className="my-orders-container">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order._id}>
            <h2>Order ID: {order._id}</h2>
            <p>Status: <strong>{order.status}</strong></p>
            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
            <p>Total: Rs. {order.totalPrice}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.product?.title || "Product deleted"} - Qty: {item.quantity}
                  {item.referenceImage && (
                    <div>
                      <small>Reference Image:</small>
                      <img
                        src={`http://localhost:5000/${item.referenceImage.replace(/\\/g, '/')}`}
                        alt="Digital Art Reference"
                        style={{ width: "80px", display: "block", marginTop: "5px" }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button
              className="download-receipt-btn"
              onClick={() => generateReceipt(order)}
            >
              Download Receipt (PDF)
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;