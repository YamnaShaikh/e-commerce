import { CART_LIST_SUCCESS } from "../constant/ProductConstant";

export const cartReducers = (state = { cartItems: [] }, action) => {
  debugger;
  switch (action.type) {
    case CART_LIST_SUCCESS:
     
     
   
        return {
          ...state,
          cartItems:  action.payload,
        };


    default:
      return state;
  }
};
