import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrentUser } from "../../../actions/userFormActions";

class UserlistComponent extends Component {
  handleEditButtonClick = userId => {
    this.props.setCurrentUser(userId);
  };

  renderUser = ({ id, firstName, lastName, phoneNumber }) => {
    return (
      <tr key={id}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleEditButtonClick.bind(this, id)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  };

  renderHeadLink = (sortBy, updateSort, label, fieldName) => {
    return (
      <th>
        <a
          className="text-info"
          style={{ cursor: "pointer" }}
          onClick={() => {
            updateSort({
              key: fieldName,
              isDesc: !sortBy[fieldName]
            });
          }}
        >
          {label}
          <i
            className={`fas fa-arrow-${sortBy[fieldName] ? "up" : "down"} ml-1`}
          />
        </a>
      </th>
    );
  };

  renderHead = (sortBy, updateSort) => {
    return (
      <tr>
        {this.renderHeadLink(sortBy, updateSort, "First Name", "firstName")}
        {this.renderHeadLink(sortBy, updateSort, "Last Name", "lastName")}
        {this.renderHeadLink(sortBy, updateSort, "Phone #", "phoneNumber")}
        <th>Edit</th>
      </tr>
    );
  };
  render() {
    const {
      keywords, // injected from context
      sortBy, // injected from context
      updateSort, // injected from context
      userlist: { users, isLoading, userIds }
    } = this.props;

    if (isLoading) {
      return <h3>Loading...</h3>;
    }

    let userlist = userIds.map(id => users[id]);

    if (keywords) {
      userlist = userlist.filter(
        ({ firstName, lastName }) =>
          firstName.toLowerCase().includes(keywords.toLowerCase()) ||
          lastName.toLowerCase().includes(keywords.toLowerCase())
      );
    }

    const sortByKeys = Object.keys(sortBy);

    const sortHelper = isDesc => (a, b) => {
      if (isDesc) {
        return a > b ? 1 : a < b ? -1 : 0;
      }
      return a < b ? 1 : a > b ? -1 : 0;
    };

    if (Object.keys(sortBy).length > 0) {
      for (const sortKey of sortByKeys) {
        userlist = userlist.sort((userA, userB) => {
          return sortHelper(sortBy[sortKey])(userA[sortKey], userB[sortKey]);
        });
      }
    }

    return (
      <table className="table">
        <thead>{this.renderHead(sortBy, updateSort)}</thead>
        <tbody>{userlist.map(user => this.renderUser(user))}</tbody>
      </table>
    );
  }
}

UserlistComponent.propTypes = {
  userlist: PropTypes.shape({
    id: PropTypes.string.isrequired,
    firstName: PropTypes.string.isrequired,
    lastName: PropTypes.string.isrequired,
    phoneNumber: PropTypes.string.isrequired
  })
};

const mapStateToProps = state => ({
  userlist: state.userlist
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: userId => dispatch(setCurrentUser(userId))
});

const Userlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserlistComponent);

export { Userlist };
