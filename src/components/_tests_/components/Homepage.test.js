import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Homepage from '../../Homepage/Homepage';

describe('Home page', () => {
  test('it renders text in home page', () => {
    render(<Provider store={store}><Router><Homepage /></Router></Provider>);
    expect(screen.getByText('Top-rated vacation rentals')).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Homepage /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
