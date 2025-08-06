import React from 'react';

const FeedbackPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
    };
    
    return (
        <div className="form-container">
        <h2>Give Us Your Feedback</h2>
        <p style={{textAlign: 'center', marginBottom: '20px'}}>We value your opinion. Please let us know how we did.</p>
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
            <label htmlFor="feedback">Feedback</label>
            <textarea id="feedback" required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{width: '100%', padding: '15px'}}>Submit Feedback</button>
        </form>
        </div>
    );
};

export default FeedbackPage;