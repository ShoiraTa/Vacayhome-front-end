import {
  applyMiddleware, combineReducers, createStore, compose,
} from 'redux';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/rooms';
import reservationsReducer from './reservations/reservation';

const reducer = combineReducers({
  roomsReducer,
  reservationsReducer,
});

const store = createStore(
  reducer, compose(applyMiddleware(thunk)),
);

export default store;
