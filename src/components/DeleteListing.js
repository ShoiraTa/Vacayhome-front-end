import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchRooms } from '../redux/rooms/rooms';
import { deleteRoom } from '../redux/rooms/roomsDeleteReducer';

function RemoveHouse() {
  const [roomId, setRoomId] = useState();
  const { user_id: userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteRoom(roomId));
    dispatch(fetchRooms());
    navigate(`/${userId}`);
  };

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const roomList = useSelector((state) => state.roomsReducer);

  return (

    <div
      className="reservations-container"
      style={{
        backgroundImage: `linear-gradient(
          325deg,
          rgba(87, 111, 1, 0.777) 0%,
          rgba(150, 191, 2, 0.93) 100%
          )`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '2rem',
      }}
    >

      <div
        className="reservation-header-links"
        style={{
          position: 'fixed',
          top: '0',
        }}
      >
        <Link to={`/${userId}`}><FaArrowLeft style={{ color: '#fff', fontSize: '2rem', margin: '5px' }} /></Link>
      </div>

      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        className="form"
        onSubmit={handleDelete}
      >
        <h1>Remove a House from our Listing</h1>

        <select
          align="end"
          style={{
            outline: 'none',
            width: '95%',
            borderRadius: '2px',
            margin: '2rem 0',
          }}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Choose a House you want to reserve."
          id="selectDropdown"
        >
          <option disabled selected>
            Choose a House
          </option>
          { roomList != null && roomList.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>
        <button to={`/${userId}`} onClick={() => { handleDelete(); }} className="submit book-btn" type="submit">Submit</button>
      </form>

    </div>

  );
}

export default RemoveHouse;
