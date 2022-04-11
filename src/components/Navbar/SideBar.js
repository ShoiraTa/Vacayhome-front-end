import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Brand from './Brand';
import Hamburger from './Hamburger';
import MenuList from './MenuList';
import Social from './Social';

function SideBar({ isLoggedIn }) {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="light">
        <Container className="d-flex justify-content-between p-1 pe-2">
          <Brand />
          <Hamburger isLoggedIn={isLoggedIn} />
        </Container>
      </Navbar>
      <MenuList isLoggedIn={isLoggedIn} />
      <Social />
    </>
  );
}

export default SideBar;
