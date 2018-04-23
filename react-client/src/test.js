import itemsListReducer from './itemsListReducer';

const ITEM_INDEX = 2
const ITEM_ID = 3
const EXPECTED = 1

test('counter works properly', () => {
  let state = itemsListReducer({}, {});
  let action = {
    type: 'alert',
    id: ITEM_ID
  };
  let newState = itemsListReducer(state, action);
  expect(newState.list[ITEM_INDEX].count).toBe(EXPECTED);
});
