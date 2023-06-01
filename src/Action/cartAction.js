
import { useSelector } from "react-redux";
import {
 CART_LIST_SUCCESS,
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