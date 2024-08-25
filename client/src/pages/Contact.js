import React, { useState } from "react";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/contact", formData);
      console.log("Message submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting message:", error);
      console.log("Failed to submit message. Please try again later.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" id="contact-form" onSubmit={handleSubmit}>
          <div style={{ fontSize: "35px", fontWeight: "bold" }}>Contact Us</div>
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="textarea"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
