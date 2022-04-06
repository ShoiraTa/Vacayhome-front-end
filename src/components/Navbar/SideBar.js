import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function SideBar() {
  return (
    <ListGroup defaultActiveKey="/" variant="flush" className="d-none d-md-block">
      <ListGroup.Item action href="/" variant="success">
        LISTINGS
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" variant="success">
        PLACES
      </ListGroup.Item>
      <ListGroup.Item action href="#link3" variant="success">
        BOOKINGS
      </ListGroup.Item>
      <ListGroup.Item action href="#link4" variant="success">
        ADD LISTING
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SideBar;
