import {
  applyMiddleware, combineReducers, createStore, compose,
} from 'redux';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/rooms';
import reservationsReducer from './reservations/reservation';
import deleteReservationReducer from './reservations/deleteReservation';

const reducer = combineReducers({
  roomsReducer,
  reservationsReducer,
  deleteReservationReducer,
});

const store = createStore(
  reducer, compose(applyMiddleware(thunk)),
);

export default store;
