import * as api from './api';

const actionTypes = {
  INITIAL_LOAD: 'initial-load',
  UPDATE_ITEM: 'update-item'
}

const getItems = () => dispatch =>
  api.get('/items')
  .then(res => {
    let action = {
      type: actionTypes.INITIAL_LOAD,
      data: res
    };
    return dispatch(action);
  })

const counter = id => dispatch =>
  api.post('/items', { id: id })
  .then(res => {
    if (res.status === 0) {
      let action = {
        type: actionTypes.UPDATE_ITEM,
        item: res.item
      };
      return dispatch(action);
    }
  })


export { actionTypes, counter, getItems }
