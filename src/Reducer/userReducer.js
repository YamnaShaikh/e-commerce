import { CREATE_USER } from "../constant/ProductConstant";

const initialState = {
    userInfo: []
  };
export const userReducer = (state = initialState, action) => {
     debugger;
    switch (action.type) {
      case CREATE_USER:
        return {
          ...state,
          userInfo: [...state.userInfo, action.payload],
        }

        default:
            return state;
    }
}