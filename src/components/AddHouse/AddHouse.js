import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../Navbar/SideBar';
import AddHouseForm from './AddHouseForm';
import Response from './Response';

function AddHouse() {
  const houses = useSelector((state) => state.roomsReducer);
  const [show, setShow] = useState(true);

  return (
    <>
      <Container fluid>
        <Row className="homepage-container bg-white">
          <Col md={2} lg={2} className="nav-panel d-flex flex-column justify-content-between bg-light px-0">
            <SideBar />
          </Col>
          <Col md={10} lg={10} className="content-panel">
            <h1 className="text-center m-4">Create Listing</h1>
            <Container>
              {
              houses.status === 201 ? (
                <Response show={show} setShow={setShow} />
              ) : (
                <AddHouseForm />
              )
            }
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddHouse;
