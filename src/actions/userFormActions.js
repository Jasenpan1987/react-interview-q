export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = userId => ({
  type: SET_CURRENT_USER,
  payload: userId
});

export const unSetCurrentUser = () => {
  return setCurrentUser(-1);
};
