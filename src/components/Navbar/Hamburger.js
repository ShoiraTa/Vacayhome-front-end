import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Hamburger() {
  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-md-none">
          <Nav.Link href="/">LISTINGS</Nav.Link>
          <Nav.Link href="/">PLACES</Nav.Link>
          <Nav.Link href="/">BOOKINGS</Nav.Link>
          <Nav.Link href="/">ADD LISTING</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

export default Hamburger;
