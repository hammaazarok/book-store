// Actions
const LOAD = 'LOAD';
const ADD = 'ADD';
const REMOVE = 'REMOVE';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      return state;
    case ADD:
      return state.push(action.value);
    case REMOVE:
      return state.filter((m) => m.id !== action.value);
    default:
      return state;
  }
}

// Action Creators
export function loadBooks() {
  return { type: LOAD };
}

export function addBook(book) {
  return { type: ADD, value: book };
}

export function removeBook(book) {
  return { type: REMOVE, book };
}
