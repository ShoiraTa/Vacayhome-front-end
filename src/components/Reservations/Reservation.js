import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms } from '../../redux/rooms/rooms';

const Reservantion = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const rooms = useSelector((state) => state);

  console.log(rooms);

  return (
    <>
      <div
        className="reservations-container"
        style={{
          backgroundImage: `linear-gradient(
          325deg,
          rgba(87, 111, 1, 0.777) 0%,
          rgba(150, 191, 2, 0.93) 100%
          ),url(${('https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1621016255763-WDHM79J11KCDQW4DIKFX/airbnb-short-term-versus-long-term-rentals-thumbnail.jpg')})`,
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
            <DropdownButton align="end" title="Location" id="dropdown-menu-align-end">
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            <button type="submit" className="book-btn">Book now</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Reservantion;
