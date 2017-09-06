"use strict"
import {createStore} from 'redux';
import reducers from './reducers/index';


// create a store
const store = createStore(reducers);

store.subscribe(() => {
  console.log('Current state is: ',  store.getState());
});

// create and dispatch actions
store.dispatch({
  type: "POST_BOOK",
  payload: [{
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
});

store.dispatch({
  type: "POST_BOOK",
  payload: [{
    id: 3,
    title: 'This is the third book title',
    description: 'This is a third book description',
    price: 8.3
  }]
});

store.dispatch({
  type: "DELETE_BOOK",
  payload: {id: 1}
});

store.dispatch({
  type: "UPDATE_BOOK",
  payload: {
    id: 2,
    title: 'Learn Redux in 24h'
  }
});
