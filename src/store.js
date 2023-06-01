import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productListReducer,
  productDetailsReducer
} from './Reducer/ProductReducer';
 import { cartReducers } from "./Reducer/cartReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducers,
});

debugger;
const productsFromStorage = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : null;

  const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  const initialState = {
    productList : { products : productsFromStorage },
    cart: { cartItems: cartItemsFromStorage }
  }

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
