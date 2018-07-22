import {
  userListReducer,
  defaultState as defaultUserListState
} from "../../reducers/userListReducer";
import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED
} from "../../actions/userListActions";

describe("test userlist reducer", () => {
  it("handles GET_USERS_PENDING action", () => {
    expect(
      userListReducer(defaultUserListState, { type: GET_USERS_PENDING })
    ).toEqual({
      users: {},
      isLoading: true,
      error: null
    });
  });

  it("handles GET_USERS_SUCCESS action", () => {
    const fakeAction = {
      type: GET_USERS_SUCCESS,
      payload: {
        "111": {
          id: "111",
          firstName: "Foo"
        },
        "222": {
          id: "222",
          firstName: "Bar"
        }
      }
    };
    expect(
      Object.keys(userListReducer(defaultUserListState, fakeAction).users)
        .length
    ).toEqual(2);
  });

  it("handles GET_USERS_FAILED action", () => {
    const fakeAction = {
      type: GET_USERS_FAILED,
      error: { message: "something went wrong" }
    };

    expect(
      userListReducer(defaultUserListState, fakeAction).error.message
    ).toEqual("something went wrong");
  });
});
