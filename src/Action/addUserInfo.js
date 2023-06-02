import { CREATE_USER } from "../constant/ProductConstant";

export const addUserInfo = (values) => (dispatch) => {
   debugger;
  dispatch({
    type: CREATE_USER,
    payload: values,
  });
  localStorage.setItem("userInfo", JSON.stringify(values));
};
