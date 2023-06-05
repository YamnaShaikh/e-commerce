
import { useSelector } from "react-redux";
import {
 CART_LIST_SUCCESS, CART_REMOVE_ITEM
} from "../constant/ProductConstant";

export const addToCart = (product, qty) => async (dispatch, getState) => {
debugger
//  const { data } = product;
 console.log(product)
//   debugger;
  dispatch({
    type: CART_LIST_SUCCESS,
    payload: {
        product: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty: Number(qty),
      },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const restCart = () => (dispatch, getState)=>{
  dispatch({
    type: "RESET_CART",
    payload: []
  })
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};