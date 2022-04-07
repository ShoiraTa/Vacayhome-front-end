import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

function MenuList() {
  const navigate = useNavigate();

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
      <ListGroup.Item action href="#house" onClick={() => navigate('/new_listing')} variant="success">
        ADD LISTING
      </ListGroup.Item>
      <ListGroup.Item action href="#destroy" variant="success">
        DELETE LISTING
      </ListGroup.Item>
    </ListGroup>
  );
}

export default MenuList;
