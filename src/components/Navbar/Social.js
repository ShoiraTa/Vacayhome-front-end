import React from 'react';
import {
  FaTwitter, FaFacebook, FaVimeo, FaInstagram, FaPinterest,
} from 'react-icons/fa';

function Social() {
  return (
    <section className="p-1 d-none d-md-block">
      <div className="d-flex">
        <FaTwitter style={{ color: '#484848', fontSize: '1rem', margin: '5px' }} />
        <FaFacebook style={{ color: '#484848', fontSize: '1rem', margin: '5px' }} />
        <FaVimeo style={{ color: '#484848', fontSize: '1rem', margin: '5px' }} />
        <FaInstagram style={{ color: '#484848', fontSize: '1rem', margin: '5px' }} />
        <FaPinterest style={{ color: '#484848', fontSize: '1rem', margin: '5px' }} />
      </div>
      <div className="text-secondary">
        <p className="bottom-text py-1">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          VacayHome Inc.
        </p>
      </div>
    </section>
  );
}

export default Social;
