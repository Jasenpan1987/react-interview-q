import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UserlistComponent extends Component {
  renderUser = ({ id, firstName, lastName, phoneNumber }) => {
    return (
      <tr key={id}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>
          <button className="btn btn-danger btn-sm">Edit</button>
        </td>
      </tr>
    );
  };

  renderHead = () => {
    return (
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Phone #</th>
        <th>Edit</th>
      </tr>
    );
  };
  render() {
    const {
      userlist: { users, isLoading, error }
    } = this.props;
    // console.log("props", this.props);
    return (
      <table className="table">
        <thead>{this.renderHead()}</thead>
        <tbody>
          {Object.keys(users).map(userId => this.renderUser(users[userId]))}
        </tbody>
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

const Userlist = connect(mapStateToProps)(UserlistComponent);

export { Userlist };
