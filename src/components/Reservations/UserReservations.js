import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { fetchReservations } from '../../redux/reservations/reservation';
import { fetchRooms } from '../../redux/rooms/rooms';
import SingleReservation from './SingleReservation';
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
                  <button type="submit" variant="primary" className="btn btn-success">See the accommodation</button>
                  <button type="submit" variant="primary" onClick={(e) => handleDelete(e, reservation.id)} className="btn btn-danger">Delete the accomodation</button>
                </Card.Body>
              </Card>
            </div>

          )
        ))
      }
      </div>
    </>
  );
};

export default UserReservations;
