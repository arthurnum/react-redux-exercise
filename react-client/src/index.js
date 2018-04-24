import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import ItemsList from './components/itemsList';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ItemsList />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
