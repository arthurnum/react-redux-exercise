const defaultState = {
  list: []
};

let itemsListReducer = function(state, action) {
  switch (action.type) {
    case 'counter':
      return {
        list: counter(state.list, action.id)
      }
    case 'initial-load':
      return {
        list: action.data.items
      }
    default:
      return defaultState
  }
};

function counter(list, id) {
  let index = list.findIndex((e, i) => { return e.id === id });
  list[index].count += 1;
  return [...list];
}

export default itemsListReducer;
