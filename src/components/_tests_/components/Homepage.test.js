import React from 'react';
import '@testing-library/react';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import store from '../../../redux/configureStore';
import Homepage from '../../Homepage/Homepage';

it('matches Homepage snapshot', () => {
  const homepage = renderer.create(
    <Homepage />,
  ).toJSON();
  expect(homepage).toMatchSnapshot();
});
