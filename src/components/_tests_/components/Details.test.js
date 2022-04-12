import React from 'react';
// import '@testing-library/react';
import { render, screen } from '@testing-library/react';
// import { renderer, screen } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Details from '../../Details';