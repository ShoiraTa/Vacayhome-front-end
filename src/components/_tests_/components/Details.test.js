import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Details from '../../Details';

const house = {
  id: 1,
  name: 'house1',
  price: '100.0',
  description: 'This is house 1',
  country: 'US',
  city: 'Los Angeles',
  address: '100 cool street',
  property_type: 'house',
  image_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  created_at: '2022-04-05T13:13:11.814Z',
  updated_at: '2022-04-05T13:13:11.814Z',

};
const isLoggedIn = 'yes';

describe('Details page', () => {
  test('it renders text in details page', () => {
    render(
      <Provider store={store}>
        <Router>
          <Details house={house} isLoggedIn={isLoggedIn} />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('house1')).toBeInTheDocument();
  });
  it('renders correctly', () => {
    window.localStorage.setItem('userId', 1);
    const tree = render(
      <Provider store={store}>
        <Router>
          <Details house={house} isLoggedIn={isLoggedIn} />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
