import React from 'react';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

function MenuList() {
  return (
    <ListGroup variant="flush" className="d-none d-md-block">
      <ListGroup.Item action as={NavLink} to="/" className="nav-item">
        LISTINGS
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to="/1/0/reservation" className="nav-item">
        ADD RESERVATION
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to="/1/reservations" className="nav-item">
        MY RESERVATIONS
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to="/new_listing" className="nav-item">
        ADD LISTING
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to="/delete_listing" className="nav-item">
        DELETE LISTING
      </ListGroup.Item>
    </ListGroup>
  );
}

export default MenuList;
