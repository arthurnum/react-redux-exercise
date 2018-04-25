import { actionTypes } from './actions';

const defaultState = {
  list: []
};

let itemsListReducer = function(state, action) {
  switch (action.type) {
    case actionTypes.INITIAL_LOAD:
      return {
        list: action.data.items
      }
    case actionTypes.ADD_ITEM:
      return {
        list: addItem(state.list, action.item)
      }
    case actionTypes.UPDATE_ITEM:
      return {
        list: updateItem(state.list, action.item)
      }
    case actionTypes.DELETE_ITEM:
      return {
        list: deleteItem(state.list, action.item)
      }
    default:
      return defaultState
  }
};

function addItem(list, item) {
  list.push(item);
  return list.slice();
}

function updateItem(list, item) {
  let index = list.findIndex((e, i) => { return e.id === item.id });
  list[index] = item;
  return list.slice();
}

function deleteItem(list, item) {
  let index = list.findIndex((e, i) => { return e.id === item.id });
  list.splice(index, 1);
  return list.slice();
}

export default itemsListReducer;
