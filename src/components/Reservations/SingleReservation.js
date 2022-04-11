import React from 'react';
import Card from 'react-bootstrap/Card';
// import { useDispatch } from 'react-redux';
// import { deleteReservation } from '../../redux/reservations/deleteReservation';

const SingleReservation = ({ reservation, rooms }) => (
  <div className="reservation-container">
    {
      rooms.map((room) => (
        room.id === reservation.house_id
        && (

        <div className="d-flex">
          <div>
            <img alt="room" src={`${room.image_url}`} style={{ width: '200px', margin: '1rem 0' }} />
          </div>
          <div className="card-desc">
            <Card.Title>{room.name}</Card.Title>
            <Card.Text>
              <strong>City</strong>
              :
              {' '}
              {room.city}

            </Card.Text>
            <Card.Text>
              <strong>Address:</strong>
              {' '}
              {room.address}
            </Card.Text>
            <Card.Text>
              <strong>Check-in Day:</strong>
              {' '}
              {reservation.date}
            </Card.Text>
          </div>
        </div>

        )
      ))
    }
  </div>
);
export default SingleReservation;
