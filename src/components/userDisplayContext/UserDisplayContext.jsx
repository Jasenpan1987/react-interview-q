import React, { Component } from "react";

const UserDisplayContext = React.createContext();

class UserDiaplayProvider extends Component {
  state = {
    keywords: "",
    sortBy: "",
    sortOrder: ""
  };

  changeKeywords = keywords => {
    this.setState({
      keywords: keywords
    });
  };

  render() {
    return (
      <UserDisplayContext.Provider
        value={{
          ...this.state,
          changeKeywords: this.changeKeywords
        }}
      >
        {this.props.children}
      </UserDisplayContext.Provider>
    );
  }
}

export { UserDiaplayProvider };

export const UserDisplayConsumer = UserDisplayContext.Consumer;
