import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Hamburger() {
  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-md-none px-2">
          <Nav.Link href="/">LISTINGS</Nav.Link>
          <Nav.Link href="/1/0/reservation">ADD RESERVATION</Nav.Link>
          <Nav.Link href="/1/reservations">MY RESERVATIONS</Nav.Link>
          <Nav.Link href="/new_listing">ADD LISTING</Nav.Link>
          <Nav.Link href="/delete_house">DELETE LISTING</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

export default Hamburger;
