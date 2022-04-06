import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/VacayHomeLeaf.png';

function Brand() {
  return (
    <Navbar bg="dark" variant="dark" className="py-0">
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
            alt="Logo"
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          {' '}
          <span className="d-flex align-items-center">VacayHome</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Brand;
