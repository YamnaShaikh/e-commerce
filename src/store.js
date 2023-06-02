import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productListReducer,
  productDetailsReducer
} from './Reducer/ProductReducer';

 import { cartReducers } from "./Reducer/cartReducer";
 import { userReducer } from "./Reducer/userReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducers,
  userInfo: userReducer
});

debugger;
const productsFromStorage = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : null;

  const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

  const initialState = {
    productList : { products : productsFromStorage },
    cart: { cartItems: cartItemsFromStorage },
    users: { userInfo: userInfoFromStorage }
  }

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
