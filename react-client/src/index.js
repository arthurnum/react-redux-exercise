import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ItemsList from './itemsList';
import itemsListReducer from './itemsListReducer';

var store = createStore(
  itemsListReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ItemsList />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
