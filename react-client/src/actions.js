import * as api from './api';

const counter = id => dispatch =>
  api.post('/items', { id: id })
  .then(res => {
    if (res.status === 0) {
      let action = {
        type: 'update-item',
        item: res.item
      };
      return dispatch(action);
    }
  })


const getItems = () => dispatch =>
  api.get('/items')
  .then(res => {
    let action = {
      type: 'initial-load',
      data: res
    };
    return dispatch(action);
  })

export { counter, getItems }
