import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name === '' || email === '' || message === '') {
      setFormError('Please fill out all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
        } else {
          setFormError('An error occurred. Please try again later.');
        }
      })
      .catch(() => {
        setFormError('An error occurred. Please try again later.');
      });
  };

  return (
    <div>
      {formSubmitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          {formError && <p>{formError}</p>}
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;