import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRooms } from '../../redux/rooms/rooms';
import { postReservations } from '../../redux/reservations/reservation';

const Reservantion = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState('Location');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const rooms = useSelector((state) => state);
  const reservationPost = useSelector((state) => state.reservationsReducer);

  const { houseid } = useParams();
  const { userid } = useParams();

  let image = '';
  let location = '';
  rooms.roomsReducer.map((element) => {
    if (element.id === parseInt(houseid, 10)) {
      image = element.image_url;
      location = element.address;
    }
    return image;
  });

  const createReservation = () => {
    const postData = {
      booking:
      {
        user_id: userid,
        house_id: houseid,
        date: startDate.toLocaleDateString(),
      },
    };

    dispatch(postReservations(postData));
  };

  const handleLocation = (e) => {
    e.preventDefault();
    setTitle(location);
  };

  return (
    <>
      <div
        className="reservations-container"
        style={{
          backgroundImage: `linear-gradient(
          325deg,
          rgba(87, 111, 1, 0.777) 0%,
          rgba(150, 191, 2, 0.93) 100%
          ),url(${(image)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="reservations-description">
          <div className="reservations-header">
            <h1>Book the place</h1>
          </div>
          <p>
            When the user clicks the Delete item link in the navigation panel they
          </p>
          <div className="reservations-buttons">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DropdownButton align="end" title={title} id="dropdown-menu-align-end">
              <Dropdown.Item eventKey="1" onClick={(e) => handleLocation(e)}>{location}</Dropdown.Item>
            </DropdownButton>
            <button type="submit" onClick={createReservation} className="book-btn">Book now</button>
          </div>
          { reservationPost.status === 201 && <p>Reservation was successful!</p>}
        </div>
      </div>
    </>
  );
};

export default Reservantion;
