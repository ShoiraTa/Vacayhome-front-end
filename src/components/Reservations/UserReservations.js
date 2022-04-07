import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { fetchReservations } from '../../redux/reservations/reservation';
import { fetchRooms } from '../../redux/rooms/rooms';
import SingleReservation from './SingleReservation';
import Brand from '../Navbar/Brand';
import SideBar from '../Navbar/SideBar';
import Social from '../Navbar/Social';
import { deleteReservation } from '../../redux/reservations/deleteReservation';

const UserReservations = () => {
  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteReservation(id));
    dispatch(fetchRooms());
    dispatch(fetchReservations());
  };

  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchReservations());
  }, [handleDelete]);

  const rooms = useSelector((state) => state.roomsReducer);
  const reservations = useSelector((state) => state.reservationsReducer);

  const { userid } = useParams();

  return (
    <>
      <Container fluid>
        <Row className="homepage-container bg-white">
          <Col sm={2} md={2} lg={2} className="d-flex flex-column justify-content-between bg-light px-0">
            <Brand />
            <SideBar />
            <Social />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <h1 className="text-center m-4">Reservations</h1>
            <div className="reservations-container">
              {
              reservations.map((reservation) => (
                reservation.user_id === parseInt(userid, 10)
                && (
                  <div key={reservation.id} className="reservation">
                    <Card>
                      <Card.Header as="h5">
                        Reservation #
                        {reservation.id}
                      </Card.Header>
                      <Card.Body>
                        <SingleReservation
                          rooms={rooms}
                          reservation={reservation}
                          key={reservation.id}
                        />
                        <button type="submit" variant="primary" className="btn btn-success">See the reservation</button>
                        <button type="submit" variant="primary" onClick={(e) => handleDelete(e, reservation.id)} className="btn btn-danger">Delete the reservation</button>
                      </Card.Body>
                    </Card>
                  </div>

                )
              ))
            }
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserReservations;
