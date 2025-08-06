import React from 'react';
import EventCard from '../components/EventCard';

// Placeholder data
const allEvents = [
    { id: 1, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=60', title: 'Sunset Beach Wedding', category: 'Weddings', description: 'A beautiful wedding ceremony on the shores of a tropical beach.' },
    { id: 2, image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd51622?auto=format&fit=crop&w=800&q=60', title: 'Annual Corporate Gala', category: 'Corporate', description: 'Celebrating a year of success with our esteemed partners.' },
    { id: 3, image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=60', title: 'Surprise 30th Birthday', category: 'Parties', description: 'A fun-filled surprise party with friends and family.' },
    { id: 4, image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=60', title: 'Vineyard Vows', category: 'Weddings', description: 'An elegant wedding set in a rustic vineyard.' },
    { id: 5, image: 'https://images.unsplash.com/photo-1542626991-a23141142757?auto=format&fit=crop&w=800&q=60', title: 'Product Launch Event', category: 'Corporate', description: 'A high-impact launch event for a new tech product.' },
    { id: 6, image: 'https://images.unsplash.com/photo-1504196643213-7b1517a15429?auto=format&fit=crop&w=800&q=60', title: 'Garden Tea Party', category: 'Parties', description: 'A charming and elegant afternoon tea party.' },
];


const EventsPage = () => {
  return (
  <div className="page-section"> {/* The container class is removed from here */}
    <div className="container">  {/* We add it back inside to manage padding */}
        <h2>Our Events</h2>
        <p>Browse through our portfolio of beautifully executed events. We cater to weddings, corporate functions, and private parties.</p>
        
        <div className="events-grid" style={{marginTop: '40px'}}>
          {allEvents.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
    </div>
  </div>
);
}

export default EventsPage;