import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="page-section alt-bg"> {/* Outer section with white background */}
      <div className="container">          {/* Inner container for layout */}
        <h2>About Glam Planner</h2>

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8', fontSize: '1.1em' }}>
          <p>
            <strong>BAJS Planner</strong> is a premier event management company founded in 2025 with a vision to turn
            ordinary moments into extraordinary memories. Based in India, we have successfully orchestrated hundreds of
            events ranging from elegant weddings to high-energy corporate functions, vibrant birthday parties,
            and grand cultural festivals.
          </p>

          <p>
            Our team is a dynamic mix of passionate planners, innovative designers, and experienced coordinators who
            believe that every event should be a reflection of your personality, style, and story. Whether you're
            dreaming of a beachside wedding, a high-profile product launch, or an intimate birthday celebration — we bring
            creativity, precision, and glamour to every detail.
          </p>

          <p>
            We specialize in <strong>weddings, corporate events, private parties, cultural celebrations</strong>, and
            <strong>theme-based events</strong>. From conceptualization and venue selection to décor, entertainment, and
            on-site execution, we handle everything so you can focus on enjoying the moment.
          </p>

          <p>
            At Glam Planner, we don’t just plan events — we craft experiences that leave lasting impressions.
            Let us bring your vision to life with elegance, efficiency, and a touch of glam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
