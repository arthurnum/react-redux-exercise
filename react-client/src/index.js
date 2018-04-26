import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import ItemsList from './components/itemsList';
import store from './store';
import io from 'socket.io-client';
import { actionTypes } from './actions';

ReactDOM.render(
  <Provider store={store}>
    <ItemsList />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

const socket = io('ws://localhost:8081');

socket.emit('client-in', 'hi');
socket.on('dataUpdate', response => {
  let res = JSON.parse(response);
  if (res.status === 0) {
    let action = {
      type: actionTypes.UPDATE_ITEM,
      item: res.item
    };
    return store.dispatch(action);
  }
})
