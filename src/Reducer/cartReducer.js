import {
  CART_LIST_SUCCESS,
  CART_REMOVE_ITEM,
} from "../constant/ProductConstant";

const initialState = {
  cartItems: [],
};

export const cartReducers = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case CART_LIST_SUCCESS:
      // const item = action.payload;
      // const existItem = state.cartItems.find((x) => x.product === item.product);
      // if (existItem) {
      //   return {
      //     ...state,
      //     cartItems: state.cartItems.map((x) =>
      //       x.product === existItem.product ? item : x
      //     ),
      //   };
      // } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };

        case "RESET_CART":
      return {
        
        cartItems: action.payload
      };
      

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    default:
      return state;
  }
};
