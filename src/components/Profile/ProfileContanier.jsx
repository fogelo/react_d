import React from "react";
import { Redirect } from "react-router";
import * as axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUsersProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContanier extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        //меняем url
        this.props.history.push('/login')
      }
    }
    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      ></Profile>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilesPage.profile,
  status: state.profilesPage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
  //withAuthRedirect
)(ProfileContanier);
