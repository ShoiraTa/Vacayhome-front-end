import React from 'react';
import Card from 'react-bootstrap/Card';

const SingleReservation = ({ reservation, rooms }) => {
  console.log(rooms);

  return (
    <div className="reservation-container">
      {
      rooms.map((room) => (
        room.id === reservation.house_id
        && (
        <div key={reservation.id} className="reservation">
          <Card>
            <Card.Header as="h5">
              Reservation #
              {reservation.id}
            </Card.Header>
            <Card.Body>
              <div className="d-flex">
                <div>
                  <img alt="room" src={`${room.image_url}`} style={{ width: '200px', margin: '1rem 0' }} />
                </div>
                <div className="card-desc">
                  <Card.Title>Special title treatment</Card.Title>
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
              <button type="submit" variant="primary" className="btn btn-success">See the accommodation</button>
            </Card.Body>
          </Card>
        </div>
        )
      ))
    }
    </div>

  );
};

export default SingleReservation;
