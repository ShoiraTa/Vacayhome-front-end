import axios from 'axios';

const initialState = [];
const FETCH_DATA = 'reservations/FETCH_DATA';
const POST_DATA = 'reservations/POST_DATA';

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case POST_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const fetchReservations = () => (dispatch) => {
  axios.get('https://vacayhome-api.herokuapp.com/api/v1/bookings')
    .then((response) => {
      dispatch({ type: FETCH_DATA, payload: response.data });
    });
};

export const postReservations = (data) => (dispatch) => {
  axios.post('https://vacayhome-api.herokuapp.com/api/v1/bookings', data)
    .then((response) => {
      dispatch({ type: POST_DATA, payload: response });
    });
};

export default reservationsReducer;
