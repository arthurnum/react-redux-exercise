const counter = (id, state) => ({ type: 'counter', id: id })

const getItems = () => dispatch =>
  fetch('/items')
  .then(res => {
    return res.json();
  })
  .then(res => {
    let action = {
      type: 'initial-load',
      data: res
    };
    return dispatch(action);
  })

export { counter, getItems }
