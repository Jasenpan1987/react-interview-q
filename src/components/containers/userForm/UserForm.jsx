import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "../../ui/field";
import { unSetCurrentUser } from "../../../actions/userFormActions";

class UserFormComponent extends Component {
  defaultState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    currentUserId: -1
  };

  state = {
    ...this.defaultState
  };

  componentWillReceiveProps(nextProps) {
    const nextCurrentUserId = nextProps.userform.currentUserId;
    const { currentUserId } = this.state;

    if (nextCurrentUserId !== currentUserId) {
      const currentUser = this.props.userlist.users[nextCurrentUserId];

      if (currentUser) {
        this.setState({
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          phoneNumber: currentUser.phoneNumber
        });
      }
    }
  }

  changeForm = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleReset = () => {
    this.setState(
      {
        ...this.defaultState
      },
      () => {
        this.props.unSetCurrentUser();
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="row mb-4">
        <div className="col">
          <form onSubmit={this.handleSubmit}>
            <div className="row mb-4">
              <div className="col-md-3">
                <Field
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.changeForm}
                  label="First Name"
                />
              </div>
              <div className="col-md-3">
                <Field
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.changeForm}
                  label="Last Name"
                />
              </div>
              <div className="col-md-3">
                <Field
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.changeForm}
                  label="Phone Number"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6" />
              <div className="col-md-3 d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.handleReset}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userlist: state.userlist,
  userform: state.userform
});

const mapDispatchToProps = dispatch => ({
  unSetCurrentUser: () => dispatch(unSetCurrentUser())
});

export const UserForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFormComponent);
