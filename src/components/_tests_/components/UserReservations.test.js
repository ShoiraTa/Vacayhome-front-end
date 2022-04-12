import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import UserReservations from '../../Reservations/UserReservations';

describe('BookAppointment', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('userId', 1);
    const tree = render(<Provider store={store}><Router><UserReservations /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
