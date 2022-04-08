import axios from 'axios';

const initialState = [];
const FETCH_DATA = 'rooms/FETCH_DATA';
const POST_DATA = 'rooms/POST_DATA';
const DELETE_ROOM = 'rooms/DELETE_ROOM';

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case POST_DATA:
      return action.payload;
    case DELETE_ROOM:
      return action.payload;
    default:
      return state;
  }
};

export const fetchRooms = () => (dispatch) => {
  axios.get('https://vacayhome-api.herokuapp.com/api/v1/houses')
    .then((response) => {
      dispatch({ type: FETCH_DATA, payload: response.data });
    });
};

export const postRooms = (data) => (dispatch) => {
  axios.post('https://vacayhome-api.herokuapp.com/api/v1/houses', data)
    .then((response) => {
      dispatch({ type: POST_DATA, payload: response });
    });
};

export const deleteRoom = (id) => (dispatch) => {
  axios.delete(`https://vacayhome-api.herokuapp.com/api/v1/houses/${id}`)
    .then((response) => {
      dispatch({ type: DELETE_ROOM, payload: response });
    });
};

export default roomsReducer;
