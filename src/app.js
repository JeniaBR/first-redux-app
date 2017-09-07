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

store.dispatch(postBooks(
  [{
    id: 1,
    title: 'This is the book title',
    description: 'This is a book description',
    price: 20.3
  },
  {
    id: 2,
    title: 'This is the second book title',
    description: 'This is a second book description',
    price: 33.33
  }]
));

store.dispatch(postBooks(
  [{
    id: 3,
    title: 'This is the third book title',
    description: 'This is a third book description',
    price: 8.3
  }]
));