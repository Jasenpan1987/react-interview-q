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

    if (isLoading) {
      return <h3>Loading...</h3>;
    }
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: userId => dispatch(setCurrentUser(userId))
});

const Userlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserlistComponent);

export { Userlist };
