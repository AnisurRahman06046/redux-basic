const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

const initialProducts = {
  products: ["pen"],
  count: 1,
};
const getProducts = () => {
  return { type: GET_PRODUCTS };
};
const addProducts = (value) => {
  return {
    type: ADD_PRODUCTS,
    payload: value,
  };
};

const productsReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: [...state.products],
        count: state.count,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

const store = createStore(productsReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProducts("paper"));
