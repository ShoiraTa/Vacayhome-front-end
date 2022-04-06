import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReservations } from '../../redux/reservations/reservation';
import SingleReservation from './SingleReservation';

const UserReservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  const reservations = useSelector((state) => state.reservationsReducer);

  const { userid } = useParams();

  return (
    <>
      <h1 className="text-center m-4">Reservations</h1>
      <div className="reservations-container">
        {
        reservations.map((reservation) => (
          reservation.user_id === parseInt(userid, 10)
          && <SingleReservation reservation={reservation} key={reservation.id} />
        ))
      }
      </div>

    </>
  );
};

export default UserReservations;
