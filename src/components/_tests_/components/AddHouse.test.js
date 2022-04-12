import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import AddHouse from '../../AddHouse/AddHouse';

describe('Add a house', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><AddHouse /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
