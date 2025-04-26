import React from "react";
import "./CheckoutModal.css";

function CheckoutModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Confirm Order</h2>
        <p>Are you sure you want to place this order?</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-btn">Yes, place order</button>
          <button onClick={onCancel} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;