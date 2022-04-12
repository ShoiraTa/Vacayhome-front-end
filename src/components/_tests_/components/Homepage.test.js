import React from 'react';
// import '@testing-library/react';
import { render, screen } from '@testing-library/react';
// import { renderer, screen } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Homepage from '../../Homepage/Homepage';

// it('matches Homepage', () => {
//   const homepage = renderer.create(
//     <Homepage />,
//   ).toJSON();
//   expect(homepage).toHaveBeenCalled();
// });

describe('Home page', () => {
  test('it renders the given name in the greeting', () => {
    render(<Provider store={store}><Router><Homepage /></Router></Provider>);
    expect(screen.getByText('Top-rated vacation rentals')).toBeInTheDocument();
  });
  it('renders correctly', () => {
    window.localStorage.setItem('userId', 1);
    const tree = render(<Provider store={store}><Router><Homepage /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
