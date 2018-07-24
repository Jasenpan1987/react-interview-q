import { SET_CURRENT_USER } from "../actions/userFormActions";

export const defaultState = {
  currentUserId: -1,
  isLoading: false
};

export const userFormReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUserId: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
