import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemsListReducer from '../itemsListReducer';

const store = createStore(
  itemsListReducer,
  applyMiddleware(thunk)
);

export default store;
