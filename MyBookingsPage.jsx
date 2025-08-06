import React from 'react';

const MyBookingsPage = () => {
  // In a real app, you would fetch user's bookings here.
  const bookings = [
    { id: 1, eventName: 'Sunset Beach Wedding', date: '2025-10-15', status: 'Confirmed' },
    { id: 2, eventName: 'Annual Corporate Gala', date: '2025-11-20', status: 'Pending Details' },
  ];
  const isLoggedIn = true; // Placeholder

  return (
    <div className="container page-section">
      <h2>My Bookings</h2>
      {isLoggedIn ? (
        <div className="form-container">
          {bookings.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {bookings.map(booking => (
                <li key={booking.id} style={{ background: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '10px' }}>
                  <strong>{booking.eventName}</strong>
                  <p>Date: {booking.date}</p>
                  <p>Status: <span style={{ color: booking.status === 'Confirmed' ? 'green' : 'orange' }}>{booking.status}</span></p>
                </li>
              ))}
            </ul>
          ) : (
            <p>You have no upcoming bookings.</p>
          )}
        </div>
      ) : (
        <p>Please log in to see your bookings.</p>
      )}
    </div>
  );
};

export default MyBookingsPage;