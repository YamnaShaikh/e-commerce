
import { useSelector } from "react-redux";
import {
 CART_LIST_SUCCESS,
} from "../constant/ProductConstant";

export const addToCart = (product) => async (dispatch, getState) => {


  debugger;
  dispatch({
    type: CART_LIST_SUCCESS,
    payload: {
      product
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};