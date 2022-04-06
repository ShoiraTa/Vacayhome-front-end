import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SliderHomepage from './SliderHomepage';
import Brand from './Brand';
import SideBar from './SideBar';

function Home() {
  return (
    <>
      <div className="bg-white homepage-container">
        <Brand />
        <div className="homepage-header-container">
          <h1>Top-rated vacation rentals</h1>
          <p>Find and book unique accommodations</p>
        </div>
        <Container fluid>
          <Row>
            <Col xs={2} md={2} lg={2}>
              <SideBar />
            </Col>
            <Col xs={10} md={10} lg={10}>
              <div>
                <SliderHomepage />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
