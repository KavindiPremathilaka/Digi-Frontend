// FeedbackForm.js
import React, { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return setStatus("You must be logged in to submit feedback.");

    try {
      const res = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Feedback submitted successfully!");
        setMessage("");
      } else {
        setStatus(data.msg || "Submission failed");
      }
    } catch (err) {
      console.error("Feedback error:", err);
      setStatus("Server error. Please try again later.");
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Send Us Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your feedback here..."
          rows="5"
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
      {status && <p className="feedback-status">{status}</p>}
    </div>
  );
}

export default FeedbackForm;