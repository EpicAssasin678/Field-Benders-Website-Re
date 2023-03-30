import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';
import './animations.css';

import * as dotenv from 'dotenv';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));


dotenv.config({path: './.env'});
dotenv.config({path: './netlify.env'});
console.log(process.env);
console.log(process.env.TEST);

ReactDOM.render(
  <Provider store={store}>
    <App id="app"/>
  </Provider>,
  document.getElementById('root'),
);

