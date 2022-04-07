import React from 'react';
import SliderHomepage from './SliderHomepage';

function Homepage() {
  return (
    <div>
      <div className="homepage-header-container">
        <h1>Top-rated vacation rentals</h1>
        <p>Find and book unique accommodations</p>
      </div>
      <SliderHomepage />
    </div>
  );
}

export default Homepage;
