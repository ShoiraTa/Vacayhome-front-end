import React from 'react';
import SliderHomepage from './SliderHomepage';

function Home() {
  return (
    <>
      <div className="bg-white homepage-container">
        <div className="homepage-header-container">

          <h1>Top-rated vacation rentals</h1>
          <p>Find and book unique accommodations</p>
        </div>
        <div>

          <SliderHomepage />
        </div>

      </div>

    </>
  );
}

export default Home;
