import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED
} from "../actions/userListActions";

const defaultState = {
  users: {},
  pending: false,
  error: null
};

export const userListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS_PENDING: {
      return {
        ...state,
        pending: true,
        error: null
      };
    }

    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: {
          ...action.payload
        },
        pending: false,
        error: null
      };
    }

    case GET_USERS_FAILED: {
      return {
        ...state,
        pending: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};
