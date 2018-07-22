import { Api } from "../../utils/api";
import { LocalStorageMock } from "../mockLocalStorage";

describe("test Api", () => {
  beforeEach(() => {
    window.localStorage = new LocalStorageMock();
  });

  it("should be able to get all users", async () => {
    const fakeUserList = {
      "1": {
        id: "1",
        firstName: "Foo",
        lastName: "bar",
        phoneNumber: "123456789"
      }
    };
    window.localStorage.setItem("userlist", JSON.stringify(fakeUserList));

    const response = await Api.getUsers();
    expect(JSON.parse(response)).toEqual(fakeUserList);
  });
  it("should be able to add a user", async () => {
    const newUser = {
      firstName: "Jasen",
      lastName: "Pan",
      phoneNumber: "12345678"
    };
    const response = await Api.addUser(newUser);

    expect(response).toHaveProperty("firstName");
    expect(response).toHaveProperty("lastName");
    expect(response).toHaveProperty("phoneNumber");
  });

  it("should be able to update a user", async () => {
    const fakeUserList = {
      "1": {
        id: "1",
        firstName: "Foo",
        lastName: "bar",
        phoneNumber: "123456789"
      }
    };
    window.localStorage.setItem("userlist", JSON.stringify(fakeUserList));
    const jasenUser = {
      id: "1",
      firstName: "Jasen",
      lastName: "Pan",
      phoneNumber: "1234567"
    };
    const response = await Api.updateUser(jasenUser);

    expect(response).toEqual(jasenUser);

    expect(JSON.parse(window.localStorage.getItem("userlist"))).toEqual({
      "1": jasenUser
    });
  });
});
