import {
  applyMiddleware, combineReducers, createStore, compose,
} from 'redux';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/rooms';
import reservationsReducer from './reservations/reservation';
import deleteReservationReducer from './reservations/deleteReservation';
import usersReducer from './users/usersReducer';
import deleteRoomsReducer from './rooms/roomsDeleteReducer';

const reducer = combineReducers({
  roomsReducer,
  reservationsReducer,
  deleteReservationReducer,
  usersReducer,
  deleteRoomsReducer,
});

const store = createStore(
  reducer, compose(applyMiddleware(thunk)),
);

export default store;
