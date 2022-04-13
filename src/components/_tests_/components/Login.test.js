import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Login from '../../LoginRegister/Login';

describe('Login to app', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Login /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
