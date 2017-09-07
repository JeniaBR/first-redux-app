"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {deleteBooks, postBooks, updateBooks} from './actions/booksActions';

import BooksList from './components/pages/booksList';

// create a store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

// create and dispatch actions

render(
  <Provider store={store}>
    <BooksList/>
  </Provider>, document.getElementById('app')
);