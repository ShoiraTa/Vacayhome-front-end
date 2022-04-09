import React from 'react';
import { Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../Navbar/SideBar';

function Home({ isLoggedIn }) {
  return (
    <>
      <Container fluid>
        <Row className="homepage-container bg-white">
          <Col md={2} lg={2} className="nav-panel d-flex flex-column justify-content-between bg-light px-0">
            <SideBar isLoggedIn={isLoggedIn} />
          </Col>
          <Col md={10} lg={10} className="content-panel">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
