import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import RemoveHouse from '../../DeleteListing';

describe('Delete listing', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('userId', 1);
    const tree = render(<Provider store={store}><Router><RemoveHouse /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
