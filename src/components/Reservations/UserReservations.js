import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReservations } from '../../redux/reservations/reservation';
import { fetchRooms } from '../../redux/rooms/rooms';
import SingleReservation from './SingleReservation';

const UserReservations = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === true) {
      dispatch(fetchRooms());
      dispatch(fetchReservations());
      setLoading(true);
    }
  }, []);

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
          && <SingleReservation rooms={rooms} reservation={reservation} key={reservation.id} />
        ))
      }
      </div>

    </>
  );
};

export default UserReservations;
