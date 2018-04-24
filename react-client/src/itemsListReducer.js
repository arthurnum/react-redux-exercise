const defaultState = {
  list: []
};

let itemsListReducer = function(state, action) {
  switch (action.type) {
    case 'initial-load':
      return {
        list: action.data.items
      }
    case 'update-item':
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
