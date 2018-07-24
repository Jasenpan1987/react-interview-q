import React, { Component } from "react";

import { Userlist } from "./containers/userlist";
import { UserForm } from "./containers/userForm";
import { SearchBox } from "./ui/searchBox";
import { UserDiaplayProvider, UserDisplayConsumer } from "./userDisplayContext";

class App extends Component {
  render() {
    return (
      <UserDiaplayProvider>
        <div className="container">
          <h2>Phone Book</h2>
          <UserDisplayConsumer>
            {({ keywords, changeKeywords }) => (
              <SearchBox keywords={keywords} changeKeywords={changeKeywords} />
            )}
          </UserDisplayConsumer>
          <UserForm />
          <div className="row">
            <div className="col">
              <UserDisplayConsumer>
                {({ keywords }) => <Userlist keywords={keywords} />}
              </UserDisplayConsumer>
            </div>
          </div>
        </div>
      </UserDiaplayProvider>
    );
  }
}

export default App;
