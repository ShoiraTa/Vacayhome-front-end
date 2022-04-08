import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router';

function MenuList() {
  const { userid } = useParams();
  return (
    <ListGroup defaultActiveKey="/" variant="flush" className="d-none d-md-block">
      <ListGroup.Item action href={`/${userid}`} variant="success">
        LISTINGS
      </ListGroup.Item>
      <ListGroup.Item action href={`/${userid}/0/reservation`} variant="success">
        ADD RESERVATION
      </ListGroup.Item>
      <ListGroup.Item action href={`/${userid}/reservations`} variant="success">
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

export default MenuList;
