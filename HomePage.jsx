import React from 'react';
import EventCard from '../components/EventCard';
import corporateEventImg from '../assets/corporatevent.jpg'
import weddingImg from '../assets/wedding.jpg'
import birthdaysImg from '../assets/birthdays.jpg'

//  //Placeholder data - replace with API calls
// const featuredEvents = [
//   { id: 1, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=60', title: 'Wedding', category: 'Wedding', description: 'A beautiful wedding ceremony on the shores of a tropical beach.' },
//   { id: 2, image: 'E:\CDAC_Project\EventManagementSystem\Eventapp\src\assets\corporatevent.jpg', title: 'Annual Corporate Gala', category: 'Corporate', description: 'Celebrating a year of success with our esteemed partners and employees.' },
//   { id: 3, image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=60', title: 'Surprises Birthday', category: 'Party', description: 'A fun-filled surprise party with friends and family.' },
// ];

const featuredEvents = [
  {
    id: 1,
    image: weddingImg,
    title: 'Wedding',
    category: 'Wedding',
    description: 'A beautiful wedding ceremony on the shores of a tropical beach.',
  },
  {
    id: 2,
    image: corporateEventImg, 
    title: 'Annual Corporate Gala',
    category: 'Corporate',
    description: 'Celebrating a year of success with our esteemed partners and employees.',
  },
  {
    id: 3,
    image: birthdaysImg,
    title: 'Surprise Birthday',
    category: 'Party',
    description: 'A fun-filled surprise party with friends and family.',
  },
];


const testimonials = [
    { id: 1, quote: "Glam Planner made our wedding day absolutely perfect. Every detail was handled with care and precision.", author: "Jessica & Tom" },
    { id: 2, quote: "The best corporate event our company has ever had. Professional, creative, and seamless execution.", author: "CEO, Tech Solutions Inc." },
];


const HomePage = () => {
  return (
    <div>
      <section className="hero-section">
        <h1>Turning Moments Into Memories</h1>
        <p>From intimate gatherings to grand celebrations, we craft unforgettable experiences tailored to your vision. Let us handle the details, so you can enjoy the moment.</p>
       
      </section>

      <section className="page-section">
        <h2>Our Featured Events</h2>
        <div className="container">
            <div className="events-grid">
            {featuredEvents.map(event => (
                <EventCard key={event.id} {...event} />
            ))}
            </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <h2>What Our Clients Say</h2>
        <div className="container">
            <div className="testimonials-grid">
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="testimonial-card">
                        <p className="quote">"{testimonial.quote}"</p>
                        <p className="author">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;