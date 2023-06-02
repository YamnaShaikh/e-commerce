import { CREATE_USER } from "../constant/ProductConstant";

const initialState = {
    users: []
  };
export const userReducer = (state = initialState, action) => {
     debugger;
    switch (action.type) {
      case CREATE_USER:
        return {
          ...state,
          users: [...state.users, action.payload],
        }

        default:
            return state;
    }
}