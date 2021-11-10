import React from "react";
import { Redirect } from "react-router";
import * as axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUsersProfile,
  getStatus,
  updateStatus,
} from "./../../redux/profile-reducer";
import { withRouter } from "react-router";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContanier extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 20645;
    }
    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      ></Profile>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilesPage.profile,
  status: state.profilesPage.status,
});

export default compose(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
  withRouter
  //withAuthRedirect
)(ProfileContanier);
