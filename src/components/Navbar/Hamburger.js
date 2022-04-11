import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { MenuAuth } from '../LoginRegister/Auth';

function Hamburger({ isLoggedIn }) {
  const userId = localStorage.getItem('userId');
  const paths = MenuAuth(isLoggedIn, userId);

  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-md-none px-2">
          <Nav.Link href={paths.home}>LISTINGS</Nav.Link>
          <Nav.Link href={paths.reservation}>ADD RESERVATION</Nav.Link>
          <Nav.Link href={paths.userReservations}>MY RESERVATIONS</Nav.Link>
          <Nav.Link href={paths.addHouse}>ADD LISTING</Nav.Link>
          <Nav.Link href={paths.deleteHouse}>DELETE LISTING</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

export default Hamburger;
