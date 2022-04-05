import Axios from 'axios';
import houseUrl from './house_url';

const FETCH_DATA = 'houses/FETCH_DATA';
// const UPDATE_STATE = 'rooms/UPDATE_STATE';

export const fetchHouses = () => async (dispatch) => {
  const response = await Axios.get(houseUrl);
  dispatch({
    type: FETCH_DATA,
    payload: response.data,
  });
};

const initialState = [];

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    // case UPDATE_STATE:
    //   return action.payload;
    default:
      return state;
  }
};

export default roomsReducer;
