"use strict"

// Books Reducers
export function booksReducers(state = {books: []}, action) {
  switch (action.type) {
    case 'POST_BOOK':
      return {books: [...state.books, ...action.payload]};
      break;
    case 'DELETE_BOOK':
      // create a copy of the current books array
      const currentBookToDelete = [...state.books];
      // Find which book to delete
      const indexToDelete = currentBookToDelete.findIndex( (book) => {
        return book.id === action.payload.id;
      });
      // use slice to remove the book at the specified index
      return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]};
      break;
    case 'UPDATE_BOOK':
      const currentBookToUpdate = [...state.books];
      const indexToUpdate = currentBookToUpdate.findIndex( (book) => {
        return book.id === action.payload.id;
      });
      const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: action.payload}
      return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]};
      break;
  }
  return state;
};