const initialState = [];
const FETCH_DATA = 'reservations/FETCH_DATA';
const UPDATE_STATE = 'reservations/UPDATE_STATE';

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case UPDATE_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
