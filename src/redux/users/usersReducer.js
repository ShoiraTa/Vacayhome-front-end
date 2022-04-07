import axios from 'axios';

const initialState = [];
const FETCH_USERS = 'reservations/FETCH_USERS';
const POST_USERS = 'reservations/POST_USERS';

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case POST_USERS:
      return action.payload;
    default:
      return state;
  }
};

export const fetchUsers = () => (dispatch) => {
  axios.get('https://vacayhome-api.herokuapp.com/api/v1/users')
    .then((response) => {
      dispatch({ type: FETCH_USERS, payload: response.data });
    });
};

export const postUsers = (data) => (dispatch) => {
  axios.post('https://vacayhome-api.herokuapp.com/api/v1/bookings', data)
    .then((response) => {
      dispatch({ type: POST_USERS, payload: response });
    });
};

export default usersReducer;
