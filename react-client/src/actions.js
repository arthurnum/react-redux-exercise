const counter = id => dispatch =>
  fetch('/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ id: id })
  })
  .then(res => {
    return res.json()
  })
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
