import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED
} from "../actions/userListActions";

export const defaultState = {
  users: {},
  isLoading: false,
  error: null
};

export const userListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS_PENDING: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }

    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: {
          ...action.payload
        },
        isLoading: false,
        error: null
      };
    }

    case GET_USERS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};
