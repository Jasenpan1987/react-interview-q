import { SET_CURRENT_USER } from "../actions/userFormActions";

export const defaultState = {
  currentUserId: -1
};

export const userFormReducer = (state = defaultState, action) => {
  console.log(action);
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
