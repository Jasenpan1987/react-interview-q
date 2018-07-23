import React from "react";
import { mount } from "enzyme";
import { Userlist } from "../../../../components/containers/userlist";
import { RootApp } from "../../../../rootApp";

const fakeUserlistInitState = {
  isLoading: false,
  error: null,
  users: {
    "111": {
      id: "111",
      firstName: "Foo",
      lastName: "Bar",
      phoneNumber: "123321"
    },
    "222": {
      id: "222",
      firstName: "Oof",
      lastName: "Rab",
      phoneNumber: "321123"
    }
  }
};

describe("test comment list", () => {
  let container;

  beforeEach(() => {
    container = mount(
      <RootApp initState={{ userlist: fakeUserlistInitState }}>
        <Userlist />
      </RootApp>
    );
  });

  afterEach(() => {
    container.unmount();
  });

  it("should have a table element", () => {
    expect(container.find("table").length).toEqual(1);
  });

  it("should render 2 rows", () => {
    expect(container.find("tbody>tr").length).toEqual(2);
  });

  it("each row should have a edit button", () => {
    expect(container.find("tbody>tr").find("td>button").length).toEqual(2);
  });
});
