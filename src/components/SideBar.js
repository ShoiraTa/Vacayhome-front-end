import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function SideBar() {
  return (
    <ListGroup defaultActiveKey="/">
      <ListGroup.Item action href="/" variant="success">
        ALL
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" variant="success">
        PLACES
      </ListGroup.Item>
      <ListGroup.Item action href="#link3" variant="success">
        BOOKINGS
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SideBar;
