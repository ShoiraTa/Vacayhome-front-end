import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function SideBar() {
  return (
    <ListGroup defaultActiveKey="/" variant="flush" className="d-none d-md-block">
      <ListGroup.Item action href="/" variant="success">
        LISTINGS
      </ListGroup.Item>
      <ListGroup.Item action href="/1/0/reservation" variant="success">
        ADD RESERVATION
      </ListGroup.Item>
      <ListGroup.Item action href="/1/reservations" variant="success">
        MY RESERVATIONS
      </ListGroup.Item>
      <ListGroup.Item action href="#link4" variant="success">
        ADD LISTING
      </ListGroup.Item>
      <ListGroup.Item action href="#link4" variant="success">
        DELETE LISTING
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SideBar;
