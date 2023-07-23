const { createStore, combineReducers } = require("redux");
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

const getProductsReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: [...state.products],
        count: state.count,
      };

    default:
      return state;
  }
};

const addProductsReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  getProductR: getProductsReducer,
  addProductR: addProductsReducer,
});

const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getProducts())
store.dispatch(addProducts("paper"))
