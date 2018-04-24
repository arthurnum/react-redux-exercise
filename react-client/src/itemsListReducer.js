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
    case actionTypes.UPDATE_ITEM:
      return {
        list: updateItem(state.list, action.item)
      }
    default:
      return defaultState
  }
};

function updateItem(list, item) {
  let index = list.findIndex((e, i) => { return e.id === item.id });
  list[index] = item;
  return [...list];
}

export default itemsListReducer;
