import React from 'react';

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly!');
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <p style={{textAlign: 'center', marginBottom: '20px'}}>Have a question or want to book an event? Fill out the form below.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" required></textarea>
        </div>
        <button type="submit" className="btn-primary" style={{width: '100%', padding: '15px'}}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactUsPage;