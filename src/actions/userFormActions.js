import { Api } from "../utils/api";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SAVE_CURRENT_USER_PENDING = "SAVE_CURRENT_USER_PENDING";
export const SAVE_CURRENT_USER_SUCCESS = "SAVE_CURRENT_USER_SUCCESS";
export const SAVE_CURRENT_USER_FAILED = "SAVE_CURRENT_USER_FAILED";

export const setCurrentUser = userId => ({
  type: SET_CURRENT_USER,
  payload: userId
});

export const unSetCurrentUser = () => {
  return setCurrentUser(-1);
};
export const saveOrUpdateCurrentUser = ({
  currentUserId,
  firstName,
  lastName,
  phoneNumber,
  callback
}) => async dispatch => {
  console.log(currentUserId);
  dispatch({
    type: SAVE_CURRENT_USER_PENDING
  });

  try {
    let response;
    if (currentUserId === -1) {
      response = await Api.addUser({
        firstName,
        lastName,
        phoneNumber
      });
    } else {
      response = await Api.updateUser({
        id: currentUserId,
        firstName,
        lastName,
        phoneNumber
      });
    }
    dispatch({
      type: SAVE_CURRENT_USER_SUCCESS,
      payload: response
    });

    callback();
  } catch (error) {
    dispatch({
      type: SAVE_CURRENT_USER_FAILED,
      error
    });
  }
};
