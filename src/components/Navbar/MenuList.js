import React from 'react';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router';

function MenuList() {
  const { userId } = useParams();

  return (
    <ListGroup variant="flush" className="d-none d-md-block">
      <ListGroup.Item action as={NavLink} to={`/${userId}`} className="nav-item">
        LISTINGS
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={`/${userId}/0/reservation`} className="nav-item">
        ADD RESERVATION
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={`/${userId}/reservations`} className="nav-item">
        MY RESERVATIONS
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to="/new_listing" className="nav-item">
        ADD LISTING
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={`/${userId}/delete`} className="nav-item">
        DELETE LISTING
      </ListGroup.Item>
    </ListGroup>
  );
}

export default MenuList;
