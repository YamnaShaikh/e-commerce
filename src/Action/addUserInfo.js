import { CREATE_USER } from "../constant/ProductConstant";

export const addUserInfo = (values) => (dispatch, getState) => {
   debugger;
  dispatch({
    type: CREATE_USER,
    payload: values,
  });
  let userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
  userInfo.push(values)
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  
};
