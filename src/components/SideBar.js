import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function SideBar() {
  return (
    <ListGroup defaultActiveKey="/">
      <ListGroup.Item action href="/" variant="warning">
        LISTINGS
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" variant="warning">
        PLACES
      </ListGroup.Item>
      <ListGroup.Item action href="#link3" variant="warning">
        BOOKINGS
      </ListGroup.Item>
      <ListGroup.Item action href="#link4" variant="warning">
        ADD LISTING
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SideBar;
