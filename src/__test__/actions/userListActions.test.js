import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  getUsers
} from "../../actions/userListActions";
import * as MockApi from "../../utils/api";

jest.mock("../../utils/api", () => {
  return {
    Api: {
      getUsers: jest.fn(async () => {
        return Promise.resolve(
          JSON.stringify({
            "1": {
              id: "1",
              firstName: "Jasen",
              lastName: "Pan",
              phoneNumber: "1234567"
            }
          })
        );
      })
    }
  };
});

const fakeDispatch = response => {
  return response;
};

describe("test userListActions", () => {
  it("getUsers should return a list of users", async () => {
    const getUsersAction = await getUsers()(fakeDispatch);
    expect(MockApi.Api.getUsers).toHaveBeenCalledTimes(1);
    expect(getUsersAction.type).toEqual(GET_USERS_SUCCESS);
    expect(getUsersAction.payload).toEqual({
      "1": {
        id: "1",
        firstName: "Jasen",
        lastName: "Pan",
        phoneNumber: "1234567"
      }
    });
  });
});
