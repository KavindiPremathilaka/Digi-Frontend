// Contact.js
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Please fill out the form below, or reach us using the information provided.
        </p>
      </div>

      <div className="contact-content">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@email.com" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Type your message..."></textarea>

          <button type="submit" className="contact-submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Contact Details</h2>
          <p><b>Email:</b> info@digigiftz.com</p>
          <p><b>Phone:</b> +94 11 123 4567</p>
          <p><b>Address:</b> 123 Main Street, Colombo</p>
          <div className="contact-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{" "}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
