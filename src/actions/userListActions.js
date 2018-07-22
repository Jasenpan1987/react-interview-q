import { Api } from "../utils/api";

export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export const getUsers = () => async dispatch => {
  dispatch({
    type: GET_USERS_PENDING
  });

  try {
    const response = await Api.getUsers();
    const userlist = JSON.parse(response);
    return dispatch({
      type: GET_USERS_SUCCESS,
      payload: userlist
    });
  } catch (error) {
    return dispatch({
      type: GET_USERS_FAILED,
      error
    });
  }
};
