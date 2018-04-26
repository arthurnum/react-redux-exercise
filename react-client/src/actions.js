import * as api from './api';

const actionTypes = {
  INITIAL_LOAD: 'initial-load',
  ADD_ITEM: 'add-item',
  UPDATE_ITEM: 'update-item',
  DELETE_ITEM: 'delete-item',
  PAGINATE: 'paginate'
};

const getItems = () => (dispatch, getState) =>
  api.get('/items?page=' + getState().page)
  .then(res => {
    let action = {
      type: actionTypes.INITIAL_LOAD,
      data: res
    };
    return dispatch(action);
  })

const addItem = name => dispatch => {
  api.post('/items', { name: name })
  .then(res => {
    if (res.status === 0) {
      let action = {
        type: actionTypes.ADD_ITEM,
        item: res.item
      };
      return dispatch(action);
    }
  })
}

const deleteItem = id => dispatch => {
  api.destroy('/items?id=' + id)
  .then(res => {
    if (res.status === 0) {
      let action = {
        type: actionTypes.DELETE_ITEM,
        item: res.item
      };
      return dispatch(action);
    }
  })
}

const counter = id => dispatch =>
  api.put('/items', { id: id })
  .then(res => {
    if (res.status === 0) {
      let action = {
        type: actionTypes.UPDATE_ITEM,
        item: res.item
      };
      return dispatch(action);
    }
  })

const paginate = step => (dispatch, getState) => {
  let page = getState().page + step;
  if (page < 1) { page = 1 }
  api.get('/items?page=' + page)
  .then(res => {
    let action = {
      type: actionTypes.PAGINATE,
      data: res
    };
    return dispatch(action);
  })
}

export { actionTypes, counter, getItems, addItem, deleteItem, paginate }
