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
          <UserForm />
          <UserDisplayConsumer>
            {({ keywords, changeKeywords }) => (
              <SearchBox keywords={keywords} changeKeywords={changeKeywords} />
            )}
          </UserDisplayConsumer>
          <div className="row">
            <div className="col">
              <UserDisplayConsumer>
                {({ keywords, sortBy, updateSort }) => (
                  <Userlist
                    keywords={keywords}
                    sortBy={sortBy}
                    updateSort={updateSort}
                  />
                )}
              </UserDisplayConsumer>
            </div>
          </div>
        </div>
      </UserDiaplayProvider>
    );
  }
}

export default App;
