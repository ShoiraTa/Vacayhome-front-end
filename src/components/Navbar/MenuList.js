import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import ListGroup from 'react-bootstrap/ListGroup';
import { MenuAuth } from '../LoginRegister/Auth';

function MenuList({ isLoggedIn }) {
  const { userId } = useParams();
  const paths = MenuAuth(isLoggedIn, userId);

  return (
    <ListGroup variant="flush" className="d-none d-md-block">
      <ListGroup.Item action as={NavLink} to={paths.home} className="nav-item">
        LISTINGS
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={paths.reservation} className="nav-item">
        ADD RESERVATION
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={paths.userReservations} className="nav-item">
        MY RESERVATIONS
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={paths.addHouse} className="nav-item">
        ADD LISTING
      </ListGroup.Item>
      <ListGroup.Item action as={NavLink} to={paths.deleteHouse} className="nav-item">
        DELETE LISTING
      </ListGroup.Item>
    </ListGroup>
  );
}

export default MenuList;
