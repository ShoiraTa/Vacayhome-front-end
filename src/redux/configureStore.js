import {
  applyMiddleware, combineReducers, createStore, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/rooms';

const reducer = combineReducers({ roomsReducer });

const store = createStore(
  reducer, compose(applyMiddleware(logger, thunk)),
);

export default store;
