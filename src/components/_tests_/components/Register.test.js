import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Register from '../../LoginRegister/Register';

describe('Register to app', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Register /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
