/***
 * state
 * action - increment, decrement, reset
 * reducer
 * store
 */

const { createStore } = require("redux");
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// define state

const counterInitialState = {
  count: 0,
};

// action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};

// create reducer
const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: (state.count = 0),
      };

    default:
      return state;
  }
};

// create store
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())