import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../../assets/images/VacayHomeLeaf.png';

function Brand() {
  return (
    <Navbar.Brand
      href="/"
      className="d-flex flex-md-column flex-lg-row align-items-md-center align-items-lg-end"
    >
      <img
        alt="Logo"
        src={Logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />
      {' '}
      <span className="logo-text d-flex align-items-end text-dark pe-2">VacayHome</span>
    </Navbar.Brand>
  );
}

export default Brand;
