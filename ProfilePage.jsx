import React from 'react';

const ProfilePage = () => {
  return (
    <div className="form-container">
      <h2>My Profile</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" defaultValue="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" defaultValue="john.doe@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" defaultValue="+1234567890" />
        </div>
        <button type="submit" className="btn-primary" style={{width: '100%', padding: '15px'}}>Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;