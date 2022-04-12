import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';
import Slider from './SliderHomepage';

function Homepage({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const keys = ['isLoggedIn', 'userId'];

    keys.forEach((key) => {
      localStorage.removeItem(key);
    });

    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <div className="homepage-header-container">
        <h1 id="h1">Top-rated vacation rentals</h1>
        <p>Find and book unique accommodations</p>
      </div>
      <Slider />
      {
        isLoggedIn
        && (
        <Button
          variant="secondary"
          className="logout-btn"
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
        )
      }
    </div>
  );
}

export default Homepage;
