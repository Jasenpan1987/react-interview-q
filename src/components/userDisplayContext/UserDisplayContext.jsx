import React, { Component } from "react";

const UserDisplayContext = React.createContext();

class UserDiaplayProvider extends Component {
  state = {
    keywords: "",
    sortBy: {}
  };

  changeKeywords = keywords => {
    this.setState({
      keywords: keywords
    });
  };

  updateSort = ({ key, isDesc }) => {
    this.setState({
      sortBy: { ...this.state.sortBy, [key]: isDesc }
    });
  };

  render() {
    return (
      <UserDisplayContext.Provider
        value={{
          ...this.state,
          changeKeywords: this.changeKeywords,
          updateSort: this.updateSort
        }}
      >
        {this.props.children}
      </UserDisplayContext.Provider>
    );
  }
}

export { UserDiaplayProvider };

export const UserDisplayConsumer = UserDisplayContext.Consumer;
