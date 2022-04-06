import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Brand from './Brand';
import Hamburger from './Hamburger';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light">
      <Container className="d-flex justify-content-between p-1 pe-2">
        <Brand />
        <Hamburger />
      </Container>
    </Navbar>
  );
}

export default Navigation;
