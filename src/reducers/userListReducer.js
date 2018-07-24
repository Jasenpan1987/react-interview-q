import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED
} from "../actions/userListActions";
import {
  SAVE_CURRENT_USER_PENDING,
  SAVE_CURRENT_USER_SUCCESS,
  SAVE_CURRENT_USER_FAILED
} from "../actions/userFormActions";

export const defaultState = {
  users: {},
  isLoading: false,
  error: null,
  userIds: []
};

export const userListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS_PENDING:
    case SAVE_CURRENT_USER_PENDING: {
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
        userIds: Object.keys(action.payload),
        isLoading: false,
        error: null
      };
    }

    case SAVE_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.id]: action.payload
        },
        userIds: [state.userIds, action.payload.id],
        isLoading: false,
        error: null
      };
    }

    case GET_USERS_FAILED:
    case SAVE_CURRENT_USER_FAILED: {
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
