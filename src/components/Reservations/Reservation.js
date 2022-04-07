import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
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

  const [roomId, setroomId] = useState(houseid);

  let image = '';
  let location = '';

  rooms.roomsReducer.map((element) => {
    if (element.id === parseInt(roomId, 10)) {
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
        house_id: roomId,
        date: startDate.toLocaleDateString(),
      },
    };

    dispatch(postReservations(postData));
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
        <div className="reservation-header-links">
          <Link to={`/${userid}/`}><FaArrowLeft style={{ color: '#fff', fontSize: '1.2rem', margin: '5px' }} /></Link>
        </div>
        <div className="reservations-description">
          <div className="reservations-header">
            <h1>Book the place</h1>
          </div>
          <p>
            When the user clicks the Delete item link in the navigation panel they
          </p>
          {
           parseInt(houseid, 10) === 0 && (
           <select
             onChange={(e) => setroomId(e.target.value)}
             align="end"
             style={{
               outline: 'none',
               width: '95%',
               borderRadius: '2px',
             }}
             placeholder="Choose a House you want to reserve."
             id="dropdown-menu-align-end"
           >
             <option disabled selected>
               Choose a House you want to reserve
             </option>
             { rooms.roomsReducer.map((room) => (
               <option key={room.id} value={room.id}>
                 {room.name}
               </option>
             ))}
           </select>
           )
          }
          <div className="reservations-buttons">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DropdownButton align="end" title={title} id="dropdown-menu-align-end">
              <Dropdown.Item eventKey="1" onClick={() => setTitle(location)}>{location}</Dropdown.Item>
            </DropdownButton>
            <button type="submit" onClick={createReservation} className="book-btn">Book now</button>
          </div>
          { reservationPost.status === 201
            && <p>Reservation was successful!</p>}
        </div>
      </div>
    </>
  );
};

export default Reservantion;
