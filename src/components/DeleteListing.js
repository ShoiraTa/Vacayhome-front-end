import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { deleteRoom, fetchRooms } from '../redux/rooms/rooms';

function RemoveHouse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userid } = useParams();

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const roomList = useSelector((state) => state.roomsReducer);

  const handleDelete = (e) => {
    e.preventDefault();
    const HouseId = e.target.selectDropdown.value;
    console.log(HouseId);
    dispatch(deleteRoom(HouseId));
    navigate(`/${userid}/delete`);
    window.location.reload(false);
  };

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
      }}
    >

      <div className="reservation-header-links">
        <Link to={`/${userid}/`}><FaArrowLeft style={{ color: '#fff', fontSize: '1.2rem', margin: '5px' }} /></Link>
      </div>

      <form className="form" onSubmit={handleDelete}>
        <h1>Remove a House from our Listing</h1>

        <select
          align="end"
          style={{
            outline: 'none',
            width: '95%',
            borderRadius: '2px',
          }}
          placeholder="Choose a House you want to reserve."
          id="selectDropdown"
        >
          <option disabled selected>
            Choose a House you want to delete
          </option>
          { roomList.map((room) => (
            <option key={room.id} value={room.id}>
              {room.id}
              :
              {room.name}
            </option>
          ))}
        </select>
        <button className="submit book-btn" type="submit">Submit</button>
      </form>

    </div>

  );
}

export default RemoveHouse;
