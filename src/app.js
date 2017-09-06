"use strict"
import {createStore} from 'redux';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {deleteBooks, postBooks, updateBooks} from './actions/booksActions';

// create a store
const store = createStore(reducers);

store.subscribe(() => {
  console.log('Current state is: ',  store.getState());
});

// create and dispatch actions
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

store.dispatch(deleteBooks({id: 1}));

store.dispatch(updateBooks(
  {
    id: 2,
    title: 'Learn Redux in 24h'
  }
));

store.dispatch(addToCart([{id: 2}]));