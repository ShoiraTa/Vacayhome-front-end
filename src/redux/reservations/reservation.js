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
  axios.get('')
    .then((response) => {
      dispatch({ type: FETCH_DATA, payload: response.data });
    });
};

export default reservationsReducer;
