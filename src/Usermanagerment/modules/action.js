import { DELETE_USER, SUBMIT_USER, EDIT_USER, GET_KEYWORD } from "./constant";

export const actDeleteUser = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};

export const actSubmitUser = (user) => {
  return {
    type: SUBMIT_USER,
    payload: user,
  };
};

export const actEditUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export const actGetKeyword = (keyword) => {
  return {
    type: GET_KEYWORD,
    payload: keyword,
  };
};
