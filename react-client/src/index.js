import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import ItemsList from './components/itemsList';
import store from './store';
import { actionTypes } from './actions';

ReactDOM.render(
  <Provider store={store}>
    <ItemsList />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

const socket = io('ws://localhost:8081');

socket.on('itemUpdate', response => {
  let res = JSON.parse(response);
  if (res.status === 0) {
    let action = {
      type: actionTypes.UPDATE_ITEM,
      item: res.item
    };
    store.dispatch(action);
  }
});

socket.on('itemDelete', response => {
  let res = JSON.parse(response);
  if (res.status === 0) {
    let action = {
      type: actionTypes.DELETE_ITEM,
      item: res.item
    };
    store.dispatch(action);
  }
})

function dropHandler( ev ) {
  ev.preventDefault();

  var file = ev.dataTransfer.files[0];

  var reader = new FileReader();
  reader.onloadend = function() {
    console.log(this.result);
    socket.emit('fileUpload', this.result);
  };

  reader.readAsArrayBuffer(file);
}

document.getElementsByClassName('footer')[0].ondrop = dropHandler;
