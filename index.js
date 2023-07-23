const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// define state
const initialCounterState = {
  count: 0,
};

const usersInitialState = {
  users: [{ name: "anisur rahman" }],
};

/**
 * action - type, payload
 * action - what you want to do in the app.based on this action funtion the state is changed.it returns an object
 * instead of wrtitng the type in string we can keep it to a variable to avoid mistakes
 */

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

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "kingkong" },
  };
};

/**
 * Reducer - pure function, receives state and action and all of the logics are built here to change the state based on the action type
 */

const counterReducer = (state = initialCounterState, action) => {
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

    default:
      return state;
  }
};
