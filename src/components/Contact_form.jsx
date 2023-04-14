import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = [];
  
    // Validate name
    if (!name) {
      errors.push("Name is required.");
    }
  
    // Validate email
    if (!email) {
      errors.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.push("Email is invalid.");
    }
  
    // Validate message
    if (!message) {
      errors.push("Message is required.");
    }
  
    // If there are errors, display them and prevent form submission
    if (errors.length > 0) {
      setErrors(errors);
    } else {
      // If no errors, submit form
      const formData = { name, email, message };
      console.log(formData);
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Us</h2>
      {errors.length > 0 && (
        <div className="error-messages">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="form-input">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      <div className="form-input">
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>

      <div className="form-input">
        <label>
          Message
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
      </div>

      <div className="form-submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
