import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { fetchReservations } from '../../redux/reservations/reservation';
import { fetchRooms } from '../../redux/rooms/rooms';
import SingleReservation from './SingleReservation';
import { deleteReservation } from '../../redux/reservations/deleteReservation';

const UserReservations = () => {
  const dispatch = useDispatch();
  let userid = localStorage.getItem('userId');

  userid = parseInt(userid, 10);

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteReservation(id));
    dispatch(fetchRooms());
  };

  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchReservations());
  }, []);

  const rooms = useSelector((state) => state.roomsReducer);
  const reservationsall = useSelector((state) => state.reservationsReducer);
  const deletedRes = useSelector((state) => state.deleteReservationReducer);

  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchReservations());
  }, [deletedRes]);

  console.log(deletedRes);
  const { reservations } = reservationsall;

  return (
    <>
      <h1 className="text-center m-4">Reservations</h1>
      <div className="reservations-container">
        {
         reservations[0] && reservations[0].map((reservation) => (
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
                    <div className="d-flex justify-content-end">

                      <button type="submit" variant="primary" onClick={(e) => handleDelete(e, reservation.id)} className="btn btn-danger">Cancel the reservation</button>

                    </div>
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
