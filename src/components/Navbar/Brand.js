import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/VacayHomeLeaf.png';

function Brand() {
  return (
    <Navbar.Brand href="/" className="d-flex w-100 mt-3 p-1">
      <img
        alt="Logo"
        src={Logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />
      {' '}
      <span className="logo-text d-flex align-items-center text-dark">VacayHome</span>
    </Navbar.Brand>
  );
}

export default Brand;
