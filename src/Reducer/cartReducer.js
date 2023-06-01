import {
    CART_LIST_SUCCESS,
  } from "../constant/ProductConstant";
  
  export const cartReducers = ( state = { cartItems: [] }, action) => {
    debugger;
    switch (action.type) {
        case CART_LIST_SUCCESS:
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
              );
        
              if (existingItem) {
                // If the item already exists in the cart, replace it with the updated payload
                return {
                  ...state,
                  cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                  ),
                };
              } else {
                // If the item doesn't exist in the cart, add it to the cart
                return {
                  ...state,
                  cartItems: [...state.cartItems, action.payload],
                };
              }
        default:
          return state;
      }
    }
  