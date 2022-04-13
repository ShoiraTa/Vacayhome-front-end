import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import App from '../../../App';

describe('App', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><App /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
