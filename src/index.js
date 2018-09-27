import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/';
import DevTools from './DevTools';
import routes from './routes';
import './country.css';

render(
  <Provider store={store}>
    <div>
      <DevTools />
      <Router history={hashHistory} routes={routes} />
    </div>
  </Provider>,
  document.getElementById('root')
);
