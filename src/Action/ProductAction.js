import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constant/ProductConstant';
import products from "../data/products";

export const listProducts = () => (dispatch) => {
  try {
    // debugger;
    
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: products,
    });
    localStorage.setItem("products", JSON.stringify(products));
  }
   catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};
debugger;

export const detailProducts = (id, product) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      // debugger;
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: {
            id,
            product
        },
      });
      // debugger;
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.message,
      });
    }
  };
  