import React, { Component } from "react";

import { Userlist } from "./containers/userlist";
import { UserForm } from "./containers/userForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Phone Book</h2>
        <UserForm />
        <div className="row">
          <div className="col">
            <Userlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
