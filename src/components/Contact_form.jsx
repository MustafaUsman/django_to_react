import { useState } from "react";

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
    <div
      style={{
        width: "500px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Contact Us</h2>
      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {errors.map((error, index) => (
              <li key={index} style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ width: "100%", marginTop: "1rem" }}>
        <label style={{ display: "block", fontSize: "1.2rem", marginTop: "1rem" }}>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              marginTop: "0.5rem",
            }}
          />
        </label>
      </div>

      <div style={{ width: "100%", marginTop: "1rem" }}>
        <label style={{ display: "block", fontSize: "1.2rem", marginTop: "1rem" }}>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              marginTop: "0.5rem",
            }}
          />
        </label>
      </div>

      <div style={{ width: "100%", marginTop: "1rem" }}>
        <label style={{ display: "block", fontSize: "1.2rem", marginTop: "1rem" }}>
          Message:{" "}
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            style={{
              width: "100%",
              padding:"0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              marginTop: "0.5rem",
              height: "150px",
            }}
          />
        </label>
      </div>
    
      <div style={{ width: "100%", marginTop: "1rem" }}>
        <button
          type="submit"
          style={{
            backgroundColor: "#4caf50",
            border: "none",
            color: "white",
            padding: "0.75rem 1rem",
            fontSize: "1.2rem",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "1rem",
            transition: "background-color 0.2s ease",
          }}
        >
          Submit
        </button>
      </div>
    </div>
    );
}